# OneGlue v0.261.0 — What's New

**Release Date:** 2026-08-16

**A handful of targeted reliability fixes.** This release smooths out a passkey-management edge case, makes network-address validation clearer, and improves some behind-the-scenes diagnostics.

## More reliable passkey management

- **Adding a passkey now works reliably, every time.** Some logged-in users could occasionally see a "No tenant matches" error when adding an extra passkey from Profile → Security — for example as a backup, or from a new device. Adding a passkey is now handled entirely within your existing signed-in session, so it no longer depends on how you happened to reach OneGlue. This is purely a reliability fix for an existing security feature — no action needed on your part.

## Clearer network validation

- **Helpful, specific errors when entering network addresses.** If you entered a network address with extra bits set beyond its prefix — for example `192.168.2.1/24` instead of the network address `192.168.2.0/24` — OneGlue would sometimes show a generic server error instead of guiding you to the fix. It now shows a clear inline message with the correct suggested address, right where you're typing. This applies both to Networks and to the SSH connection allowlist.

## Behind the scenes

- Improved diagnostic logging for SCVMM inventory synchronization and more reliable internal build-failure tracking, so issues get spotted and resolved faster.
