# OneGlue v0.206.0 — What's New

**Release Date:** 2026-07-14

**Connect straight to a virtual machine.** Open an RDP session to any of your SCVMM VMs directly from OneGlue — tunnelled securely through your on-site agent, with one-click domain login.

## Remote Desktop to an SCVMM VM

- **One click from the VM.** Every SCVMM VM now has a **Remote Desktop** action — no need to look up its IP or jump through a host.
- **Tunnelled through your agent.** The session is relayed by the OneGlue agent already running on your SCVMM gateway, so it reaches VMs on internal networks the browser could never touch directly. The connection is brokered per-session and single-use.
- **One-click domain login.** If a shared/domain credential covers the VM (via its SCVMM cloud or its organization), OneGlue logs you in automatically as `DOMAIN\user`. When several credentials apply, you pick; the password is injected at the agent only and **never reaches your browser**.
- **Smart address handling.** OneGlue uses the VM's known IP address; when a VM has several, you can choose, and if none is reachable you get a clear message instead of a hang.

## Governed by design

- A dedicated, **org-grantable "connect to VM" permission** — separate from who may manage credentials.
- **Cross-organization and cross-tenant access is impossible** by design.
- **Every session is recorded in the audit log** (opened, closed, idle-timeout) — metadata only, never the secret.
