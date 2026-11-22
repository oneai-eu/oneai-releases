# OneGlue v0.318.2 — What's New

**Released:** 2026-11-22

**Better-looking documents**

- Documents now show mermaid diagrams (flowchart, sequence, state, ER, Gantt and more) right in the reading view, in light and dark mode. A click on a diagram opens a large view with zoom. A diagram with an error shows the error message and its source instead of an empty space.
- Code and script blocks (PowerShell, C#, Python, Bash, SQL, JSON, YAML and more) are highlighted. Each block shows its language and has a copy button. The editor now highlights code too.
- Headings structure a document into clear chapters, and `---` draws a visible divider. Documents with three or more chapters get a table of contents on the right that follows your reading. Every heading has a link you can copy and share.
- `> [!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]` and `[!CAUTION]` show as coloured boxes, tables are easier to read, and "Print → Save as PDF" gives a clean document without navigation.
- oneAI knows this formatting and uses it when it creates or updates documents for you.
- In the reveal dialog of a sensitive document, copied code is cleared from the clipboard after 30 seconds.

**Inviting customers**

- When you invite a customer with a permanent account, the dialog shows how many passwords members of that organization can reveal, with the list. You can restrict each entry right there.
- If your customer does not finish the invitation wizard, OneGlue deletes what they entered 30 days after the invitation expires. The welcome page tells them this before they start.
- The same domain name and the same certificate can now be tracked in several organizations. A duplicate is refused only within one organization.

**Domains and uploads**

- Live DNS and registrar sync use your tenant's registrar access only for domains that a Tenant admin has linked to it.
- A file that the virus scanner cannot check completely, for example an archive nested too deeply, is refused. The message names the limit. A file is only ever stored as clean after a complete check.
