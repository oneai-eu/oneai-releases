// Gemini pricing scraper.
//
// Google publishes pricing as real markdown, but each model section is a
// dense mix of:
//   - up to 4 tier subsections (Standard / Batch / Flex / Priority)
//   - multi-modality prices per cell (text / image / video vs. audio)
//   - tier-conditional pricing on Pro models (<=200k vs. >200k prompts)
//   - storage rates tacked onto cached-price cells ("$1.00 / 1M tokens / hr")
//
// Strategy:
//   1. Anchor on the italic line containing the API ID, e.g. *`gemini-2.5-pro`*
//   2. The model section runs to the next "## "
//   3. Inside, the "### Standard" subsection runs to the next "### "
//   4. Walk that block's markdown table, find Input/Output/Context-caching rows
//   5. From each cell, pluck every $NUMBER with its trailing context and
//      classify: audio→skip, storage→skip, <=200k→under, >200k→over,
//      otherwise→single (text/image/video).

import type {
  ScraperResult,
  TokenPrice,
  TokenPriceTiered,
  ImageFlatPrice,
} from "./types.ts";

const PRICING_URL = "https://ai.google.dev/gemini-api/docs/pricing.md.txt";

const SINGLE_MODELS = [
  "gemini-2.5-flash-lite",
  "gemini-2.5-flash",
  "gemini-3-flash-preview",
  "gemini-3.1-flash-lite-preview",
];

const TIERED_MODELS = ["gemini-2.5-pro", "gemini-3.1-pro-preview"];

// Imagen 4 image-generation models. Pricing lives in the same markdown
// page as Gemini text models, under the "## Imagen 4" section. This
// module is named gemini.ts but covers both since they share a source.
const IMAGE_MODELS = [
  "imagen-4.0-fast-generate-001",
  "imagen-4.0-generate-001",
  "imagen-4.0-ultra-generate-001",
];

// The Imagen pricing rows use display labels, not API IDs. Keys are
// lowercased so we can compare against `cells[0].toLowerCase()`.
const IMAGE_LABEL_TO_ID: Record<string, string> = {
  "imagen 4 fast image price":     "imagen-4.0-fast-generate-001",
  "imagen 4 standard image price": "imagen-4.0-generate-001",
  "imagen 4 ultra image price":    "imagen-4.0-ultra-generate-001",
};

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findModelSection(md: string, modelId: string): string | null {
  // Italic line containing the backticked ID. We anchor to a line start so
  // body-text mentions don't trip the match.
  const idLineRe = new RegExp(
    `^\\*[^*]*\`${escapeRegex(modelId)}\`[^*]*\\*\\s*$`,
    "m",
  );
  const m = idLineRe.exec(md);
  if (!m) return null;
  const anchor = m.index;
  const start = md.lastIndexOf("\n## ", anchor);
  const sectionStart = start === -1 ? 0 : start + 1;
  const after = md.indexOf("\n## ", anchor);
  const sectionEnd = after === -1 ? md.length : after;
  return md.substring(sectionStart, sectionEnd);
}

function findStandardBlock(section: string): string | null {
  const idx = section.indexOf("### Standard");
  if (idx === -1) return null;
  const after = section.indexOf("\n### ", idx + "### Standard".length);
  return section.substring(idx, after === -1 ? section.length : after);
}

/**
 * Locate the "## Imagen 4" section, bounded by the next "## " heading.
 * Imagen 4 prices live directly under the section heading (no "### Standard"
 * subsection like Gemini text models have).
 */
function findImagenSection(md: string): string | null {
  const re = /^## Imagen 4\s*$/m;
  const m = re.exec(md);
  if (!m) return null;
  const start = m.index;
  const after = md.indexOf("\n## ", start + 1);
  return md.substring(start, after === -1 ? md.length : after);
}

/**
 * Walk the Paid-Tier price table inside the Imagen section. Returns a map
 * from API model ID → dollars per image. Rows whose label is not one of
 * the mapped Imagen prices (e.g. "Used to improve our products") are
 * silently ignored. Column 2 is the Paid Tier cell.
 */
function parseImagenTable(section: string): Record<string, number> {
  const out: Record<string, number> = {};
  for (const line of section.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("|")) continue;
    const cells = trimmed
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    if (cells.length < 3) continue;
    const modelId = IMAGE_LABEL_TO_ID[cells[0].toLowerCase()];
    if (!modelId) continue;
    const parsed = parsePaidCell(cells[2]);
    if (parsed.single === undefined) continue;
    out[modelId] = parsed.single;
  }
  return out;
}

type ParsedCell = { single?: number; under?: number; over?: number };

