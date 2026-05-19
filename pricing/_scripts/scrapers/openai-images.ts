// OpenAI image (GPT Image) pricing scraper.
//
// Pricing for GPT Image lives in the image-generation guide as an HTML/JSX
// <table>. Each model spans 3 rows (Low / Medium / High); the row that
// introduces a model carries rowSpan="3" on the model cell. We locate the
// right <table> by checking that its body mentions every required column
// header, walk <tr> blocks, and strip JSX style attributes plus the inline
// <br />/<span> annotations on the "GPT Image 2" cell.
//
// Page uses "1024 x 1024" with spaces; the JSON uses "1024x1024" without.
// We translate sizes (and qualities) to JSON keys before returning.

import type { ScraperResult, ImageQualitySizePrice } from "./types.ts";

const GUIDE_URL = "https://developers.openai.com/api/docs/guides/image-generation.md";

// Display name in the table → our JSON model ID. "GPT Image 2" appears in
// the table but isn't yet in our config, so it is intentionally absent.
const MODEL_NAME_MAP: Record<string, string> = {
  "GPT Image 1":      "gpt-image-1",
  "GPT Image 1 Mini": "gpt-image-1-mini",
  "GPT Image 1.5":    "gpt-image-1.5",
};

const SIZES_PAGE = ["1024 x 1024", "1024 x 1536", "1536 x 1024"] as const;
const SIZE_PAGE_TO_JSON: Record<string, string> = {
  "1024 x 1024": "1024x1024",
  "1024 x 1536": "1024x1536",
  "1536 x 1024": "1536x1024",
};
const QUALITY_PAGE_TO_JSON: Record<string, string> = {
  Low: "low",
  Medium: "medium",
  High: "high",
};

function findTableContaining(mdx: string, required: string[]): string | null {
  let i = 0;
  while (true) {
    const open = mdx.indexOf("<table", i);
    if (open === -1) return null;
    const close = mdx.indexOf("</table>", open);
    if (close === -1) return null;
    const slice = mdx.substring(open, close + "</table>".length);
    if (required.every((h) => slice.includes(h))) return slice;
    i = close + 1;
  }
}

function cleanCellText(inner: string): string {
  const noBr = inner.replace(/<br\s*\/?>/gi, "\n");
  // Drop non-nested tag pairs like <span ...>Additional sizes available</span>.
  const noPairs = noBr.replace(/<([a-zA-Z]+)[^>]*>[^<]*<\/\1>/g, "");
  const noTags = noPairs.replace(/<[^>]+>/g, "");
  for (const line of noTags.split("\n")) {
    const t = line.trim();
    if (t) return t;
  }
  return "";
}

function extractRows(table: string): string[] {
  const bodyStart = table.indexOf("<tbody>");
  const bodyEnd = table.indexOf("</tbody>");
  if (bodyStart === -1 || bodyEnd === -1) throw new Error("no <tbody> in pricing table");
  const body = table.substring(bodyStart + "<tbody>".length, bodyEnd);

  const trs: string[] = [];
  let i = 0;
  while (true) {
    const open = body.indexOf("<tr", i);
    if (open === -1) break;
    const openEnd = body.indexOf(">", open);
    if (openEnd === -1) break;
    const close = body.indexOf("</tr>", openEnd);
    if (close === -1) break;
    trs.push(body.substring(openEnd + 1, close));
    i = close + "</tr>".length;
  }
  return trs;
}

function extractCells(tr: string): { hasRowSpan: boolean; text: string }[] {
  const cells: { hasRowSpan: boolean; text: string }[] = [];
  let i = 0;
  while (true) {
    const open = tr.indexOf("<td", i);
    if (open === -1) break;
    const openEnd = tr.indexOf(">", open);
    if (openEnd === -1) break;
    const tag = tr.substring(open, openEnd + 1);
    const hasRowSpan = /\browSpan\s*=/.test(tag);
    const close = tr.indexOf("</td>", openEnd);
    if (close === -1) break;
    cells.push({ hasRowSpan, text: cleanCellText(tr.substring(openEnd + 1, close)) });
    i = close + "</td>".length;
  }
  return cells;
}

function parseDollars(cell: string): number | null {
  const m = cell.match(/\$\s*([\d.]+)/);
  if (!m) return null;
  const n = parseFloat(m[1]);
  return isNaN(n) ? null : n;
}

function dollarsToCents(d: number | null): number | null {
  if (d === null) return null;
  return Math.round(d * 100 * 100) / 100;
}

export async function scrapeOpenAIImages(): Promise<ScraperResult> {
  const errors: string[] = [];

  let mdx: string;
  try {
    const res = await fetch(GUIDE_URL);
    if (!res.ok) {
      return {
        provider: "openai",
        models: {},
        errors: [`fetch ${GUIDE_URL}: ${res.status} ${res.statusText}`],
      };
    }
    mdx = await res.text();
  } catch (e) {
    return {
      provider: "openai",
      models: {},
      errors: [`fetch ${GUIDE_URL} threw: ${(e as Error).message}`],
    };
  }

  const table = findTableContaining(mdx, ["Quality", ...SIZES_PAGE]);
  if (!table) {
    return {
      provider: "openai",
      models: {},
      errors: ["pricing table not found in image-generation guide"],
    };
  }

  let trs: string[];
  try {
    trs = extractRows(table);
  } catch (e) {
    return { provider: "openai", models: {}, errors: [(e as Error).message] };
  }

  // Walk rows, tracking current model. A row with rowSpan opens a new
  // model; otherwise the previous model carries over.
  type Matrix = Record<string, Record<string, number>>;
  const byDisplayName = new Map<string, Matrix>();
  let currentModel: string | null = null;

  for (const tr of trs) {
    const cells = extractCells(tr);
    if (cells.length === 0) continue;

    let qualityIdx = 0;
    if (cells[0].hasRowSpan) {
      currentModel = cells[0].text;
      qualityIdx = 1;
      if (!byDisplayName.has(currentModel)) byDisplayName.set(currentModel, {});
    }
    if (!currentModel) continue;

    const quality = cells[qualityIdx]?.text;
    const qualityKey = quality ? QUALITY_PAGE_TO_JSON[quality] : undefined;
    if (!qualityKey) continue;

    const priceCells = cells.slice(qualityIdx + 1);
    if (priceCells.length < SIZES_PAGE.length) continue;

    const matrix = byDisplayName.get(currentModel)!;
    matrix[qualityKey] = {};
    for (let k = 0; k < SIZES_PAGE.length; k++) {
      const cents = dollarsToCents(parseDollars(priceCells[k].text));
      if (cents === null) continue;
      matrix[qualityKey][SIZE_PAGE_TO_JSON[SIZES_PAGE[k]]] = cents;
    }
  }

  const models: Record<string, ImageQualitySizePrice> = {};
  for (const [displayName, modelId] of Object.entries(MODEL_NAME_MAP)) {
    const matrix = byDisplayName.get(displayName);
    if (!matrix || Object.keys(matrix).length === 0) {
      errors.push(`image model not found: ${modelId} (looked for "${displayName}")`);
      continue;
    }
    models[modelId] = { kind: "image_quality_size", pricing: matrix };
  }

  return { provider: "openai", models, errors };
}
