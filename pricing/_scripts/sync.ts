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

import { scrapeMistral }      from "./scrapers/mistral.ts";
import { scrapeOpenAIText }   from "./scrapers/openai-text.ts";
import { scrapeOpenAIImages } from "./scrapers/openai-images.ts";
import type { ScrapedPrice, TokenPrice } from "./scrapers/types.ts";

// Providers we scrape from a public pricing page. Everything else
// (anthropic, google, xai) is served via Vertex AI and priced manually —
// the orchestrator skips those entries entirely rather than erroring on
// the missing scraper data.
const SCRAPED_PROVIDERS = new Set(["openai", "mistral"]);

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
  provider: string;    // "anthropic" | "mistral" | "openai" | "google"
  oldVal: number;
  newVal: number;
  pctChange: number;   // (new - old) / |old|, Infinity if old===0 && new!==0
  bigChange: boolean;  // |pctChange| > 0.5
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

type ChecklistBucket = {
  label: string;
  urls: string[];
  models: Set<string>;
};

/**
 * Group diffs into per-provider verification buckets for the PR body.
 * OpenAI splits between text/embeddings and image generation because those
 * live on different pricing pages — image-model diffs have a `field` that
 * starts with "images.", so we route on that.
 */
function buildChecklist(diffs: Diff[]): ChecklistBucket[] {
  const anthropic    = new Set<string>();
  const mistral      = new Set<string>();
  const google       = new Set<string>();
  const openaiText   = new Set<string>();
  const openaiImages = new Set<string>();

  for (const d of diffs) {
    if (d.provider === "anthropic") anthropic.add(d.modelId);
    else if (d.provider === "mistral") mistral.add(d.modelId);
    else if (d.provider === "google") google.add(d.modelId);
    else if (d.provider === "openai") {
      if (d.field.startsWith("images.")) openaiImages.add(d.modelId);
      else openaiText.add(d.modelId);
    }
  }

  const out: ChecklistBucket[] = [];
  if (anthropic.size > 0) {
    out.push({
      label: "Anthropic",
      urls: ["https://platform.claude.com/docs/en/about-claude/pricing"],
      models: anthropic,
    });
  }
  if (openaiText.size > 0 || openaiImages.size > 0) {
    const urls: string[] = [];
    if (openaiText.size > 0) {
      urls.push("https://developers.openai.com/api/docs/pricing?multimodal-image-pricing=standard&video-pricing=standard");
    }
    if (openaiImages.size > 0) {
      urls.push("https://developers.openai.com/api/docs/guides/image-generation");
    }
    out.push({
      label: "OpenAI",
      urls,
      models: new Set([...openaiText, ...openaiImages]),
    });
  }
  if (mistral.size > 0) {
    out.push({
      label: "Mistral",
      urls: ["https://mistral.ai/pricing/api"],
      models: mistral,
    });
  }
  if (google.size > 0) {
    out.push({
      label: "Google",
      urls: ["https://ai.google.dev/gemini-api/docs/pricing"],
      models: google,
    });
  }
  return out;
}

/**
 * Walk every section of the JSON (models, transcription, images) and
 * collect entries flagged `manual_only: true`, in the order they appear.
 * Read at runtime rather than hardcoded so the PR body stays accurate as
 * entries are added or removed.
 */
function collectManualOnly(json: any): { id: string; reason: string }[] {
  const out: { id: string; reason: string }[] = [];
  for (const section of [json.models, json.transcription, json.images]) {
    if (!section || typeof section !== "object") continue;
    for (const [id, entry] of Object.entries(section as Record<string, any>)) {
      if (entry?.manual_only) {
        out.push({ id, reason: entry.manual_only_reason ?? "" });
      }
    }
  }
  return out;
}