function parsePaidCell(cell: string): ParsedCell {
  const out: ParsedCell = {};
  // Capture each "$NUMBER" plus everything up to the next "$" as its context.
  const re = /\$([\d.]+)([^$]*)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(cell)) !== null) {
    const price = parseFloat(m[1]);
    if (isNaN(price)) continue;
    const ctx = m[2].toLowerCase();

    if (ctx.includes("per hour") || ctx.includes("storage")) continue;
    if (ctx.includes("(audio)") || ctx.includes(" audio")) continue;

    // Tier markers come through as "\<= 200k" / "\> 200k" (escaped angle brackets).
    if (/\\?<=\s*200k/.test(ctx)) {
      if (out.under === undefined) out.under = price;
    } else if (/\\?>\s*200k/.test(ctx)) {
      if (out.over === undefined) out.over = price;
    } else if (out.single === undefined) {
      out.single = price;
    }
  }
  return out;
}

function parseStandardTable(block: string): {
  input?: ParsedCell; output?: ParsedCell; cached?: ParsedCell;
} {
  const result: { input?: ParsedCell; output?: ParsedCell; cached?: ParsedCell } = {};
  for (const line of block.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("|")) continue;
    const cells = trimmed
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    if (cells.length < 3) continue;
    const label = cells[0].toLowerCase();
    const paid = cells[2];
    if (label.startsWith("input price")) result.input = parsePaidCell(paid);
    else if (label.startsWith("output price")) result.output = parsePaidCell(paid);
    else if (label.startsWith("context caching price")) result.cached = parsePaidCell(paid);
  }
  return result;
}

function dollarsToCents(d: number | undefined): number | null {
  if (d === undefined) return null;
  return Math.round(d * 100 * 100) / 100;
}

export async function scrapeGemini(): Promise<ScraperResult> {
  const errors: string[] = [];
  const models: Record<string, TokenPrice | TokenPriceTiered | ImageFlatPrice> = {};

  let md: string;
  try {
    const res = await fetch(PRICING_URL);
    if (!res.ok) {
      return {
        provider: "google",
        models: {},
        errors: [`fetch ${PRICING_URL}: ${res.status} ${res.statusText}`],
      };
    }
    md = await res.text();
  } catch (e) {
    return {
      provider: "google",
      models: {},
      errors: [`fetch ${PRICING_URL} threw: ${(e as Error).message}`],
    };
  }

  for (const modelId of SINGLE_MODELS) {
    const section = findModelSection(md, modelId);
    if (!section) { errors.push(`section not found: ${modelId}`); continue; }
    const block = findStandardBlock(section);
    if (!block) { errors.push(`no Standard subsection: ${modelId}`); continue; }
    const parsed = parseStandardTable(block);
    if (!parsed.input || !parsed.output) {
      errors.push(`incomplete pricing for ${modelId} (missing input or output row)`);
      continue;
    }
    models[modelId] = {
      kind: "token",
      input_cents_per_mtok:  dollarsToCents(parsed.input.single),
      cached_cents_per_mtok: dollarsToCents(parsed.cached?.single),
      output_cents_per_mtok: dollarsToCents(parsed.output.single),
    };
  }

  for (const modelId of TIERED_MODELS) {
    const section = findModelSection(md, modelId);
    if (!section) { errors.push(`section not found: ${modelId}`); continue; }
    const block = findStandardBlock(section);
    if (!block) { errors.push(`no Standard subsection: ${modelId}`); continue; }
    const parsed = parseStandardTable(block);

    const under: TokenPrice = {
      kind: "token",
      input_cents_per_mtok:  dollarsToCents(parsed.input?.under),
      cached_cents_per_mtok: dollarsToCents(parsed.cached?.under),
      output_cents_per_mtok: dollarsToCents(parsed.output?.under),
    };
    const over: TokenPrice = {
      kind: "token",
      input_cents_per_mtok:  dollarsToCents(parsed.input?.over),
      cached_cents_per_mtok: dollarsToCents(parsed.cached?.over),
      output_cents_per_mtok: dollarsToCents(parsed.output?.over),
    };

    if (under.input_cents_per_mtok === null && over.input_cents_per_mtok === null) {
      errors.push(`no tiered pricing parsed for ${modelId}`);
      continue;
    }

    models[modelId] = {
      kind: "token_tiered",
      tiers: { at_or_under_200k: under, above_200k: over },
    };
  }

  // Imagen 4 image models — flat per-image pricing under "## Imagen 4".
  const imagenSection = findImagenSection(md);
  if (!imagenSection) {
    errors.push("Imagen 4 section not found");
  } else {
    const imagenDollars = parseImagenTable(imagenSection);
    const found = new Set<string>();
    for (const modelId of IMAGE_MODELS) {
      const d = imagenDollars[modelId];
      if (d === undefined) continue;
      found.add(modelId);
      models[modelId] = {
        kind: "image_flat",
        cents_per_image: Math.round(d * 100 * 100) / 100,
      };
    }
    if (found.size !== IMAGE_MODELS.length) {
      const missing = IMAGE_MODELS.filter((m) => !found.has(m));
      errors.push(`Missing Imagen models: ${missing.join(", ")}`);
    }
  }

  return { provider: "google", models, errors };
}
