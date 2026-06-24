# OneAI v1.1.1 — Voice Mode, Presentations, and Smarter Automation

**Release Date:** 2026-06-24

## Highlights

OneAI v1.1.1 is one of our biggest releases yet. The focus is on new ways of working in **AI Chat**, stronger **artifacts**, and a major step forward in **automation with control**.

- **Voice Mode in AI Chat**: You can now talk to OneAI instead of typing. Thanks to Justus, the first rollout already feels reliable, with improved streaming stability and clearer in-product guidance.
- **Better artifact sharing**: Artifacts now support images and can be shared with **private, project-wide, or public links**. Public and private sharing flows now feel much cleaner for recipients.

## Improvements

- **Fewer clicks for tool actions**: With the new **trust window** logic, OneAI can now learn when trusted actions may run automatically or be approved more seamlessly — for example with Outlook, n8n, MCP tools, or approved APIs. This makes automation feel much smoother without compromising governance. Much of this foundation was built by Mirko.
- **Better visibility in Knowledge Spaces**: You can now see document indexing progress directly in the activity bar and on space cards.
- **Connector-specific views**: Content from connectors is now displayed in more suitable formats, including a dedicated Outlook message view.
- **Smarter chat suggestions**: AI Chat now suggests more relevant follow-up questions.
- **More capable Python in chat**: Python outputs can now include images, and files from Knowledge Spaces can be passed directly into Python.
- **Expanded integrations and model support**: This includes Vertex AI, Grok 4.3 via Vertex, MCP server management, and new integration and portal building blocks.
- **Feedback on AI answers**: Users can now rate AI responses, and admins can review aggregated feedback in a dashboard.

## Bug Fixes

This release also includes many targeted day-to-day reliability improvements:

- **More reliable document processing**: Documents are now processed more robustly, even when requests are interrupted or temporary errors occur. Thanks to Pascal, this should mean much less manual cleanup in larger Knowledge Spaces.
- **More stable sync and connectors**: OneDrive sync is now more reliable, especially for large files. Google Drive and Google SSO have also been cleanly reintroduced behind feature controls.
- **Fewer chat interruptions**: Tool confirmations no longer get stuck during parallel calls, resolved confirmations are no longer replayed after reconnects, and overly long prompts fail far less often.
- **Better artifact experience**: Artifacts now render correctly on first open, references to the active artifact are resolved more reliably, and PDF exports wait properly for diagrams and syntax highlighting.
- **Clearer error handling**: Model provider and Microsoft authentication errors are now easier to understand, making issues faster to diagnose.
- **Admin and project polish**: Admins can now remove members even when historical billing or persona data exists. We also added bulk delete for project chat lists and cleaned up several smaller UI issues.

## Security

- **All known dependency vulnerabilities resolved**: pnpm audit findings were reduced from **54 to 0**.
- **Safer tool execution controls**: The new trust window mechanism closes gaps around silent execution and makes automatic tool decisions more transparent and secure.
- **More robust authentication behavior**: Permanent Microsoft AAD failures are now handled cleanly instead of repeatedly retrying with invalid credentials.

## Under the Hood

Beyond the visible features, we migrated more connectors onto a unified platform, expanded the tool infrastructure, improved session diagnostics, and laid the groundwork for future integrations and automation.

Thanks to **Pascal, Mirko, Justus, Oliver, Obaid, and Santi** for shipping such a substantial release.

*111 commits · 108 PRs · 690 files changed*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
