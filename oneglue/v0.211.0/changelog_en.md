# OneGlue v0.211.0 — What's New

**Release Date:** 2026-07-17

**Export every VM in a cloud to a billing-ready CSV in one click.** From the VM Fleet view, you can now download a complete inventory of all virtual machines in a cloud — with totals included, ready for reporting and billing.

## Per-cloud VM inventory export (CSV)

- **A new "Export CSV" action** in the VM Fleet view exports all virtual machines in the selected cloud. Each row includes vCPU, RAM, storage, tags, and any SCVMM custom properties you maintain — for example a customer number or article code stored in your SCVMM.
- **Totals row included.** The export automatically sums vCPU, RAM, and storage across the cloud, so the file is ready for billing or reporting without further calculation.
- **Custom property column names.** Custom properties can be given readable column headers per SCVMM server, so your export headers match your own naming conventions rather than SCVMM's internal field names.

## Governed by design

- The export is **confined to your organization** — cross-organization and cross-tenant access is impossible.
- **No secret values are included** in the export — only inventory metadata.
- The export is **gated by the existing fleet-view permission** — no separate export right to manage.
