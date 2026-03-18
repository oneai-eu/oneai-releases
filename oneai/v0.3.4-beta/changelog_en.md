# OneAI v0.3.4-beta — Image Generation, Smarter GitHub Spaces & Major UX Upgrades

**Release Date:** 2026-03-18

With v0.3.4-beta, OneAI becomes more visual, more intelligent, and noticeably more reliable in day-to-day use. This release introduces a second image generator, upgrades GitHub Spaces with deep code awareness, and makes working with artifacts far more powerful.

## Highlights

### Google Imagen 4 for Image Generation
In addition to OpenAI, you can now use **Google Imagen 4** directly in OneAI.

Available in three variants:

- **Standard** – balanced quality and speed  
- **Fast** – optimized for rapid iteration  
- **Ultra** – maximum quality for demanding visuals  
- Up to **4 images per request**

This gives teams more flexibility across quality, speed, and cost — seamlessly integrated into our existing LLM routing. Thanks to **Mirko** for implementing the integration cleanly within our architecture.

### Intelligent Code Analysis for GitHub Spaces
GitHub Spaces now truly understand your repositories.

During each sync, OneAI automatically analyzes:

- Repository and directory structure  
- Programming language distribution  
- Dependencies (e.g. package.json, requirements.txt, go.mod, Cargo.toml)  
- Potential entry points

We generate structured overview files and enrich code files with architectural context. The result: **more precise, architecture-aware answers in AI Chat**, especially for larger codebases.

Also delivered by **Mirko** — a major step forward for engineering teams using OneAI.

### Artifacts — Fully Reworked
Artifacts are now a first-class, collaborative component in OneAI.

New capabilities:

- **Artifact sharing** (public/private toggle)  
- **Direct links** to individual artifacts  
- Request-access flow with email notification  
- **Search, sorting, and pagination**  
- Dedicated **Artifacts tab** within projects (next to Chats and Files)

Artifacts are now easier to discover, share, and manage across teams.  
Huge thanks to **Pascal** for this comprehensive UX overhaul.

### Personas Now on Chat Level
Personas can now be selected **per chat**, instead of only per project.

This enables:

- Different AI personalities within the same project  
- Better separation of use cases (e.g. “Strategy Advisor” vs. “Technical Reviewer”)  
- More granular control over AI behavior

Existing projects automatically retain their primary persona as the default. This structural upgrade was implemented by **Pascal**.

## Improvements

### Significantly More Reliable Outlook Sync
The Outlook integration has been fundamentally improved:

- **Incremental sync** instead of full inbox rescans  
- Automatic renewal of expired webhooks  
- Robust token refresh without race conditions  

Result: faster synchronization, fewer errors, and higher reliability in production environments.

### More Transparency in AI Chat
- Every AI response now displays a **model badge**.  
- A visible **thinking indicator** appears during complex tool interactions.

This improves clarity and creates a smoother experience during longer-running operations.

### More Stable Anthropic Streaming
Long reasoning phases (e.g. complex artifact generation) no longer fail due to timeouts, improving reliability for advanced workflows.

### Modernized UI Foundation
We migrated our entire component library from **Radix UI to Base UI**.

For customers, this means:

- More stable interactions  
- A modernized technical foundation  
- Improved maintainability and performance

We also resolved several dropdown and select issues introduced during the migration.

## Breaking Changes

### Persona System (Database)
The persona system has moved from project-level to chat-level.

- The `project_personas` junction table has been removed.  
- The previous primary persona remains as the **default persona**.  
- Personas are now assigned directly per chat.

The migration runs automatically. No manual action required.

### API Change: Space Files
The Space Files API now returns an object instead of a flat array:

- `files` (array)  
- `totalFiles`  
- optional `hasNextPage`

External API consumers must access `response.files` instead of the root response.

## Under the Hood

- Improved model usage tracking (including image size metering)  
- Consolidated code file type handling in a shared module  
- Simplified internal load balancing via infrastructure  
- Internal groundwork for upcoming RAG improvements

---

A strong release focused on image generation, developer workflows, and operational stability.  
Thank you to **Pascal** (13 changes) and **Mirko** (3 changes) for driving this forward.

_16 commits · 15 PRs · 320 files changed_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
