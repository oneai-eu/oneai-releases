# OneAI v0.3.6-beta — Stronger Compliance Controls, Smarter Chats, Full GPT‑5.4 Support

**Release Date:** 2026-03-27

With v0.3.6-beta, OneAI becomes more secure, more powerful, and smoother in daily use. This release introduces a fully redesigned compliance system, a significantly improved chat workflow, advanced GitHub filtering, and support for all new GPT‑5.4 models.

## Highlights

### Compliance System with Risk Levels and Blocking
We fundamentally reworked the compliance layer. Admins can now define **per risk level** whether requests are only logged or actively blocked.

- Configurable actions per risk level: **Audit** or **Audit & Block**
- Optional synchronous mode for immediate blocking of high-risk prompts
- Extended audit logging for:
  - Chat messages
  - Member invitations
  - Space permission changes
- Clear, tab-based compliance settings UI

This gives organizations much stronger control in line with the EU AI Act and internal governance policies.

A big thank you to **Oliver** for leading this initiative.

### New Chat Workflow: Lazy Creation, Inline Rename & In-Chat Artifacts
We streamlined the core Chat experience.

- Chats are created **only when the first message is sent** (no more empty chats)
- Chats can be **renamed inline** directly from the list
- Artifacts now appear **directly inside the chat** instead of a separate dialog
- Empty or invalid messages are consistently prevented

The result: cleaner lists, fewer edge cases, and a more reliable AI Chat experience.

Thanks to **Pascal** for driving this major upgrade of our core workflow.

### GitHub Connector with Advanced File Filtering
When connecting GitHub repositories, you can now precisely control which files are synced and embedded.

- Include and exclude patterns (e.g., `*.md`, `docs/`, `test*`)
- Separate filtering for sync vs. embedding
- Clearer guidance when API rate limits are reached
- Proper file icons for better orientation

This helps reduce unnecessary embeddings, optimize cost, and improve Knowledge Space quality.

### All GPT‑5.4 Models Available
All new GPT‑5.4 variants are now supported:

- **Nano & Mini** – fast and cost-efficient
- **Standard** – powerful all-round model with large context window
- **Pro** – maximum capability for complex reasoning tasks

You can now align model choice even more precisely with your use case, budget, and governance requirements.

### Real-Time Activity Hub
A new unified activity stream shows in real time:

- Synchronizations
- Document processing (embedding)
- Distillations

All in one consolidated view with progress indicators — especially valuable for large Knowledge Spaces.

## Improvements

- Sort projects by **name, creation date, or last update**
- Confirmation dialog before deleting chats
- Admin role in Spaces automatically enforces write permission (consistent access model)
- Fully rebuilt project instruction template system with new UI and showcase functionality
- Improved weclapp templates for higher extraction quality
- More robust message handling (no more failures due to empty content blocks)

Special thanks to **Mirko** for rebuilding the instruction template system and to **Santi** for his first contributions around project sorting and safer chat deletion.

## ⚠️ Security

We further strengthened our security architecture:

- **Hardened multi-tenancy isolation:** Team assignments are now strictly validated against their organization
- **Safer WebAuthn registration:** Challenge verification is now fully handled inside the database transaction, preventing race conditions

These changes significantly strengthen tenant isolation and authentication security.

## Under the Hood

- Migration to **Vite 8** for a modernized build setup
- 65 dependency updates
- Upgrade to Mistral SDK v2
- Additional performance, stability, and code quality improvements

---

Thank you to **Pascal, Oliver, Mirko, and Santi** — and to our automated dependency updates.

_24 PRs · 147 files changed · 14,422 insertions · 5,595 deletions_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
