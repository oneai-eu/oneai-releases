# OneAI v0.4.4-beta — Automatisierung, Zugriffsschutz & ein deutlich stabilerer Chat

**Release Date:** 2026-04-27

Dieses Release bringt drei große Fortschritte: **Workflow-Automatisierung mit n8n**, einen aktiven **Zugriffsschutz für Projekte** zur Vermeidung von Datenlecks und einen spürbar **stabileren, schnelleren Chat** – insbesondere mit privaten Modellen.

---

## Highlights

### n8n-Connector: Workflows direkt aus OneAI erstellen
Ihr könnt eure **n8n-Instanz jetzt als Space anbinden** und Automatisierungs-Workflows direkt aus dem AI Chat heraus erstellen.

- Vollständiger Setup-Wizard inkl. API-Validierung  
- Workflow-Vorlagen für typische Use Cases  
- Erstellung und Aktivierung direkt im Chat  
- Automatischer Sync via Webhooks  
- Saubere Aufräumlogik beim Löschen eines Spaces  

OneAI wird damit zur Steuerzentrale für KI-gestützte Automatisierung – mit euren Unternehmensdaten im Kontext.

Großer Dank an **Mirko**, der den Connector von Grund auf umgesetzt hat.

---

### Zugriffsschutz für Projekte: Konflikte erkennen, Datenlecks verhindern
Projekte mit verknüpften Wissensräumen sind jetzt deutlich sicherer.

Projekt-Admins sehen sofort:
- Welche Teammitglieder **keinen Zugriff auf verlinkte Spaces** haben  
- Wo potenzielle Zugriffskonflikte bestehen  

Direkt aus der Oberfläche können sie:
- Zugriff selbst gewähren (bei entsprechender Berechtigung)  
- Eine Anfrage an Space-Admins senden (mit intelligenter 1h-Drosselung)  

Zusätzlich werden Tool-Aufrufe im Hintergrund strikt auf freigegebene Spaces gefiltert. So wird verhindert, dass Dokumente aus nicht autorisierten Wissensräumen abgefragt werden.

Ein wichtiger Schritt für Governance und EU-AI-Act-konforme Datennutzung.  
Konzeption und Umsetzung stammen maßgeblich von **Pascal**.

---

### Private Modelle: Stabil, sichtbar und produktionsreif
Selbst gehostete Modelle funktionieren jetzt deutlich zuverlässiger:

- Stabiles Streaming inkl. Tool Calls und Reasoning  
- Korrekte Anzeige in der Modellauswahl  
- Saubere Berechtigungsprüfung in Organisationen  
- Kein Absturz mehr bei unerwarteten Antwortformaten  

Durch die Umstellung auf eine robustere API-Basis laufen auch längere Streams stabil durch. Gleichzeitig bleibt der SSRF-Schutz vollständig erhalten.

---

### Proaktives Session-Management
Mehr Sicherheit, weniger Frust:

- Warnung vor Sitzungsablauf (inkl. direkter Re-Authentifizierung)  
- Automatischer Logout bei längerer Inaktivität  
- Theme-Einstellung wird dauerhaft serverseitig gespeichert  

Das reduziert das Risiko offener, vergessener Sessions – besonders in geteilten Arbeitsumgebungen.

---

### Spürbar flüssigerer Chat
Der AI Chat wurde an mehreren Stellen grundlegend stabilisiert:

- Keine UI-Freezes mehr bei umfangreichen Artefakt-Vorschlägen  
- Enter-Taste während des Streamings sauber blockiert  
- Keine „Geister-Nachrichten“ bei Fehlern  
- Cursor-Falle nach Dokumenten-Paste behoben  
- Verständlichere Fehlerbehandlung bei Websuche  

Das Ergebnis: ein deutlich robusteres, professionelles Chat-Erlebnis im Alltag.

---

## Verbesserungen

### Dokumentenverarbeitung: schneller, fairer, robuster
Die gesamte Embedding-Queue wurde weiterentwickelt:

- Fairere Verteilung zwischen Organisationen  
- Dedizierter Worker für interaktive (kritische) Uploads  
- Sofortige Verarbeitung neuer Jobs über PostgreSQL NOTIFY  
- Deutlich kürzere Retry-Zeiten bei Fehlern  
- Prefix-Caching für Vision-Modelle → schnellere Verarbeitung großer Dokumente  
- Bildvalidierung vor Vision-Verarbeitung für frühzeitige Fehlererkennung  

Dokumente aus dem Chat werden jetzt priorisiert verarbeitet – auch wenn im Hintergrund große Sync-Jobs laufen.

Auch hier steckt viel Detailarbeit von **Pascal** dahinter.

---

### Aktualisierter Modellkatalog
Der Modellkatalog wurde umfassend aktualisiert:

- Neue Modelle von OpenAI, Anthropic, Google und Mistral  
- Kontextfenster bis zu 1 Mio. Tokens  
- GPT‑5.5 und GPT‑5.5 Pro bereits vorbereitet  
- Unterstützung für Anthropics Adaptive-Thinking-API (Opus 4.7)  

Danke an **Mirko** und **Oliver** für die Aktualisierungen – sowie an **Justus** für die Erweiterung des LLM-Gateways um `prompt_cache_key` und `max_output_tokens`.

---

## Fehlerbehebungen

- Google-Modelle: stabilere Thought-Signature bei mehreren Tool Calls  
- Mistral: kein 30-Sekunden-Timeout mehr bei komplexen Anfragen  
- Drag & Drop im File Explorer wieder zuverlässig  
- Ordner-Löschen und Tabellen-Skalierung korrigiert  
- Projekt-Anweisungen werden sofort aktualisiert  
- Compliance-Audit-Logs korrekt mit Chat-Nachrichten verknüpft  

Viele kleine Kanten wurden glattgezogen – mit spürbarem Effekt im Alltag.

---

## Unter der Haube

- Verbesserte Stabilität bei WebSockets und Space-Löschungen  
- Batch-Löschung für Dateispeicher verhindert Ressourcenengpässe  
- 44 Abhängigkeiten aktualisiert  

---

Vielen Dank an **Pascal, Mirko, Justus, Oliver** und dependabot für dieses umfangreiche Release.

— 40 PRs · 114 Dateien geändert · ~7.900 Zeilen hinzugefügt

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
