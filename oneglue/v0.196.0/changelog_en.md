# OneGlue v0.196.0 — What's New

**Release Date:** 2026-07-11

Take control of your virtual machines — and a smoother fleet along the way.

## Start, stop and restart VMs — right from OneGlue

You can now **power your SCVMM virtual machines directly from OneGlue**: Start, Stop and Restart, straight from the VM Fleet. Every action asks for a **confirmation** first — a simple confirm for Start/Restart, and typing the VM's name for the riskier stops — and every action is **recorded in the audit log** (who, when, why). Stops and restarts come in two flavours: a **graceful** guest shutdown by default, or a **hard** power-off when you need it. Access is permission-controlled — an organization's members can be granted the ability to manage only their own organization's VMs.

## A clearer, faster VM Fleet

- The **VM Fleet** now appears in an organization's menu **and** as a tile on its dashboard the moment SCVMM clouds are mapped to it — no page refresh needed.
- **Click anywhere on a VM row** to open its details (previously only the name/status was clickable).

## Cleaner SCVMM server removal

Removing an SCVMM server now performs a **complete, confirmed cleanup** — its cloud mappings, cached VM inventory and generated cloud assets are all removed in one step (with a type-to-confirm safeguard), so nothing is left behind.
