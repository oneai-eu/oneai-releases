# OneAI v0.3.3-beta — Google SSO, sicheres Artifact-Sharing & deutlich robusterer Chat

**Release Date:** 2026-03-13

## Highlights

### Google Sign-In als neuer SSO-Provider
Neben Microsoft unterstützt OneAI jetzt **Google als Single Sign-On (SSO)** — sowohl für die Anmeldung als auch für die Einladung neuer Teammitglieder.

- Login mit Google-Konto in wenigen Sekunden
- Google-basierte Einladungen direkt aus dem Mitglieder-Dialog
- Nahtlose Integration in bestehende Unternehmens-Identitäten

Damit wird der Zugang zu OneAI für Organisationen mit Google Workspace deutlich einfacher.

---

### Artifacts teilen, kopieren und mit Bestätigung erstellen
Artifacts sind jetzt vollständig teamfähig – mit einem klaren, sicheren Freigabeprozess.

**Neu:**
- Artifacts können mit dem Team geteilt oder als **private Kopie** gespeichert werden
- Durchsuchbare Auswahl mit Anzeige von Autor, letztem Update und Sharing-Status
- Inline-Karten im Chat für bessere Transparenz

Besonders wichtig: Wenn die KI ein neues Artifact erstellen möchte, wird nun **vorher eine explizite Bestätigung** eingeholt. Keine unerwarteten Änderungen mehr – volle Kontrolle für eure Teams.

Großes Dankeschön an Pascal, der das komplette Sharing- und Bestätigungsmodell umgesetzt hat.

---

### Verständliche Fehlermeldungen im AI Chat
Stille Abbrüche gehören der Vergangenheit an.

Wenn es bei der Antwortgenerierung zu Problemen kommt – etwa durch zu lange Konversationen, parallele Streams oder fehlende Berechtigungen – zeigt der AI Chat jetzt **klare, verständliche Fehlermeldungen direkt im Chatverlauf** an.

Das sorgt für:
- Mehr Transparenz
- Weniger Verwirrung bei Anwendern
- Schnellere Fehlerbehebung im Alltag

---

### GitHub-Code in Wissensräumen durchsuchbar
Wissensräume mit GitHub-Anbindung verarbeiten jetzt **über 60 Code- und Konfigurationsformate** – darunter TypeScript, Python, Go, Rust, Java, C/C++, YAML, SQL, Dockerfile und Terraform.

Ihr könnt damit:
- Source Code durchsuchen
- Architekturfragen direkt im AI Chat klären
- Repositories als echte Wissensbasis nutzen

Danke an Mirko für die deutliche Erweiterung der Dokumentenverarbeitung im Code-Bereich.

---

### weclapp-Daten mit deutlich besserer KI-Suche
Daten aus weclapp (z. B. Kunden, Aufträge, Rechnungen) werden jetzt als **zusammenhängende, erzählende Texte** verarbeitet statt als isolierte Felder.

Ergebnis:
- Spürbar bessere Suchergebnisse
- Kontextreichere Antworten im AI Chat
- Höhere Qualität in RAG-basierten Workflows

## Verbesserungen

- **Mehrere Mitglieder nacheinander einladen** – der Dialog bleibt geöffnet und zeigt bereits eingeladene Personen an
- **Besseres Feedback bei der Dokumentenverarbeitung** mit klareren Statusanzeigen und Filtermöglichkeiten
- **Flüssigeres Scrollen im Chat** ohne visuelle Überlappungen
- **Zuverlässigere Verarbeitung von Outlook-MSG-Dateien**
- **E-Mail-Zustellfehler werden erkannt**, ohne dass Einladungen verloren gehen
- Vollständige **Internationalisierung aller UI-Texte** für konsistente Mehrsprachigkeit

## Breaking Changes

### Google Drive Spaces jetzt mit Nur-Lesen-Zugriff
Google Drive-verbundene Wissensräume verwenden ab sofort ausschließlich den Scope `drive.readonly`.

**Änderung:**
- Upload- und Löschfunktionen für Google Drive wurden entfernt

**Erforderliche Aktion:**
- Bestehende Google-Drive-Spaces bitte erneut verbinden
- Die neue Verbindung fordert automatisch den reduzierten Read-Only-Zugriff an

Diese Anpassung reduziert Berechtigungen bewusst auf das notwendige Minimum und erhöht die Compliance-Fähigkeit.

## Unter der Haube

- Verbesserte Chat-Streaming-Architektur für saubere Fehlerbehandlung
- Optimierte Embedding-Pipeline für Code- und ERP-Daten
- Strengere Code-Qualitätsregeln und konsistente Internationalisierung

---

Ein großes Dankeschön an **Pascal** (Google SSO, Artifact-Sharing, Chat-Robustheit und viele UX-Verbesserungen) und **Mirko** (GitHub-Code-Embedding und weclapp-Optimierung) für dieses starke Release.

_14 PRs · 213 Dateien geändert · 4.514 Ergänzungen · 2 Mitwirkende_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
