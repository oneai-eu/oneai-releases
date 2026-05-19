// Mistral pricing scraper.
//
// Mistral renders pricing client-side from Next.js RSC payloads embedded as
// `self.__next_f.push([...])` calls. We extract every payload, JSON-unescape
// them, concatenate, then locate each model object by its api_endpoint
// marker and walk back through balanced braces to recover the JSON literal.
//
// Mistral doesn't publish a cached price — we emit 0 for that field, which
// matches what the JSON already records for every Mistral model.

import type { ScraperResult, TokenPrice } from "./types.ts";

const PRICING_URL = "https://mistral.ai/pricing";

const MODELS_OF_INTEREST = [
  "mistral-small-latest",
  "mistral-medium-latest",
  "mistral-large-latest",
  "magistral-small-latest",
  "magistral-medium-latest",
];

function parsePrice(html: string): number | null {
  if (!html) return null;
  const text = html.replace(/<[^>]*>/g, "").trim();
  const m = text.match(/\$\s*([\d.]+)/);
  if (!m) return null;
  const n = parseFloat(m[1]);
  return isNaN(n) ? null : n;
}

function dollarsToCents(dollars: number | null): number | null {
  if (dollars === null) return null;
  return Math.round(dollars * 100 * 100) / 100;
}

function extractNextPayloads(html: string): string[] {
  const payloads: string[] = [];
  const re = /self\.__next_f\.push\(\[\d+,"((?:[^"\\]|\\.)*)"\]\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) payloads.push(m[1]);
  return payloads;
}

function unescapeJsonString(s: string): string {
  return JSON.parse(`"${s}"`);
}

function findModelObject(text: string, modelId: string): Record<string, any> | null {
  const marker = `"api_endpoint":"${modelId}"`;
  const idx = text.indexOf(marker);
  if (idx === -1) return null;

  // Walk back to the unmatched "{" that opens this object.
  let depth = 0;
  let start = -1;
  for (let i = idx; i >= 0; i--) {
    const c = text[i];
    if (c === "}") depth++;
    else if (c === "{") {
      if (depth === 0) { start = i; break; }
      depth--;
    }
  }
  if (start === -1) return null;

  // Walk forward to its matching "}".
  depth = 0;
  let end = -1;
  for (let i = start; i < text.length; i++) {
    const c = text[i];
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) { end = i; break; }
    }
  }
  if (end === -1) return null;

  try {
    return JSON.parse(text.substring(start, end + 1));
  } catch {
    return null;
  }
}

export async function scrapeMistral(): Promise<ScraperResult> {
  const errors: string[] = [];
  const models: Record<string, TokenPrice> = {};

  let html: string;
  try {
    const res = await fetch(PRICING_URL);
    if (!res.ok) {
      return {
        provider: "mistral",
        models: {},
        errors: [`fetch ${PRICING_URL}: ${res.status} ${res.statusText}`],
      };
    }
    html = await res.text();
  } catch (e) {
    return {
      provider: "mistral",
      models: {},
      errors: [`fetch ${PRICING_URL} threw: ${(e as Error).message}`],
    };
  }

  const payloads = extractNextPayloads(html);
  let combined = "";
  for (const p of payloads) {
    try { combined += unescapeJsonString(p); } catch { /* some payloads can't be unescaped cleanly — skip */ }
  }

  if (combined.length === 0) {
    return {
      provider: "mistral",
      models: {},
      errors: ["no __next_f payloads recovered from page"],
    };
  }

  for (const modelId of MODELS_OF_INTEREST) {
    const obj = findModelObject(combined, modelId);
    if (!obj) {
      errors.push(`model not found in page payloads: ${modelId}`);
      continue;
    }
    const priceArr: any[] = Array.isArray(obj.price) ? obj.price : [];
    let inputDollars: number | null = null;
    let outputDollars: number | null = null;
    for (const p of priceArr) {
      const label = String(p.value ?? "").toLowerCase();
      const raw = String(p.price_dollar ?? "");
      if (label.includes("input")) inputDollars = parsePrice(raw);
      else if (label.includes("output")) outputDollars = parsePrice(raw);
    }
    if (inputDollars === null || outputDollars === null) {
      errors.push(`incomplete price data for ${modelId}: input=${inputDollars} output=${outputDollars}`);
      continue;
    }
    models[modelId] = {
      kind: "token",
      input_cents_per_mtok:  dollarsToCents(inputDollars),
      cached_cents_per_mtok: 0,
      output_cents_per_mtok: dollarsToCents(outputDollars),
    };
  }

  return { provider: "mistral", models, errors };
}
