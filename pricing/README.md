# Pricing

Source of truth for LLM, image, and transcription model prices used by oneAI products for billing.

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
| `model_prices.json` | All token, image, and transcription pricing, plus the model catalog - **consumed by apps** |
| `schema.json` | JSON Schema for `model_prices.json` (see "Validation") |
| `_scripts/validate.ts` | Cross-row rules the schema cannot express (see "Validation") |
| `_scripts/sync.ts` | Daily sync orchestrator (see [`_scripts/README.md`](_scripts/README.md)) |
| `_scripts/scrapers/` | Per-provider scraper modules |
| `README.md` | This file |

## How Prices Get Updated

**All prices are maintained manually.** The provider's own pricing page is the source of truth, and the JSON in this directory is what apps use for billing.

The `Sync pricing` GitHub Action that previously ran daily at 03:00 UTC was removed on 2026-09-07. Its per-provider scrapers broke whenever a vendor restyled a pricing page, so the job failed for long stretches with no visible signal, and it only ever covered OpenAI and Mistral — a minority of the catalogue. Recover it from git history if it is ever needed: see `.github/workflows/sync-pricing.yml` at commit `3eb5d56` or earlier.

CI (see "Validation") checks the file's shape and that no row disappears, but not whether a price is right, so the review step below is still the only thing standing between a wrong price and production billing.

### Models the scraper skips

Entries carrying `manual_only: true` and a `manual_only_reason` predate the removal of the sync; the flag marked models the scraper was not allowed to overwrite. It now has no effect on any tooling in this repository — every entry is manual. The `manual_only_reason` strings are retained as historical justification for how each price was set.

### Updating a Price Manually

If a provider changes a price and the daily sync hasn't run yet:

1. Open a PR editing `model_prices.json`
2. Link the provider's pricing page in the PR description
3. Wait for the `Validate pricing` check to pass
4. Get one review, merge

## File Formats

### `model_prices.json`

```jsonc
{
  "version": "YYYY-MM-DD",
  "benchmark_source": {                 // where every row's `benchmark` comes from - see "Benchmarks"
    "name": string, "version": string, "url": string, "retrieved": "YYYY-MM-DD", "notes": string
  },
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
      // catalog fields (status, route, policy, ...) - see "Model catalog"
      "input_cents_per_mtok": number,
      "cached_cents_per_mtok": number,
      "output_cents_per_mtok": number,
      "notes": string,                 // optional
      "manual_only": true,             // optional — skip in daily sync
      "manual_only_reason": string,    // required when manual_only is true
      "gemini_tier_preference": "at_or_under_200k" | "above_200k", // Gemini Pro models only
      "benchmark": {                    // optional - display only, see "Benchmarks"
        "intelligence_index": number,   // Artificial Analysis Intelligence Index score
        "tokens_per_task": {            // average tokens of one index task
          "input": number,              // uncached input
          "cache_read": number,
          "cache_write": number,
          "output": number              // reasoning + answer
        },
        "effort": string,               // optional - reasoning effort of the measured variant
        "variant": string               // Artificial Analysis model slug that was measured
      }
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
      },
      "token_pricing": {                // optional — see "Token-priced images"
        "text_input_cents_per_mtok": number,
        "image_input_cents_per_mtok": number,
        "output_cents_per_mtok": number,
        "text_output_cents_per_mtok": number   // optional — gpt-image-1.5 only
      }
    }
  }
}
```

### Token-priced images

OpenAI stopped publishing a per-image table with GPT Image 2: those models bill purely per token, and the GPT Image 2.5 page states that the GPT Image 2 calculator does not even estimate its token consumption. Any per-image figure for them is therefore an assumption.

`token_pricing` is the exact alternative. When an image entry carries it, the app prices the request from the token counts the provider returned (`usage.output_tokens` plus the `input_tokens_details` text/image split) instead of from the table. Text and image input are separate rates because OpenAI charges $5.00 and $8.00 per MTok respectively, and an edit request is mostly image tokens.

Three rules for maintaining it:

- **It is additive, never a replacement.** Keep the `pricing` table on the same entry. The app falls back to it when a response reports no usable usage, and an older deployment that does not know the field keeps billing the table — which is what lets this file and the app ship in either order.
- **No cached rate.** OpenAI publishes one, but the Images API response has no cached-token breakdown, so it cannot be observed and must not be guessed.
- **Only for models whose response reports token usage.** Every OpenAI image model does, so all of them carry `token_pricing` — including `gpt-image-1`, `-1-mini` and `-1.5`, whose published per-image tables stay as the fallback. Gemini and FLUX report no token usage at all.

`text_output_cents_per_mtok` is optional. Only `gpt-image-1.5` reports text output (hidden reasoning, in `usage.output_tokens_details.text_tokens`), and OpenAI bills it at $10.00/MTok against $32.00/MTok for image output. When the field is absent, every output token bills at `output_cents_per_mtok`.

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

