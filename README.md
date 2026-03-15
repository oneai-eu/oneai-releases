# OneAI Releases

Universal changelog distribution for the **OneAI product family**.

Every OneAI deployment — SaaS, Private Cloud, and On-Prem — fetches changelogs from this repository via `raw.githubusercontent.com`. This approach provides a universally accessible, CDN-backed changelog source that works regardless of deployment type, replacing the need for a database-backed changelog system.

## Quick Start

### Base URL

```
https://raw.githubusercontent.com/oneai-eu/oneai-releases/main
```

### Common Operations

| Operation | URL Pattern |
|-----------|-------------|
| Check latest version | `{base}/{product}/latest.json` |
| Get changelog (EN) | `{base}/{product}/v{version}/changelog_en.md` |
| Get changelog (DE) | `{base}/{product}/v{version}/changelog_de.md` |
| Developer changelog | `{base}/{product}/v{version}/developer.md` |
| Release metadata | `{base}/{product}/v{version}/metadata.json` |
| One-line summary | `{base}/{product}/v{version}/summary.md` |
| Full manifest | `{base}/releases.json` |

### Example: Check for OneAI Updates

```
GET https://raw.githubusercontent.com/oneai-eu/oneai-releases/main/oneai/latest.json
```

### Example: Fetch a Specific Changelog

```
GET https://raw.githubusercontent.com/oneai-eu/oneai-releases/main/oneai/v1.2.0/changelog_en.md
```

## Integration Example

TypeScript/JavaScript snippet for checking updates and fetching changelogs:

```typescript
const BASE_URL = "https://raw.githubusercontent.com/oneai-eu/oneai-releases/main";

interface LatestRelease {
  product: string;
  version: string | null;
  date: string | null;
  breaking: boolean;
  languages: string[];
  files: Record<string, string>;
  message?: string;
}

async function checkForUpdates(product: string): Promise<LatestRelease> {
  const res = await fetch(`${BASE_URL}/${product}/latest.json`);
  if (!res.ok) throw new Error(`Failed to fetch latest info for ${product}`);
  return res.json();
}

async function getChangelog(
  product: string,
  version: string,
  lang: "en" | "de" = "en",
): Promise<string> {
  const res = await fetch(`${BASE_URL}/${product}/v${version}/changelog_${lang}.md`);
  if (!res.ok && lang !== "en") {
    // Fallback to English
    const fallback = await fetch(`${BASE_URL}/${product}/v${version}/changelog_en.md`);
    if (!fallback.ok) throw new Error(`Changelog not found for ${product} v${version}`);
    return fallback.text();
  }
  if (!res.ok) throw new Error(`Changelog not found for ${product} v${version}`);
  return res.text();
}

// Usage
const latest = await checkForUpdates("oneai");
if (latest.version && latest.version !== currentVersion) {
  const changelog = await getChangelog("oneai", latest.version, userLanguage);
  showUpdateNotification(latest, changelog);
}
```

## Repository Structure

```
oneai-releases/
├── README.md                          # This file
├── LICENSE                            # MIT License
├── .gitignore
├── releases.json                      # Root manifest — all products and versions
│
├── oneai/                             # OneAI changelogs
│   ├── README.md
│   ├── latest.json                    # Pointer to latest release
│   └── v{version}/                    # One directory per release
│       ├── metadata.json
│       ├── changelog_en.md
│       ├── changelog_de.md
│       ├── developer.md
│       └── summary.md
│
├── onestack/                          # OneStack changelogs
│   ├── ...
│
├── onedeploy/                         # OneDeploy changelogs
│   ├── ...
│
├── n8n-nodes-oneai/                   # n8n Nodes changelogs
│   ├── ...
│
├── oneai-teams/                       # OneAI Teams changelogs
│   ├── ...
│
├── docker/                            # Custom Docker images
│   └── vllm/
│       └── Dockerfile                 # vLLM + orjson
│
├── .github/workflows/
│   └── build-vllm.yml                 # vLLM image build workflow
│
├── _templates/                        # Reference templates (not consumed by apps)
│   ├── changelog_en.md.template
│   ├── changelog_de.md.template
│   ├── developer.md.template
│   ├── summary.md.template
│   └── metadata.json.template
│
└── _scripts/
    └── validate.sh                    # Structure validation script
```

## File Formats

### releases.json — Root Manifest

Contains all products and their release history. Updated automatically on each release.

