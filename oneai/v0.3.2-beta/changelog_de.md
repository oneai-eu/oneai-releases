# OneAI v0.3.2-beta — Research-Agent, Bildgenerierung & Outlook-Integration

**Release Date:** 2026-03-10

Mit v0.3.2-beta erweitern wir OneAI deutlich: Der neue **Research-Agent** führt eigenständig mehrstufige Recherchen durch, ihr könnt **KI-Bilder direkt im Chat generieren**, Outlook-E-Mails als **Wissensraum synchronisieren**, und die Spracheingabe basiert jetzt auf **Whisper** für deutlich präzisere Transkription. Dazu kommen Audit-Log-Export, neue Compliance-Muster und viele Stabilitätsverbesserungen.

## Highlights

### Research-Agent für komplexe Recherchen
Der AI Chat kann jetzt einen eigenständigen **Research-Agenten** starten. Dieser führt mehrstufige Analysen über eure Wissensräume und – falls gewünscht – das Web durch, nutzt dabei verschiedene Tools und fasst die Ergebnisse strukturiert zusammen.

Ideal für Marktanalysen, Wettbewerbsvergleiche oder komplexe interne Fragestellungen.

Großartige Arbeit von **Justus**, der die zugrunde liegende Agent-Logik entwickelt und flexibel erweiterbar gemacht hat.

### KI-Bildgenerierung direkt im AI Chat
Ihr könnt OneAI jetzt bitten, **Bilder zu erstellen** – z. B. für Präsentationen, Konzepte oder interne Kommunikation.

- Anzeige direkt im Chat
- Download als Datei
- Speichern im Wissensraum
- Transparente Kostenerfassung nach Qualitätsstufe

Dank **Pascal** werden generierte Bilder sauber gespeichert und nahtlos in eure Workflows integriert.

### Outlook-Connector für E-Mails
Mit dem neuen **Outlook-Connector** könnt ihr E-Mail-Postfächer als Wissensraum anbinden.

- Auswahl spezifischer Ordner
- Automatische Synchronisation
- E-Mails inkl. Betreff, Absender, Inhalt und Anhängen durchsuchbar
- Webhook-basierte Aktualisierung in Echtzeit

So wird euer E-Mail-Wissen sicher und strukturiert im AI Chat nutzbar.

### Whisper-Spracherkennung
Die Spracheingabe im AI Chat nutzt jetzt **OpenAI Whisper** statt der Browser-API.

- Deutlich höhere Genauigkeit
- Bessere Erkennung deutscher Sprache
- Robust bei Fachbegriffen

Ein spürbares Qualitäts-Upgrade für alle, die regelmäßig per Sprache arbeiten.

### Neuer Chat-Editor mit Entwurfsspeicherung
Das Eingabefeld wurde komplett überarbeitet:

- Moderne, stabile Texteingabe
- @-Erwähnungen für Spaces und Inhalte
- Automatische Entwurfsspeicherung pro Chat

Gerade bei längeren Anfragen oder komplexen Prompts sorgt das für deutlich besseren Workflow.

## Verbesserungen

### KI-Personas für Organisationen
Admins können jetzt **KI-Personas** definieren – mit eigenem System-Prompt und klarer Rolle. Diese lassen sich Projekten zuweisen und sorgen für konsistente Antworten im gewünschten Stil oder mit spezifischem Fokus.

### Audit-Log-Export (CSV & JSON)
Audit-Logs können nun als **CSV oder JSON** exportiert werden – ideal für interne Revision, Datenschutzbeauftragte oder externe Prüfungen.

Zusätzlich haben wir neue vordefinierte Compliance-Muster ergänzt, u. a. für:

- DSGVO (inkl. Art. 9)
- Deutsche Identifikationsdaten
- IBAN, EU-USt-IDs, europäische Telefonnummern
- KDG (kirchliches Datenschutzrecht)
- BSI IT-Grundschutz & Datensouveränität

Vielen Dank an **Oliver** für diese wichtige Erweiterung im Compliance-Bereich.

### Echtzeit-Feedback bei Synchronisation & Dokumentenverarbeitung
- Live-Fortschritt bei der Space-Synchronisation
- Echtzeit-Status bei der Dokumentenverarbeitung
- Robustere Fehlerbehandlung mit klaren Abbruchregeln

Ergebnis: **Mehr Transparenz und deutlich höhere Zuverlässigkeit** bei größeren Datenmengen.

### Präzisere Nutzungs- und Kostenstatistiken
- Korrekte Berücksichtigung von Datumsfiltern
- Verbesserte Preisberechnung (inkl. Cache-Token)
- Transparente Kostenerfassung für Bildgenerierung und Transkription

Gerade für Enterprise-Kunden mit Budgetverantwortung ein wichtiger Schritt.

## Fehlerbehebungen

- Stabilere Chat-Verbindungen und bessere Fehlermeldungen
- Korrekte Behandlung von Token-Limits
- API-Key-Dialog sauber schließbar
- Layout-Probleme (abgeschnittene Inhalte, Scroll-Verhalten) behoben
- Mehrere Stabilitätsfixes aus unserer BugHunt-Analyse

## Unter der Haube

- Prompt-Caching für OpenAI und Claude reduziert Latenz und Kosten
- Neue Blob-Infrastruktur für Chat-Dateien
- 36 Abhängigkeiten aktualisiert
- Verbesserte Observability- und Monitoring-Konfiguration

---

Ein großes Dankeschön an **Pascal, Justus, Oliver, Orehman und Mirko** für dieses umfangreiche Release.

_29 PRs · 218 Dateien geändert · 6 Mitwirkende_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
