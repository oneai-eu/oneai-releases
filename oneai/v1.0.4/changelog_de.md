# OneAI v1.0.4 — Robusterer Chat, klarere Quellen und mehr Transparenz bei Modellpreisen

**Release Date:** 2026-05-15

Mit **OneAI v1.0.4** wird AI Chat im Alltag deutlich verlässlicher — vor allem bei langen Antworten, komplexen Tool-Aufrufen und dokumentenbasierten Workflows. Gleichzeitig schaffen wir mehr Transparenz im Subscription-Bereich und stärken den Datenschutz bei Web-Quellen.

## Highlights

- **Lange Antworten gehen bei kurzen Verbindungsabbrüchen nicht mehr verloren.** Wenn ein Stream während einer laufenden Antwort kurz unterbrochen wird, stellt OneAI die Ausgabe jetzt automatisch wieder her. Bereits generierter Text bleibt erhalten, statt dass Frage und Antwort verschwinden. Dank **Pascal** ist AI Chat damit bei instabilen Netzwerken deutlich robuster.
- **Neue Tool-Call-Leiste und ein gemeinsames Quellen-Panel.** Schritte, Reasoning und Tool-Nutzung erscheinen jetzt dort, wo sie tatsächlich passieren. Zusätzlich werden Web-Quellen und Datei-Quellen in einem gemeinsamen **„Alle Quellen“**-Panel zusammengeführt. Das macht längere Antworten deutlich leichter nachvollziehbar. Danke an **Oliver** und **Pascal** für die umfassende Überarbeitung.
- **Artefakte sind jetzt jederzeit griffbereit.** Erstellte und verwendete Artefakte werden in einem festen Tray direkt über dem Eingabefeld gesammelt. So lassen sie sich auch in langen Chats schnell wiederfinden. Inline-Verweise öffnen Artefakte nun direkt im Seitenpanel, ohne euch aus dem Gespräch zu holen.
- **Aktuelle Modellpreise direkt im Subscription-Bereich.** Verfügbare Modelle und ihre Preise werden nicht mehr statisch gepflegt, sondern laufend aktualisiert und in einem neuen Dialog angezeigt. Das schafft mehr Transparenz bei Planung und Nutzung. Danke an **Obaid** für diese Verbesserung.

## Verbesserungen

- **Schnellere Dokumentenverarbeitung.** Zusammenfassungen und Embeddings laufen jetzt parallel, wodurch Dokumente spürbar schneller verarbeitet werden.
- **Zuverlässigere Suche bei geringerem Speicherbedarf.** Die Dokumentensuche benötigt deutlich weniger RAM, während die Suchqualität gleich bleibt. Dank **Justus** skaliert OneAI damit effizienter bei größeren Wissensräumen.
- **Keine doppelten PDF-Inhalte mehr.** Ein Fehler in der Dokumentenverarbeitung wurde behoben, durch den PDF-Inhalte in Einzelfällen doppelt indexiert werden konnten.
- **Verbesserte Audit-Ansicht für Compliance-Teams.** Lange blockierte Nachrichten bleiben im Audit-Dialog lesbar, erkannte Inhalte werden präziser dargestellt und die IBAN-Erkennung produziert weniger Fehlalarme.
- **Aufgeräumter Subscription-Bereich.** Tabs für Übersicht, Nutzung, Abrechnung und Add-ons verhalten sich auf verschiedenen Bildschirmgrößen konsistenter und übersichtlicher.

## Fehlerbehebungen

- **Blockierte Compliance-Prompts bleiben für die Review erhalten.** Wenn eine Nachricht durch eine Compliance-Regel gestoppt wird, bleibt der ursprüngliche Prompt inklusive Anhängen für Admins sichtbar und kann nach Freigabe sauber wiederhergestellt werden.
- **Quellen-Snippets brechen das Layout nicht mehr.** Die Quellenansicht bleibt auch bei schwierigen Snippets kompakt und lesbar.
- **Automatische Chat-Titel laufen jetzt vollständig innerhalb unserer EU-Infrastruktur.** Das verbessert Datenschutz und entlastet gleichzeitig den nutzungsbasierten Token-Pool eurer Organisation.

## Security

- **Datenschutzfreundliche Favicons für Web-Quellen.** Favicons werden jetzt über einen sicheren OneAI-Proxy geladen, statt direkt über externe Dienste. Dadurch werden IP-Adresse und Nutzungsverhalten nicht mehr an Drittanbieter wie Googles Favicon-CDN weitergegeben.
- Zusätzliche Sicherheits-Scans im Hintergrund wurden vorbereitet, um unsere Lieferkette noch besser zu überwachen.

## Unter der Haube

- Weitere Performance-Optimierungen in Suche, Speicherhaltung und Dokumentenverarbeitung
- Technische Aufräumarbeiten im Chat- und Release-Stack
- Kleine Verbesserungen in Billing- und Plattformprozessen

Vielen Dank an **Pascal**, **Oliver**, **Obaid** und **Justus** für dieses Release. Besonders Pascal hat den Chat-Stack in dieser Version maßgeblich robuster und klarer gemacht.

*71 geänderte Dateien · 20 Commits · 4 Mitwirkende*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
