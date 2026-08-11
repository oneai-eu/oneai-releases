# OneAI admin-v3.8.16 — Stabilere interne Alarmierung

**Release Date:** 2026-08-11

## Fehlerbehebungen

Wir haben einen Fehler in der internen Monitoring- und Alarmierungsinfrastruktur behoben. Auf neu eingerichteten Servern konnte eine fehlende Kontaktkonfiguration eine Absturzschleife in der Grafana-Alarmierung auslösen. Die erforderliche Konfiguration wird nun automatisch bereitgestellt.

Für die Admin-Oberfläche und die tägliche Nutzung von OneAI ergeben sich **keine sichtbaren Änderungen**.

## Unter der Haube

Die Korrektur erhöht die Zuverlässigkeit unserer Betriebsüberwachung insbesondere beim Aufbau neuer Systemumgebungen.

Danke an **Mirko** für die schnelle Behebung und die Aktualisierung der Release-Dokumentation.

*2 Commits · 9 geänderte Dateien*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