async function main() {
  const raw = readFileSync(JSON_PATH, "utf8");
  const json: any = JSON.parse(raw);

  console.log("Running scrapers in parallel...");
  const results = await Promise.all([
    scrapeMistral(),
    scrapeOpenAIText(),
    scrapeOpenAIImages(),
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

  // Token models
  for (const [modelId, entry] of Object.entries(json.models as Record<string, any>)) {
    if (entry.manual_only) continue;
    if (!SCRAPED_PROVIDERS.has(entry.provider)) continue;

    const scraped = scrapedById.get(modelId);
    if (!scraped) {
      console.error(`No scraper produced data for token model ${modelId} (provider ${entry.provider})`);
      process.exit(1);
    }

    if (scraped.kind !== "token") {
      console.error(`Scraped kind=${(scraped as any).kind} is not a token price for ${modelId}`);
      process.exit(1);
    }
    const tokenPrice: TokenPrice = scraped;

    for (const field of TOKEN_FIELDS) {
      const newVal = tokenPrice[field];
      if (newVal === null || newVal === undefined) continue; // scraper has no data
      const oldVal = entry[field];
      if (typeof oldVal !== "number") continue;
      if (valuesEqual(oldVal, newVal)) continue;
      const rounded = round4(newVal);
      const { pctChange, bigChange } = computeChange(oldVal, rounded);
      diffs.push({ modelId, field, provider: entry.provider, oldVal, newVal: rounded, pctChange, bigChange });
      entry[field] = rounded;
    }
  }

  // Image models — both quality_size matrices and flat per-image pricing.
  for (const [modelId, entry] of Object.entries(json.images as Record<string, any>)) {
    if (entry.manual_only) continue;
    if (!SCRAPED_PROVIDERS.has(entry.provider)) continue;

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
            provider: entry.provider,
            oldVal,
            newVal: rounded,
            pctChange,
            bigChange,
          });
          entryPricing[size] = rounded;
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
        diffs.push({ modelId, field: "cents_per_image", provider: entry.provider, oldVal, newVal: rounded, pctChange, bigChange });
        entry.cents_per_image = rounded;
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

  // 1. Header
  lines.push(`# Pricing sync — ${diffs.length} ${diffs.length === 1 ? "change" : "changes"}`);
  if (hasBig) {
    lines.push("");
    lines.push("⚠️ **BIG CHANGE detected (>50%) — please double-check against the provider pricing page before merging.**");
  }

  // 2. Reviewer instructions
  lines.push("");
  lines.push("## Before merging");
  lines.push("");
  lines.push("For each row in the diff table below, open the corresponding provider's pricing page (linked in the Verification checklist section) and confirm the **New** value matches the official price.");
  lines.push("");
  lines.push("If anything looks wrong:");
  lines.push("- Close this PR without merging");
  lines.push("- Investigate the affected scraper module in `pricing/_scripts/scrapers/`");
  lines.push("- The auto-sync will retry tomorrow at 03:00 UTC");
  lines.push("");
  lines.push("This PR will affect production billing within ~10 minutes of merging.");

  // 3. Diff table
  lines.push("");
  lines.push("## Changes");
  lines.push("");
  lines.push("| Model | Field | Old | New | Change |");
  lines.push("|---|---|---|---|---|");
  for (const d of diffs) {
    const flag = d.bigChange ? " ⚠️" : "";
    lines.push(`| \`${d.modelId}\` | \`${d.field}\` | ${d.oldVal} | ${d.newVal} | ${formatPct(d.pctChange)}${flag} |`);
  }

  // 4. Verification checklist — only providers actually affected by this PR.
  lines.push("");
  lines.push("## Verification checklist");
  lines.push("");
  for (const b of buildChecklist(diffs)) {
    const urlText = b.urls.join(" and ");
    lines.push(`- [ ] **${b.label}** — verify at ${urlText}`);
    lines.push(`  - ${[...b.models].sort().join(", ")}`);
  }

  // 5. Static reference — all provider pricing pages.
  lines.push("");
  lines.push("## All provider pricing pages");
  lines.push("");
  lines.push("- Anthropic: https://platform.claude.com/docs/en/about-claude/pricing");
  lines.push("- OpenAI (text and embeddings): https://developers.openai.com/api/docs/pricing?multimodal-image-pricing=standard&video-pricing=standard");
  lines.push("- OpenAI (image generation): https://developers.openai.com/api/docs/guides/image-generation");
  lines.push("- Mistral: https://mistral.ai/pricing/api");
  lines.push("- Google (Gemini and Imagen): https://ai.google.dev/gemini-api/docs/pricing");

  // 6. Manual-only models — read live from the JSON so it stays accurate.
  lines.push("");
  lines.push("## Models not synced (manual_only)");
  lines.push("");
  lines.push("These models are excluded from automatic sync. Their prices are managed manually.");
  lines.push("");
  for (const m of collectManualOnly(json)) {
    lines.push(`- **${m.id}** — ${m.reason}`);
  }
  lines.push("");
  lines.push("To update prices for these, edit `pricing/model_prices.json` directly.");
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
