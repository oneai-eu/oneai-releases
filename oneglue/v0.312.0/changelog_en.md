# OneGlue v0.312.0 — What's New

**Released:** 2026-11-17

**Stronger sign-in and access protection**

- When you remove someone's access, their running remote sessions (SSH, RDP, VNC, SCVMM) and assistant runs end within a minute.
- The extra confirmation during SSO sign-in (step-up) starts a new session for the browser that completes it and ends the old one.
- When new recovery codes are generated, sessions opened with the old codes end.
- When syncing with Microsoft Entra ID, the last tenant admin is kept.

**Other improvements**

- Newly uploaded editor images show right away.
- The assistant uses "oneAI Standard" by default.
- When email sending is switched off, responses state honestly whether an email was sent.