## Model catalog

A row that carries `status` is a **catalog row**: besides its prices it describes everything oneAI needs to offer the model - how the gateway reaches it, what it can do, where it appears in the pickers and which plan rules apply. A row without `status` is **price-only**: it is billed when used (the internal `oneai-*` models, or a model priced ahead of its launch) but never offered.

> **The app does not read these fields yet.** oneAI still takes its model list from its own code. The catalog fields are the target of that migration: they were generated from the app's code on 2026-10-06 and checked field by field against it, and they are kept in step with it until the app switches over. Until then, adding a catalog row here does not make a model appear.

### Fields

```jsonc
"<model-key>": {                  // the billing key, and the model id the app uses today
  "status": "preview" | "active" | "retired",
  "replaced_by": string,          // retired rows only: the active successor
  "aliases": [string],            // optional: older ids the model is still known by
                                  // (stored grants, API clients)
  "route": {
    "backend": "anthropic" | "google" | "grok" | "mistral" | "openai" | "weber",
    "upstream_model": string,     // the model id sent to the provider,
                                  // e.g. "xai/grok-4.3", "claude-haiku-4-5@20251001"
    "region": "eu" | "global"     // see "Route"
  },
  "context_window": number,       // input context in tokens
  "max_output_tokens": number,    // optional: provider-documented maximum output. Absent
                                  // means unknown, and the app then sends no limit at all
  "capabilities": ["advanced" | "stream" | "vision" | "multimodal"],
  "reasoning": false | {
    "efforts": ["low" | "medium" | "high"],  // the efforts the model accepts
    "thinking": "adaptive" | "budget"         // Anthropic only: adaptive thinking or
                                              // the legacy budget_tokens shape
  },
  "description": { "en": string, "de": string },  // de optional
  "purpose": {                    // optional: input for the Auto routing classifier
    "text": string,
    "tier": 1 | 2 | 3,            // fast and cheap | balanced | frontier
    "great_for": ["marketing" | "development" | "research" | "content_creation" | "data_analysis" | "customer_support"]
  },
  "tags": ["recommended" | "quality"],  // optional
  "policy": {                     // optional, active rows only
    "seed_default": true,         // enabled for every newly created organization
    "free_plan": true,            // usable on the Free plan
    "included": true,             // never billed, and the fallback every quota and
                                  // payment gate falls back to
    "uno": "default" | "selectable"  // Uno may run on it; default = Uno's model on paid
                                     // plans when the organization chose none
  },
  "sort": number                  // position in the pickers, ascending
}
```

### Lifecycle

