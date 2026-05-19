# Pricing sync scripts

`sync.ts` is the daily orchestrator that keeps `pricing/model_prices.json` in sync with each provider's official pricing page. The GitHub Action in [`.github/workflows/sync-pricing.yml`](../../.github/workflows/sync-pricing.yml) runs it at 03:00 UTC daily (and on `workflow_dispatch`), and opens a PR labelled `pricing-sync` when prices drift.

## How it works

```
sync.ts
 ├─ reads pricing/model_prices.json
 ├─ calls every scraper module in scrapers/ in parallel
 ├─ if ANY scraper reports an error → exit 1 (workflow fails, no PR)
 ├─ diffs scraped values against the JSON (round to 4dp, threshold 0.001)
 ├─ if diffs → write updated JSON, bump `version` to today (UTC),
 │  write title/body files for the workflow's PR step
 └─ if no diffs → exit 0 cleanly
```

Hard-failing on any scraper error is intentional. We would rather alert
loudly than silently sync stale data from a broken parser.

## Scraper modules

Each provider has a self-contained module that exports a single async
function returning `ScraperResult`:

```ts
type ScraperResult = {
  provider: string;                          // "openai" | "anthropic" | "google" | "mistral"
  models: Record<modelId, ScrapedPrice>;     // see scrapers/types.ts
  errors: string[];                          // empty on success
};
```

| Module                  | Provider page                                            | Data shape           |
|-------------------------|----------------------------------------------------------|----------------------|
| `anthropic.ts`          | https://platform.claude.com/docs/en/about-claude/pricing | markdown table       |
| `mistral.ts`            | https://mistral.ai/pricing                               | Next.js RSC payloads |
| `openai-text.ts`        | https://developers.openai.com/api/docs/pricing           | MDX `rows={[...]}`   |
| `openai-images.ts`      | https://developers.openai.com/api/docs/guides/image-generation | MDX JSX `<table>` |
| `gemini.ts`             | https://ai.google.dev/gemini-api/docs/pricing            | markdown tables, multi-modality, tiered; also covers Imagen 4 flat-priced image models |

Each parser depends on **undocumented provider data formats** — a vendor
restyling their pricing page can break us overnight. When that happens, the
daily workflow fails and posts the error; fix the parser, re-run, ship.

Note: `gemini.ts` is named after Gemini text models but also covers Imagen 4
(`imagen-4.0-*`), since both share Google's single pricing markdown page.

## Manual-only models

Models with `manual_only: true` in the JSON are skipped by the orchestrator.
Use this flag for:
- models deprecated or not yet on the provider's public pricing page,
- providers we don't have a scraper for yet,
- products we aren't actively routing to (e.g. grok-imagine).

Always include a short `manual_only_reason` so the next person knows why.

## Gemini tier preference

Gemini Pro models price prompts `<=200k` tokens differently from `>200k`.
The Gemini scraper returns both tiers as a `TokenPriceTiered`; the JSON
entry must declare which one we bill against via:

```jsonc
"gemini-2.5-pro": {
  ...,
  "gemini_tier_preference": "above_200k"   // or "at_or_under_200k"
}
```

The orchestrator hard-errors if a tiered scraper result has no preference.

## Running locally

```bash
# From the repo root. Requires Node 22+ (uses --experimental-strip-types).

# Dry-run: prints diffs but does not modify the JSON.
node --experimental-strip-types pricing/_scripts/sync.ts --dry-run

# Real run: writes the JSON and produces title/body files at
# /tmp/pricing-sync-title.txt and /tmp/pricing-sync-body.md (override
# with PRICING_SYNC_OUT_DIR).
node --experimental-strip-types pricing/_scripts/sync.ts
```

The exit code is `0` on success (with or without diffs) and `1` on any
scraper error.

## Adding a new provider scraper

1. Add a new module under `scrapers/` exporting an async `scrapeXxx()` that
   returns `ScraperResult`. Use the existing modules as templates.
2. Register the call in `sync.ts`'s `Promise.all([...])`.
3. Add the provider's pricing-page URL to `PROVIDER_PAGES` in `sync.ts` so
   the PR body can link to it.
4. If your scraper returns a new `ScrapedPrice` variant, extend
   `scrapers/types.ts` and the orchestrator's diff logic.

Keep error handling defensive: catch network failures and parse errors
inside the module and surface them via `errors[]` rather than throwing.
The orchestrator treats any `errors[]` entry as a hard fail.
