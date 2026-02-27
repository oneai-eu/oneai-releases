# OneAI v0.3.1-beta — Faster Document Processing & Full Control in Chat

**Release Date:** 2026-02-27

With v0.3.1-beta, we’ve made document processing in OneAI significantly faster and more flexible. Your manually uploaded documents become available sooner — and if you change your mind, you can now cancel processing instantly.

## Highlights

### Cancel document processing — directly in Chat and the upload area
Uploaded a document and realized you don’t need it after all? You’re now in control.

You can **actively cancel ongoing document processing**:

- directly in the **upload area** via a new cancel button  
- directly in the **AI Chat** when removing an attached file

This means **no unnecessary waiting**, no blocked processing capacity, and full control over your Knowledge Spaces.

Thanks to Pascal for implementing this feature and integrating it seamlessly across Chat and upload workflows.

### Your documents are now processed with priority
When you manually trigger document processing (for example after uploading files to a Knowledge Space), these jobs are now handled **before automatic background sync processes**.

In practice, this means:

- Faster availability of new content in AI Chat  
- Reduced waiting time after manual uploads  
- Better predictability for time-critical documents

Automatic sync processes (e.g. from OneDrive or SharePoint) continue to run reliably in the background — but no longer compete with your immediate work.

This improvement is also part of Pascal’s overhaul of our embedding queue logic.

## Improvements

- Smarter prioritization in document processing  
- More efficient and reliable embedding queue handling

## Under the Hood

- Major upgrade of our internal Agent Suite (v3.0), enabling faster and more consistent platform development — thanks to Mirko for modernizing our developer tooling.

---

Special thanks to **Pascal** and **Mirko** for their contributions to this release.

_2 PRs · 2 commits · 19 files changed · 2 contributors_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
