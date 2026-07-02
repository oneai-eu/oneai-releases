# OneGlue Releases

Customer-facing changelogs for **OneGlue** — oneAI GmbH's internal IT
documentation & secret-management platform.

Each `vX.Y.Z/` directory contains:

- `changelog_{de,en,es,fr}.md` — the full customer-language changelog per locale
  (EN is the source of truth; de/es/fr are translations).
- `summary.md` — a short highlights summary.
- `metadata.json` — version/date/breaking + the file manifest.

`latest.json` mirrors the current latest release; the root `releases.json`
`products.oneglue` entry lists the full release history.

These files are served (raw) to the OneGlue app via a server-side proxy
(`GET /api/v1/releases/*`) — the browser never fetches GitHub directly (CSP
`connect-src 'self'`). The prose is authored per release with human approval; it
contains **no** internal commit noise, `Co-Authored-By:` trailers, or
`🤖 Generated with Claude Code` lines.
