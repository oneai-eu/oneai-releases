# OneAI v1.0.4 — More resilient chat, clearer sources, and better pricing transparency

**Release Date:** 2026-05-15

With **OneAI v1.0.4**, AI Chat becomes noticeably more dependable in day-to-day use — especially for long answers, complex tool flows, and document-based work. At the same time, we’re improving transparency in subscriptions and strengthening privacy for web-based sources.

## Highlights

- **Long answers no longer disappear after brief connection drops.** If a stream is interrupted during a response, OneAI now automatically restores it and keeps the text that was already generated. Instead of losing both the question and the answer, users can continue seamlessly. Thanks to **Pascal**, AI Chat is now much more resilient under unstable network conditions.
- **New tool-call bar and a unified sources panel.** Reasoning steps and tool activity now appear where they actually happen in the response. Web sources and file sources are also combined into a single **“All Sources”** view, making complex answers much easier to follow. Thanks to **Oliver** and **Pascal** for this major redesign.
- **Artifacts are now always within reach.** Created and referenced artifacts are collected in a sticky tray directly above the chat input. That makes them easy to revisit, even in long conversations. Inline references now open artifacts directly in the side panel instead of pulling users away from the chat.
- **Live model pricing in the Subscription area.** Available model prices are no longer hardcoded. They are now updated dynamically and shown in a new pricing dialog, giving admins a clearer and more current view of model costs. Thanks to **Obaid** for shipping this.

## Improvements

- **Faster document processing.** Summaries and embeddings now run in parallel, so documents are processed noticeably faster.
- **Lower memory usage for search infrastructure.** Document search now uses significantly less RAM while maintaining the same search quality. Thanks to **Justus**, OneAI scales more efficiently for larger Knowledge Spaces.
- **No more duplicate PDF content.** We fixed an issue that could cause PDF content to be indexed twice in some cases.
- **Better audit experience for compliance teams.** Long blocked messages are now readable in the audit dialog, detected content is shown more precisely, and IBAN detection produces fewer false positives.
- **Cleaner Subscription layout.** Overview, billing, usage, team quota, and add-on tabs now behave more consistently across screen sizes.

## Bug Fixes

- **Blocked compliance prompts are preserved for review.** When a message is blocked by a compliance rule, the original prompt and its attachments now remain available for admin review and can be restored cleanly after approval.
- **Source snippets no longer break the layout.** The sources view stays compact and readable even with tricky snippets.
- **Automatic chat titles now stay within our EU infrastructure.** This improves privacy and avoids consuming your organization’s user-facing token budget for a small background task.

## Security

- **Privacy-friendly favicons for web citations.** Favicons are now loaded through a secure OneAI proxy instead of directly through external services. This means user IP addresses and browsing behavior are no longer exposed to third-party favicon providers such as Google’s CDN.
- We also added groundwork for additional supply-chain security scanning behind the scenes.

## Under the Hood

- Additional performance optimizations across search, storage, and document processing
- Technical cleanup in the chat and release stack
- Smaller improvements to billing and platform processes

Thanks to **Pascal**, **Oliver**, **Obaid**, and **Justus** for this release. A special thanks to Pascal for driving much of the chat reliability and UX work in this version.

*71 files changed · 20 commits · 4 contributors*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
