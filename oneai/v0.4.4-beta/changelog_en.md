# OneAI v0.4.4-beta — Automation, Access Protection & a Significantly More Stable Chat

**Release Date:** 2026-04-27

This release delivers three major advances: **workflow automation with n8n**, proactive **project access protection** to prevent data leaks, and a noticeably **more stable and responsive AI Chat** — especially for private models.

---

## Highlights

### n8n Connector: Build workflows directly from OneAI
You can now connect your **n8n instance as a Space** and create automation workflows directly from AI Chat.

- Guided setup wizard with API validation  
- Ready-to-use workflow templates  
- Create and activate workflows directly from chat  
- Automatic synchronization via webhooks  
- Clean teardown when a Space is deleted  

OneAI becomes your AI-powered automation control layer — grounded in your enterprise data.

Huge thanks to **Mirko**, who built the connector end to end.

---

### Project Access Protection: Detect conflicts, prevent data leaks
Projects linked to Knowledge Spaces are now significantly safer.

Project admins can immediately see:
- Which members **lack access to linked Spaces**  
- Where potential permission conflicts exist  

They can directly:
- Grant access (if authorized)  
- Send structured access requests to Space admins (with smart 1-hour throttling)  

In addition, tool calls are strictly filtered in the background to only include documents from authorized Spaces. This prevents unintended cross-space data exposure.

A major step forward for AI governance and EU AI Act–aligned data protection.  
Concept and implementation were led by **Pascal**.

---

### Private Models: Stable, visible, production-ready
Self-hosted models are now much more reliable:

- Stable streaming including tool calls and reasoning  
- Correct visibility in the model selector  
- Proper access control in organization settings  
- No more crashes due to unexpected response formats  

By switching to a more robust backend API, long-running streams now complete reliably — while preserving SSRF protection.

---

### Proactive Session Management
More security, fewer surprises:

- Early warning before session expiry (with instant re-authentication)  
- Automatic logout after extended inactivity  
- Theme preference now persistently stored server-side  

This reduces the risk of forgotten active sessions, especially in shared environments.

---

### A noticeably smoother Chat experience
AI Chat received deep stability improvements:

- No more UI freezes during large artifact suggestions  
- Enter key safely blocked during active streaming  
- No “ghost messages” after chat errors  
- Cursor issue after document paste resolved  
- Clearer error handling for web search failures  

The result: a far more robust, professional day-to-day chat experience.

---

## Improvements

### Document Processing: faster, fairer, more resilient
The entire embedding queue has been enhanced:

- Fair distribution across organizations  
- Dedicated worker for interactive (critical) uploads  
- Instant cross-replica wake-up via PostgreSQL NOTIFY  
- Shorter retry cycles after failures  
- Prefix caching for vision models → faster large document processing  
- Image validation before vision processing to fail early and cleanly  

Documents uploaded from chat are now prioritized — even when large background sync jobs are running.

A lot of deep systems work here was driven by **Pascal**.

---

### Updated Model Catalog
The model catalog has been comprehensively updated:

- Latest models from OpenAI, Anthropic, Google, and Mistral  
- Context windows up to 1 million tokens  
- GPT‑5.5 and GPT‑5.5 Pro pre-registered  
- Support for Anthropic’s Adaptive Thinking API (Opus 4.7)  

Thanks to **Mirko** and **Oliver** for the updates — and to **Justus** for extending the LLM gateway with `prompt_cache_key` and `max_output_tokens`.

---

## Bug Fixes

- Google models: stable thought signature handling across multiple tool calls  
- Mistral: no more 30-second timeouts on complex requests  
- Drag & drop in file explorer restored  
- Folder deletion and table scaling corrected  
- Project instructions update instantly  
- Compliance audit logs correctly linked to chat messages  

Many small edges were polished — with meaningful day-to-day impact.

---

## Under the Hood

- Improved WebSocket and Space deletion stability  
- Batched file deletion to prevent infrastructure resource exhaustion  
- 44 dependencies updated  

---

Thank you to **Pascal, Mirko, Justus, Oliver**, and dependabot for this substantial release.

— 40 PRs · 114 files changed · ~7,900 lines added

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