```json
{
  "schema_version": "1.0",
  "last_updated": "2026-02-23T00:00:00Z",
  "repository": "https://github.com/oneai-eu/oneai-releases",
  "base_url": "https://raw.githubusercontent.com/oneai-eu/oneai-releases/main",
  "products": {
    "<product_key>": {
      "name": "Product Name",
      "description": "Short description",
      "source_repo": "https://github.com/org/repo",
      "latest": "1.2.0",
      "releases": ["1.2.0", "1.1.0", "1.0.0"]
    }
  }
}
```

### latest.json — Latest Version Pointer

One per product. Points to the most recent release.

```json
{
  "product": "oneai",
  "version": "1.2.0",
  "date": "2026-02-23",
  "breaking": false,
  "languages": ["en", "de"],
  "files": {
    "changelog_en": "v1.2.0/changelog_en.md",
    "changelog_de": "v1.2.0/changelog_de.md",
    "developer": "v1.2.0/developer.md",
    "summary": "v1.2.0/summary.md",
    "metadata": "v1.2.0/metadata.json"
  }
}
```

### metadata.json — Release Metadata

One per release version. Structured release data for programmatic consumption.

```json
{
  "product": "oneai",
  "version": "1.2.0",
  "date": "2026-02-23",
  "github_release_url": "https://github.com/0codekit/oneai/releases/tag/v1.2.0",
  "breaking": false,
  "highlights": ["Highlight 1", "Highlight 2"],
  "categories": {
    "features": 3,
    "improvements": 5,
    "fixes": 2,
    "security": 0
  },
  "languages": ["en", "de"],
  "files": {
    "changelog_en": "changelog_en.md",
    "changelog_de": "changelog_de.md",
    "developer": "developer.md",
    "summary": "summary.md"
  }
}
```

## Products

| Product | Key | Source | Description |
|---------|-----|--------|-------------|
| **OneAI** | `oneai` | [0codekit/oneai](https://github.com/0codekit/oneai) | Enterprise AI Governance Platform |
| **OneStack** | `onestack` | [oneai-eu/onestack](https://github.com/oneai-eu/onestack) | AI Infrastructure Management Platform |
| **OneDeploy** | `onedeploy` | [0codekit/onedeploy](https://github.com/0codekit/onedeploy) | Infrastructure-as-Code for OneAI Services |
| **n8n Nodes for OneAI** | `n8n-nodes-oneai` | [oneai-eu/n8n-nodes-oneai](https://github.com/oneai-eu/n8n-nodes-oneai) | Custom n8n Workflow Nodes |
| **OneAI Teams** | `oneai-teams` | [oneai-eu/oneai-teams](https://github.com/oneai-eu/oneai-teams) | Microsoft Teams Integration |

## Docker Images

This repository also hosts CI/CD workflows for building custom Docker images
used by the OneStack GPU orchestration platform.

### OneStack vLLM

Custom vLLM image with [orjson](https://github.com/ijl/orjson) for optimized
JSON serialization (~6x faster for embedding responses).

**Pull (no authentication required):**

```bash
docker pull ghcr.io/oneai-eu/onestack-vllm:v0.17.1
```

| Image | Base | Addition | Use Case |
|-------|------|----------|----------|
| `ghcr.io/oneai-eu/onestack-vllm` | `vllm/vllm-openai` | orjson | vLLM + vLLM Embed engines |

**Available Tags:**

| Tag | vLLM Version | Notes |
|-----|-------------|-------|
| `v0.17.1` | v0.17.1 | Current stable |
| `latest` | Latest built | Always matches most recent version tag |

**Building a new version:**

1. Go to [Actions → Build OneStack vLLM Image](../../actions/workflows/build-vllm.yml)
2. Click "Run workflow"
3. Enter the vLLM version tag (e.g., `v0.18.0`)
4. Set push to `true`
5. Wait ~10 minutes for build + push

## For Contributors

### How Changelogs Are Generated

Changelogs in this repository are **generated automatically** — they are not manually written. The pipeline works as follows:

1. A new release is created in a product's source repository
2. An **n8n workflow** detects the release event via webhook
3. The workflow analyzes the commits and pull requests included in the release
4. An **AI agent** generates structured changelogs (EN + DE), a developer changelog, and a summary
5. The generated files are committed to this repository in the correct directory structure
6. `latest.json` and `releases.json` are updated automatically

**Do not manually edit changelog files.** If a correction is needed, update the source release and re-trigger the pipeline.

### Validation

Run the validation script to check repository integrity:

```bash
./_scripts/validate.sh
```

## License

[MIT](LICENSE)
