// Pricing sync orchestrator.
// Run: node --experimental-strip-types pricing/_scripts/sync.ts [--dry-run]
//
// Reads pricing/model_prices.json, runs every per-provider scraper in
// parallel, then:
//   - aborts (exit 1) if ANY scraper reported errors — no JSON written, no
//     PR opened, workflow fails. This is intentional: we'd rather alert on
//     a broken scraper than silently sync stale data.
//   - if all scrapers succeeded, diffs each scraped value against the JSON
//     (values rounded to 4dp, |a-b|<0.001 treated as equal). If diffs exist,
//     writes the updated JSON, bumps `version` to today (UTC), and writes
//     PR title/body files into PRICING_SYNC_OUT_DIR (default /tmp) for the
//     GitHub workflow to consume.
//   - with --dry-run, computes and prints diffs but does not modify the JSON
//     or write title/body files.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { scrapeAnthropic }    from "./scrapers/anthropic.ts";
import { scrapeMistral }      from "./scrapers/mistral.ts";
import { scrapeOpenAIText }   from "./scrapers/openai-text.ts";
import { scrapeOpenAIImages } from "./scrapers/openai-images.ts";
import { scrapeGemini }       from "./scrapers/gemini.ts";
import type { ScrapedPrice, TokenPrice } from "./scrapers/types.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JSON_PATH = path.resolve(__dirname, "..", "model_prices.json");

const OUT_DIR = process.env.PRICING_SYNC_OUT_DIR ?? "/tmp";
const TITLE_PATH = path.join(OUT_DIR, "pricing-sync-title.txt");
const BODY_PATH  = path.join(OUT_DIR, "pricing-sync-body.md");

const DRY_RUN = process.argv.includes("--dry-run");

const TOKEN_FIELDS = [
  "input_cents_per_mtok",
  "cached_cents_per_mtok",
  "output_cents_per_mtok",
] as const;
type TokenField = typeof TOKEN_FIELDS[number];

type Diff = {
  modelId: string;
  field: string;
  oldVal: number;
  newVal: number;
  pctChange: number;   // (new - old) / |old|, Infinity if old===0 && new!==0
  bigChange: boolean;  // |pctChange| > 0.5
};

const PROVIDER_PAGES: Record<string, string> = {
  anthropic: "https://platform.claude.com/docs/en/about-claude/pricing",
  mistral:   "https://mistral.ai/pricing",
  openai:    "https://developers.openai.com/api/docs/pricing",
  google:    "https://ai.google.dev/gemini-api/docs/pricing",
};

function round4(x: number): number {
  return Math.round(x * 10000) / 10000;
}

function valuesEqual(a: number, b: number): boolean {
  return Math.abs(round4(a) - round4(b)) < 0.001;
}

function computeChange(oldVal: number, newVal: number): { pctChange: number; bigChange: boolean } {
  if (oldVal === 0) {
    return {
      pctChange: newVal === 0 ? 0 : Number.POSITIVE_INFINITY,
      bigChange: newVal !== 0,
    };
  }
  const pct = (newVal - oldVal) / Math.abs(oldVal);
  return { pctChange: pct, bigChange: Math.abs(pct) > 0.5 };
}

function formatPct(pct: number): string {
  if (!isFinite(pct)) return "n/a";
  return `${(pct * 100).toFixed(1)}%`;
}

