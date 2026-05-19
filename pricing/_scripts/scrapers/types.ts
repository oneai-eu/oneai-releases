// Shared types for per-provider pricing scrapers.
//
// Each scraper module exports an async function returning a ScraperResult.
// The sync.ts orchestrator merges all results, then diffs against
// pricing/model_prices.json.

export type TokenPrice = {
  kind: "token";
  // Null means "the provider page doesn't expose this field" (e.g. Mistral
  // has no cached price, embeddings have no cached/output). The orchestrator
  // skips null fields when diffing — the JSON's existing value is preserved.
  input_cents_per_mtok: number | null;
  cached_cents_per_mtok: number | null;
  output_cents_per_mtok: number | null;
};

export type TokenPriceTiered = {
  kind: "token_tiered";
  // For Gemini Pro models that price prompts <=200k tokens differently from
  // prompts >200k. Tier keys are stable: "at_or_under_200k", "above_200k".
  // The orchestrator picks one using the JSON's gemini_tier_preference.
  tiers: Record<string, TokenPrice>;
};

export type ImageQualitySizePrice = {
  kind: "image_quality_size";
  // quality (e.g. "low" / "medium" / "high") → size (e.g. "1024x1024") →
  // cents per image. Keys are written in the form model_prices.json uses.
  pricing: Record<string, Record<string, number>>;
};

export type ImageFlatPrice = {
  kind: "image_flat";
  // Flat per-image price (e.g. Imagen 4). Matches the JSON's
  // images[<id>].cents_per_image field for entries with type: "flat".
  cents_per_image: number;
};

export type ScrapedPrice =
  | TokenPrice
  | TokenPriceTiered
  | ImageQualitySizePrice
  | ImageFlatPrice;

export type ScraperResult = {
  provider: string;
  models: Record<string, ScrapedPrice>;
  // Populated when an expected model is missing, parsing fails, or the
  // network call fails. Any non-empty errors[] across all scrapers causes
  // the orchestrator to abort the run with exit code 1 — no PR opened.
  errors: string[];
};