- `preview` - offered only on deployments that opt into the preview channel (hub-dev, staging), so a new model can be verified before production sees it. Promote it by setting `active`.
- `active` - offered everywhere.
- `retired` - never offered. Anything that still points at the model (an organization's default, an agent, Uno) resolves to `replaced_by`. The row keeps its prices: deployments run different app versions, and an older one that still offers the model would bill it at 0 without its price row.

**Rows are never deleted, and aliases are never dropped.** CI checks both against main.

### Route

`route` picks one of the gateway adapters built into the app. It never carries a host, URL or credential, so no change to this file can send traffic or API keys anywhere the app does not already know. `region` is where the request is served:

| `backend` | `eu` | `global` |
|---|---|---|
| `anthropic` | Vertex, `VERTEX_CLAUDE_LOCATION` (default: the `eu` multi-region) | Vertex `global` |
| `google` | Vertex `eu` multi-region | Vertex `global` |
| `grok` | Vertex `eu` multi-region | Vertex `global` |
| `mistral` | Mistral's EU API | not available |
| `weber` | weber.cloud, Germany | not available |
| `openai` | not available | OpenAI |

A model's EU residency claim is derived from `region`, so the claim and the routing cannot disagree. `location` stays a display hint: it may narrow `eu` to Germany, never widen `global`. Adding a backend or a region is an app change by design.

An EU model and its `-global` twin are two catalog rows with the same `upstream_model` and different regions.

### Plan rules

Checked by `_scripts/validate.ts`:

- exactly one `included` row, which is active, routed to `eu` and on the Free plan
- at least one active `seed_default` row, or new organizations start with no models
- exactly one `uno: "default"` row (on the Free plan Uno always runs on the included model)
- `policy` only on active rows, and `replaced_by` always points at an active row
- aliases and `sort` values are unique, and no alias is also a model key

## Validation

Every PR, and every push to main that touches `pricing/`, runs `.github/workflows/validate-pricing.yml`:

1. **Schema** - `schema.json` checks the shape of every row, including the price fields every app version requires. An unknown field fails, which catches typos.
2. **Cross-row rules** - `_scripts/validate.ts` checks the plan rules above and compares with main: no key removed from `models`, `transcription`, `speech` or `images`, no catalog row turned back into a price-only row, no alias dropped.

Run both locally before pushing:

```bash
npx --yes ajv-cli@5.0.0 validate --spec=draft2020 -s pricing/schema.json -d pricing/model_prices.json
git show origin/main:pricing/model_prices.json > /tmp/base.json
node --experimental-strip-types pricing/_scripts/validate.ts --base /tmp/base.json
```

CI checks the shape, not whether a price is right. The review against the provider's pricing page is still what protects billing.

## Benchmarks (cost to capability)

The chat model picker shows a **cost-to-capability** meter next to the price: how a model's capability compares with what it costs, relative to every other row in this file. The `benchmark` block on a model row is the data behind it. It is **display only** - billing never reads it, and the app validates it separately so a malformed block cannot affect prices.

### Source

[Artificial Analysis Intelligence Index](https://artificialanalysis.ai/models) (`benchmark_source` records the version and the retrieval date). It is an independent composite of agentic, coding, knowledge and reasoning evaluations, and it publishes, per model, both the score and what one evaluation task cost.

- `intelligence_index` - the score of the measured variant.
- `tokens_per_task` - the average tokens of one index task. Derived from Artificial Analysis' per-task **cost** breakdown divided by the reference prices it used (`nonCacheInput / input price`, `cacheRead / cache-hit price`, `cacheWrite / cache-write price` - the input price where none is published - and `output / output price`). The derived `output` equals Artificial Analysis' own published output tokens per task for every row, which is the check that the derivation is right.

Token counts rather than a cost are stored because they do not depend on price: the app re-prices them at **this row's own rates**, so the EU uplift, weber.cloud's EUR prices and every future price change flow into the meter without touching the benchmark. A cached rate of `0` means the provider does not cache (Mistral), so those tokens price at the input rate.

### Which variant a row gets

Reasoning models are measured at several efforts, and the score moves a lot with it (Opus 5.5: 42 at low, 58 at max). A row carries the variant matching what oneAI actually sends by default - reasoning effort **medium**, or the non-reasoning variant for a model the app runs without reasoning. Where that exact variant was not measured, the nearest measured one is used and `effort` says so. A row is left **without** a benchmark rather than guessed when no measured variant matches:

| Row | Variant used | Why |
|---|---|---|
| `gemini-3.6-flash`, `gemini-3.7-flash` (+ `-global`) | `high` | medium not measured (3.7 medium is only an estimate) |
| `gemini-3.5-flash-lite` (+ `-global`) | single measured variant (`high`) | only variant published |
| `deepseek-v4-flash-max` | DeepSeek V4 Flash **0731** (Max) | weber.cloud serves the 0731 snapshot |
| `claude-haiku-4-5` | Claude 4.5 Haiku (Reasoning) | runs with thinking enabled |
| `grok-4.3` (+ `-global`) | Non-reasoning | the app runs it without reasoning |
| *none*: `deepseek-v4-flash`, `deepseek-v4-flash-think` | - | only the 0420 snapshot was measured without/with high thinking |
| *none*: `mistral-small-latest` | - | the non-reasoning variant the app uses is only an estimate |
| *none*: `gpt-5.5-pro`, `grok-4.7` (+ `-global`), `mistral-euaiact-finetuned`, `oneai-*` | - | not scored, no medium variant, or not a public model |

### How the app turns it into a tier

1. Cost of one task at this row's rates: `input × input + cache_read × cached + cache_write × cache_write + output × output` (falling back as described above).
2. **Overpay factor**: this row's cost divided by the cost of the **cheapest row that scores at least as high**. `1` means nothing in this file delivers the same capability for less.
3. Tier: up to 1.25× *excellent*, up to 2× *good*, up to 4× *fair*, above *low*.

A plain score-per-cent ratio was rejected because it rewards weak cheap models: a model scoring 9 at 10 cents would rank above one scoring 40 at 25.

### Refreshing

Re-read the variants from Artificial Analysis when a model is added, when its row's default effort changes, or when the index version changes, and update `benchmark_source.retrieved`. Keep the attribution: the scores are Artificial Analysis' work, and any surface showing them must credit it.

## Internal Models

Some platform-internal models (vision OCR, embeddings used for RAG, summarization) were historically not billed to customers — configured in apps via environment variables and treated as zero-cost by the billing layer.

As of the **Gateway plan launch**, oneAI's own models are billed and live in this file under `provider: "oneai"` (`oneai-embed`, `oneai-vision`, `oneai-summarization`). They are flagged `manual_only: true` because there is no public pricing page to scrape — update their prices by editing this file directly. Any remaining internal usage outside the Gateway plan may still be zero-rated by the consuming app's configuration.

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