# oneAI v2026.09.04 — Share Canvas apps and manage CRM work from Chat

**Release Date:** 2026-09-08

## Highlights

### Canvas becomes a shareable mini-app
You can now publish Canvas apps securely through a share link or on **your own company domain**. This turns AI-created applications into practical forms, portals, and tools for external audiences.

- Visitors can sign in with an email link without needing a oneAI account.
- Public apps can display files and images, while visitors can upload files.
- Forms can show who submitted an entry, and submitters can revise their own responses later.
- Teams benefit from more reliable live updates and smoother use of high-traffic apps.
- Larger, more sophisticated Canvas apps can be edited by AI faster and more reliably.

Thanks to **Pascal** and **Justus**, Canvas is now much better suited for secure external use cases.

### HubSpot, natively connected to oneAI
The new HubSpot connector brings **26 tools** directly into AI Chat. Your AI can now do more than search and analyze CRM data—it can also prepare operational CRM work.

- Create, update, and associate contacts, companies, deals, and tickets
- Log notes, tasks, calls, and meetings
- Retrieve record details, available fields, and activity history on demand
- Review every write action in a clear confirmation step before it is executed

Synchronization is also more resilient: temporary connection issues no longer cause existing records to be removed incorrectly. Thanks to **Mirko** for the extensive expansion of our connector capabilities.

### New and expanded connectors
oneAI connects to more business systems and can complete more tasks directly within the tools you already use.

- **New: Plytix** – Ask questions about your product catalogue, attributes, variants, and images directly from your PIM system.
- **weclapp** – More read and write actions, including more resilient synchronization and invoice PDF downloads.
- **ClickUp** – Create and update tasks, manage tags and checklists, with confirmation required for changes.
- **Fireflies** – Search meeting transcripts, rename meetings, stop the notetaker, and perform additional actions.
- **n8n** – Test workflow nodes before use and resume waiting workflows directly from Chat.
- **GitHub, ClickUp, weclapp, and lexoffice** – Extended API access is now available when authorized.

## Improvements

- **Clearer Chat interactions:** When AI Chat needs more information, it now presents clickable choice cards instead of text-only questions.
- **Sign in with Apple:** Apple is now available as a sign-in option alongside Google and Microsoft.
- **New AI models:** Gemini 3.8 Flash, Gemini 3.7 Flash, and Grok 4.6 are now available. Gemini 3.7 Flash is now Uno’s default model for paid organizations.
- **On-brand presentations:** Upload your own PowerPoint template and generated presentations will automatically use your company design. You can also place images from a Knowledge Space directly onto slides.
- **Knowledge Spaces:** Files can now be renamed in place, and the file explorer is easier to use on mobile devices.
- **SharePoint selection:** When connecting through OneDrive, all available SharePoint sites are now shown reliably, including in large Microsoft environments.
- **Outlook connections:** Broken connections are detected immediately and can be repaired or disconnected in place.
- **Voice input:** Recording now works reliably in Safari, on iPhone and iPad, and in Firefox—including longer recordings.
- **Scanned PDFs:** Previewing scanned PDFs is now accurate, sharper, and more stable.
- **Team limits:** Individual usage limits can now be managed for teams with more than ten members. oneAI also warns admins when a member limit exceeds the organization’s budget.

## Security

- **Protected Canvas forms:** Public forms can update only the fields explicitly intended for them. Internal data fields remain protected.
- **Secure connector credentials:** HubSpot and ClickUp credentials are now stored encrypted.
- **Safer n8n automation:** Automatic error correction can no longer silently redirect requests to a different host.
- **Permission protection in Uno:** Non-admin employees can no longer use Uno to identify organization administrators.

## Bug Fixes

- Confirmation cards for Chat actions no longer remain invisible or permanently pending. You can now reliably see whether an action was completed, declined, or failed.
- Multi-file Canvas apps now work correctly through public share links and custom domains.
- Canvas apps without data bindings can now be shared publicly as well.
- Certain unusual email addresses no longer cause errors in shared Canvas apps.
- Interrupted Gemini responses are no longer misleadingly reported as empty model responses.
- GitLab files no longer incorrectly show a size of “0 bytes.”
- AI model settings are now saved reliably, even when toggled quickly.

## Under the Hood

We expanded the foundation for future scheduled AI agents with approval workflows. This capability remains in internal testing and is not yet enabled for customers.

Thank you to **Pascal, Mirko, Justus, Santi, Obaid, and Oliver** for their contributions to this release.

*139 pull requests, 141 commits, and 1,183 files changed.*

---
*This changelog was generated automatically by the oneAI Changelog Pipeline.*
