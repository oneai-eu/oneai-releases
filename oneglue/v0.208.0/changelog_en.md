# OneGlue v0.208.0 — What's New

**Release Date:** 2026-07-15

**Reach a VM even when its network can't be reached.** OneGlue can now open a virtual machine's **console through its Hyper-V host** — so you can get to VMs on isolated customer networks that a direct remote-desktop connection can never touch.

## Console access via Hyper-V

- **A new "Console (via Hyper-V)" action** on every SCVMM VM. Instead of connecting to the VM's own address, OneGlue connects through the **Hyper-V host** and opens the VM's console — exactly like standing at its screen, even before the OS has booted or when the VM sits on a network you can't route to.
- **Works where direct RDP can't.** This is the answer for VMs in isolated/segmented customer networks: the session is relayed by the on-site OneGlue agent to the Hyper-V host, never needing a route to the VM itself.
- **Secure attention (Ctrl-Alt-Del)** is one click away for the login screen.
- **One-click credential reveal for the login.** The domain/shared credential that applies to the VM can be revealed for you to type at the console (console access authenticates to the host; the guest login stays in your hands) — every reveal is audit-logged.

## Choose the RDP security mode

- When connecting **directly** to a machine by remote desktop, you can now pick the **security mode** — **NLA** (default) or **TLS** — for machines whose RDP server refuses the default negotiation.

## Governed by design

- Console access reuses the **org-grantable "connect to VM" permission** — no separate credential-management right.
- **Cross-organization and cross-tenant access is impossible** by design.
- **Every console session and every credential reveal is recorded in the audit log** — metadata only, never the secret.
