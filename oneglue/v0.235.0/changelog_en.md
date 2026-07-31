# OneGlue v0.235.0 — What's New

**Release Date:** 2026-07-31

**Your stored secrets are safe from accidental overwrites.** When you edit a password — or any stored secret — the value field is now shown only when you explicitly choose to change it, so your browser's password manager can no longer quietly autofill and overwrite the value you already have saved.

## Editing a secret is now overwrite-proof

- **The value stays hidden until you mean to change it** — open a secret to edit and the password/value field shows a "Change value" action instead of an empty box. Rename, re-tag, or adjust permissions with zero risk of touching the stored value.
- **Browser autofill can't clobber it** — the field isn't on the page until you click to change it, so an autofilling password manager has nothing to overwrite.
- **Rotating is still one step** — choose "Change value", type or generate the new secret, and save as before.
- **To view the current value, use Reveal** on the secret's detail page (the authoritative, audit-logged reveal) — the edit form's show/hide only reflects what you are typing.
