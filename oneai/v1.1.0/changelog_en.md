# OneAI v1.1.0 — Our biggest release since v1.0

**Release Date:** 2026-05-28

OneAI v1.1.0 is a major step forward: **AI Chat becomes more capable**, **Knowledge Spaces become easier to manage**, and **admins get stronger controls for regulated environments**. On top of that, this release adds new connectors, a much better project organization experience, and meaningful reliability improvements across the platform.

## Highlights

- **Edit images directly in AI Chat**
  - You can now modify generated or uploaded images using natural language.
  - Requests like “make the background more blue” or “remove the person on the left” work directly within the conversation.
  - Thanks to **Mirko**, AI Chat now supports a much more natural image workflow.

- **Full-text search across chat content**
  - Search now looks beyond chat titles and finds words inside your messages as well.
  - This makes it much easier to recover past conversations when you remember the wording, but not the name.
  - Thanks to **Pascal**, search is now significantly more useful in day-to-day work.

- **Organize projects with archive, tags, and bulk actions**
  - Projects can now be archived instead of deleted.
  - Custom tags help structure work, and multiple projects can be updated in one go.
  - The project overview has also been fully refreshed for responsive use and now includes dedicated tag management.

- **Pause Spaces instead of deleting them**
  - Org admins can now deactivate Knowledge Spaces without losing content or configuration.
  - Paused Spaces are hidden from members and can be reactivated at any time.
  - This is especially useful for compliance reviews, project pauses, or temporary shutdowns.

- **Smarter answers with stronger source control**
  - Two new organization settings help OneAI prioritize internal sources when generating answers.
  - If desired, OneAI can also be configured to answer only when information is actually supported by sources.
  - This is an important governance capability for regulated industries. Thanks to **Mirko** for delivering these key SAG-related features.

- **New connectors: HubSpot and SMB**
  - **HubSpot** is now available as a new data source, bringing CRM knowledge into OneAI.
  - The new **SMB connector** makes it possible to connect network drives from your internal environment as a knowledge source.
  - Thanks to **Pascal** for HubSpot and to **Justus** for the SMB connector and the underlying agent foundation.

## Improvements

- **MCP server for external AI tools**
  - Tools such as Cursor, Claude Desktop, Copilot, or n8n can now connect to OneAI through the open MCP standard and search your knowledge base.
  - Thanks to **Santi** for this important extension for technical teams.

- **Better visibility into usage, budgets, and overage**
  - Subscription settings now include a dedicated usage tab with live consumption, budget limits, and overage controls.
  - The dashboard also presents billing and usage more clearly with new KPI cards and a cleaner structure.
  - Thanks to **Obaid** for making usage and cost management much more transparent.

- **Project files now use the familiar file explorer**
  - Project files now use the same explorer experience as Spaces.
  - This creates a more consistent workflow for previewing, navigating, and managing files.

- **Reconnect flows for Outlook and OneDrive**
  - Expired connections can now be renewed with one click, without recreating a Space.
  - This significantly reduces admin overhead.

- **Better operational visibility**
  - Paused Spaces are now clearly indicated on both project and Space detail pages.
  - The OneAI Agent status badge now refreshes automatically.
  - Add-on purchases become available immediately without requiring a page reload.

## Bug Fixes

- **Document processing is more reliable**
  - Large documents and slowly converted files are processed more reliably.
  - HTML attachments from emails and uploads are now supported and converted into usable content for Knowledge Spaces.
  - A critical memory loop triggered by certain Outlook emails has been fixed, making document processing much more stable under load.
  - Thanks to **Mirko** and **Pascal** for these important improvements to a core part of the platform.

- **Microsoft and Teams integrations are more stable**
  - Sign-in through the Teams add-in works reliably again, including for hybrid AD environments.
  - Microsoft webhook renewals no longer get stuck in retry loops when renewal fails.
  - OneDrive reconnect now returns users to the correct Space consistently.

- **Sync and artifacts behave more consistently**
  - Cloud sync no longer fails when duplicate paths are returned.
  - Chat artifacts are now correctly scoped to their project.
  - Document indexing status is visible, so it is easier to see when content is ready for answers.

- **Cleaner rendering and session handling**
  - ASCII and Mermaid diagrams render correctly in chat again.
  - Expired sessions now redirect cleanly to login instead of leaving users in a broken state.
  - Magic links work again for email addresses that contain a plus sign.

## Security

- **Stronger Microsoft/Teams identity binding**
  - Microsoft Entra identities are now matched using stable tenant and user identifiers instead of relying only on email addresses.
  - This reduces the risk of misassignment and strengthens Teams sign-in, especially in hybrid AD scenarios.

- **Agent tokens are no longer stored in plain text**
  - OneAI Agent upload and download tokens are now stored as hashes.
  - This significantly improves protection for sensitive connection credentials.

## Under the Hood

- We substantially unified the connector architecture, creating a cleaner foundation for future integrations.
- We also expanded automated test coverage across core backend utilities to further improve platform stability and predictability.

Thanks to **Pascal**, **Mirko**, **Obaid**, **Justus**, and **Santi** for this release.

*43 commits, 43 PRs, 271 files changed*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
