# OneGlue v0.269.0 — What's New

**Release Date:** 2026-08-31

**See exactly what a user did — down to which passwords they viewed — in seconds, not hours.**

## Access report for every user

- **Open any user's access report** from Settings → Users — it works for disabled and former users too — and see, in seconds: which passwords they revealed, with names, organizations, and how many times, as a ready-made rotation list you can check off with one click; which pages and organizations they looked at; every access attempt that was denied; and their login sessions, devices, and role changes over time.
- Export the report as JSON or CSV, ready to attach to an offboarding checklist or an incident report.
- This is the tool to reach for the moment someone leaves the company, or when you need to investigate a security concern: instead of piecing the audit log together by hand, you get a direct answer to "what did this person have access to, and what do I need to change now?"

## Clearer audit log

- Entries in the audit log now show who did it, by name — no more guessing from a fragment of an ID.
- The "filter by user" option now finds disabled and former users too, so you can trace what someone did even after they've left.
- CSV exports of the audit log now include the names of the affected items, not just their IDs, and correctly respect whatever filters you had set on screen.

## Heads-up when granting broad access

- If you promote someone with an outside e-mail address to a tenant-wide role, every tenant administrator now gets an e-mail about it — so an unexpected or unauthorized promotion doesn't go unnoticed.

## Smaller fixes

- A handful of reliability and security refinements under the hood.
