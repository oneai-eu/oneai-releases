# OneGlue v0.315.0 — What's New

**Released:** 2026-11-19

**More robust uploads**

- Uploads are more robust. If an upload fails, OneGlue shows the reason and you can upload the next file right away without reloading the page. A file you drag onto a new document is uploaded exactly once. Several uploads at the same time are now checked for viruses within seconds, and the virus signatures are updated every 2 hours. For a document with an attached file, "Sensitive" cannot be selected; OneGlue shows a short hint.

**Invitation wizard**

- When your customer enters data through the invitation wizard, OneGlue shows links in those documents to your team as text until someone confirms them with "Accept", even before the customer submits. Clicking "Submit" again re-sends a notification to your team that got lost. When a customer's access ends, OneGlue also revokes all of their API keys.

**Agents and sign-in**

- When a GlueAgent is revoked, paused, removed or re-enrolled, OneGlue closes its connection and every remote session over it within seconds. After every sign-in with a Recovery code, the account receives a notice mail with the time, approximate IP range and device. The Active sessions page now shows Android and iOS devices correctly.
