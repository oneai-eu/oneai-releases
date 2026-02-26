# OneAI v0.3.0-beta — Volle Chat-Kontrolle, neuer Activity Hub & stärkere KI-Modelle

**Release Date:** 2026-02-26

Mit **OneAI v0.3.0-beta** geben wir euch mehr Kontrolle, mehr Transparenz und mehr Leistung im Arbeitsalltag mit KI.

Von stoppbaren und wiederaufnehmbaren KI-Antworten über einen zentralen Activity Hub bis hin zu neuen Anthropic-Modellen und Multi-API-Keys mit Ablaufdatum – dieses Release bringt spürbare Verbesserungen für alle, die OneAI produktiv im Unternehmen einsetzen.

## Highlights

### KI-Antworten stoppen & nahtlos fortsetzen
Ihr könnt laufende Antworten im **AI Chat** jetzt jederzeit stoppen. Bei Verbindungsabbrüchen setzt sich die Antwort automatisch dort fort, wo sie unterbrochen wurde – **keine verlorenen Nachrichten mehr**.

Gerade bei langen Analysen oder instabilen Verbindungen sorgt das für deutlich mehr Zuverlässigkeit im Arbeitsalltag.

Danke an **Pascal**, der die Streaming-Architektur grundlegend verbessert hat.

### Neuer Activity Hub in der Sidebar
Alle laufenden Aktivitäten – **Uploads, Dokumentenverarbeitung und minimierte Spaces** – findet ihr jetzt gebündelt in einem neuen Activity Hub in der Sidebar.

Statt schwebender Icons am Rand habt ihr eine zentrale, strukturierte Übersicht mit klarer Statusanzeige. Das sorgt für mehr Fokus im Arbeitsbereich.

Ebenfalls umgesetzt von **Pascal**.

### Neue Anthropic-Modelle: Opus 4.6 & Sonnet 4.6
Mit **Claude Opus 4.6** und **Claude Sonnet 4.6** stehen euch die neuesten Anthropic-Modelle zur Verfügung:

- **Opus 4.6** für komplexe Analysen, Strategie- und Reasoning-Aufgaben
- **Sonnet 4.6** als leistungsstarke und kosteneffiziente Alternative
- Bis zu 200k Kontext & multimodale Fähigkeiten

Vielen Dank an **Mirko** für die schnelle Integration.

### Mehrere API-Schlüssel mit Ablaufdatum
Ihr könnt jetzt **mehrere API-Schlüssel pro Benutzer** erstellen – jeweils mit:

- Individueller Beschreibung
- Optionalem Ablaufdatum
- Zentraler Verwaltung im Profil

Das erhöht die Sicherheit, verbessert die Nachvollziehbarkeit und ermöglicht eine saubere Trennung zwischen Integrationen.

Auch hier: starke Umsetzung von **Pascal**.

### Chats gehören jetzt zu Spaces
Wir haben die Architektur vereinfacht: **Chats sind jetzt direkt mit Spaces verknüpft** (statt mit Projekten).

Das bedeutet:

- Klarere Struktur
- Mehr Flexibilität
- Bessere Grundlage für zukünftige Features

Bestehende Projekte wurden automatisch in entsprechende Spaces überführt.

Großes Dankeschön an **Justus** für diesen Architektur-Umbau.

---

## Verbesserungen

### Dokumentenverarbeitung wird automatisch wiederholt
Wenn die Verarbeitung eines Dokuments fehlschlägt (z. B. durch temporäre API-Fehler), versucht OneAI es automatisch erneut – mit intelligentem Backoff.

Ergebnis: **deutlich robustere Wissensräume** und weniger manuelle Eingriffe.

### Screenshots einfach per Strg+V einfügen
Bilder und Screenshots lassen sich jetzt direkt per **Strg+V** in den Chat einfügen – ohne separaten Upload.

### Kompaktere Darstellung von KI-Arbeitsschritten
Reasoning-Schritte und Tool-Aufrufe starten nun eingeklappt. Das reduziert visuelle Ablenkung und verbessert die Übersicht bei komplexen Antworten.

### Artefakte mit Ersteller, Zeitstempel & Verschieben
Artefakte zeigen jetzt:

- Ersteller
- Letzte Änderung

Zusätzlich können sie zwischen Spaces verschoben oder kopiert werden.

### Neue „Was ist neu?“-Seite
Eine neue Seite zeigt alle Releases inklusive automatischer Benachrichtigung bei Updates.

### Neue Startseite & Massenlöschung
- Neue Home-Ansicht nach Login
- Mehrfachauswahl & Massenlöschung für Chats und Artefakte
- Aufgeräumte Admin-Navigation

### weclapp-Connector deutlich erweitert
- Automatische KI-Zusammenfassungen eurer Geschäftsdaten
- Kundenkontext-Anreicherung
- Verbesserte Ordnerstruktur
- Robustere Downloads & besseres Rate-Limit-Handling

### Space-Infrastruktur gehärtet
Stabilere Synchronisation, korrekte Speicherberechnung und robustere Fehlerbehandlung über alle Provider hinweg.

---

## ⚠️ Sicherheit

Wir haben eine Multi-Tenancy-Lücke bei der KI-basierten Artefakt-Erstellung geschlossen.

Artefakte werden jetzt nur noch erstellt, wenn der Nutzer tatsächlich Zugriff auf den Ziel-Space hat. Damit sind Mandantentrennung und Zugriffskontrolle vollständig abgesichert.

---

## Breaking Changes

### Chats → Spaces (Datenbank)
Chats sind nicht mehr an Projekte gebunden. Projekte wurden in Spaces mit `provider='project'` überführt.

**Migration:**
- 202602130000.sql
- 202602180000.sql

Bestehende Chats wurden automatisch migriert.

### Multi-API-Keys (API)
API-Schlüssel wurden in eine eigene Tabelle überführt.

**Migration:** 202602250000.sql  
Bestehende Schlüssel wurden automatisch übernommen.

### Preisanpassung: Sonnet 4.5
Die Ausgabekosten von Sonnet 4.5 wurden auf die offiziellen Anthropic-Preise angepasst (60 % höher als zuvor berechnet).

Bitte berücksichtigt dies bei Kostenprognosen.

---

## Unter der Haube

- Vereinheitlichte Chat-Endpunkte
- Neues Monitoring (LLM-Nutzung, Token, Rate Limits)
- CI-Verbesserungen für Release-Branch
- 29 aktualisierte Abhängigkeiten
- Backend-Framework-Update zur Behebung von Server-Crashes

---

Ein großes Dankeschön an **Pascal, Mirko, Justus und Orehman** für dieses umfangreiche Release.

—

*26 Commits · 25 PRs · 264 Dateien geändert*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
