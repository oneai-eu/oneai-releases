# OneAI v0.4.0-beta — Understand Audio & Video, Smarter PDF Processing

**Release Date:** 2026-04-10

## Highlights

### Audio and video files are now searchable
You can now **upload audio and video files directly into OneAI** — and use them just like any other document in your Knowledge Spaces.

- Support for MP3, WAV, M4A and more
- Automatic transcription with timestamps
- Client-side audio extraction for video files
- In AI Chat, you can query specific time ranges of a recording

Customer calls, internal meetings, webinars — spoken knowledge is now fully integrated into your enterprise AI workflows.

A big thank you to **Pascal**, who implemented the complete audio/video pipeline, including transcription and chat integration.

---

### Smarter PDF processing with a hybrid pipeline
PDFs are now processed **faster, more cost-efficiently, and more accurately**.

The new hybrid approach works in two stages:
1. **Direct text extraction** (fast, no LLM cost)
2. **Selective AI-based image analysis** only for pages that actually contain embedded images

For you, this means:
- Faster processing of large documents
- Reduced AI costs
- Better handling of scanned or image-heavy PDFs

This foundational upgrade to our document pipeline was also delivered by Pascal.

---

### Faster document processing with batch embeddings
Instead of sending each text chunk individually, OneAI now processes embeddings in batches.

This significantly reduces network overhead and noticeably speeds up processing — especially for large Knowledge Spaces or bulk uploads.

---

## Improvements

### Redesigned Activity Center with clear error visibility
The Activity Center has been fully redesigned.

- Sync, document processing, and distillation unified in one central tab
- Live status updates via WebSocket
- **Clear error indicators** when documents fail to process

You immediately see if action is required — no need to inspect logs.

---

### Unified drag & drop — including folders
Drag & drop uploads now work consistently across the entire platform:

- In AI Chat
- In Knowledge Spaces
- Via the sidebar

Folder structures are preserved, and unsupported files are clearly flagged. This makes large uploads much easier and more transparent.

---

### More robust search and chat behavior
Several improvements increase reliability in day-to-day usage:

- Fallback if the reranker service is temporarily unavailable
- Automatic retries for transient connection errors
- Validation of LLM tool arguments to prevent runtime failures
- Chat personas are now prioritized and applied more reliably
- The chat now understands the active artifact during editing

The result: more stable answers, fewer interruptions, and more consistent behavior.

---

## Bug Fixes

- Streaming errors with Google models are now handled gracefully
- Processing locks are renewed during large file handling (preventing duplicate work)
- Code documents are chunked reliably within defined size limits
- weclapp content is cached for more efficient processing
- Multiple UI fixes (badges, artifact dialog, math rendering)

Many of these improvements increase reliability behind the scenes — particularly for larger datasets.

---

## Breaking Changes

### Gateway environment variables consolidated
The previous six environment variables for embeddings, vision, and reranking have been consolidated.

**New variables:**
- `ONESTACK_GW_URL`
- `ONESTACK_GW_KEY`

Please update your `.env`, `compose.yaml`, and deployment configurations accordingly.

---

## Under the Hood

- Unified retry logic for more stable API calls
- Dedicated timeout for the PDF worker
- Internal PR reviewer agent with multi-tenancy and security rules (thanks to Santi)

---

This release was largely driven by **Pascal**, covering everything from audio/video support and the new PDF pipeline to the Activity Center redesign. Thanks as well to **Santi** for introducing structured review guidelines.

—
21 commits · 21 PRs · 90 files changed · 2 contributors

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
