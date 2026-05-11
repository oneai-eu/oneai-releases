# OneAI v1.0.3 — Reliable Document Processing, Even at Full Quota

**Release Date:** 2026-05-11

With v1.0.3, we’ve made document processing in Spaces more resilient under heavy usage. Even if your organization reaches its LLM quota, document processing now continues reliably in the background.

## Highlights

### Document processing continues even when quota is reached
In rare cases, automatic chunk summaries for search previews could stall when an organization had fully consumed its LLM quota.

We’ve fundamentally improved this behavior:

- **Documents continue to be fully processed**, even when the regular LLM quota has been reached.
- **Search previews in Spaces remain complete and consistent.**
- Usage is still tracked transparently for reporting and billing visibility.

For you, this means no unexpected gaps in search results and no partially processed documents — even during peak usage.

Thanks to Justus, who refactored this part of the embedding pipeline to make it more robust and clearly separated from user-facing quota logic.

## Improvements

### Enhanced observability for document processing
We significantly expanded internal monitoring of the embedding pipeline:

- Every processing job is now categorized by outcome (e.g., success, rate limit, retry, error).
- New dashboards provide real-time visibility into queue length and throughput.

While not directly visible to end users, these improvements ensure **more stable and predictable performance**, especially in enterprise environments with high document volumes.

## Under the Hood

- Clearer separation between user-facing LLM usage and system-internal processing.
- Additional metrics and dashboard updates to support operational excellence.

---

Thank you to Justus for strengthening the reliability and transparency of a core component of OneAI.

_2 commits · 2 PRs · 3 files changed_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
