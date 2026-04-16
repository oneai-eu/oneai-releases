# OneAI v0.4.1-beta — Neue Integrationen, KI-Bildgenerierung & ein deutlich smarterer Chat

**Release Date:** 2026-04-16

Mit v0.4.1-beta erweitern wir OneAI gezielt um Funktionen, die im Arbeitsalltag echten Unterschied machen: eine tief integrierte ClickUp-Anbindung, KI-Bildgenerierung direkt im Chat, deutlich verbesserte Antwortqualität bei weclapp-Daten und ein spürbar flüssigeres Chat-Erlebnis.

## Highlights

### Neuer ClickUp-Connector mit vollständiger Synchronisation
Teams können ClickUp-Spaces und -Listen jetzt direkt mit OneAI verbinden.

- Synchronisation von Aufgaben, Beschreibungen, Kommentaren und Checklisten
- Automatische Aufbereitung für die KI-Suche in Wissensräumen
- Zusammenfassungen auf Listenebene für bessere Übersicht
- Nahezu Echtzeit-Updates via Webhooks

Damit wird ClickUp zu einer vollwertigen Wissensquelle für eure AI Chat-Anfragen – ohne manuelle Exporte oder Copy & Paste.

Großartige Arbeit von **Mirko**, der den Connector von Grund auf umgesetzt hat.

### KI-Bildgenerierung mit Modellauswahl und Admin-Verwaltung
Ab sofort könnt ihr Bilder direkt im AI Chat generieren – inklusive Kontrolle über:

- Modell (z. B. OpenAI oder Google Imagen)
- Qualität
- Bildgröße und Seitenverhältnis (1:1, 16:9, 9:16 u. a.)

Admins können zentral festlegen, welche Bildmodelle organisationsweit freigeschaltet sind. So bleibt die Nutzung im Einklang mit internen Richtlinien und Compliance-Vorgaben.

Ein starkes Feature für Marketing, Produkt, HR und alle Teams, die visuelle Inhalte schnell und sicher erstellen möchten – umgesetzt von **Mirko**.

### Flüssigerer Chat mit Live-Tool-Vorschau
Der AI Chat fühlt sich mit diesem Release deutlich reaktionsschneller an.

- Live-Anzeige von Tool-Aufrufen inklusive Argumenten
- Automatisches Öffnen und Schließen von Denkschritten während der Verarbeitung
- Modellabhängige Statusanzeige („Thinking“ vs. „Processing“)
- Keine „hängenden“ Ladezustände mehr bei API-Fehlern

Das Ergebnis: mehr Transparenz, weniger Verwirrung und ein insgesamt professionelleres Nutzungserlebnis. Danke an **Pascal** für das umfassende Streaming-Upgrade – und an **Oliver**, der einen seltenen, aber kritischen OpenAI-Fehler behoben hat.

### weclapp-Integration: deutlich präzisere Antworten
Für viele Kunden ist weclapp eine geschäftskritische Datenquelle. Wir haben die gesamte RAG-Logik überarbeitet:

- Neue Entitätstypen (z. B. offene Posten, Wareneingänge)
- Strukturierte Feldlogik statt freier Textblöcke
- Verbesserte Zusammenfassungen
- Konkrete Anti-Halluzinations-Maßnahmen

Ergebnis: spürbar zuverlässigere Antworten zu Belegen, offenen Posten und Geschäftsvorfällen.

Vielen Dank an **Mirko** für diese Qualitäts-Offensive.

### Neues Dashboard mit modernen Diagrammen
Das Dashboard wurde visuell und technisch grundlegend modernisiert:

- Neue Diagrammtypen (u. a. Modellverteilung als Donut-Chart)
- Verbesserte Filteroptionen
- Klarere KPI-Darstellung
- Bessere Gruppierung von Modellen (inkl. „Others“-Logik)

Damit erhalten Admins einen noch besseren Überblick über Nutzung, Modelle und Organisation.

Konzipiert und umgesetzt von **Pascal**.

### Referenzen-Dialog als Zwei-Panel-Explorer
Der Referenzen-Dialog in Projekten wurde komplett neu gedacht – ähnlich einem Dateimanager:

- Ordnernavigation links
- Dateidetails rechts
- Anzeige von Embedding-Status und Dateianzahl

Das erleichtert die Navigation in großen Wissensräumen erheblich.

## Verbesserungen

- **Schnellere Dokumentenverarbeitung**: Einzelabschnitt-Dokumente überspringen einen unnötigen KI-Zwischenschritt und werden dadurch effizienter verarbeitet.
- **Passkeys jetzt optional**: Neue Nutzer können sich einfacher registrieren und werden nach dem Login freundlich zur Einrichtung eines Passkeys eingeladen. Danke an **Justus**.
- **Activity Hub aufgeräumt**: Weniger unnötige Hintergrundabfragen, klarere Darstellung laufender Prozesse.
- **Striktere Tool-Validierung**: Zuverlässigere Bildgenerierung und Transkription durch wieder aktivierten Strict Mode.
- **Verbesserte Gemini-Kompatibilität**: Denkschritte bleiben jetzt korrekt über mehrere Nachrichten hinweg erhalten.

## Fehlerbehebungen

- Behebung eines Problems, bei dem OpenAI-Fehler im Chat nicht sichtbar waren und zu endlosen Ladezuständen führten.
- Stabilisierung der LLM-Gateway-Logik.
- Korrekturen rund um HTTP-Kommunikation nach Dependency-Upgrades.

## Unter der Haube

- Vision-Modelle laufen jetzt vollständig über unseren zentralen LLM-Router (OneGateway) für saubere Usage-Erfassung.
- Umfassende Dependency-Updates (inkl. postgres 3.4.9) für mehr Stabilität und Sicherheit.
- Interne Codebereinigungen und Typkorrekturen.

---

Ein großes Dankeschön an **Pascal, Mirko, Justus und Oliver** für 18 PRs mit insgesamt 124 geänderten Dateien.

_18 Commits · 18 PRs · 124 Dateien geändert · +9.242 / −4.347 Zeilen_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
