// Anthropic pricing scraper.
//
// Anthropic publishes pricing as a stable markdown file with a clean
// table. We parse the table directly and map columns:
//   - "5m Cache Writes"  → input_cents_per_mtok  (model_prices.json
//     deliberately tracks the 1.25× cache-write rate, not the base rate)
//   - "Cache Hits"       → cached_cents_per_mtok
//   - "Output Tokens"    → output_cents_per_mtok

import type { ScraperResult, TokenPrice } from "./types.ts";

const PRICING_URL = "https://platform.claude.com/docs/en/about-claude/pricing.md";

const MODEL_NAME_MAP: Record<string, string> = {
  "claude-opus-4-7":   "Claude Opus 4.7",
  "claude-opus-4-6":   "Claude Opus 4.6",
  "claude-opus-4-5":   "Claude Opus 4.5",
  "claude-opus-4-1":   "Claude Opus 4.1",
  "claude-sonnet-4-6": "Claude Sonnet 4.6",
  "claude-sonnet-4-5": "Claude Sonnet 4.5",
  "claude-haiku-4-5":  "Claude Haiku 4.5",
};

function parsePriceCell(cell: string): number | null {
  if (!cell) return null;
  const m = cell.match(/\$\s*([\d.]+)/);
  if (!m) return null;
  const n = parseFloat(m[1]);
  return isNaN(n) ? null : n;
}

function cleanModelName(cell: string): string {
  // Strip trailing markdown link annotations like "([deprecated](url))".
  return cell
    .replace(/\(\[.*?\]\(.*?\)\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseRow(line: string): string[] {
  return line
    .replace(/^\s*\|/, "")
    .replace(/\|\s*$/, "")
    .split("|")
    .map((c) => c.trim());
}

function extractPricingTable(markdown: string): string[][] {
  const lines = markdown.split(/\r?\n/);
  let headerIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (
      line.includes("| Model") &&
      line.includes("Base Input") &&
      line.includes("Output Tokens")
    ) {
      headerIdx = i;
      break;
    }
  }
  if (headerIdx === -1) throw new Error("pricing-table header not found");

  const rows: string[][] = [];
  for (let i = headerIdx + 2; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line.startsWith("|")) break;
    rows.push(parseRow(line));
  }
  return rows;
}

function dollarsToCents(d: number | null): number | null {
  if (d === null) return null;
  return Math.round(d * 100 * 100) / 100;
}

export async function scrapeAnthropic(): Promise<ScraperResult> {
  const errors: string[] = [];
  const models: Record<string, TokenPrice> = {};

  let md: string;
  try {
    const res = await fetch(PRICING_URL);
    if (!res.ok) {
      return {
        provider: "anthropic",
        models: {},
        errors: [`fetch ${PRICING_URL}: ${res.status} ${res.statusText}`],
      };
    }
    md = await res.text();
  } catch (e) {
    return {
      provider: "anthropic",
      models: {},
      errors: [`fetch ${PRICING_URL} threw: ${(e as Error).message}`],
    };
  }

  let rows: string[][];
  try {
    rows = extractPricingTable(md);
  } catch (e) {
    return {
      provider: "anthropic",
      models: {},
      errors: [`table extraction: ${(e as Error).message}`],
    };
  }

  const byName = new Map<string, string[]>();
  for (const row of rows) byName.set(cleanModelName(row[0]), row);

  for (const [modelId, displayName] of Object.entries(MODEL_NAME_MAP)) {
    const row = byName.get(displayName);
    if (!row) {
      errors.push(`model not found: ${modelId} (looked for "${displayName}")`);
      continue;
    }
    // Columns: Model | Base Input | 5m Cache Writes | 1h Cache Writes | Cache Hits | Output
    models[modelId] = {
      kind: "token",
      input_cents_per_mtok:  dollarsToCents(parsePriceCell(row[2])),
      cached_cents_per_mtok: dollarsToCents(parsePriceCell(row[4])),
      output_cents_per_mtok: dollarsToCents(parsePriceCell(row[5])),
    };
  }

  return { provider: "anthropic", models, errors };
}
