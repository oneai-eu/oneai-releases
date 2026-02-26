# OneAI v0.3.0-beta — Full Chat Control, New Activity Hub & Latest Anthropic Models

**Release Date:** 2026-02-26

With **OneAI v0.3.0-beta**, we’re delivering more control, more transparency, and more performance across the platform.

From stoppable and reconnectable AI responses to a centralized Activity Hub and multi-API keys with expiration dates, this release significantly strengthens day-to-day AI usage in enterprise environments.

## Highlights

### Stop AI Responses & Seamless Reconnect
You can now stop running responses in **AI Chat** at any time. If a connection drops, the response resumes automatically where it left off — **no more lost messages**.

This makes long analyses and unstable network situations dramatically more reliable.

Huge thanks to **Pascal** for the major streaming architecture upgrade.

### New Activity Hub in the Sidebar
All ongoing activities — **uploads, document processing, and minimized Spaces** — are now consolidated in a structured Activity Hub inside the sidebar.

Instead of floating edge icons, you get a clear, centralized overview with proper status tracking.

Also implemented by **Pascal**.

### New Anthropic Models: Opus 4.6 & Sonnet 4.6
We’ve added the latest Anthropic models:

- **Claude Opus 4.6** for complex reasoning and strategic tasks
- **Claude Sonnet 4.6** as a powerful and cost-efficient alternative
- Up to 200k context window & full multimodal capabilities

Thanks to **Mirko** for the fast integration.

### Multiple API Keys with Expiration
Users can now create and manage **multiple API keys**, each with:

- Custom description
- Optional expiration date
- Centralized management in the profile

This improves security, auditability, and clean separation between integrations.

Strong work by **Pascal**.

### Chats Now Belong to Spaces
We simplified the architecture: **Chats are now directly associated with Spaces** instead of projects.

This provides:

- A cleaner structure
- More flexibility
- A stronger foundation for future features

Existing projects were automatically converted into project-type Spaces.

Major architectural work by **Justus**.

---

## Improvements

### Automatic Retry for Document Processing
If document processing fails (e.g., due to transient API issues), OneAI automatically retries with intelligent backoff.

Result: **more reliable Knowledge Spaces** with less manual intervention.

### Paste Screenshots Directly (Ctrl+V)
You can now paste images and screenshots directly into AI Chat using **Ctrl+V** — no separate upload required.

### Cleaner Display of AI Reasoning Steps
Reasoning steps and tool calls now start collapsed, reducing visual noise while maintaining transparency.

### Artifacts: Creator, Timestamps & Transfer
Artifacts now display:

- Creator
- Last updated timestamp

They can also be moved or copied between Spaces.

### New “What’s New?” Page
A new release overview page keeps users informed and automatically notifies them about new updates.

### New Home & Bulk Deletion
- New home screen after login
- Multi-select & bulk deletion for chats and artifacts
- Cleaner admin navigation

### weclapp Connector Significantly Enhanced
- AI-generated summaries of business data
- Customer context enrichment
- Improved folder structures
- More robust download and rate-limit handling

### Hardened Space Infrastructure
Improved synchronization performance, correct storage accounting, and stronger error handling across providers.

---

## ⚠️ Security

We fixed a multi-tenancy gap in AI-generated artifact creation.

Artifacts are now validated against Space access permissions before being created, ensuring strict tenant isolation.

---

## Breaking Changes

### Chats → Spaces (Database)
Chats are no longer tied to projects. Projects have been migrated to Spaces with `provider='project'`.

**Migration required:**
- 202602130000.sql
- 202602180000.sql

Existing chats are automatically migrated.

### Multi-API Keys (API)
API keys are now stored in a dedicated table.

**Migration required:** 202602250000.sql  
Existing keys are automatically migrated.

### Pricing Adjustment: Sonnet 4.5
Output pricing for Sonnet 4.5 has been corrected to match official Anthropic pricing (60% higher than previously calculated).

Please account for this in cost projections.

---

## Under the Hood

- Unified chat endpoints
- New LLM usage and token monitoring
- CI improvements for release branch management
- 29 dependency updates
- Backend framework update to fix server crashes

---

A big thank you to **Pascal, Mirko, Justus, and Orehman** for delivering this substantial release.

—

*26 commits · 25 PRs · 264 files changed*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
