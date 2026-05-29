# Pricing

Source of truth for LLM, image, and transcription model prices used by OneAI products for billing.

Like changelogs, prices change more often than code and need to be consumed by every deployment type — SaaS, Private Cloud, and On-Prem — without requiring an app release. Apps fetch this JSON from `raw.githubusercontent.com` at runtime, cache it, and fall back to a bundled snapshot if the fetch fails.

## Quick Start

### Base URL

```
https://raw.githubusercontent.com/oneai-eu/oneai-releases/main/pricing
```

### Common Operations

| Operation | URL |
|---|---|
| Fetch all prices | `{base}/model_prices.json` |

### Example: Fetch Prices

```
GET https://raw.githubusercontent.com/oneai-eu/oneai-releases/main/pricing/model_prices.json
```

## Files

| File | Purpose |
|---|---|
| `model_prices.json` | All token, image, and transcription pricing — **consumed by apps** |
| `_scripts/sync.ts` | Daily sync orchestrator (see [`_scripts/README.md`](_scripts/README.md)) |
| `_scripts/scrapers/` | Per-provider scraper modules |
| `README.md` | This file |

## How Prices Get Updated

Prices are synced directly from each provider's official pricing page by a per-provider scraper. The [`Sync pricing`](../.github/workflows/sync-pricing.yml) GitHub Action runs daily at 03:00 UTC:

1. **Scrape** — `pricing/_scripts/sync.ts` runs every scraper module under `_scripts/scrapers/` in parallel.
2. **Hard-fail loudly** — if *any* scraper reports an error (model missing, parse failure, network error), the workflow fails and no PR is opened. We'd rather page someone than silently sync stale data.
3. **Diff** — if every scraper succeeded, scraped values are compared against `model_prices.json` (rounded to 4dp, threshold 0.001).
4. **PR** — on drift, the action opens a PR labelled `pricing-sync` against `main` with a markdown table of every change. PRs whose largest diff exceeds 50% are tagged `BIG CHANGE — double-check` in the title.
5. **Review & merge** — a human confirms each change against the provider's page (links are in the PR body). Merging makes the new prices live. Apps pick them up within their cache TTL (~5–15 min).

There is no detector / source-of-truth split anymore — the provider's own pricing page is the source of truth, and the merged JSON in this directory is what apps use for billing.

### Models the scraper skips

Models with `manual_only: true` in the JSON are not touched by the sync. See `manual_only_reason` on each entry for why. Reasons today include: deprecated/internal-only models, providers we don't have a scraper for yet (e.g. Imagen), and product surfaces we aren't actively routing to (e.g. grok-imagine).

To update a manual-only price, edit `model_prices.json` directly, link the provider's pricing page in your PR, and request review.

### Updating a Price Manually

If a provider changes a price and the daily sync hasn't run yet:

1. Open a PR editing `model_prices.json`
2. Link the provider's pricing page in the PR description
3. Get one review, merge

## File Formats

### `model_prices.json`

```jsonc
{
  "version": "YYYY-MM-DD",
  "models": {
    "<model-id>": {
      "provider": "openai" | "anthropic" | "google" | "mistral" | "xai" | "oneai",
      "input_cents_per_mtok": number,
      "cached_cents_per_mtok": number,
      "output_cents_per_mtok": number,
      "notes": string,                 // optional
      "manual_only": true,             // optional — skip in daily sync
      "manual_only_reason": string,    // required when manual_only is true
      "gemini_tier_preference": "at_or_under_200k" | "above_200k" // Gemini Pro models only
    }
  },
  "transcription": {
    "<model-id>": {
      "provider": "...",
      "cents_per_minute": number
    }
  },
  "images": {
    "<model-id>": {
      "provider": "...",
      "type": "quality_size" | "flat",
      "cents_per_image": number,       // when type=flat
      "pricing": {                      // when type=quality_size
        "<quality>": { "<size>": number }
      }
    }
  }
}
```

### Units

- **All prices in cents.** Not dollars, not micros.
- **Token prices** are per 1,000,000 tokens (MTok).
- **Transcription** is per minute.
- **Images** are per image.

### Provider-Specific Notes

- **Anthropic**: `input_cents_per_mtok` reflects the cache-write price (1.25× base). Cache reads use `cached_cents_per_mtok`.
- **Mistral**: no cached pricing — `cached_cents_per_mtok` is `0`.
- **Embeddings**: only `input_cents_per_mtok` is used; output and cached are `0`.

## Internal Models

Some platform-internal models (vision OCR, embeddings used for RAG, summarization) were historically not billed to customers — configured in apps via environment variables and treated as zero-cost by the billing layer.

As of the **Gateway plan launch**, OneAI's own models are billed and live in this file under `provider: "oneai"` (`oneai-embed`, `oneai-vision`, `oneai-summarization`). They are flagged `manual_only: true` because there is no public pricing page to scrape — update their prices by editing this file directly. Any remaining internal usage outside the Gateway plan may still be zero-rated by the consuming app's configuration.

## Integration Example

```typescript
const BASE_URL = "https://raw.githubusercontent.com/oneai-eu/oneai-releases/main";

async function fetchModelPrices(): Promise<ModelPrices> {
  const res = await fetch(`${BASE_URL}/pricing/model_prices.json`);
  if (!res.ok) throw new Error("Failed to fetch model prices");
  return res.json();
}
```

Apps are expected to:
- Cache the response in memory (refresh every 5–15 min)
- Ship a bundled fallback snapshot in case fetch fails at startup
- Fail loudly (alert) on unknown model IDs, not silently default

## For Contributors

Unlike changelogs (which are auto-generated by n8n + AI agents), pricing PRs require human review against the provider's official pricing page before merge.