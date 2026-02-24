# OneAI v0.2.21-beta — Central Model Governance, Stable Spaces & Modern Document Processing

**Release Date:** 2026-02-24

With v0.2.21-beta, we’re strengthening OneAI in three critical areas: **AI model governance**, **stability for large Knowledge Spaces**, and a **fully modernized document processing pipeline**.

---

## Highlights

### Configure AI models per organization and team
Admins can now centrally define:

- **Which AI models are available organization-wide**
- The **default model** for all users
- Additional models assigned to specific teams

All settings are accessible in the new Admin area at `/dashboard/admin`, structured with clear tab navigation.

**What this means for you:**
- Clear governance over model usage (aligned with EU AI Act requirements)
- No unintended access to unapproved models
- A consistent default model for reliable results across the company

Previously saved per-user model preferences have been replaced by the new organization-level logic. The admin-defined default model now applies automatically.

Huge thanks to Orehman (with support from Pascal) for building this comprehensive model governance system.

---

### No more browser crashes in large Spaces
In very large Knowledge Spaces with thousands of documents, high memory usage could previously lead to browser slowdowns or crashes.

Embedding monitoring now loads only aggregated status data instead of full file lists.

**Result:**
- Over **99% less data transfer** (e.g. ~1.6 MB reduced to ~5 KB for 11,000+ files)
- Significantly improved stability in large Spaces
- Faster and more efficient status updates

Thanks to Mirko (co-authored with Pascal) for this impactful performance improvement.

---

### Fully modernized PDF and image processing
We have fundamentally reworked how PDFs, scanned documents, and images are processed.

- Image analysis now runs through a **configurable vision AI model** instead of legacy OCR
- The previously unreliable PDF rendering pipeline has been removed
- Scanned and image-based PDFs are now processed **much more reliably**

**Your benefit:**
- Better extraction from scanned documents
- More consistent knowledge retrieval in Spaces
- Fewer empty or incomplete document results

Justus significantly upgraded the technical foundation of our document processing with this release.

---

## Improvements

- Admin routes consolidated under `/dashboard/admin/*` (Payment, SCIM, Private Models)
- Stronger enforcement of model access rules in Chat and Distillation
- More reliable synchronization of Artifacts across views
- 40 dependencies updated for security and stability
- Backend framework (Yedra) upgraded

---

## Bug Fixes

A series of UI issues resolved in one release:

- Cleaner chat card design
- Confirmation dialog before deleting Artifacts
- Artifact view is scrollable again
- Fixed toolbar layout in minimized panels
- “Replace existing files” button works reliably again

Overall, this results in a noticeably smoother day-to-day user experience.

---

## Breaking Changes

### Model management is now organization-based
- The former per-user `preferred_model` field has been removed
- Model access is now managed at the organization and team level only
- The admin-defined default model applies automatically to all users

**Action required:** Please review your model configuration in the new Admin area.

### New environment variables required for vision model
The new image and PDF processing requires:

- `VISION_URL`
- `VISION_KEY`
- `VISION_MODEL`

Please configure these before deployment.

### Updated Admin URLs
- `/dashboard/payment` → `/dashboard/admin/payment`
- `/dashboard/private-models` → `/dashboard/admin/private-models`
- `/dashboard/scim` → `/dashboard/admin/scim`

Please update any bookmarks or internal documentation accordingly.

---

Many thanks to Orehman, Justus, Mirko, and Pascal for delivering this substantial release.

_7 PRs · 156 files changed · 4,346 insertions · 3,268 deletions · 4 contributors_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
