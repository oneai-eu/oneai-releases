# OneAI v2026.08.18 — Collaboration, Live Dashboards, and Secure Integrations

**Release Date:** 2026-08-18

## Highlights

**Collaborate on presentations in real time**

AI-generated presentations are now shared workspaces. Multiple people can edit slides, text, tables, and charts at the same time, with changes appearing instantly for everyone and live collaborator presence visible in the presentation. Reusable presentation templates also help teams start faster with a consistent format.

**Build live BI dashboards from your data**

Create interactive metrics and charts from your oneData tables directly through AI Chat. Dashboards are available in their own dedicated area, while CSV files can now be imported and results exported. Thanks to Mirko for building this foundation for data-driven decisions.

**Manage integrations centrally with granular access controls**

The new Integrations page gives you clearer visibility and more control over connections to Outlook, n8n, HubSpot, Lexware Office, and other services:

- Employees can manage their own connections in one central place.
- Individual integrations can be disabled personally.
- Admins can disable integrations across the organization or limit them to specific projects.
- Outlook emails can now be sent directly from OneAI.

**New connector: Lexware Office**

Connect Lexware Office to OneAI to securely search accounting data and work with it through AI-powered tools.

## Improvements

**A more productive AI Chat experience**

- Sent messages can now be edited. OneAI will generate a new response based on your revised request.
- The chat composer has been redesigned for a clearer, more efficient experience.
- Uno is now available as a floating chat window, keeping assistance closer to your current work context.

**More reliable document and data workflows**

- Clicking “Apply” on an AI change suggestion now reliably applies the change to the document.
- Data processing and dataset tools have been further optimized.
- Improved compliance views help administrators trace relevant activity more effectively.

## Security

This release includes extensive security and compliance hardening to support the safe use of OneAI with company data:

- An internal research mode can no longer create content without explicit user confirmation.
- Destructive actions are now consistently and clearly marked as irreversible across affected tools.
- n8n credentials are now stored encrypted.
- When a member is removed, their external connections, such as Outlook access, are reliably deactivated.
- Additional safeguards strengthen OAuth and SSO session security, tenant isolation, roles and permissions, and n8n workflows.
- CSV exports are better protected against formula injection, while compliance and chat logs follow stronger data-minimization principles.

Thanks to Mirko and Pascal for their significant contributions to these security improvements.

## Important Change Notes

As part of the new permissions and integrations architecture, existing access and configuration paths have been standardized. After updating, administrators should review:

- Organization-wide integration enablement and project-level restrictions
- Existing n8n and Outlook connections
- Roles and permissions for external tools

This helps ensure that your intended access policies remain in place.

## Under the Hood

Beyond the visible features, we continued to advance LLM Routing, Document Processing, data tools, and platform architecture to make OneAI more capable and resilient.

Thank you to Pascal, Mirko, Justus, Oliver, Santi, and Obaid for their contributions to this release.

_Release scope: 660 commits, 2,112 files changed, and 655 pull requests._

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
