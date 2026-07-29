# OneGlue v0.231.0 — Neuigkeiten

**Veröffentlicht am:** 2026-07-29

**Sicherere Browser-Verbindungen für Passkey-Safe.** Dieses Release stärkt den Schritt, in dem Sie einen Browser verbinden, um sich mit einem gespeicherten Passkey anzumelden — der Bestätigungscode ist schwerer zu erraten, nicht abgeschlossene Verbindungsanfragen werden aufgeräumt, und am Rand kommt eine zusätzliche Schutzschicht hinzu. Alles andere rund um Ihre Passkeys bleibt exakt wie bisher.

## Gehärtetes Browser-Verbinden

- **Der Bestätigungscode ist jetzt abgesichert** — ein Verbindungsversuch, der wiederholt den falschen Code eingibt, wird gestoppt, sodass niemand sich durch Codes probieren kann, um einen nicht autorisierten Browser anzuhängen.
- **Nicht abgeschlossene Verbindungsanfragen laufen von selbst ab** — eine gestartete, aber nie abgeschlossene Verbindungsanfrage bleibt nicht länger bestehen; sie wird automatisch aufgeräumt.
- **Eine zusätzliche Schicht am Rand** — der Verbindungsschritt ist jetzt ratenbegrenzt, bevor er überhaupt die App erreicht, was automatisierten Missbrauch ausbremst.

## Sonst ändert sich für Sie nichts

- Ihre gespeicherten Passkeys, Berechtigungen, Freigaben und der Audit-Trail bleiben unangetastet. Dies ist ein Sicherheits-Härtungs-Release für den Browser-Verbindungs-Flow aus der vorherigen Version.
