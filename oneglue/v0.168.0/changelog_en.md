# OneGlue v0.168.0 — What's New

**Release Date:** 2026-07-06

Steadier connections to your devices, and your AI compute nodes now show the full picture.

## More reliable remote sessions and device connections

We tracked down and fixed an intermittent drop in the link between OneGlue and your connected devices. Remote sessions (RDP/VNC) and device-agent connections now stay connected far more consistently, and when a reconnect is needed it happens in about a second instead of stalling for up to a minute. Fewer interruptions during your work, and faster recovery when the network hiccups.

## AI Compute Node monitoring now shows the full picture

The AI compute node insight we introduced recently now displays its complete detail reliably. On the device's page in OneGlue you'll see:

- **Hardware & engine facts** — GPU model and VRAM, MIG layout, the running inference engine and image, and the served model: name, quantization, context length, and LoRA adapters.
- **Live telemetry** — VRAM in use, GPU utilization and temperature, plus per-deployment engine health — refreshed automatically with a clear "last seen" indicator.
- **A durable, searchable record** — the stable facts are also written to an "AI Compute Node" asset linked to the device, so your documentation stays current on its own.

These details now populate correctly and keep themselves up to date. As before, the reader is strictly read-only and never sees or transmits any secrets.
