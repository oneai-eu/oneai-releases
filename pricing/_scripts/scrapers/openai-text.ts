// OpenAI text + embedding pricing scraper.
//
// OpenAI's pricing source is MDX (markdown + JSX). Prices live in JSX
// `rows={[ ["model", input, cached, output], ... ]}` literals rather than
// in markdown tables. We anchor on `tier="standard"` for chat models and
// `model: "Embedding"` for embeddings, find the next `rows={...}` / `rows:`,
// and pull individual rows out with a balanced-bracket scan. Each row is
// valid JSON on its own, so we parse it as such.

import type { ScraperResult, TokenPrice } from "./types.ts";

const PRICING_URL = "https://developers.openai.com/api/docs/pricing.md";

const TEXT_MODELS = [
  "gpt-5-nano",
  "gpt-5-mini",
  "gpt-5",
  "gpt-5.1",
  "gpt-5.2",
  "gpt-5.4-nano",
  "gpt-5.4-mini",
  "gpt-5.4",
  "gpt-5.4-pro",
  "gpt-5.5",
  "gpt-5.5-pro",
];

const EMBEDDING_MODELS = ["text-embedding-3-small", "text-embedding-3-large"];

function stripSuffix(modelId: string): string {
  // Some IDs are decorated, e.g. "gpt-5.4-pro (<272K context length)".
  return modelId.replace(/\s*\(.*?\)\s*$/, "").trim();
}

function cellToDollars(cell: unknown): number | null {
  if (cell === null || cell === undefined) return null;
  if (typeof cell === "number") return cell;
  if (typeof cell === "string") {
    const t = cell.trim();
    if (t === "" || t === "-") return null;
    const n = parseFloat(t);
    return isNaN(n) ? null : n;
  }
  return null;
}

function dollarsToCents(d: number | null): number | null {
  if (d === null) return null;
  return Math.round(d * 100 * 100) / 100;
}

function extractBalanced(text: string, openIdx: number, open: string, close: string): string {
  if (text[openIdx] !== open) {
    throw new Error(`Expected '${open}' at offset ${openIdx}, got '${text[openIdx]}'`);
  }
  let depth = 0;
  let inStr: string | null = null;
  for (let i = openIdx; i < text.length; i++) {
    const c = text[i];
    if (inStr) {
      if (c === "\\") { i++; continue; }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'") { inStr = c; continue; }
    if (c === open) depth++;
    else if (c === close) {
      depth--;
      if (depth === 0) return text.substring(openIdx, i + 1);
    }
  }
  throw new Error(`Unbalanced '${open}${close}' starting at offset ${openIdx}`);
}

function extractRowLiterals(body: string): string[] {
  const rows: string[] = [];
  let i = 0;
  while (i < body.length) {
    if (/[\s,]/.test(body[i])) { i++; continue; }
    if (body[i] === "[") {
      const lit = extractBalanced(body, i, "[", "]");
      rows.push(lit);
      i += lit.length;
    } else {
      i++;
    }
  }
  return rows;
}

function extractRowsByAnchor(mdx: string, anchor: string, rowsToken: string): unknown[][] {
  const a = mdx.indexOf(anchor);
  if (a === -1) throw new Error(`anchor not found: ${anchor}`);
  const r = mdx.indexOf(rowsToken, a);
  if (r === -1) throw new Error(`${rowsToken} not after anchor ${anchor}`);
  const arrStart = mdx.indexOf("[", r);
  if (arrStart === -1) throw new Error(`no [ after ${rowsToken}`);
  const arr = extractBalanced(mdx, arrStart, "[", "]");
  return extractRowLiterals(arr.slice(1, -1)).map((lit) => JSON.parse(lit));
}

export async function scrapeOpenAIText(): Promise<ScraperResult> {
  const errors: string[] = [];
  const models: Record<string, TokenPrice> = {};

  let mdx: string;
  try {
    const res = await fetch(PRICING_URL);
    if (!res.ok) {
      return {
        provider: "openai",
        models: {},
        errors: [`fetch ${PRICING_URL}: ${res.status} ${res.statusText}`],
      };
    }
    mdx = await res.text();
  } catch (e) {
    return {
      provider: "openai",
      models: {},
      errors: [`fetch ${PRICING_URL} threw: ${(e as Error).message}`],
    };
  }

  let textRows: unknown[][];
  let embRows: unknown[][];
  try {
    textRows = extractRowsByAnchor(mdx, 'tier="standard"', "rows={");
  } catch (e) {
    return {
      provider: "openai",
      models: {},
      errors: [`standard-tier extraction: ${(e as Error).message}`],
    };
  }
  try {
    embRows = extractRowsByAnchor(mdx, 'model: "Embedding"', "rows:");
  } catch (e) {
    return {
      provider: "openai",
      models: {},
      errors: [`embedding extraction: ${(e as Error).message}`],
    };
  }

  const byId = new Map<string, unknown[]>();
  for (const row of [...textRows, ...embRows]) {
    if (!Array.isArray(row)) continue;
    const id = stripSuffix(String(row[0] ?? ""));
    if (!byId.has(id)) byId.set(id, row);
  }

  for (const modelId of TEXT_MODELS) {
    const row = byId.get(modelId);
    if (!row) {
      errors.push(`text model not found: ${modelId}`);
      continue;
    }
    models[modelId] = {
      kind: "token",
      input_cents_per_mtok:  dollarsToCents(cellToDollars(row[1])),
      cached_cents_per_mtok: dollarsToCents(cellToDollars(row[2])),
      output_cents_per_mtok: dollarsToCents(cellToDollars(row[3])),
    };
  }

  for (const modelId of EMBEDDING_MODELS) {
    const row = byId.get(modelId);
    if (!row) {
      errors.push(`embedding model not found: ${modelId}`);
      continue;
    }
    models[modelId] = {
      kind: "token",
      input_cents_per_mtok:  dollarsToCents(cellToDollars(row[1])),
      cached_cents_per_mtok: 0,
      output_cents_per_mtok: 0,
    };
  }

  return { provider: "openai", models, errors };
}
