# OneGlue v0.283.2 — What's New

**Released:** 2026-10-15

**Invite new customers to get started: the customer answers a few simple questions, and their organization in OneGlue fills itself in.**

## Invite customers to get started

- **One invitation instead of long phone calls.** On an organization's page — or right when you create it — choose "Invite customer to get started". The customer gets an e-mail with a link to a few simple questions in their language (German, English, Spanish or French). It takes about ten minutes.
- **Guided step by step:** address, further sites, IT contact, billing address, devices, documents, and the services and providers they use. At the end the customer sees a summary and submits everything.
- **The answers land where you need them:** as locations, contacts, devices and documents in the customer's organization — marked as customer-provided, so you know what still needs checking.
- **Login details only if the customer wants to.** At the very end they can optionally enter login details. These are stored encrypted, and the customer cannot view them again afterwards.
- **You stay in the picture:** the organization shows whether the customer is invited, filling it in or has submitted. You can send a new invitation or end the onboarding at any time. You set a personal message and the time window (1 to 90 days) when inviting.
- **Their own access, if you want:** at the end the customer can receive a permanent sign-in with a passkey — only if you offered it when inviting, and only for their own organization. Tenant and organization administrators can offer this access.
- **New invitation permission:** colleagues without an administrator role can also invite customers to get started.

## More protection for your data

- **Locked passwords stay locked.** Only tenant administrators and people explicitly entrusted with that specific entry can change a locked entry's permissions or unlock it. Locking removes general role grants, and locked passwords can no longer be used through shared credentials.
- **Uploaded files are better protected.** Every file is first stored, checked and only then released; after that it cannot be swapped unnoticed. Private keys in PEM format uploaded together with SSL certificates are detected and stored encrypted.

## Fixes

- Uploading files could cause a short interruption. This is fixed.
- Images can be pasted into documents again, and an organization's single sign-on settings can be saved again.
- Failed sign-in attempts are now reported clearly and logged.
