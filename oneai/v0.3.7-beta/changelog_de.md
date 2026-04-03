# OneAI v0.3.7-beta — Smartere Suche, persönliche Personas & umfassende Audit-Reviews

**Release Date:** 2026-04-03

Dieses Release bringt eine der größten Qualitätsverbesserungen für Suche, Compliance und Personalisierung seit Start der Beta. Mit intelligenter Hybrid-Suche, frei konfigurierbaren Personas und einem neuen Audit-Review-System wird OneAI noch präziser, sicherer und individueller.

## Highlights

### Intelligentere Dokumentensuche mit Hybrid-Suche und Reranking
Die Suche in Wissensräumen wurde grundlegend verbessert.

OneAI kombiniert jetzt **klassische Stichwortsuche (BM25)** mit **KI-basierter Vektorsuche** und sortiert Ergebnisse zusätzlich per Relevanz-Reranking. Das Ergebnis: deutlich präzisere Antworten, insbesondere bei komplexen oder mehrdeutigen Anfragen.

- Bessere Trefferqualität bei Fachbegriffen und Synonymen
- Stabilere Ergebnisse bei großen Dokumentmengen
- Relevanzgewichtung direkt im Antwortprozess

Danke an Pascal – die neue Sucharchitektur hebt unsere Dokumentenverarbeitung auf ein neues Niveau.

### Eigene Personas erstellen und teilen
Ihr könnt jetzt **persönliche KI-Personas** anlegen – z. B. für Vertrieb, Legal oder IT.

- Private Personas nur für euch sichtbar
- Geteilte Personas durch Admins organisationsweit nutzbar
- Neue "Meine Personas"-Übersicht im Profil

Personas werden nun flexibel pro Chat ausgewählt und sind nicht mehr an Projekte gebunden.

### Neues Audit-Review-System für Compliance
Compliance-Teams erhalten ein leistungsfähiges Review-System:

- Markierte Nachrichten prüfen, freigeben oder blockieren
- Vollständige Prüfhistorie mit Zeitstempel und Reviewer
- Neue Detailansicht mit Chatverlauf und Quellen

Chats können bei Bedarf automatisch blockiert werden, bis eine Freigabe erfolgt. Danke an Oliver für die Umsetzung dieses zentralen Compliance-Features.

### Projekte individuell anpinnen & Berechtigungen im Blick
Projekt-Pinning ist jetzt **nutzerindividuell** – eure Prioritäten sind nicht mehr von anderen abhängig.

Zusätzlich seht ihr direkt:
- Ob ihr Schreibrechte habt
- Ob ihr Projekt-Admin seid

Das sorgt für mehr Transparenz und weniger Missverständnisse in der Zusammenarbeit.

### GitHub Code Intelligence v2
Unsere GitHub-Integration analysiert Repositories jetzt deutlich tiefer:

- Erkennung von Import-Beziehungen
- Analyse von Funktionsaufrufen zwischen Dateien
- Automatisch erzeugte Code-Graphen pro Verzeichnis

Damit wird technisches Wissen aus Codebasen noch besser durchsuchbar und nutzbar. Danke an Mirko für dieses starke Upgrade.

## Verbesserungen

- KI-generierte Bilder können jetzt direkt in Projekten gespeichert werden
- Erstellungsdatum und Ersteller werden in Projekten angezeigt
- Die KI berücksichtigt euren Namen und eure Rolle für persönlichere Antworten
- Große eingefügte Inhalte erscheinen als kompakte Dokument-Chips mit Vorschau
- Vereinheitlichter Einladungsdialog für Spaces (Nutzer & Teams in einem Schritt)
- WebAuthn erweitert: Unterstützung für zusätzliche Passkey-Algorithmen
- Outlook-Synchronisierung robuster bei komplexen Nachrichten-IDs

## Fehlerbehebungen

- Deutlich stabilere Chat-Verbindungen bei WebSocket-Problemen (Nachrichten bleiben erhalten und können erneut gesendet werden)
- Dokumentenverarbeitung robuster bei leeren Dateien und temporären Fehlern
- Benachrichtigungen bei Massen-Embedding gebündelt statt einzeln
- SSO-Redirects funktionieren jetzt zuverlässig
- Upload-Fehler werden klar als Fehlermeldung angezeigt
- Research-Modus respektiert Bestätigungsflows korrekt
- Externe Links funktionieren wieder wie erwartet

## Sicherheit

Wir haben mehrere sicherheitsrelevante Verbesserungen umgesetzt:

- **API-Schlüssel werden bei SCIM-Deaktivierung sofort widerrufen**
- Stripe-Webhooks validieren Organisationskontext strikt
- Audit-Abfragen sind mandantenrein abgesichert

Diese Maßnahmen stärken die Zugriffskontrolle und unterstützen EU-AI-Act-konforme Governance.

## Breaking Changes

### Re-Embedding aller Wissensräume erforderlich
Die Sucharchitektur wurde auf Hybrid-Vektoren umgestellt. Daher werden alle Dokumente automatisch neu verarbeitet.

- Migration setzt Embedding-Status auf „pending“
- Die Embedding-Queue verarbeitet alle Dateien erneut
- Bitte plant ausreichend Kapazität für das initiale Re-Indexing ein

### Personas nicht mehr projektgebunden
`defaultPersonaId` wird nicht mehr unterstützt. Personas werden nun frei pro Chat ausgewählt.

Migration erfolgt automatisch.

### Projekt-Pinning umgestellt
Pins sind jetzt nutzerspezifisch statt global. Bestehende Pins wurden automatisch migriert.

## Unter der Haube

Neben 47 Dependency-Updates wurden Stabilität, Fehlertoleranz und Retry-Mechanismen im gesamten System weiter verbessert.

---

Vielen Dank an Pascal, Oliver, Mirko, Justus und das gesamte Team für 39 Commits in diesem Release.

_39 Commits · 38 PRs · 160 Dateien geändert_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
