# OneGlue v0.222.0 — What's New

**Release Date:** 2026-07-26

**Store more than one 2FA method per login — and import them straight from your authenticator app.** A documented account often has several two-factor methods (a primary code, a backup code, more than one app). OneGlue now lets a password carry multiple MFA methods, imports them in bulk from a Google Authenticator export, and no longer silently ignores a QR code it doesn't understand.

## Multiple MFA methods per credential

- **Add several two-factor (TOTP) methods to one password** — for example a "Primary" and a "Backup" — instead of just one. Each method generates its own current code on demand.
- **Your existing codes carry over automatically.** Every password that already had a two-factor code keeps working; it simply becomes the first "Primary" method — nothing to redo.

## Import from Google Authenticator

- **Scan an "export/transfer accounts" QR** from Google Authenticator (and compatible apps) to import several accounts at once, each added as its own MFA method — ideal when you're moving 2FA between phones and want to store the codes in OneGlue.

## Clearer QR scanning

- **The QR scanner no longer silently ignores a code it can't read.** Previously, if you pointed the camera at a QR that wasn't a standard login code, the scanner kept showing "point your camera at the QR code" with no explanation. It now tells you what it sees, and the camera view was tidied up.

## Governed by design

- **MFA methods are protected exactly like the password itself.** Revealing a method's code requires the same permission and the same approval (multi-person quorum, where configured) as revealing the password — no separate, weaker path.
- **Secrets never leave the vault.** MFA seeds are never written to logs, never included in exports, and never exposed to integrations — only the current code is shown to an authorized user on request.
