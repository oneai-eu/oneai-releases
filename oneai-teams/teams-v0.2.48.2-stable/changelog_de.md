# OneAI teams-v0.2.48.2-stable — Sicherheits- und Monitoring-Härtung

**Release Date:** 2026-08-11

## Sicherheit

Wir haben eine Sicherheitslücke geschlossen, durch die ein Monitoring-Endpunkt unter bestimmten Umständen über alternative Schreibweisen erreichbar sein konnte. Der Zugriffsschutz ist nun konsistent durchgesetzt.

Zusätzlich wurden mehrere Schutzmaßnahmen in den Betriebsdiensten verstärkt:

- Sensible Informationen in Herunterfahrmeldungen werden zuverlässiger redigiert.
- Die Prüfung von Verschlüsselungsschlüsseln wurde beim Start vereinheitlicht.
- Sehr lange Pfadangaben können Log-Ausgaben nicht mehr beeinträchtigen.

## Verbesserungen

- Systemwarnungen von Servern werden nun zuverlässig im Monitoring sichtbar. So können Betriebsteams Auffälligkeiten früher erkennen und gezielter reagieren.
- Die Darstellung von Fehlerdaten im Monitoring wurde klarer strukturiert.

## Unter der Haube

- Die automatische Prüfung nach Deployments funktioniert wieder zuverlässig.
- Release-Dokumentation und Versionsinformationen wurden aktualisiert.

Danke an **Mirko** für die Umsetzung dieser Sicherheits- und Betriebsverbesserungen.

_13 Commits · 32 geänderte Dateien_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
