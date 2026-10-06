// Cross-row checks for model_prices.json.
// Run: node --experimental-strip-types pricing/_scripts/validate.ts [--base <file>]
//
// pricing/schema.json covers the shape of every row. This script covers what
// JSON Schema cannot express, because it spans several rows or two versions of
// the file:
//   - catalog invariants: exactly one included model, a Uno default, no alias
//     collisions, a valid successor for every retired row
//   - with --base (the file as it is on main): no key disappears, a catalog row
//     never falls back to a price-only row, and no alias is dropped
//
// Keys are never removed because deployments run different app versions and
// every one of them reads this file: an older version still offers a model the
// catalog has retired, and without its price row it would bill that model at 0.
// Retire a model with `status: "retired"` instead.
//
// Run it after the schema check; it assumes the shape is already valid.
// Exits 1 and lists every problem if any rule is broken.

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

type Policy = {
  seed_default?: boolean;
  free_plan?: boolean;
  included?: boolean;
  uno?: "default" | "selectable";
};

type ModelRow = {
  status?: "preview" | "active" | "retired";
  replaced_by?: string;
  aliases?: string[];
  route?: { backend: string; upstream_model: string; region: "eu" | "global" };
  policy?: Policy;
  sort?: number;
};

type PricingDocument = {
  models: Record<string, ModelRow>;
  transcription: Record<string, unknown>;
  speech?: Record<string, unknown>;
  images: Record<string, unknown>;
};

const SECTIONS = ["models", "transcription", "speech", "images"] as const;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JSON_PATH = path.resolve(__dirname, "..", "model_prices.json");

function readDocument(file: string): PricingDocument {
  return JSON.parse(readFileSync(file, "utf8")) as PricingDocument;
}

function argValue(flag: string): string | undefined {
  const index = process.argv.indexOf(flag);
  return index === -1 ? undefined : process.argv[index + 1];
}

function catalogRows(doc: PricingDocument): [string, ModelRow][] {
  return Object.entries(doc.models).filter(([, row]) => row.status !== undefined);
}

function checkCatalog(doc: PricingDocument, errors: string[]): void {
  const rows = catalogRows(doc);

  const included = rows.filter(([, row]) => row.policy?.included === true);
  if (included.length !== 1) {
    errors.push(`exactly one model must have policy.included, found ${included.length}: ${included.map(([key]) => key).join(", ") || "none"}`);
  }
  for (const [key, row] of included) {
    if (row.route?.region !== "eu") {
      errors.push(`${key}: the included model is every user's fallback and must stay in the EU (route.region "eu")`);
    }
    if (row.policy?.free_plan !== true) {
      errors.push(`${key}: the included model must also be on the Free plan (policy.free_plan)`);
    }
  }

  if (!rows.some(([, row]) => row.status === "active" && row.policy?.seed_default === true)) {
    errors.push("at least one active model must have policy.seed_default, or new organizations start with no models");
  }

  const unoDefault = rows.filter(([, row]) => row.policy?.uno === "default");
  if (unoDefault.length !== 1) {
    errors.push(`exactly one model must have policy.uno "default", found ${unoDefault.length}: ${unoDefault.map(([key]) => key).join(", ") || "none"}`);
  }

  for (const [key, row] of rows) {
    if (row.policy !== undefined && row.status !== "active") {
      errors.push(`${key}: policy is only allowed on active models, this one is ${row.status}`);
    }
    if (row.replaced_by !== undefined) {
      const successor = doc.models[row.replaced_by];
      if (row.replaced_by === key) {
        errors.push(`${key}: replaced_by points at itself`);
      } else if (successor === undefined) {
        errors.push(`${key}: replaced_by "${row.replaced_by}" is not a model in this file`);
      } else if (successor.status !== "active") {
        errors.push(`${key}: replaced_by "${row.replaced_by}" must be an active model, it is ${successor.status ?? "price-only"}`);
      }
    }
  }

  const aliasOwner = new Map<string, string>();
  for (const [key, row] of rows) {
    for (const alias of row.aliases ?? []) {
      if (alias in doc.models) {
        errors.push(`${key}: alias "${alias}" is also a model key`);
      }
      const owner = aliasOwner.get(alias);
      if (owner !== undefined) {
        errors.push(`${key}: alias "${alias}" is already an alias of ${owner}`);
      }
      aliasOwner.set(alias, key);
    }
  }

  const sortOwner = new Map<number, string>();
  for (const [key, row] of rows) {
    if (row.sort === undefined) {
      continue;
    }
    const owner = sortOwner.get(row.sort);
    if (owner !== undefined) {
      errors.push(`${key}: sort ${row.sort} is already used by ${owner}`);
    }
    sortOwner.set(row.sort, key);
  }
}

function checkAgainstBase(doc: PricingDocument, base: PricingDocument, errors: string[]): void {
  for (const section of SECTIONS) {
    for (const key of Object.keys(base[section] ?? {})) {
      if (!(key in (doc[section] ?? {}))) {
        errors.push(`${section}.${key}: removed, but rows are never deleted - older app versions still bill it from this file (retire a model with status "retired")`);
      }
    }
  }

  for (const [key, baseRow] of catalogRows(base)) {
    const row = doc.models[key];
    if (row === undefined) {
      continue;
    }
    if (row.status === undefined) {
      errors.push(`${key}: lost its catalog fields - retire it with status "retired" instead`);
      continue;
    }
    for (const alias of baseRow.aliases ?? []) {
      if (!(row.aliases ?? []).includes(alias)) {
        errors.push(`${key}: alias "${alias}" was dropped, but stored references and API clients may still use it`);
      }
    }
  }
}

const basePath = argValue("--base");
const doc = readDocument(JSON_PATH);
const errors: string[] = [];

checkCatalog(doc, errors);
if (basePath !== undefined) {
  checkAgainstBase(doc, readDocument(basePath), errors);
}

if (errors.length > 0) {
  console.error(`model_prices.json: ${errors.length} problem(s)`);
  for (const error of errors) {
    console.error(`  - ${error}`);
  }
  process.exit(1);
}

const catalogCount = catalogRows(doc).length;
console.log(`model_prices.json: ok (${Object.keys(doc.models).length} models, ${catalogCount} in the catalog${basePath === undefined ? "" : `, compared with ${basePath}`})`);
