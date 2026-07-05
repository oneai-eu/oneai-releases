# OneGlue v0.166.0 — What's New

**Release Date:** 2026-07-05

Two fixes that were overdue and one new convenience feature.

## Remote sessions: clicking works again

In RDP and VNC sessions, mouse clicks were landing in the wrong place — toward the top-left of the screen rather than where you actually clicked. This made menus and buttons unreliable or completely unusable in fit-scaled sessions. The underlying cause is now fixed, and clicking behaves as expected.

## Shared links now survive login

When someone sends you a OneGlue link — to a device, a document, a network entry, or any other item — opening it while you're logged out no longer drops you on the dashboard after login. You land on the exact item the link pointed to. This works on Passkey login, email login, and SSO.

## New: Copy link button on every item page

Every item detail page (devices, credentials, documents, networks, domains, SSL certificates, flexible-asset records, locations, contacts) now has a "Copy link" button. It puts the right canonical URL on your clipboard in one click — the kind that works reliably as a shared link, without any session or domain confusion.
