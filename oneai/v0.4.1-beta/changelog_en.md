# OneAI v0.4.1-beta — New Integrations, AI Image Generation & a Smarter Chat Experience

**Release Date:** 2026-04-16

Version v0.4.1-beta brings meaningful improvements across the platform: a deeply integrated ClickUp connector, AI image generation directly inside AI Chat, significantly better answer quality for weclapp data, and a noticeably smoother chat experience.

## Highlights

### New ClickUp Connector with Full Synchronization
You can now connect ClickUp Spaces and Lists directly to OneAI.

- Sync of tasks, descriptions, comments, and checklists
- Automatic processing for AI-powered search in Knowledge Spaces
- List-level summaries for better context
- Near real-time updates via webhooks

ClickUp becomes a fully searchable knowledge source for AI Chat — no manual exports required.

Excellent work by **Mirko**, who built the connector end to end.

### AI Image Generation with Model Selection and Admin Controls
You can now generate images directly in AI Chat, with full control over:

- Model (e.g., OpenAI or Google Imagen)
- Quality settings
- Image size and aspect ratio (1:1, 16:9, 9:16, and more)

Admins can centrally define which image models are available across the organization, ensuring usage aligns with internal policies and compliance requirements.

A powerful addition for marketing, product, HR, and any team creating visual assets — implemented by **Mirko**.

### Smoother Chat with Live Tool Preview
AI Chat now feels significantly more responsive and transparent.

- Live preview of tool calls, including streamed arguments
- Reasoning steps automatically expand during processing and collapse afterward
- Model-aware status indicators (“Thinking” vs. “Processing”)
- No more silent infinite loading states when APIs return errors

The result: greater clarity, fewer surprises, and a more professional overall experience. Thanks to **Pascal** for the streaming overhaul — and to **Oliver** for fixing a rare but critical OpenAI error handling issue.

### weclapp Integration: Significantly More Reliable Answers
For many customers, weclapp is a business-critical system. We have completely reworked the underlying RAG logic:

- New entity types (e.g., open sales items, incoming goods)
- Structured field rendering instead of generic text blocks
- Improved summaries
- Concrete anti-hallucination safeguards

The outcome: noticeably more accurate and trustworthy answers about documents, open items, and transactions.

Strong work by **Mirko** on this quality upgrade.

### Redesigned Dashboard with Modern Charts
The dashboard has been modernized both visually and technically:

- New chart types (including a model distribution donut chart)
- Improved filtering options
- Clearer KPI presentation
- Better model grouping (including an “Others” bucket)

Admins now get a clearer view of usage, model distribution, and organizational activity.

Designed and implemented by **Pascal**.

### References Dialog as a Two-Panel Explorer
The project references dialog has been completely redesigned — similar to a file manager:

- Folder navigation on the left
- File details on the right
- Visibility into embedding status and file counts

This makes navigating large Knowledge Spaces much more intuitive.

## Improvements

- **Faster document processing**: Single-chunk documents skip an unnecessary LLM step, improving efficiency.
- **Passkeys are now optional**: New users can sign up without immediately setting up a passkey and are prompted after login instead. Thanks to **Justus**.
- **Refined Activity Hub**: Fewer unnecessary background requests and clearer task visibility.
- **Stricter tool validation**: More reliable image generation and transcription with restored strict schema validation.
- **Improved Gemini compatibility**: Reasoning steps are now preserved correctly across messages.

## Bug Fixes

- Fixed an issue where OpenAI errors could result in endless loading states in AI Chat.
- Stabilized LLM gateway logic and HTTP communication after dependency upgrades.

## Under the Hood

- Vision models are now fully routed through our central LLM router (OneGateway) for accurate usage tracking.
- Comprehensive dependency updates (including postgres 3.4.9) for improved stability and security.
- Internal refactoring and type safety improvements.

---

A big thank you to **Pascal, Mirko, Justus, and Oliver** for 18 PRs across 124 changed files.

_18 commits · 18 PRs · 124 files changed · +9,242 / −4,347 lines_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
