# OneAI v0.3.7-beta — Smarter Search, Personal Personas & Comprehensive Audit Reviews

**Release Date:** 2026-04-03

This release delivers one of the most significant quality upgrades since the start of our beta. With intelligent hybrid search, fully customizable personas and a powerful audit review system, OneAI becomes more accurate, secure and tailored to each user.

## Highlights

### Smarter Document Search with Hybrid Retrieval & Reranking
Search across Knowledge Spaces has been fundamentally upgraded.

OneAI now combines **classic keyword search (BM25)** with **AI-based vector search**, followed by a relevance reranking step. The result: significantly more accurate answers, especially for complex or nuanced queries.

- Better results for domain-specific terminology and synonyms
- More consistent answers across large document collections
- Relevance signals directly influence response generation

Thanks to Pascal, our new retrieval architecture sets a new benchmark for document processing quality.

### Create and Share Your Own Personas
You can now create **personal AI personas** for different roles and use cases — from Sales to Legal to IT.

- Private personas visible only to you
- Shared personas created by admins for organization-wide use
- New “My Personas” page in your profile

Personas are now selected per chat and are no longer tied to projects.

### New Audit Review System for Compliance Teams
Compliance administrators now have a robust review workflow:

- Review, approve or block flagged messages
- Full review history with timestamps and reviewer attribution
- New detailed view including chat history and sources

Chats can be automatically blocked until reviewed if required. Thanks to Oliver for implementing this critical governance capability.

### Pin Projects Individually & See Your Permissions
Project pinning is now **per user** — your priorities are independent from your teammates.

You can also instantly see:
- Whether you have write access
- Whether you are a project admin

This improves transparency and reduces confusion in collaborative environments.

### GitHub Code Intelligence v2
Our GitHub integration now analyzes repositories at a much deeper level:

- Import relationship detection
- Cross-file function call tracing
- Automatically generated per-directory code graphs

This makes technical knowledge embedded in codebases significantly more searchable and usable. Thanks to Mirko for this major upgrade.

## Improvements

- AI-generated images can now be saved directly to projects
- Project lists display creation date, last update and creator
- The AI now considers your name and job role for more personalized responses
- Large pasted content appears as compact document chips with preview
- Unified Space invitation dialog for users and teams
- Extended WebAuthn support for additional passkey algorithms
- More robust Outlook synchronization for complex message IDs

## Bug Fixes

- Significantly more stable chat connections during WebSocket issues (messages are preserved and retry is possible)
- More reliable document processing for empty files and transient errors
- Aggregated notifications during bulk re-embedding instead of notification spam
- SSO redirects now consistently return users to the intended page
- Upload errors are clearly displayed
- Research mode correctly respects confirmation flows
- External links work as expected again

## Security

We implemented several important security enhancements:

- **API keys are immediately revoked when users are deprovisioned via SCIM**
- Stripe webhooks strictly validate organization context
- Audit queries are fully tenant-scoped to prevent cross-tenant access

These changes further strengthen access control and support EU AI Act–aligned governance.

## Breaking Changes

### Full Re-Embedding of Knowledge Spaces Required
The search architecture has moved to hybrid vectors. As a result, all documents are automatically reprocessed.

- Migration resets all embeddings to “pending”
- The embedding queue will re-index all files
- Please ensure sufficient capacity for the initial reprocessing phase

### Personas No Longer Project-Bound
`defaultPersonaId` is no longer supported. Personas are now selected freely per chat.

Migration is handled automatically.

### Project Pinning Model Updated
Pins are now user-specific instead of shared globally. Existing pins have been migrated automatically.

## Under the Hood

In addition to 47 dependency updates, we improved stability, retry logic and fault tolerance across the platform.

---

Many thanks to Pascal, Oliver, Mirko, Justus and the entire team for 39 commits in this release.

_39 commits · 38 PRs · 160 files changed_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
