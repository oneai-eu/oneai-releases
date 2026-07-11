# OneGlue v0.198.0 — What's New

**Release Date:** 2026-07-12

Smoother remote sessions, and a VM Fleet that's always up to date.

## Remote connections that just work

Working inside a remote RDP or VNC session is now far smoother:

- **Your keyboard layout, respected.** Special characters like `|`, `\`, `@`, `{`, `[`, `]` and umlauts now type correctly. You can **choose the keyboard layout per device** (German by default), so what you press is what you get — no more rewriting commands to dodge a missing pipe.
- **Copy & paste, both ways.** The clipboard now works in **both directions** — paste text into the remote session (Ctrl+V or the *Send clipboard* button) and copy text back out to your own machine. Handy for pasting a command in and copying its output back.

## A fresher, on-demand VM Fleet

- **Refresh on demand.** Each cloud in the VM Fleet now has a **Sync** button to pull its latest VM inventory the moment you want it.
- **Automatic refresh after power actions.** After you Start, Stop or Restart a VM, the fleet refreshes itself shortly afterwards, so the status you see reflects what actually happened.
- **An honest "last synced" time.** The "last synced" timestamp now shows when the inventory was **last checked**, not just when something last changed — so you can trust it at a glance.
