# OneGlue v0.233.0 — What's New

**Release Date:** 2026-07-29

**A home for your recovery codes.** OneGlue can now store and manage the one-time recovery / backup codes a service hands you — right next to that service's password and authenticator, as a managed method on the secret.

## Recovery codes as a managed MFA method

- **Generate and store a set of one-time codes** for a login — shown once at creation with copy + PDF download, then kept encrypted at rest like every other secret.
- **Reveal them when you need one** — under the same permissions and approvals that guard the secret itself, with every reveal written to the audit log.
- **Mark a code as used** to keep track, see remaining-of-total at a glance, and regenerate a fresh set when they run low (the old set stops working, with a clear warning).

## Agent-managed hosts: worker status back on the page

- For a host managed by a GlueAgent, the configuration page again shows a read-only overview of its worker / `.glue` state, host facts, and most recent automation runs — right where you'd expect it, no digging required.
