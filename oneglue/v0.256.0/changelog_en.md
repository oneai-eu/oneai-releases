# OneGlue v0.256.0 — What's New

**Release Date:** 2026-08-12

**A lighter platform and a cleaner audit trail.** This release tunes background synchronization and internal database queries to reduce load, and makes the audit log a more trustworthy record by cutting down repetitive automated noise while keeping every real action fully accounted for.

## Faster and lighter under the hood

- **Background synchronization runs on a gentler cadence.** We tuned how often OneGlue checks for updates to relay to connected systems, plus several internal database queries — reducing database load without changing what gets synced or when your own actions take effect.
  > **Note:** If your workspace is connected to oneAI, permission-revocation hints now reach oneAI within about a minute instead of about ten seconds. This only affects how quickly oneAI's own reference index catches up — OneGlue continues to enforce every permission change immediately on its own side, so access control itself has no gap.
- **The sessions page is lighter on the database.** "Last used" timestamps on your active sessions now update at most once per minute instead of on every single request. Since the page already shows times to the nearest minute, there's no visible change.

## A cleaner, more trustworthy audit log

- **Less noise from automated activity.** Routine background actions — like periodic synchronization ticks — no longer flood the audit log with a stream of near-identical entries. Unchanged activity is now rolled up into periodic summary entries that show how many times it happened, so your own actions and real changes are easy to find. Nothing is lost: every actual change is still recorded the moment it happens, and the summaries account for everything that was folded in.
- **Automated actions are now correctly attributed to the system**, not to whichever administrator's credentials happen to be used behind the scenes — so audit entries no longer misattribute routine background work to a person.
- **Fixed a false-alarm class** in token-cleanup reporting that could make normal, expected token handling look like an anomaly.
- **Successful automated actions now record network origin details**, matching what failed attempts already recorded — closing a small blind spot for anyone reviewing the audit trail.
