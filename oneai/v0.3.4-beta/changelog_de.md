# OneAI v0.3.4-beta — Bildgenerierung, intelligente GitHub-Spaces & starke UX-Upgrades

**Release Date:** 2026-03-18

Mit v0.3.4-beta wird OneAI visueller, intelligenter und spürbar stabiler im Alltag. Dieses Release bringt einen zweiten Bildgenerator, hebt GitHub-Spaces auf ein neues Niveau und macht die Arbeit mit Artefakten deutlich produktiver.

## Highlights

### Google Imagen 4 für Bildgenerierung
Neben OpenAI steht euch jetzt **Google Imagen 4** als zusätzlicher Bildgenerator zur Verfügung – in drei Varianten:

- **Standard** – ausgewogene Qualität und Geschwindigkeit  
- **Fast** – schnelle Ergebnisse für Iterationen  
- **Ultra** – maximale Qualität für anspruchsvolle Visuals  
- Bis zu **4 Bilder pro Anfrage**

Damit habt ihr mehr Flexibilität bei Stil, Geschwindigkeit und Kosten – direkt integriert in OneAI. Danke an **Mirko**, der die Integration sauber in unsere bestehende LLM-Routing-Architektur eingebettet hat.

### Intelligente Code-Analyse für GitHub-Spaces
GitHub-Spaces verstehen eure Repositories jetzt deutlich besser.

Bei jeder Synchronisation analysiert OneAI automatisch:

- Repository- und Verzeichnisstruktur  
- Verwendete Programmiersprachen  
- Abhängigkeiten (z. B. package.json, requirements.txt, go.mod, Cargo.toml)  
- Mögliche Entry Points

Zusätzlich werden kontextreiche Übersichtsdateien generiert und Code-Dateien mit strukturellen Hinweisen angereichert. Ergebnis: **präzisere, architektur-bewusste Antworten im AI Chat** – besonders bei größeren Codebasen.

Ebenfalls von **Mirko** umgesetzt – ein großer Schritt für alle Teams, die mit Code in OneAI arbeiten.

### Artefakte komplett überarbeitet
Artefakte sind jetzt ein vollwertiger, kollaborativer Bestandteil von OneAI.

Neu:

- **Teilen von Artefakten** (öffentlich/privat umschaltbar)  
- **Direktlinks** zu einzelnen Artefakten  
- Zugriff anfragen mit E-Mail-Benachrichtigung  
- **Suche, Sortierung und Paginierung** in der Übersicht  
- Eigener **Artefakte-Tab** in Projekten (neben Chats und Dateien)

Das macht Artefakte deutlich einfacher auffindbar und teamfähig – insbesondere für projektspezifische Ergebnisse und generierte Dokumente.  
Großes Dankeschön an **Pascal** für dieses umfassende UX-Upgrade.

### Personas jetzt auf Chat-Ebene
Personas können ab sofort **pro Chat** gewählt werden – nicht mehr nur auf Projekt-Ebene.

Das bedeutet:

- Unterschiedliche KI-Persönlichkeiten innerhalb desselben Projekts  
- Mehr Flexibilität für verschiedene Anwendungsfälle (z. B. "Strategieberater" vs. "Technischer Reviewer")  
- Klarere Trennung von Kontexten

Bestehende Projekte behalten automatisch ihre primäre Persona als Standard. Auch diese grundlegende Umstellung wurde von **Pascal** umgesetzt.

## Verbesserungen

### Deutlich stabilere Outlook-Synchronisation
Die Outlook-Integration wurde technisch grundlegend überarbeitet:

- **Inkrementelle Synchronisation** statt vollständigem Inbox-Scan  
- Automatische Erneuerung abgelaufener Webhooks  
- Robuste Token-Erneuerung ohne Race Conditions  

Ergebnis: schnellere Synchronisation, weniger Fehler, höhere Zuverlässigkeit im täglichen Betrieb.

### Mehr Transparenz im AI Chat
- Jede KI-Antwort zeigt jetzt das verwendete **Modell-Badge** an.  
- Während komplexer Tool-Aufrufe erscheint eine **Denk-Anzeige** statt eines leeren Zustands.

Das schafft Transparenz und ein deutlich ruhigeres Nutzererlebnis bei längeren Operationen.

### Stabileres Streaming mit Anthropic
Längere Denkphasen bei komplexen Aufgaben (z. B. umfangreiche Artefakt-Generierung) brechen nicht mehr durch Timeouts ab. Das erhöht die Zuverlässigkeit bei anspruchsvollen Workflows.

### Modernisierte UI-Basis
Wir haben die gesamte Komponentenbibliothek von **Radix UI auf Base UI** migriert.

Für euch bedeutet das:

- Stabilere Interaktionen  
- Modernere technische Grundlage  
- Bessere Wartbarkeit und Performance

Einige Dropdown- und Select-Probleme im Zuge der Migration wurden direkt behoben.

## Breaking Changes

### Persona-System (Datenbank)
Das Persona-System wurde von Projekt-Ebene auf Chat-Ebene umgestellt.

- Die Tabelle `project_personas` wurde entfernt.  
- Die bisherige Haupt-Persona eines Projekts bleibt als **Standard-Persona** erhalten.  
- Personas werden nun direkt pro Chat gesetzt.

Die Migration läuft automatisch. Es ist keine manuelle Aktion erforderlich.

### API-Änderung: Space Files
Die Files-API eines Spaces liefert jetzt ein Objekt statt eines flachen Arrays:

- `files` (Array)  
- `totalFiles`  
- optional `hasNextPage`

Externe Integrationen müssen auf `response.files` zugreifen.

## Unter der Haube

- Verbesserte interne Modell- und Nutzungsmetriken (inkl. Bildgrößen-Tracking)  
- Konsolidierung von Code-Dateitypen in einem Shared-Modul  
- Vereinfachtes internes Load Balancing über Infrastruktur  
- Interne Dokumentation für kommende RAG-Verbesserungen

---

Ein starkes Release mit Fokus auf Bildgenerierung, Entwickler-Workflows und Stabilität im operativen Einsatz.  
Vielen Dank an **Pascal** (13 Changes) und **Mirko** (3 Changes) für die intensive Weiterentwicklung.

_16 Commits · 15 PRs · 320 geänderte Dateien_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
