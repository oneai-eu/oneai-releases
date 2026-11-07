# OneGlue v0.305.0 — What's New

**Released:** 2026-11-07

**If your Tenant requires two Passkeys, a locked account now sets up its second Passkey right after signing in.**

- **Mandatory page for the second Passkey.** An account that is locked because it lacks a second Passkey signs in with its Passkey as usual and lands on a page of its own. There it can only add a Passkey, see its Passkeys and sign out. Until now, such an account was locked completely until a new Passkey had been registered through the re-enrollment link.
- **The account works again automatically.** As soon as the second Passkey is added, the account is active again, without any admin action. The audit log records this.
- **No other access before that.** Until the second Passkey exists, OneGlue refuses every other request from this account, including through API keys and MCP. Signing in with a recovery code stays refused for locked accounts.
- **Without a Passkey.** Anyone who no longer has a Passkey requests the re-enrollment link on the Recovery code page, as before.
