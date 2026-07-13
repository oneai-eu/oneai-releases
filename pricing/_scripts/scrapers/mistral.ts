// Mistral pricing scraper.
//
// Mistral's API pricing moved to https://mistral.ai/pricing/api and the site
// migrated off Next.js (no more `self.__next_f.push([...])` RSC payloads) to
// Astro. Prices are now server-rendered into custom elements:
//
//   <p ...>Input (/M tokens)</p>
//   <mistral-atom-text-price data-prices="{&#34;priceUsd&#34;:0.15,...}"> ...
//   <p ...>Output (/M tokens)</p>
//   <mistral-atom-text-price data-prices="{&#34;priceUsd&#34;:0.6,...}"> ...
//   ... <... data-text="mistral-small-latest"> ...   (copy-to-clipboard button)
//
// Within each model card the order is fixed: the Input label + price and the
// Output label + price both appear *before* the `data-text="<model-id>"` that
// closes the card. So we scan the document in order, remember the price that
// follows each Input/Output label, and flush them when we reach a model id we
// care about. Any `data-text` (including non-model cards like "Classifier API
// model 3B") acts as a card boundary and resets the running state, so prices
// never bleed across cards. Prices without a preceding Input/Output label
// (per-page OCR, embeddings, batch rates) are ignored.
//
// Mistral doesn't publish a cached price — we emit 0 for that field, which
// matches what the JSON already records for every Mistral model.

import type { ScraperResult, TokenPrice } from "./types.ts";

const PRICING_URL = "https://mistral.ai/pricing/api";

const MODELS_OF_INTEREST = [
  "mistral-small-latest",
  "mistral-medium-latest",
  "mistral-large-latest",
  "magistral-small-latest",
  "magistral-medium-latest",
];

function dollarsToCents(dollars: number): number {
  return Math.round(dollars * 100 * 100) / 100;
}

// Pull priceUsd out of a `data-prices` attribute. The value is HTML-entity
// encoded (`&#34;` for the JSON quotes), so match either form defensively.
function extractPriceUsd(dataPrices: string): number | null {
  const m = dataPrices.match(/priceUsd(?:&#34;|"|&quot;)\s*:\s*([\d.]+)/);
  if (!m) return null;
  const n = parseFloat(m[1]);
  return isNaN(n) ? null : n;
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

  const wanted = new Set(MODELS_OF_INTEREST);

  // One alternation over the three token types, walked in document order:
  //   [1] an Input/Output "(/M tokens)" label
  //   [2] a data-prices attribute (the price atom following a label)
  //   [3] a data-text attribute (the model-id button closing a card)
  const re =
    /(Input|Output) \(\/M tokens\)|data-prices="([^"]*)"|data-text="([^"]*)"/g;

  let pendingKind: "input" | "output" | null = null;
  let inputUsd: number | null = null;
  let outputUsd: number | null = null;

  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    if (m[1]) {
      pendingKind = m[1] === "Input" ? "input" : "output";
    } else if (m[2] !== undefined) {
      if (pendingKind) {
        const usd = extractPriceUsd(m[2]);
        if (usd !== null) {
          if (pendingKind === "input" && inputUsd === null) inputUsd = usd;
          else if (pendingKind === "output" && outputUsd === null) outputUsd = usd;
        }
        pendingKind = null;
      }
    } else if (m[3] !== undefined) {
      const id = m[3];
      if (wanted.has(id) && !(id in models) && inputUsd !== null && outputUsd !== null) {
        models[id] = {
          kind: "token",
          input_cents_per_mtok:  dollarsToCents(inputUsd),
          cached_cents_per_mtok: 0,
          output_cents_per_mtok: dollarsToCents(outputUsd),
        };
      }
      // Every data-text closes a card — reset so prices never cross cards.
      pendingKind = null;
      inputUsd = null;
      outputUsd = null;
    }
  }

  for (const id of MODELS_OF_INTEREST) {
    if (!(id in models)) {
      errors.push(`model not found in page (or missing input/output price): ${id}`);
    }
  }

  return { provider: "mistral", models, errors };
}
