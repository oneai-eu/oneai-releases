# OneAI v0.3.2-beta — Research Agent, Image Generation & Outlook Integration

**Release Date:** 2026-03-10

With v0.3.2-beta, OneAI takes a significant step forward. This release introduces a new **Research Agent** for multi-step analysis, **AI image generation directly in chat**, an **Outlook connector for email-based Knowledge Spaces**, and **Whisper-powered voice input** for dramatically improved transcription quality. In addition, we’ve expanded compliance tooling and improved reliability across the platform.

## Highlights

### Research Agent for complex analysis
AI Chat can now launch an autonomous **Research Agent**. It performs multi-step investigations across your Knowledge Spaces and – if required – the web, uses available tools iteratively, and compiles structured findings.

Perfect for market analysis, competitive research, and complex internal investigations.

Special thanks to **Justus**, who built the flexible agent foundation powering this capability.

### AI image generation in chat
You can now ask OneAI to **generate images** directly inside AI Chat — ideal for presentations, product concepts, or internal communication.

- Images displayed directly in chat
- Download as files
- Save to a Knowledge Space
- Transparent cost tracking by quality level

Thanks to **Pascal**, generated images are seamlessly integrated into your enterprise workflows.

### Outlook connector for email sync
The new **Outlook connector** allows you to connect mailboxes as Knowledge Spaces.

- Select specific folders
- Automatic synchronization
- Emails searchable including subject, sender, content, and attachments
- Webhook-based near real-time updates

Your institutional email knowledge is now securely accessible within AI Chat.

### Whisper-powered voice recognition
Voice input in AI Chat is now powered by **OpenAI Whisper**, replacing the browser-based API.

- Significantly higher accuracy
- Strong German language support
- Improved recognition of domain-specific terminology

A noticeable upgrade for teams using voice regularly.

### New chat editor with draft persistence
We completely rebuilt the chat input experience:

- Modern, stable rich-text editor
- @-mentions for Spaces and content
- Automatic draft saving per chat

Especially valuable for longer prompts and complex instructions.

## Improvements

### Organizational AI Personas
Admins can now define **AI Personas** with dedicated system prompts and roles. Personas can be assigned to projects, ensuring consistent tone, structure, or domain specialization across teams.

### Audit log export (CSV & JSON)
Audit logs can now be exported as **CSV or JSON**, supporting compliance reviews, data protection officers, and external audits.

We also added new default compliance patterns, including:

- GDPR (including Article 9)
- German national identifiers
- IBAN, EU VAT IDs, European phone numbers
- KDG (German church data protection regulation)
- BSI IT baseline protection & data sovereignty rules

Thanks to **Oliver** for strengthening our compliance capabilities.

### Real-time sync and document processing feedback
- Live progress during Space synchronization
- Real-time status updates for document processing
- More robust retry and error handling logic

Result: **Greater transparency and significantly improved reliability** for large datasets.

### More accurate usage and cost tracking
- Correct date filtering in usage analytics
- Improved model pricing logic (including cached tokens)
- Transparent cost tracking for image generation and transcription

A key improvement for enterprise customers with budget oversight requirements.

## Bug Fixes

- More stable chat connections and clearer error messages
- Proper handling of token limits
- API key dialog can now be closed reliably
- Layout and scrolling issues resolved
- Multiple stability improvements from our internal BugHunt review

## Under the Hood

- Prompt caching for OpenAI and Claude reduces latency and cost
- New blob storage infrastructure for chat files
- 36 dependency updates
- Improved observability and monitoring configuration

---

Thank you to **Pascal, Justus, Oliver, Orehman, and Mirko** for delivering this substantial release.

_29 PRs · 218 files changed · 6 contributors_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
