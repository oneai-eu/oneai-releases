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

**All prices are maintained manually.** The provider's own pricing page is the source of truth, and the JSON in this directory is what apps use for billing.

The `Sync pricing` GitHub Action that previously ran daily at 03:00 UTC was removed on 2026-09-07. Its per-provider scrapers broke whenever a vendor restyled a pricing page, so the job failed for long stretches with no visible signal, and it only ever covered OpenAI and Mistral — a minority of the catalogue. Recover it from git history if it is ever needed: see `.github/workflows/sync-pricing.yml` at commit `3eb5d56` or earlier.

Because nothing checks these values automatically any more, the review step below is the only thing standing between a typo and production billing.

### Models the scraper skips

Entries carrying `manual_only: true` and a `manual_only_reason` predate the removal of the sync; the flag marked models the scraper was not allowed to overwrite. It now has no effect on any tooling in this repository — every entry is manual. The `manual_only_reason` strings are retained as historical justification for how each price was set.

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
      "display_name": string,          // UI label, e.g. "Opus 5"
      "provider": "openai" | "anthropic" | "google" | "mistral" | "xai" | "oneai" | "deepseek" | "qwen",
                                        // the model's AUTHOR — who made the weights
      "hoster": "openai" | "google-vertex" | "mistral" | "weber" | "oneai",
                                        // who serves the API we call
      "location": "global" | "europe" | "germany" | "baden-wuerttemberg",
                                        // optional — most specific hosting region of the
                                        // DEFAULT SaaS routing. Each level implies the
                                        // broader ones: baden-wuerttemberg is also
                                        // germany- and europe-hosted. Omitted where the
                                        // location is deployment-specific (internal
                                        // oneai models). Compliance-authoritative
                                        // residency stays in the app's routing code,
                                        // which a deployment can repoint.
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

- **All prices in cents per unit.** Numerals mirror the providers' USD list prices
  (that is what the scrapers read); oneAI bills them 1:1 as EUR cents, so the EUR/USD
  spread is a deliberate cushion, not an error. EUR-native providers (weber.cloud)
  are entered in actual EUR.
- **Token prices** are per 1,000,000 tokens (MTok).
- **Transcription** is per minute.
- **Images** are per image.

### Provider-Specific Notes

- **Anthropic**: `input_cents_per_mtok` reflects the cache-write price (1.25× base). Cache reads use `cached_cents_per_mtok`.
- **Mistral**: no cached pricing — `cached_cents_per_mtok` is `0`.
- **Embeddings**: only `input_cents_per_mtok` is used; output and cached are `0`.
- **Provider vs hoster**: `provider` names the model's author (what a customer picks on),
  `hoster` names which API serves it. Claude and Gemini rows are `hoster: google-vertex`;
  the open-weight DeepSeek/Qwen rows are authored by `deepseek`/`qwen` and served by
  `weber` (weber.cloud, Balingen — `location: baden-wuerttemberg`).
- **Vertex EU premium**: Gemini and Claude EU-region rows price at exactly 1.10× their
  `-global` twin, because Google and Anthropic publish separate global and non-global
  rates for them. **xAI does not follow this**: only global-region rates are published
  for Grok, so an EU-served Grok request prices the same as the global twin.
- **List price only** — promotional/introductory discounts are not reflected.
  `gemini-3.7-flash` is on an introductory rate at half its list price until
  2026-12-31, which is why its row is lower than the list suggests. When adding a
  Vertex model, note in `manual_only_reason` that the row is list price and may need
  halving if the model carries the same promotion.

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