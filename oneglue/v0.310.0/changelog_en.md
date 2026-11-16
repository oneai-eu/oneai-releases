# OneGlue v0.310.0 — What's New

**Released:** 2026-11-16

**AI Assistant**

- If you don't pick a model, the assistant uses a model that is enabled in your oneAI organization. The model picker shows it as "Default (model name)". If you pick a model yourself that is not enabled, the run does not start and the message lists the available models.
- The assistant receives large lists and documents in shortened form, together with the total count. If a request is still too large or oneAI cannot be reached, you see what happened and what you can do.

**Assistant access on Linux devices**

- On new Linux installations of the GlueAgent, OneGlue creates a restricted account without administrator rights and sets up the assistant's access by itself. Existing devices get the access automatically once their GlueAgent runs version 0.5.32 or newer. Otherwise the "Assistant access" card on the configuration page shows the one-time command and the "Set up" button.
- The assistant's diagnostics run through the GlueAgent while it is connected.

**Other improvements**

- Network cards that a GlueAgent no longer reports are removed from the configuration. Short-lived container networks (e.g. Docker) are not imported. Details you entered yourself are kept.
- Tenant admins can revoke personal API keys. When a user is deactivated, their keys are revoked automatically.
