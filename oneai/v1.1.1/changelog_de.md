# OneAI v1.1.1 — Voice Mode, Präsentationen und intelligentere Automatisierung

**Release Date:** 2026-06-24

## Highlights

OneAI v1.1.1 ist eines unserer größten Releases bisher. Im Mittelpunkt stehen neue Arbeitsweisen in **AI Chat**, deutlich stärkere **Artefakte** und ein großer Schritt nach vorn bei **Automatisierung mit Kontrolle**.

- **Voice Mode in AI Chat**: Ihr könnt jetzt direkt mit OneAI sprechen, statt zu tippen. Dank Justus ist der neue Sprachmodus bereits im ersten Rollout zuverlässig nutzbar – inklusive stabilerem Streaming und verständlicher Bedienhinweise.
- **KI-generierte Präsentationen im Chat**: Erstellt komplette Präsentationen direkt aus einer Unterhaltung heraus, schaut sie live im Artifact-Panel an und exportiert sie als **PowerPoint oder PDF**. Danke an Pascal, der dieses Feature end-to-end umgesetzt hat.
- **Uno – der neue Assistent**: Mit eigenem Wissenssystem, Workspace-Kontext und überarbeiteter Konversationsführung wird Uno zu einer neuen, fokussierten Assistenten-Erfahrung. Santi hat hier die Grundlage für die nächsten Ausbaustufen gelegt.
- **Artefakte besser teilen**: Artefakte unterstützen jetzt Bilder und lassen sich mit **privaten, projektweiten oder öffentlichen Links** teilen. Öffentliche und private Freigaben wirken dabei deutlich sauberer und empfängerfreundlicher.
- **Projekt-Templates**: Häufig genutzte Projekt-Setups könnt ihr jetzt als Vorlage speichern und mit einem Klick wiederverwenden.

## Verbesserungen

- **Weniger Klicks bei Tool-Aufrufen**: Mit der neuen **Trust-Window-Logik** lernt OneAI, wann vertrauenswürdige Aktionen automatisch ausgeführt oder bestätigt werden dürfen – z. B. bei Outlook, n8n, MCP-Tools oder freigegebenen APIs. Das macht Automatisierung spürbar flüssiger, ohne die Governance aus dem Blick zu verlieren. Große Teile dieses Fundaments kommen von Mirko.
- **Bessere Transparenz in Wissensräumen**: In **Wissensräumen** seht ihr jetzt den Fortschritt der Dokumenten-Indexierung direkt in der Activity Bar und auf den Space-Karten.
- **Connector-spezifische Ansichten**: Inhalte aus Connectors werden passender dargestellt, inklusive einer eigenen Outlook-Nachrichtenansicht.
- **Sinnvollere Chat-Vorschläge**: AI Chat schlägt jetzt relevantere nächste Fragen vor.
- **Mehr Möglichkeiten mit Python im Chat**: Python-Ausgaben können jetzt auch Bilder enthalten, und Dateien aus Wissensräumen lassen sich direkt an Python übergeben.
- **Erweiterte Integrationen und Modelle**: Dazu gehören unter anderem Vertex AI, Grok 4.3 über Vertex, MCP-Server-Verwaltung sowie neue Integrations- und Portal-Bausteine.
- **Feedback für AI-Antworten**: Nutzer können Antworten bewerten, während Admins das aggregierte Feedback in einem Dashboard sehen.

## Fehlerbehebungen

Dieses Release enthält viele gezielte Stabilitätsverbesserungen im Alltag:

- **Zuverlässigere Dokumentenverarbeitung**: Dokumente werden robuster verarbeitet, auch bei temporären Fehlern oder abgebrochenen Requests. Danke an Pascal – gerade bei größeren Wissensräumen sorgt das für deutlich weniger manuelle Nacharbeit.
- **Stabilere Syncs und Connectors**: OneDrive-Synchronisation funktioniert zuverlässiger, auch bei großen Dateien. Google Drive und Google SSO wurden außerdem sauberer wieder eingebunden.
- **Weniger Chat-Unterbrechungen**: Tool-Bestätigungen hängen nicht mehr bei parallelen Aufrufen, bereits erledigte Bestätigungen werden nach Reconnect nicht erneut gezeigt, und zu lange Prompts führen deutlich seltener zu Fehlern.
- **Bessere Artefakt-Erfahrung**: Artefakte zeigen beim ersten Öffnen nun korrekt ihren Inhalt, Referenzen auf das aktive Artefakt werden zuverlässiger erkannt, und PDF-Exporte warten sauber auf Diagramme und Syntax-Highlighting.
- **Klarere Fehlermeldungen**: Fehler von Modell-Providern und Microsoft-Authentifizierung werden verständlicher angezeigt, damit Probleme schneller eingegrenzt werden können.
- **Admin- und Projekt-Polish**: Mitglieder lassen sich auch dann entfernen, wenn historische Billing- oder Persona-Daten existieren. Außerdem gibt es Bulk-Delete für Chat-Listen in Projekten und kleinere UI-Verbesserungen an mehreren Stellen.

## Security

- **Alle bekannten Abhängigkeits-Schwachstellen behoben**: Der pnpm-Audit-Stand wurde von **54 auf 0** reduziert.
- **Kontrolliertere Tool-Ausführung**: Die neue Trust-Window-Mechanik schließt Lücken bei stillen Ausführungen und macht automatische Tool-Entscheidungen nachvollziehbarer und sicherer.
- **Robusteres Auth-Verhalten**: Dauerhafte Microsoft-AAD-Fehler werden sauber erkannt, statt wiederholt mit ungültigen Credentials weiterzulaufen.

## Unter der Haube

Neben den sichtbaren Neuerungen haben wir Connectoren auf eine einheitlichere Plattform migriert, die Tool-Infrastruktur erweitert, Session-Diagnostik verbessert und viele Grundlagen für künftige Integrationen und Automatisierung gelegt.

Danke an **Pascal, Mirko, Justus, Oliver, Obaid und Santi** für dieses außergewöhnlich umfangreiche Release.

*111 Commits · 108 PRs · 690 geänderte Dateien*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
