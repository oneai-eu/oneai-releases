# OneGlue v0.267.0 — What's New

**Release Date:** 2026-08-29

**Duplicate any item to create a similar one in seconds, and let OneGlue keep your domain facts up to date automatically.**

## Duplicate configurations, networks, contacts, locations, domains, and flexible assets

- **A "Duplicate" button on every detail page** for configurations, networks, contacts, locations, domains, and flexible assets opens the create form pre-filled from that item. Unique identifiers — serial number, asset tag, MAC address, and (for domains) the domain name itself — always start empty, since those have to be unique. Fields that usually differ by only a character or two — hostname, IP addresses, network name, VLAN, subnet, and similar — are pre-filled and highlighted, so you can see exactly what to double-check before saving. If you try to save without changing any of the highlighted fields, OneGlue asks you to confirm first.
- The new item records which item it was duplicated from, visible in its history. A restricted (Lockbox) item produces an equally restricted duplicate, and passwords, attachments, and other sensitive linked data are never copied — you always start clean on those.

## Automatic registrar sync for domains

- **Domains with a linked registrar credential now stay up to date on their own.** Each night, OneGlue checks in with the registrar and refreshes the expiry date, nameservers, auto-renew status, and DNSSEC status for you — so a domain you renewed at the registrar stops showing a stale expiry warning.
- Want it sooner? A **"Sync from registrar now"** button on the domain page triggers the same check on demand, and a "last synced" indicator shows you when it last ran. If a sync ever runs into a problem, that shows up clearly on the domain page instead of silently failing.

## Small improvement

- Creating a flexible asset now takes you straight to its detail page, just like configurations, networks, contacts, locations, and domains already do.