async function main() {
  const raw = readFileSync(JSON_PATH, "utf8");
  const json: any = JSON.parse(raw);

  console.log("Running scrapers in parallel...");
  const results = await Promise.all([
    scrapeAnthropic(),
    scrapeMistral(),
    scrapeOpenAIText(),
    scrapeOpenAIImages(),
    scrapeGemini(),
  ]);

  const allErrors: string[] = [];
  for (const r of results) {
    console.log(`  [${r.provider}] ${Object.keys(r.models).length} models, ${r.errors.length} errors`);
    for (const e of r.errors) allErrors.push(`[${r.provider}] ${e}`);
  }

  if (allErrors.length > 0) {
    console.error("\nScraper errors detected — aborting (no PR will be opened):");
    for (const e of allErrors) console.error("  " + e);
    process.exit(1);
  }

  const scrapedById = new Map<string, ScrapedPrice>();
  for (const r of results) {
    for (const [id, p] of Object.entries(r.models)) scrapedById.set(id, p);
  }

  const diffs: Diff[] = [];
  const providersTouched = new Set<string>();

  // Token models
  for (const [modelId, entry] of Object.entries(json.models as Record<string, any>)) {
    if (entry.manual_only) continue;

    const scraped = scrapedById.get(modelId);
    if (!scraped) {
      console.error(`No scraper produced data for token model ${modelId} (provider ${entry.provider})`);
      process.exit(1);
    }

    let tokenPrice: TokenPrice;
    if (scraped.kind === "token") {
      tokenPrice = scraped;
    } else if (scraped.kind === "token_tiered") {
      const pref: string | undefined = entry.gemini_tier_preference;
      if (!pref) {
        console.error(`Tiered scraper data for ${modelId} but no gemini_tier_preference set in JSON`);
        process.exit(1);
      }
      const t = scraped.tiers[pref];
      if (!t) {
        console.error(`gemini_tier_preference="${pref}" not among scraped tiers for ${modelId} (have: ${Object.keys(scraped.tiers).join(", ")})`);
        process.exit(1);
      }
      tokenPrice = t;
    } else {
      console.error(`Scraped kind=${(scraped as any).kind} is not a token price for ${modelId}`);
      process.exit(1);
    }

    for (const field of TOKEN_FIELDS) {
      const newVal = tokenPrice[field];
      if (newVal === null || newVal === undefined) continue; // scraper has no data
      const oldVal = entry[field];
      if (typeof oldVal !== "number") continue;
      if (valuesEqual(oldVal, newVal)) continue;
      const rounded = round4(newVal);
      const { pctChange, bigChange } = computeChange(oldVal, rounded);
      diffs.push({ modelId, field, oldVal, newVal: rounded, pctChange, bigChange });
      entry[field] = rounded;
      providersTouched.add(entry.provider);
    }
  }

  // Image models — both quality_size matrices and flat per-image pricing.
  for (const [modelId, entry] of Object.entries(json.images as Record<string, any>)) {
    if (entry.manual_only) continue;

    const scraped = scrapedById.get(modelId);
    if (!scraped) {
      console.error(`No scraper produced data for image model ${modelId} (provider ${entry.provider})`);
      process.exit(1);
    }

    if (entry.type === "quality_size") {
      if (scraped.kind !== "image_quality_size") {
        console.error(`Scraped kind=${(scraped as any).kind} is not image_quality_size for ${modelId}`);
        process.exit(1);
      }
      for (const [quality, sizes] of Object.entries(scraped.pricing)) {
        const entryPricing = entry.pricing?.[quality];
        if (!entryPricing) continue; // e.g. "auto" only in JSON; nothing to diff against
        for (const [size, newVal] of Object.entries(sizes)) {
          const oldVal = entryPricing[size];
          if (typeof oldVal !== "number") continue;
          if (valuesEqual(oldVal, newVal)) continue;
          const rounded = round4(newVal);
          const { pctChange, bigChange } = computeChange(oldVal, rounded);
          diffs.push({
            modelId,
            field: `images.${quality}.${size}`,
            oldVal,
            newVal: rounded,
            pctChange,
            bigChange,
          });
          entryPricing[size] = rounded;
          providersTouched.add(entry.provider);
        }
      }
    } else if (entry.type === "flat") {
      if (scraped.kind !== "image_flat") {
        console.error(`Scraped kind=${(scraped as any).kind} is not image_flat for ${modelId}`);
        process.exit(1);
      }
      const newVal = scraped.cents_per_image;
      const oldVal = entry.cents_per_image;
      if (typeof oldVal !== "number") {
        console.error(`Flat image entry ${modelId} has no numeric cents_per_image`);
        process.exit(1);
      }
      if (!valuesEqual(oldVal, newVal)) {
        const rounded = round4(newVal);
        const { pctChange, bigChange } = computeChange(oldVal, rounded);
        diffs.push({ modelId, field: "cents_per_image", oldVal, newVal: rounded, pctChange, bigChange });
        entry.cents_per_image = rounded;
        providersTouched.add(entry.provider);
      }
    } else {
      console.error(`Unknown image entry type "${entry.type}" for ${modelId}`);
      process.exit(1);
    }
  }

  console.log(`\n${diffs.length} diff(s) detected`);
  for (const d of diffs) {
    const marker = d.bigChange ? "BIG " : "";
    console.log(`  ${d.modelId}.${d.field}: ${d.oldVal} → ${d.newVal} (${marker}${formatPct(d.pctChange)})`);
  }

  if (diffs.length === 0) {
    console.log("\nNo changes. Exiting cleanly.");
    return;
  }

  if (DRY_RUN) {
    console.log("\n--dry-run set: not writing model_prices.json or summary files.");
    return;
  }

  // Bump version date to today (UTC) when applying changes.
  json.version = new Date().toISOString().slice(0, 10);
  writeFileSync(JSON_PATH, JSON.stringify(json, null, 2) + "\n", "utf8");
  console.log(`\nUpdated ${JSON_PATH} (version → ${json.version})`);

  const hasBig = diffs.some((d) => d.bigChange);
  const title =
    `chore(pricing): sync from upstream (${diffs.length} ${diffs.length === 1 ? "change" : "changes"})` +
    (hasBig ? " - BIG CHANGE - double-check" : "");

  const lines: string[] = [];
  lines.push(`# Pricing sync — ${diffs.length} ${diffs.length === 1 ? "change" : "changes"}`);
  if (hasBig) {
    lines.push("");
    lines.push("⚠️ **BIG CHANGE detected (>50%) — please double-check against the provider pricing page before merging.**");
  }
  lines.push("");
  lines.push("| Model | Field | Old | New | Change |");
  lines.push("|---|---|---|---|---|");
  for (const d of diffs) {
    const flag = d.bigChange ? " ⚠️" : "";
    lines.push(`| \`${d.modelId}\` | \`${d.field}\` | ${d.oldVal} | ${d.newVal} | ${formatPct(d.pctChange)}${flag} |`);
  }
  lines.push("");
  lines.push("## Provider pricing pages");
  for (const p of providersTouched) {
    const url = PROVIDER_PAGES[p];
    if (url) lines.push(`- ${p}: ${url}`);
  }
  lines.push("");
  const body = lines.join("\n");

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(TITLE_PATH, title + "\n", "utf8");
  writeFileSync(BODY_PATH, body, "utf8");
  console.log(`Wrote ${TITLE_PATH}`);
  console.log(`Wrote ${BODY_PATH}`);
}

main().catch((e) => {
  console.error("sync.ts failed:", e);
  process.exit(1);
});
