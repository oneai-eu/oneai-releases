# OneAI 1.0 — Production-Ready mit Credit-Pool, Partner-Programm & 80+ Verbesserungen

**Release Date:** 2026-05-06

Mit OneAI 1.0 verlassen wir offiziell die Beta-Phase.

Dieses Release macht OneAI bereit für den produktiven Unternehmenseinsatz: mit zentraler KI-Kostensteuerung, einem Partner-Programm für Managed Organisations, Zwei-Faktor-Authentifizierung per App und einer komplett überarbeiteten Dokumentenverarbeitung.

## Highlights

### Credit-Pool für zentrale Kostensteuerung
Organisationen im Team-Plan erhalten jetzt ein **zentrales KI-Budget**.

- Admins können **Nutzerbudgets individuell vergeben**
- Überschreitungen gezielt steuern
- Automatische **Schwellenwert-Benachrichtigungen per E-Mail**
- Dashboard zeigt reale Gesamtkosten – inklusive gecachter Anfragen

Damit wird KI-Nutzung planbar, transparent und kontrollierbar – ideal für Compliance- und Finance-Teams.

Großer Dank an **orehman3035**, der das neue Credit- und Subscription-System vollständig aufgebaut hat.

### Partner-Programm für verwaltete Organisationen
Mit dem neuen **Partner-Programm** können Organisationen jetzt ohne eigenes Stripe-Abo betrieben werden.

- Partner verwalten Abrechnung zentral
- Eigenes Billing-Event-Log für maximale Transparenz
- Neue Partner-Detailseite in den Einstellungen

Perfekt für Beratungen, IT-Dienstleister und Enterprise-Reseller.

### Zwei-Faktor-Authentifizierung (TOTP)
Sicherheit auf Enterprise-Niveau: Nutzer können jetzt eine **Authenticator-App (z. B. Google Authenticator, 1Password)** als zweiten Faktor einrichten.

- TOTP-Codes als Alternative zum E-Mail-Code
- Nahtlos in den Login integriert
- Stabiler und zuverlässiger Setup-Flow

Danke an **Justus Zorn** für die Umsetzung.

### KI erstellt Projekte & zeichnet Mermaid-Diagramme
Die KI kann jetzt:

- Auf Anfrage **neue Projekte automatisch anlegen**
- **Mermaid-Diagramme korrekt generieren**, inklusive integrierter Syntax-Referenz

Das reduziert manuelle Konfiguration und macht visuelle Dokumentation deutlich einfacher.

Vielen Dank an **Mirko Tochtermann** und **Pascal Schüler**.

### Audit-Logs mit Ampelsystem
Compliance wird transparenter:

- Audit-Log-Einträge zeigen jetzt eine **farbige Risikostufe**
- Neuer Filter nach Risikolevel
- Provider-Audit-Log mit anonymisierten Tenant-Daten

Ideal für interne Prüfungen und EU-AI-Act-Dokumentation. Danke an **Oliver Rasch**.

---

## Performance & Skalierbarkeit

### Faire Embedding-Warteschlange
Die Dokumentenverarbeitung wurde grundlegend überarbeitet.

- Ressourcen werden fair zwischen Organisationen und Spaces verteilt
- Große Uploads blockieren keine anderen Teams mehr
- Vorhersagbare maximale Wartezeiten

Zusätzlich:

- Deutlich geringere Kosten und Latenz durch vereinfachtes Retrieval
- Stabilere Verarbeitung großer PDFs und Bilder
- Batch-Optimierungen für Vektordatenbank-Schreibvorgänge
- GitHub-Rate-Limits werden automatisch berücksichtigt

Großartige Arbeit von **Pascal Schüler**, der die Embedding-Pipeline produktionsreif gemacht hat.

### Spürbar schnellere App
- Asset-Caching aktiviert
- Lazy Loading für Dashboard & Projektliste
- Bundle optimiert (keine doppelten Libraries)
- Chunk-Load-Fehler unter hoher Last behoben

OneAI fühlt sich damit deutlich schneller und stabiler an.

---

## Verbesserungen im Arbeitsalltag

- Drag-and-Drop-Datei-Upload direkt auf der Chat-Startseite
- Artefakt-Panel auf Mobilgeräten voll nutzbar
- Klickbare Quellenverweise im Chat
- KI antwortet automatisch in der Sprache der Anfrage
- Persönlicher Space wird automatisch mit persönlichem Projekt verknüpft
- Konflikte-Tab in Projekteinstellungen
- Deutsche Umlaute in Projekt- und Teamnamen erlaubt

Viele kleine Verbesserungen – große Wirkung im Alltag.

---

## Sicherheit

Wir haben mehrere sicherheitsrelevante Verbesserungen umgesetzt:

- React-Query-Cache wird beim Login vollständig gelöscht (verhindert Account-Datenleaks in Shared-Browser-Szenarien)
- Speicherlimits für Bild- und PDF-Verarbeitung zum Schutz vor OOM-Angriffen
- Inhaltslimits im ClickUp-Connector gegen Heap-Exhaustion

Zusätzlich laufen Chat-Zusammenfassungen jetzt auf **eigener EU-Infrastruktur** – Chat-Verläufe verlassen die EU nicht mehr.

---

## Breaking Changes

### Beta-Code-Gate entfernt
Die Registrierung ist jetzt öffentlich – Einladungscodes sind nicht mehr erforderlich.

Es ist keine Aktion notwendig.

### Google Sign-In & Google Drive vorübergehend ausgeblendet
Google SSO und der Google-Drive-Connector sind vorübergehend deaktiviert.

Bitte nutzen Sie alternativ:
- OneDrive
- SharePoint
- GitHub

Die Reaktivierung folgt in einem späteren Release.

### Kontextuelles Retrieval entfernt
Die bisherige Kontext-Anreicherung bei Embeddings wurde durch ein effizienteres Verfahren ersetzt.

Für optimale Suchqualität empfehlen wir ein **Re-Embedding bestehender Dokumente**.

---

## Unter der Haube

- 43 Dependencies aktualisiert
- Unit-Tests für Pricing- und Credit-Logik
- Verbesserte Tracing-Infrastruktur
- Automatisiertes Deployment
- Datenbank-Migrationskonvention vereinheitlicht

---

OneAI 1.0 ist das Ergebnis von 96 Commits und 88 Pull Requests.

Besonderer Dank an **Pascal (47 Changes)**, **orehman3035**, **Justus**, **Santi**, **Oliver** und **Mirko** für ein Release, das OneAI production-ready macht.

—
96 Commits · 88 PRs · 414 Dateien geändert · 7 Contributors

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
