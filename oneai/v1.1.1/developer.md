# v1.1.1 — Developer Changelog

**Release Date:** 2026-06-24
**GitHub Release:** [v1.1.1](https://github.com/0codekit/oneai/releases/tag/v1.1.1)

## Infra

- Verbesserte Beobachtbarkeit von Nutzersessions zur schnelleren Fehlerdiagnose.
- Neues internes Fundament, damit Tool-Aufrufe einheitlich behandelt und bestätigt werden können.
- Interne Erweiterung, damit Tools mit zur Laufzeit generierten Namen sauber funktionieren.
- Interne Vorbereitung für die n8n-Workflow-Generierung (noch nicht aktiv).
- Interne saubere Engine für n8n-Workflow-Generierung mit Dual-Source-RAG (noch nicht aktiv).
- Docker-Base-Image-Upgrade — schlanker und aktueller.

## Refactor

- ClickUp läuft jetzt auf der einheitlichen Connector-Plattform — stabiler und besser wartbar.
- n8n-Workflow-Tools laufen jetzt einheitlich auf der Tool-Registry-Plattform.
- Tool-Aufrufe nutzen jetzt native Objekt-Argumente (MCP-Proxy-Tool-Pattern) und sind beim Replay identisch — mit Validate-and-Retry.
- Saubere JSON-Ausgabe für das Tool-Such-Tool — besser für die KI verarbeitbar.
- Code-Refactoring zur sauberen Struktur der Integrationen.
- Code-Refactoring zur sauberen Struktur der Integrationen.
- Der bisherige E-Mail-Provider Resend wurde durch eine schlankere Lösung ersetzt.
- Auch weclapp läuft jetzt auf der einheitlichen Connector-Plattform.
- Outlook nutzt jetzt das einheitliche Connector-Registry.

## Feature

- Ihr könnt jetzt KI-Antworten bewerten — Administratoren sehen das aggregierte Feedback in einem neuen Dashboard.
- Bilder lassen sich jetzt überall in Artefakte einfügen — egal ob per Zwischenablage, Upload, Drag&Drop oder direkt von der KI generiert.
- OneAI schlägt sinnvolle nächste Fragen vor — direkt im Chat.
- Spaces zeigen jetzt für jeden Connector eine passende Ansicht — z. B. eine eigene E-Mail-Vorschau für Outlook.
- Die KI kann jetzt eure Spaces, Projekte und Dateien selbständig erkunden und gezielt auf Inhalte zugreifen.
- Self-Service-Anmeldung für das OneGateway mit zugehörigem Frontend.
- Neue Foundation für OneAI-Integrationen.
- Teilt Artefakte als privat, projektweit oder öffentlich — mit eigenem Share-Link pro Sichtbarkeit.
- Ihr könnt jetzt im Gateway eine Obergrenze für die monatlichen Ausgaben festlegen.
- HubSpot-Anbindung mit neuen Chat-Tools, Setup-Assistent und ausgereifteren Live-Tests.
- OneAI kann jetzt direkt mit eurem Outlook-Postfach interagieren — auf der neuen Tool-Calling-Plattform.
- Erste Phase des neuen Uno-Assistenten: Backend + Frontend hinter einem Feature-Flag.
- Die KI kann jetzt generische HTTP-APIs ansteuern und entdecken — der erste Schritt zu universellen Integrationen.
- Bindet Model-Context-Protocol-Server an — verwaltet auf Org-Ebene durch Admins.
- Die KI kann jetzt nach geeigneten Tools für eure Aufgabe suchen — schnellerer Zugriff bei vielen verfügbaren Tools.
- Backend-Verdrahtung der n8n-Generierung + neues run_n8n_workflow-Tool.
- Vollständige Workflow-Verwaltung: ändern, löschen, aktivieren und automatisch reparieren.
- n8n-Workflows aus Templates haben automatisch korrekte Credentials und respektieren OneAI-Compliance-Regeln.
- Sprecht eure Fragen statt sie zu tippen — der neue Voice-Mode unterstützt natürliche Konversationen.
- Eure Python-Code-Snippets können jetzt Bilder zurückliefern, die direkt im Chat angezeigt werden.
- Neues Partner-Portal für OneAI-Partner — mit eigener Routing- und Build-Pipeline.
- Fundament für KI-generierte Präsentationen — Schema und Speicherung.
- Anbindung an Google Vertex AI als Modell-Provider.
- LLM-Tools, mit denen die KI Präsentationen anlegen und aktualisieren kann.
- Schaut eure KI-generierten Präsentationen live im Artifact-Panel an.
- Exportiert eure Präsentationen als PowerPoint oder PDF — direkt aus dem Chat.
- Python-Code-Snippets können jetzt direkt auf Dateien aus euren Spaces zugreifen.
- Erste Phase des Portal-Features.
- Deterministische Merge-Engine für n8n-Workflow-Updates mit nachgelagerter Validierung.
- Lifecycle-Tools, Delta-Builder und Preview für n8n — ohne Feature-Flag.
- Frontend-Karten für n8n-Workflows mit doppelter Bestätigung und einer Übersicht der angewandten/verworfenen Änderungen.
- Google SSO und Google Drive sind hinter einem Feature-Flag wieder aktivierbar — Drive nutzt jetzt das einheitliche Connector-Registry.
- Generic API-Tool akzeptiert jetzt Objekt-Argumente, behandelt Timeouts nicht als echte Fehler und bietet einen Response-Selector.
- Fundament für Projekt-Vorlagen — Speichern, Auflisten und Abrufen.
- Wenn die KI ein falsches Tool aufruft, gibt es jetzt einen klaren Hinweis auf das vermutlich gemeinte Tool.
- Wählt mehrere Chats gleichzeitig aus und löscht sie in einem Rutsch.
- Die Beschreibung des Python-Tools sagt der KI klar, dass kein Netzwerkzugriff verfügbar ist.
- Neues internes Fundament, mit dem Tools polymorph als Auto-Approve markiert werden können — die KI lernt, was sie selbständig ausführen darf.
- Neuer Kunden-Bereich im Portal.
- Uno bekommt ein eigenes Wissens-System, Workspace-Kontext und eine deutlich bessere Konversations-UX.
- Neue Audit- und Redaktions-Funktionen für mehr Compliance.
- Jeder Nutzer kann eigene MCP-Server konfigurieren — Admins haben Org-weiten Zugriff per ID.
- Privat geteilte Artefakte öffnen jetzt eine schlanke Read-Only-Landingpage — sauberer Empfänger-Eindruck.
- Outlook-Schreibaktionen können der KI im Vertrauensfenster automatisch erlaubt werden — mit sicherer HTML-Vorschau.
- Auch n8n-Content- und Run-Operationen lassen sich ins Trust-Window aufnehmen — weniger Bestätigungs-Klicks.
- Für vertraute Hostnamen führt die KI Reads automatisch aus und genehmigt Writes im Vertrauensfenster.
- Neues Grok-4.3-Modell verfügbar (über Vertex), inkl. einer Governance-Tabelle für die Admin-Verwaltung von Modellen.
- Bestätigungs-pflichtige MCP-Tools lassen sich ins globale Vertrauensfenster aufnehmen — Silent-Execute-Lücke geschlossen.
- Aus einer Projekt-Vorlage neue Projekte erstellen — und Vorlagen wieder löschen.
- Ihr seht jetzt direkt in der Activity-Bar und auf den Space-Karten, wie weit die Dokumenten-Indexierung ist.

## Bugfix

- Wenn die KI mehrere Tools gleichzeitig anstößt, bleibt der Chat nicht mehr in der Bestätigung stecken.
- Login- und Bestätigungs-Links per E-Mail bleiben länger gültig — weniger abgelaufene Links.
- Budget-Änderungen blockieren das System nicht mehr.
- Spaces lassen sich auch dann sauber löschen, wenn externe Aufräumarbeiten scheitern — keine halben Löschvorgänge mehr.
- Behebt 'Invalid JSON args'-Fehler beim Wiederabspielen von Chats mit Funktionsaufrufen.
- Sprach-Antworten kommen jetzt ohne Aussetzer zurück.
- Admins können jetzt Team-Mitglieder löschen, ohne durch deren historische Aktivitäten blockiert zu werden.
- In den Copilot-Einstellungen seht ihr klare Labels für jede Risiko-Aktion.
- Dokumenten-Verarbeitung läuft auch dann zuverlässig durch, wenn einzelne Anfragen abbrechen — automatische Wiederholungen und Worker-Supervision.
- Bild-Kosten werden in der richtigen Größe abgerechnet und Provider-Fehler richtig kategorisiert.
- Bei abgelaufenen Microsoft-Tokens seht ihr die genaue Fehlerursache und das System markiert dauerhafte Auth-Probleme korrekt.
- Diagramme und Syntax-Highlighting werden jetzt vollständig gerendert, bevor das PDF erzeugt wird.
- Wenn ihr ein Artefakt ohne expliziten Verweis nennt, weiß OneAI jetzt, dass das aktive Artefakt gemeint ist.
- Behebt einen Fehler, bei dem Artefakte beim ersten Öffnen leer angezeigt wurden.
- Agent-Shutdown crasht nicht mehr, wenn der DB-Socket bereits geschlossen ist.
- OneAI findet Empfänger-Namen jetzt über Kontakte → People → Verzeichnis → Mailbox — keine kryptischen E-Mail-Adressen mehr.
- Chat-Vorschläge wurden überarbeitet, sodass sie nicht mehr unsinnige Fragen an die KI vorschlagen.
- Die Admin-Modelle-Seite bleibt beim Öffnen oben — kein nerviges Auto-Scrollen mehr.
- Vertex-AI-Authentifizierung läuft jetzt zuverlässig, Modelle werden korrekt zur passenden Region geroutet.
- Behebt einen Crash bei der Dokumenten-Verarbeitung, wenn weniger Seiten-Texte als erwartet vorhanden sind.
- Nach einer Reconnect-Pause werden alte Bestätigungs-Dialoge nicht mehr unnötig wiederholt.
- Behebt einen seltenen Fall, in dem ein HTTP-Lock fälschlich einen anderen Transport beendete.
- Große Dateien synchronisieren jetzt zuverlässig — kein Cast-Fehler mehr bei der Dateigröße.
- Bundesanzeiger-Beträge werden jetzt korrekt in Euro statt in Cent angezeigt.
- Datei-Pfade mit doppelten Slashes werden jetzt automatisch normalisiert.
- Bei Modell-Fehlern bekommt ihr klarere, hilfreichere Fehlermeldungen.
- Behebt Validierungsfehler bei Tool-Aufrufen mit Discriminator-Feldern.
- Der Check auf persönliche Space-Links läuft nur noch für tatsächlich neu hinzugefügte Links — weniger Reibung.
- Wenn ein Dokument nicht mehr existiert, wird die Embedding-Aufgabe nicht endlos wiederholt.
- .keep-Dateien (Platzhalter) tauchen nicht mehr im Activity Hub auf.
- Tool-Argumente, die fälschlich als String kommen, werden jetzt automatisch korrekt geparst.
- 'Prompt is too long'-Fehler (400) treten nicht mehr auf — das Kontextfenster wird auf allen Request-Pfaden konsequent eingehalten.

## Ui

- Das Billing-Dashboard zeigt eure Kosten und Limits jetzt verständlicher an.
- Beim Hovern über die Voice-Bedienelemente erscheinen kurze Erklärungen — keine Rätselraten mehr.
- Die Karten im Projekt-Bereich sehen wieder so aus wie gewohnt — der Manage-Tags-Button ist ordentlich integriert.
- Verbessertes Design und UX im Portal.

## Deps

- Routine-Update aller Abhängigkeiten — bessere Sicherheit und Stabilität.
- Routine-Update aller Abhängigkeiten.
- Modernisierung der Lint/Format-Tool-Chain.
- Package-Manager-Update.

## Security

- Komplette Bereinigung aller bekannten Sicherheitslücken in Abhängigkeiten.

## Performance

- Bei der Dokumenten-Verarbeitung werden leere Chunks ignoriert — weniger unnötige API-Aufrufe.

## Contributors

- **Pascal Schüler** (@pascalschueler-relyon)
- **Mirko** (@MT74)
- **Justus Zorn** (@justusjz)
- **Oliver Rasch** (@oliv5r)
- **Obaid Rehman** (@orehman3035)
- **Santiago** (@santilema)

## Stats

- Files changed: 690
- Total commits: 111

---
*Generated by BugHunt Changelog Agent*
