# OneAI v0.3.6-beta — Compliance-Kontrolle, smartere Chats und volle GPT‑5.4‑Power

**Release Date:** 2026-03-27

Mit v0.3.6-beta machen wir OneAI noch sicherer, leistungsfähiger und intuitiver im täglichen Einsatz. Dieses Release bringt ein vollständig überarbeitetes Compliance-System, einen deutlich verbesserten Chat-Workflow, erweiterte GitHub-Filteroptionen und Unterstützung für alle neuen GPT‑5.4-Modelle.

## Highlights

### Compliance-System mit Risikostufen und Blockierfunktion
Das Compliance-Modul wurde grundlegend neu gedacht. Admins können jetzt **pro Risikostufe definieren**, ob Anfragen lediglich protokolliert oder aktiv blockiert werden.

- Konfigurierbare Aktionen je Risikostufe: **Audit** oder **Audit & Blockieren**
- Optionaler synchroner Modus für sofortige Blockierung riskanter Anfragen
- Erweiterte Audit-Logs für:
  - Chat-Nachrichten
  - Mitglieder-Einladungen
  - Änderungen an Space-Berechtigungen
- Klar strukturierte, tab-basierte Compliance-Einstellungen

Damit wird OneAI noch besser steuerbar im Sinne des EU AI Act und interner Governance-Vorgaben.

Vielen Dank an **Oliver**, der dieses Rework federführend umgesetzt hat.

### Neuer Chat-Workflow: Lazy-Erstellung, Inline-Umbenennung & Artefakte im Chat
Der Chat wurde deutlich schlanker und intuitiver.

- Chats werden **erst beim Senden der ersten Nachricht erstellt** (keine leeren Chats mehr)
- Chats lassen sich direkt in der Liste **inline umbenennen**
- Artefakte werden **direkt im Chat angezeigt** statt in einem separaten Dialog
- Leere oder fehlerhafte Nachrichten werden konsequent abgefangen

Das Ergebnis: weniger Reibung, klarere Listen, stabilere Chats. 

Großes Dankeschön an **Pascal** für diese umfassende Verbesserung des Kern-Workflows.

### GitHub-Connector mit präziser Dateifilterung
Beim Verbinden von GitHub-Repositories könnt ihr jetzt exakt steuern, welche Dateien synchronisiert oder eingebettet werden.

- Include- und Exclude-Muster (z. B. `*.md`, `docs/`, `test*`)
- Separater Filter für Synchronisation vs. Embedding
- Bessere Hinweise bei API-Limits
- Passende Datei-Icons für mehr Übersicht

So reduziert ihr unnötige Embeddings, spart Kosten und erhöht die Qualität eurer Wissensräume.

### Alle GPT‑5.4-Modelle verfügbar
Ab sofort stehen euch alle neuen GPT‑5.4-Varianten zur Verfügung:

- **Nano & Mini** – schnell und kosteneffizient
- **Standard** – starkes Allround-Modell mit großem Kontext
- **Pro** – maximale Leistungsfähigkeit für komplexe Analysen

Damit könnt ihr Modellwahl noch präziser an Anwendungsfall, Budget und Governance-Vorgaben ausrichten.

### Echtzeit-Aktivitäts-Hub
Ein neuer zentraler Aktivitäts-Stream zeigt in Echtzeit:

- Synchronisierungen
- Dokumentenverarbeitung (Embedding)
- Destillationen

Alles gebündelt in einer Ansicht mit Fortschrittsanzeige – besonders hilfreich bei großen Wissensräumen.

## Verbesserungen

- Projekte lassen sich nach **Name, Erstelldatum oder Aktualisierung** sortieren
- Bestätigungsdialog beim Löschen von Chats
- Admin-Rechte in Spaces erzwingen automatisch Schreibrechte (konsistentes Berechtigungsmodell)
- Komplett überarbeitetes System für Projekt-Anweisungsvorlagen mit neuer Oberfläche und Showcase-Funktion
- Optimierte weclapp-Vorlagen für bessere Extraktionsqualität
- Stabilere Verarbeitung von Chat-Nachrichten (keine Fehler mehr durch leere Inhalte)

Danke an **Mirko** für den Neuaufbau des Vorlagensystems und an **Santi** für seinen ersten Beitrag zur Projektsortierung und zum Löschdialog.

## ⚠️ Security

Wir haben die Sicherheitsarchitektur weiter gehärtet:

- **Multi-Tenancy-Isolation verbessert:** Teamzuordnungen werden strikt gegen die Organisation validiert
- **WebAuthn-Registrierung abgesichert:** Challenge-Verifikation erfolgt jetzt vollständig innerhalb der Datenbanktransaktion (Schutz vor Race Conditions)

Diese Maßnahmen erhöhen die Mandantentrennung und Authentifizierungssicherheit deutlich.

## Unter der Haube

- Migration auf **Vite 8** für eine modernere Build-Infrastruktur
- 65 Dependency-Updates
- Upgrade des Mistral SDK auf v2
- Interne Performance-, Stabilitäts- und Code-Optimierungen

---

Ein großes Dankeschön an **Pascal, Oliver, Mirko und Santi** sowie an unsere automatisierten Updates.

_24 PRs · 147 Dateien geändert · 14.422 Ergänzungen · 5.595 Löschungen_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
