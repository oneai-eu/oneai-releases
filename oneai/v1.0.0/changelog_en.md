# OneAI 1.0 — Production-Ready with Credit Pool, Partner Program & 80+ Improvements

**Release Date:** 2026-05-06

With OneAI 1.0, we officially leave beta behind.

This release makes OneAI ready for enterprise production use: centralized AI budget control, a new partner program for managed organizations, app-based two-factor authentication, and a fundamentally upgraded document processing pipeline.

## Highlights

### Credit Pool for Centralized Cost Control
Team organizations now receive a **central AI budget**.

- Admins can assign **individual user budgets**
- Control overages proactively
- Automatic **threshold alert emails**
- Dashboard reflects true total cost, including cached requests

AI usage becomes predictable, transparent, and controllable — ideal for compliance and finance teams.

Huge thanks to **orehman3035** for building the new credit and subscription system end to end.

### Partner Program for Managed Organizations
With the new **Partner Program**, organizations can now operate without their own Stripe subscription.

- Partners manage billing centrally
- Dedicated billing event log for transparency
- New partner details page in settings

Perfect for consultancies, IT providers, and enterprise resellers.

### Two-Factor Authentication (TOTP)
Enterprise-grade security: users can now enable an **Authenticator app (e.g., Google Authenticator, 1Password)** as a second factor.

- TOTP codes as an alternative to email tokens
- Seamlessly integrated into login
- Reliable and stable setup flow

Thanks to **Justus Zorn** for the implementation.

### AI Can Create Projects & Generate Mermaid Diagrams
The AI can now:

- **Create new projects automatically** on request
- Generate **valid Mermaid diagrams** using a built-in syntax reference

This reduces manual setup and makes visual documentation significantly easier.

Thanks to **Mirko Tochtermann** and **Pascal Schüler**.

### Traffic-Light Audit Logs
Compliance becomes more transparent:

- Audit log entries now show a **color-coded risk level**
- New filter by risk level
- Provider audit logs with anonymized tenant data

Ideal for internal reviews and EU AI Act documentation. Thanks to **Oliver Rasch**.

---

## Performance & Scalability

### Fair Embedding Queue
We fundamentally redesigned document processing.

- Resources are distributed fairly across organizations and Spaces
- Large uploads no longer block other teams
- Predictable maximum waiting times

Additionally:

- Lower cost and latency through simplified retrieval
- More stable processing of large PDFs and images
- Batched vector database writes for reliability
- Automatic handling of GitHub rate limits

Outstanding work by **Pascal Schüler**, who made the embedding pipeline production-ready.

### A Noticeably Faster App
- Asset caching enabled
- Lazy loading for dashboard and project list
- Optimized bundle (no duplicate libraries)
- Chunk load errors under high load resolved

OneAI now feels significantly faster and more stable.

---

## Everyday Improvements

- Drag-and-drop file upload directly on the chat start page
- Fully usable artifact panel on mobile
- Clickable source references in chat
- AI automatically responds in the user’s language
- Personal Space auto-linked to personal project
- New “Conflicts” tab in project settings
- German umlauts allowed in project and team names

Many small improvements — meaningful impact in daily work.

---

## Security

We implemented several security enhancements:

- React Query cache is wiped on login (prevents cross-account data visibility in shared browsers)
- Memory safeguards for image and PDF processing
- Content caps in the ClickUp connector to prevent heap exhaustion

Additionally, chat summarization now runs on our **own EU infrastructure** — chat history no longer leaves the EU.

---

## Breaking Changes

### Beta Code Gate Removed
Signup is now public — invitation codes are no longer required.

No action needed.

### Google Sign-In & Google Drive Temporarily Hidden
Google SSO and the Google Drive connector are temporarily disabled.

Please use:
- OneDrive
- SharePoint
- GitHub

Re-enablement will follow in a future release.

### Contextual Retrieval Removed
The previous contextual embedding approach has been replaced with a more efficient method.

For best search quality, we recommend **re-embedding existing documents**.

---

## Under the Hood

- 43 dependencies updated
- Unit tests for pricing and credit logic
- Improved tracing infrastructure
- Automated deployment pipeline
- Standardized database migration naming

---

OneAI 1.0 represents 96 commits and 88 pull requests.

Special thanks to **Pascal (47 changes)**, **orehman3035**, **Justus**, **Santi**, **Oliver**, and **Mirko** for making this production launch possible.

—
96 commits · 88 PRs · 414 files changed · 7 contributors

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
