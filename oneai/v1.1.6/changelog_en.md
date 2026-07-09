# OneAI v1.1.6 — Brand-ready presentations and much more resilient chats

**Release Date:** 2026-07-08

## Highlights

**Presentations now look much more like your brand out of the box.** Generated decks can automatically adopt your brand colors, using your primary CI color plus a secondary accent extracted from your logo. This makes AI-generated presentations feel far more ready for internal and customer-facing use. Thanks to Pascal, presentations in OneAI now feel significantly more polished.

**You can now edit slides directly in the deck viewer.** Reorder, duplicate, or delete slides with drag and drop — without regenerating the deck or prompting the AI again. This turns generated presentations into something teams can refine much faster.

**Designs can now be switched after generation.** You can move between Light, Dark, Corporate, Editorial, and Slate at any time without recreating the presentation.

**Python outputs in AI Chat now support full file downloads.** In addition to images, OneAI now delivers Excel files, PDFs, Word documents, CSVs, and other generated files directly in chat with their original filenames. Thanks to Mirko, analysis outputs and reports are now much easier to use in real workflows.

**Long conversations are now far more reliable.** When chats or pasted content get very large, OneAI now trims older context automatically instead of failing with a “conversation too large” error. Newly created summaries are also correctly carried forward into the next model call. Thanks to Pascal, long-running work sessions in AI Chat are now much more dependable.

## Improvements

- **Older messages in long chats now load correctly again** when scrolling upward. Thanks to Oliver.
- **GPT-based chats no longer fail mid-turn** when a model writes text before calling a tool. Thanks to Santi.
- **PDF exports are more complete**, including rendered Mermaid diagrams and syntax-highlighted code.
- **HubSpot can now be connected reliably from the Space wizard**, without getting stuck on a blank page.
- **Knowledge Space sync is more resilient**, even when the storage backend has short-lived connectivity issues.
- **Outlook sync now handles unusual Microsoft payloads more gracefully**, avoiding error loops.
- **GitHub connector processing is more efficient**, helping large repositories stay within API limits while processing more reliably.
- **PDFs are now consistently processed with vision**, improving results for complex layouts, graphics, and mixed-content documents. Thanks to Justus.
- **Image and diagram descriptions in processed documents are more useful**, improving the quality of results in Knowledge Spaces. Thanks to Justus.
- **Incident information now appears directly in the product**, making it easier to understand known platform issues at a glance.
- **Better cost transparency for very large model contexts:** pricing behavior for especially long chats with large models is now more clearly reflected. Thanks to Obaid.

## Bug Fixes

- **Clearer error messages when AI providers are overloaded or rate limited**, instead of generic chat failures. Thanks to Oliver.
- **Anthropic-powered Python and SQL tools now work reliably again**, even when no input files are required.
- **Claude Opus 4.6 and Sonnet 4.6 are now aligned with the current adaptive thinking setup**, improving model reliability going forward.

## Security

- **Safer file downloads in AI Chat:** non-image Python outputs are now consistently served as downloads, closing a potential inline rendering attack path for HTML and SVG files.
- **Stricter permission checks for structured data in Knowledge Spaces:** write access to a Space data store is now correctly enforced based on Space write permissions.

## Under the Hood

- Document processing has been significantly accelerated and hardened in several steps, including a faster pipeline, better failover behavior, and improved database performance. Thanks to Justus.
- We also expanded internal observability across embedding and PDF processing to detect bottlenecks faster and keep performance stable.

Thanks to Pascal, Justus, Mirko, Oliver, Santi, and Obaid for this release.

*34 commits, 109 files changed*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
