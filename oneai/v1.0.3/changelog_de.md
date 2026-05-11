# OneAI v1.0.3 — Zuverlässige Dokumentenverarbeitung, auch bei voller Quota

**Release Date:** 2026-05-11

Mit v1.0.3 stellen wir sicher, dass eure Wissensräume auch unter hoher Auslastung zuverlässig funktionieren. Die Dokumentenverarbeitung in Spaces läuft nun unabhängig vom aktuellen LLM-Kontingent weiter – für eine stabile Suche und konsistente Nutzererfahrung.

## Highlights

### Dokumentenverarbeitung läuft auch bei erreichter Quota weiter
Bisher konnte es in Einzelfällen passieren, dass die automatische Zusammenfassung von Dokument-Chunks für die Suchvorschau ins Stocken geriet, wenn das LLM-Kontingent einer Organisation ausgeschöpft war.

Das haben wir grundlegend verbessert:

- **Dokumente werden weiterhin vollständig verarbeitet**, auch wenn das reguläre LLM-Kontingent erreicht ist.
- Die **Suchvorschau in Spaces bleibt konsistent und vollständig**.
- Die Nutzung wird weiterhin korrekt für Transparenz und Abrechnung erfasst.

Für euch bedeutet das: Keine unerwarteten Lücken in der Suche, keine halb verarbeiteten Dokumente – selbst in Phasen hoher Nutzung.

Ein großes Dankeschön an Justus, der die Embedding-Pipeline an dieser Stelle robuster und sauberer entkoppelt hat.

## Verbesserungen

### Mehr Transparenz in der Dokumentenverarbeitung
Wir haben die interne Beobachtbarkeit der Embedding-Pipeline deutlich erweitert:

- Jeder Verarbeitungsjob wird jetzt nach Ergebnis kategorisiert (z. B. erfolgreich, Rate-Limit, Wiederholung, Fehler).
- Neue Monitoring-Dashboards zeigen Warteschlangenlänge und Durchsatz in Echtzeit.

Diese Änderungen sind für Endnutzer nicht direkt sichtbar, sorgen aber für einen **noch stabileren und besser überwachten Betrieb** – insbesondere in Enterprise-Umgebungen mit hohem Dokumentaufkommen.

## Unter der Haube

- Gezielte Optimierungen in der Embedding-Logik zur klareren Trennung zwischen nutzerbezogener LLM-Nutzung und systeminterner Verarbeitung.
- Erweiterte Metriken und Dashboard-Updates für das Betriebsmonitoring.

---

Danke an Justus für die konsequente Verbesserung von Stabilität und Transparenz in einem zentralen Bestandteil von OneAI.

_2 Commits · 2 PRs · 3 Dateien geändert_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
