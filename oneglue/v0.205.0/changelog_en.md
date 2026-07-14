# OneGlue v0.205.0 — What's New

**Release Date:** 2026-07-14

Use **one credential across many machines**. A single Windows domain account (or any shared login) can now be assigned to many devices and VMs and auto-injected on connect — no more copying the same password onto every machine.

## Shared / domain credentials

- **One password, many machines.** Assign a single credential to a set of targets: **specific configurations**, **all VMs of an SCVMM cloud**, or the **whole organization**.
- **Auto-login on connect.** When you open an RDP or VNC session to a covered machine, the shared credential is offered in the picker and injected automatically (`DOMAIN\user` login). The password is injected at the connection worker only — it **never reaches your browser**.
- **Rotate once, applies everywhere.** Update the password in one place and every machine it covers uses the new value.

## Manage it where you work

- **Share / assign from any password.** A password now has a **"Share / assign machines"** action to define which machines it covers.
- **Promote an existing machine password.** Turn a password that's embedded on one machine into a shared credential in one step — the original machine keeps its access automatically.
- **Org-level "Shared Credentials" view.** Manage all shared credentials and their scopes from within the organization, not just in tenant settings.
- **See it on the machine.** A configuration's detail page now shows **"Shared credentials that apply here"**, so you always know which shared logins cover a machine.

## Governed by design

- **Separate, org-grantable permissions** — using a shared credential and managing its scope are distinct grants, assignable per organization.
- **Cross-organization and cross-tenant sharing is impossible** by design.
- **Every use and every scope change is recorded in the audit log** (metadata only — never the secret value).
