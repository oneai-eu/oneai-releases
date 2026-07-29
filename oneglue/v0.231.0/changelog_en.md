# OneGlue v0.231.0 — What's New

**Release Date:** 2026-07-29

**Safer browser connections for Passkey-Safe.** This release strengthens the step where you connect a browser to sign in with a stored passkey — making the confirmation harder to guess, cleaning up connection requests you never finished, and adding an extra layer of protection at the edge. Everything else about your passkeys stays exactly as it was.

## Hardened browser-connect

- **The confirmation code is now guard-railed** — a connection attempt that keeps entering the wrong code is stopped, so no one can grind through codes to attach a browser you didn't authorize.
- **Unfinished connection requests expire on their own** — a connect request you started but never completed no longer lingers; it's cleaned up automatically.
- **An extra layer at the edge** — the connect step is now rate-limited before it even reaches the app, blunting automated abuse.

## Nothing else changes for you

- Your stored passkeys, permissions, sharing, and audit trail are untouched. This is a security-hardening release for the browser-connect flow introduced in the previous version.
