# OneGlue v0.161.0 — What's New

**Release Date:** 2026-07-03

This release makes connecting a device to OneGlue with the built-in agent simpler and smarter — one command to install, and no more accidental duplicate device entries.

## One-command device agent install

Connecting a machine to OneGlue with the device agent used to take several manual setup steps. Now the pre-configured agent you download from OneGlue installs itself end to end.

- **One command, fully set up.** On a Linux host, the downloaded installer now registers the agent as a managed background service, runs it under a dedicated low-privilege account, and connects it to OneGlue automatically — no manual service configuration.
- **Runs safely in the background.** The agent keeps running across reboots, dials out only (it opens no inbound ports), and operates under a locked-down, least-privilege profile.

## Smarter device matching — no more duplicates

When a machine you've already documented in OneGlue connects its agent, OneGlue now recognizes it and attaches to the existing record instead of creating a second one.

- **Matches the device you already have.** The agent is matched to an existing configuration by strong signals (such as the hardware network address), so a machine you already added doesn't show up twice.
- **When it isn't sure, it asks.** If OneGlue can't confidently match an agent to an existing device, it flags it for your review instead of guessing — you link it in one click.
- **Your details are kept.** Information you curated (like a device's full name) is preserved and never overwritten by the agent's automatic report.
