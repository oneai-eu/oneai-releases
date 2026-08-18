# OneAI v2026.08.18 — Zusammenarbeit, Live-Dashboards und sichere Integrationen

**Release Date:** 2026-08-18

## Highlights

**Präsentationen gemeinsam in Echtzeit bearbeiten**

KI-generierte Präsentationen werden zum gemeinsamen Arbeitsbereich: Mehrere Personen können gleichzeitig Folien, Texte, Tabellen und Diagramme bearbeiten. Änderungen sind sofort sichtbar, inklusive Anzeige der aktiv Mitwirkenden. Präsentationsvorlagen lassen sich zudem wiederverwenden, damit Teams schneller mit einem konsistenten Format starten.

**Live-BI-Dashboards aus euren Daten erstellen**

Erstellt interaktive Kennzahlen und Diagramme direkt per AI Chat auf Basis eurer oneData-Tabellen. Neue Dashboards stehen in einem eigenen Bereich bereit; CSV-Dateien können importiert und Ergebnisse wieder exportiert werden. Danke an Mirko für dieses neue Fundament für datengetriebene Entscheidungen.

**Integrationen zentral und granular verwalten**

Die neue Integrationen-Seite macht Verbindungen zu Outlook, n8n, HubSpot, Lexware Office und weiteren Diensten transparenter und besser steuerbar:

- Mitarbeitende verwalten ihre eigenen Verbindungen an einem zentralen Ort.
- Einzelne Integrationen können persönlich deaktiviert werden.
- Admins können Integrationen organisationsweit sperren oder auf bestimmte Projekte begrenzen.
- Outlook-E-Mails können jetzt direkt aus OneAI versendet werden.

**Neuer Connector: Lexware Office**

Bindet Lexware Office an OneAI an, um Buchhaltungsdaten sicher zu durchsuchen und mit KI-gestützten Werkzeugen weiterzuverarbeiten.

## Verbesserungen

**Produktiveres Arbeiten im AI Chat**

- Bereits gesendete Nachrichten können jetzt bearbeitet werden. OneAI erstellt anschließend eine neue Antwort auf Basis eurer überarbeiteten Anfrage.
- Der Chat-Composer wurde klarer und effizienter gestaltet.
- Uno steht jetzt als schwebendes Chat-Fenster zur Verfügung und bleibt damit näher an eurem aktuellen Arbeitskontext.

**Zuverlässigere Dokumente und Datenarbeit**

- KI-Änderungsvorschläge werden beim Klick auf „Übernehmen“ jetzt zuverlässig tatsächlich im Dokument angewendet.
- Die Verarbeitung von Daten und die Nutzung von Datensatz-Werkzeugen wurden weiter optimiert.
- Verbesserungen an Compliance-Ansichten unterstützen Admins bei der Nachvollziehbarkeit relevanter Aktivitäten.

## Sicherheit

Dieses Release enthält umfassende Sicherheits- und Compliance-Härtungen für den sicheren Einsatz von OneAI mit Unternehmensdaten:

- Ein interner Recherche-Modus kann keine Inhalte mehr ohne ausdrückliche Nutzerbestätigung erstellen.
- Löschende Aktionen werden jetzt bei allen betroffenen Werkzeugen zuverlässig und deutlich als unwiderruflich markiert.
- n8n-Zugangsdaten werden verschlüsselt gespeichert.
- Beim Entfernen eines Mitglieds werden zugehörige externe Verbindungen, etwa zu Outlook, zuverlässig deaktiviert.
- Zusätzliche Schutzmaßnahmen verbessern die Absicherung von OAuth- und SSO-Sitzungen, Mandantentrennung, Rollen und Berechtigungen sowie n8n-Workflows.
- CSV-Exporte sind besser gegen Formel-Injection geschützt; Compliance- und Chat-Protokolle folgen stärker dem Prinzip der Datenminimierung.

Danke an Mirko und Pascal für die wesentlichen Beiträge zu diesen Sicherheitsverbesserungen.

## Wichtige Hinweise zu Änderungen

Im Rahmen der neuen Rechte- und Integrationsarchitektur wurden bestehende Zugriffs- und Konfigurationspfade vereinheitlicht. Admins sollten nach dem Update insbesondere Folgendes prüfen:

- Organisationsweite Freigaben und Projektbeschränkungen für Integrationen
- Bestehende n8n- und Outlook-Verbindungen
- Rollen und Berechtigungen für externe Werkzeuge

So stellt ihr sicher, dass eure gewünschten Zugriffsvorgaben weiterhin gelten.

## Unter der Haube

Neben den sichtbaren Neuerungen wurden LLM Routing, Dokumentenverarbeitung, Datenwerkzeuge und die Plattformarchitektur weiterentwickelt, um OneAI leistungsfähiger und robuster zu machen.

Vielen Dank an Pascal, Mirko, Justus, Oliver, Santi und Obaid für ihre Beiträge zu diesem Release.

_Release-Umfang: 660 Commits, 2.112 geänderte Dateien und 655 Pull Requests._

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
