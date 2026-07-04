# OneGlue v0.165.0 — What's New

**Release Date:** 2026-07-04

The groundwork for a new capability: OneGlue can now run small, signed plugins on your connected devices — and the first one gives you a live view of your AI compute nodes.

## Device plugins — a secure foundation

OneGlue's device agent can now load small, purpose-built plugins that a Tenant-Admin provisions straight from the OneGlue interface — no server access needed. Every plugin is cryptographically signed and verified on the device before it runs, and executes sandboxed with least privilege. This is the foundation we'll build richer device integrations on.

## First plugin: live insight into your AI compute nodes

The first plugin is a read-only reader for onestack GPU nodes. Once provisioned onto a device, it surfaces — right on the device's page in OneGlue:

- **Hardware & engine facts** — GPU model, VRAM, driver/CUDA, MIG layout, the running inference engine + image, and the loaded model(s): name, quantization, context length, LoRA adapters.
- **Live telemetry** — VRAM in use, GPU utilization & temperature, plus per-deployment engine health and response latency — refreshed automatically, with a clear "last seen" indicator.
- **A durable record** — the stable facts are also written to a searchable "AI Compute Node" asset linked to the device, so your documentation stays current on its own.

The reader is strictly read-only and never sees or transmits any secrets.
