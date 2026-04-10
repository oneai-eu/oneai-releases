# OneAI v0.4.0-beta — Audio & Video verstehen, PDFs intelligenter verarbeiten

**Release Date:** 2026-04-10

## Highlights

### Audio- und Videodateien werden durchsuchbar
Ihr könnt jetzt **Audio- und Videodateien direkt in OneAI hochladen** – und sie genauso nutzen wie klassische Dokumente.

- Unterstützung für MP3, WAV, M4A und weitere Audioformate
- Automatische Transkription mit Zeitstempeln
- Videos werden im Browser verarbeitet (Tonspur-Extraktion)
- Im AI Chat könnt ihr gezielt nach bestimmten Abschnitten einer Aufnahme fragen

Ob Kundengespräch, internes Meeting oder Webinar: Inhalte aus Audio und Video sind jetzt vollständig in eure Wissensräume integrierbar und im Chat abfragbar.

Ein großes Dankeschön an **Pascal**, der die komplette Audio-/Video-Pipeline inklusive Transkription und Chat-Integration umgesetzt hat.

---

### Smartere PDF-Verarbeitung mit Hybrid-Pipeline
PDFs werden jetzt deutlich **schneller, kosteneffizienter und zuverlässiger** verarbeitet.

Die neue Hybrid-Logik funktioniert in zwei Stufen:
1. **Direkte Textextraktion** (schnell, ohne KI-Kosten)
2. **Selektive KI-Bilderkennung** nur auf Seiten, die tatsächlich eingebettete Bilder enthalten

Das bedeutet für euch:
- Schnellere Verarbeitung großer Dokumente
- Reduzierte KI-Kosten
- Präzisere Ergebnisse bei gescannten oder bildlastigen PDFs

Auch diese grundlegende Verbesserung der Dokumenten-Pipeline stammt von Pascal.

---

### Schnellere Dokumentenverarbeitung durch Batch-Embedding
Dokumente werden nun gebündelt verarbeitet, statt jeden Abschnitt einzeln an die Embedding-API zu senden.

Das reduziert Netzwerk-Overhead und beschleunigt die Verarbeitung spürbar – insbesondere bei großen Wissensräumen oder vielen neuen Dateien.

---

## Verbesserungen

### Neues Activity Center mit klarer Fehleranzeige
Das Activity Center wurde vollständig überarbeitet.

- Synchronisation, Dokumentenverarbeitung und Destillation in einem zentralen Tab
- Live-Status über WebSocket
- **Klare Anzeige von Fehlern**, falls einzelne Dokumente nicht verarbeitet werden konnten

Ihr seht sofort, wenn Handlungsbedarf besteht – ohne Logs durchsuchen zu müssen.

---

### Einheitliches Drag & Drop – inklusive Ordner
Dateien lassen sich jetzt überall konsistent per Drag & Drop hochladen:

- Im Chat
- In Wissensräumen (Spaces)
- Über die Sidebar

Ordnerstrukturen bleiben erhalten, nicht unterstützte Dateien werden transparent angezeigt. Das erleichtert insbesondere größere Uploads erheblich.

---

### Robustere Suche und Chat-Logik
Mehrere Verbesserungen erhöhen die Stabilität im täglichen Einsatz:

- Fallback, falls der Reranker temporär nicht verfügbar ist
- Automatische Wiederholung bei kurzzeitigen Verbindungsfehlern
- Validierung von KI-Tool-Argumenten zur Vermeidung unerwarteter Fehler
- Chat-Personas werden jetzt priorisiert und zuverlässiger angewendet
- Der Chat kennt nun das aktive Artefakt bei der Bearbeitung

Das Ergebnis: stabilere Antworten, weniger Abbrüche, konsistenteres Verhalten.

---

## Fehlerbehebungen

- Streaming-Fehler bei Google-Modellen werden korrekt abgefangen
- Verarbeitungssperren bei großen Dateien werden zuverlässig erneuert (keine Doppelverarbeitung mehr)
- Code-Dokumente werden sauber innerhalb definierter Größenlimits gechunked
- weclapp-Inhalte werden zwischengespeichert und effizienter verarbeitet
- Diverse UI-Verbesserungen (Badges, Artefakt-Dialog, Mathe-Rendering)

Viele dieser Anpassungen verbessern die Zuverlässigkeit im Hintergrund – spürbar vor allem bei größeren Datenmengen.

---

## Breaking Changes

### Anpassung der Gateway-Umgebungsvariablen
Die bisherigen sechs Umgebungsvariablen für Embedding, Vision und Reranker wurden konsolidiert.

**Neu:**
- `ONESTACK_GW_URL`
- `ONESTACK_GW_KEY`

**Bitte aktualisiert eure `.env`-Dateien, compose.yaml und Deployment-Konfigurationen entsprechend.**

---

## Unter der Haube

- Konsolidierte Retry-Logik für stabilere API-Aufrufe
- PDF-Worker mit definiertem Timeout
- Interner PR-Reviewer-Agent mit Sicherheits- und Multi-Tenancy-Regeln (danke an Santi)

---

Dieses Release wurde maßgeblich von **Pascal** umgesetzt – von der neuen Audio-/Video-Unterstützung über die PDF-Hybrid-Pipeline bis zum Activity-Center-Redesign. Vielen Dank auch an **Santi** für die Einführung strukturierter Review-Richtlinien.

—
21 Commits · 21 PRs · 90 Dateien geändert · 2 Mitwirkende

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
