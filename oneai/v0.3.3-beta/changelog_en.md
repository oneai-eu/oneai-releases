# OneAI v0.3.3-beta — Google SSO, Secure Artifact Sharing & a More Robust AI Chat

**Release Date:** 2026-03-13

## Highlights

### Google Sign-In as a New SSO Provider
In addition to Microsoft, OneAI now supports **Google Single Sign-On (SSO)** — for both login and inviting new team members.

- Sign in with your Google account in seconds
- Send Google-based invitations directly from the member dialog
- Seamless integration with Google Workspace environments

This makes onboarding significantly easier for organizations running on Google.

---

### Share, Copy and Confirm Artifacts
Artifacts are now fully team-ready with a clear and controlled sharing model.

**What’s new:**
- Share artifacts with your team or create a **private copy**
- Searchable artifact selection with creator, last updated timestamp, and sharing status
- Inline confirmation and creation cards directly in the AI Chat

Most importantly, when the AI wants to create an artifact, it now requires **explicit user confirmation** before execution. No unexpected changes — full control stays with your team.

Huge thanks to Pascal for implementing the complete sharing and confirmation workflow.

---

### Clear Error Messages in AI Chat
Silent failures are a thing of the past.

If something goes wrong during response generation — such as exceeded context limits, concurrent streams, or permission issues — the AI Chat now displays **clear, user-friendly error messages directly in the conversation**.

This means:
- Greater transparency
- Less confusion for end users
- Faster resolution in day-to-day work

---

### Search GitHub Source Code in Knowledge Spaces
GitHub-connected Knowledge Spaces now process **60+ code and configuration file types**, including TypeScript, Python, Go, Rust, Java, C/C++, YAML, SQL, Dockerfile, and Terraform.

You can now:
- Search and analyze source code
- Ask architectural questions in AI Chat
- Use repositories as a structured knowledge base

Thanks to Mirko for significantly expanding our document processing capabilities for code.

---

### Smarter weclapp Search with Narrative Embeddings
weclapp data (e.g., customers, orders, invoices) is now transformed into **narrative, context-rich text** before processing.

The result:
- Noticeably improved search quality
- More contextual AI responses
- Higher accuracy in RAG-based workflows

## Improvements

- **Invite multiple members in sequence** with a persistent dialog and overview of invited users
- **Improved document processing feedback** with clearer status indicators and filters
- **Smoother chat scrolling** without visual overlap
- **More reliable Outlook MSG file parsing**
- **Email delivery errors are now detected and logged** without blocking invitations
- Full **internationalization of all UI text** for consistent multi-language support

## Breaking Changes

### Google Drive Spaces Are Now Read-Only
Google Drive-connected Knowledge Spaces now use the `drive.readonly` scope exclusively.

**What changed:**
- Upload and delete operations for Google Drive have been removed

**Required action:**
- Please re-link existing Google Drive spaces
- The new connection will automatically request the reduced read-only scope

This change intentionally reduces permissions to the minimum required and strengthens compliance.

## Under the Hood

- Improved chat streaming architecture for robust error handling
- Enhanced embedding pipeline for code and ERP data
- Stricter code quality standards and consistent internationalization

---

A big thank you to **Pascal** (Google SSO, artifact sharing, chat robustness, and multiple UX improvements) and **Mirko** (GitHub code embedding and weclapp optimization) for this strong release.

_14 PRs · 213 files changed · 4,514 insertions · 2 contributors_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
