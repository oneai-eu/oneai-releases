# v1.0.0 — Developer Changelog

**Release Date:** 2026-05-06
**GitHub Release:** [v1.0.0](https://github.com/0codekit/oneai/releases/tag/v1.0.0)

## Breaking Changes

- **Beta code gate removed — signup no longer requires an invitation code. Any beta-code-based access restrictions are dropped.**
- **Google Sign-In and Google Drive connector temporarily hidden. Users relying on Google SSO or Google Drive sync must use alternative methods.**
- **Contextual retrieval removed from embedding pipeline. Existing embeddings will not be automatically re-processed, but new embeddings use the simplified summarization approach.**

## Feature

- Team-Organisationen erhalten ein zentrales KI-Budget mit Nutzerbudgets, Überschreitungskontrolle und automatischen E-Mail-Benachrichtigungen.
- Partner können Organisationen ohne eigenes Stripe-Abo verwalten, inklusive Billing-Events und Partner-Info.
- Partner-Informationen sind jetzt in der Verwaltungsoberfläche einsehbar.
- Nutzer können eine Authenticator-App als zweiten Faktor einrichten und beim Login verwenden.
- Die KI kann auf Anfrage direkt Projekte mit Namen, Beschreibung und Systemprompt anlegen.
- Die KI greift bei Diagramm-Anfragen auf eine Syntax-Referenz zu und erstellt dadurch fehlerfreie Mermaid-Diagramme.
- Audit-Log-Einträge zeigen farbige Risikostufen an. Neuer Filter nach Risikolevel verfügbar.
- Compliance-relevante KI-Provider-Aktivitäten werden jetzt mit anonymisierten Daten protokolliert.
- Der persönliche Space wird jetzt automatisch dem persönlichen Projekt zugeordnet — kein manuelles Verbinden mehr nötig.
- In den Projekteinstellungen gibt es jetzt einen Tab, um Zugriffskonflikte direkt zu sehen und zu lösen.
- Die Übersicht der Nutzerbudgets unterstützt jetzt Seitenblättern bei vielen Nutzern.
- Chat-Zusammenfassungen laufen jetzt auf eigener EU-Infrastruktur — Chat-Verlauf verlässt nicht mehr die EU.
- Die KI erkennt die Sprache der Anfrage und antwortet automatisch in derselben Sprache.
- Nutzungsbedingungen und Kundenvertrag sind jetzt getrennt und überall in der App korrekt verlinkt.
- Bei abgelaufenem Token kann ein GitHub-Space jetzt über einen neuen OAuth-Flow neu verbunden werden, ohne den Space neu anzulegen.
- Alle Abo-Pläne und Speicher-Add-ons sind jetzt mit Stripe-Preisen verknüpft.
- Das kostenfreie KI-Modell hat einen neuen, klareren Namen erhalten.

## Performance

- Die Dokumentenverarbeitung verteilt Ressourcen jetzt fair zwischen Organisationen und Spaces — große Uploads blockieren andere Nutzer nicht mehr.
- Dokumente werden schneller und günstiger verarbeitet, ohne Qualitätsverlust bei der Suche.
- Die App lädt deutlich schneller — doppelt geladene Code-Highlighting-Bibliotheken wurden zusammengeführt.
- Bei vielen gleichzeitigen Nutzern kam es zu Ladefehlern — das ist jetzt behoben mit automatischer Wiederholung.
- Dashboard und Projekte laden schneller, da Charts und Listen erst bei Bedarf geladen werden.
- Große PDF-Dateien und Bilder werden jetzt speicherschonend verarbeitet.
- Große Dokumente werden jetzt zuverlässig in die Vektordatenbank geschrieben.
- Statische Dateien werden jetzt vom Browser gecached — die App fühlt sich spürbar schneller an.
- Bildverarbeitung bei Dokumenten läuft jetzt effizienter.
- Bildanalyse wird schneller abgeschlossen und verbraucht weniger Ressourcen.

## Security

- Beim Login werden jetzt gecachte Daten vorheriger Sitzungen sauber entfernt — keine versehentliche Datenanzeige anderer Accounts.

## Ui

- Dateien können jetzt direkt per Drag-and-Drop auf die Chat-Startseite gezogen werden.
- Das Artefakt-Panel nimmt auf Mobilgeräten jetzt die volle Breite ein und ist endlich benutzbar.
- Quellenverweise (Referenz-Badges) im Chat sind jetzt anklickbar und führen direkt zum Dokument.
- Tabellen sehen jetzt in hellen und dunklen Themes einheitlich gut aus.
- Der Pfeil in der Admin-Navigation dreht sich jetzt beim Öffnen und Schließen.
- Google-Anmeldung und Google-Drive-Connector sind vorläufig deaktiviert.

## Bugfix

- Projekt- und Teamnamen dürfen jetzt Umlaute (ä, ö, ü, ß) enthalten.
- Beim Abmelden blitzte kurz ein Fehlerbildschirm auf — das ist jetzt behoben.
- In seltenen Fällen konnte sich die Login-Seite aufhängen — das wurde behoben.
- Unterbrochene Chat-Antworten werden jetzt wieder korrekt fortgesetzt.
- Fehlermeldungen von KI-Anbietern werden jetzt korrekt angezeigt statt als allgemeiner Serverfehler.
- Beim Löschen von Dateien in Spaces konnte es zu verwaisten Einträgen kommen — das ist behoben.
- Die Compliance-Prüfung stürzt nicht mehr ab, wenn das KI-Modell unvollständiges JSON zurückliefert.
- Im PDF-Export laufen Code-Blöcke und Tabellen nicht mehr über den Seitenrand hinaus.
- Artefakt-Vorschläge gehen nicht mehr verloren, wenn die Verbindung erst nach dem Senden hergestellt wird.
- Artefakte werden jetzt zuverlässiger positioniert, Doppeleinreichungen sind verhindert.
- Beim Wechsel aus der Quellcode-Ansicht bleibt der Inhalt jetzt erhalten.
- Der Verarbeitungsstatus von Dokumenten wird jetzt in Echtzeit in der Dateiliste angezeigt.
- Nach der Spracherkennung wird jetzt automatisch ein Leerzeichen eingefügt.
- Die Dokumentensuche berücksichtigt jetzt auch Bild- und Audio-Inhalte besser.
- Tool-Aufrufe an OpenAI-Modelle funktionieren jetzt zuverlässiger.
- Nachrichten zeigen jetzt den Wochentag im Zeitstempel an.
- Beim Testen privater Modelle werden jetzt präzisere Fehlermeldungen und Endpunkt-Hinweise angezeigt.
- Google-Modelle funktionieren jetzt zuverlässiger bei langen Gesprächen.
- Beim Wechsel des KI-Modells mitten im Chat werden alte Nachrichten jetzt korrekt umgewandelt.
- Reasoning-Inhalte werden für stateless Replay gespeichert — weniger Wiederholungsfehler.
- Die weclapp-Integration liefert jetzt korrekte Daten für alle Entitätsfelder.
- Das Aktualisieren des Organisations-Modells schlägt nicht mehr fehl, wenn das alte Modell nicht mehr verfügbar ist.
- Das Speichern der Compliance-LLM-Einstellungen funktioniert wieder.
- Die Einrichtung der Zwei-Faktor-Authentifizierung per App funktioniert jetzt zuverlässig.
- Nach dem Entfernen eines Teammitglieds wird die Liste jetzt sofort aktualisiert.
- Der Activity-Stream zeigt jetzt auch Embedding-Aktivitäten und verhindert veraltete Space-Daten.
- Die Cooldown-Prüfung bei Space-Zugriffsanfragen funktioniert jetzt fehlerfrei.
- Zugriffsanfragen werden jetzt korrekt validiert.
- Admin-Labels in der Zugriffskontrolle sind jetzt kontextabhängig korrekt.
- Die Reasoning-Warnung im Modell-Selektor erscheint nur noch, wenn sie tatsächlich relevant ist.
- Beim Anfordern von Space-Zugriff zeigen einzelne Buttons jetzt ihren Ladezustand an.
- Beim Filtern nach Status werden jetzt Dateien aus allen Ordnern angezeigt.
- Alle rechtlichen Links verweisen jetzt korrekt auf oneai.eu.
- Die GitHub-Synchronisation beachtet jetzt Rate-Limits und pausiert automatisch.
- Das Dashboard zeigt jetzt die tatsächlichen Gesamtkosten inklusive gecachter Anfragen.
- Die Verwaltung von Nutzerbudgets funktioniert jetzt zuverlässiger mit besserem Feedback.
- Interne Modelle werden nicht mehr fälschlich als kostenpflichtig angezeigt.
- Die häufig gestellten Fragen zu Kosten und Zusatzpaketen sind jetzt aktuell.
- Beim Einladen neuer Mitglieder wird jetzt ein Hinweis auf anteilige Kosten angezeigt.
- Die Kostenberechnung berücksichtigt jetzt korrekt die Mindestanzahl an Sitzplätzen.
- Die Audiotranskription funktioniert jetzt zuverlässig.
- ClickUp-Spaces mit vielen Aufgaben werden jetzt speicherschonend synchronisiert.
- Build-Konfiguration korrigiert für korrekte Modul-Initialisierungsreihenfolge.

## Refactor

- URL-Crawling hat jetzt ein strengeres Limit im Hauptchat.
- Die Embedding-Queue nutzt jetzt einen einzigen Wake-Pfad über PostgreSQL NOTIFY.
- Das Anthropic-style Contextual Retrieval wurde durch einfachere Chunk-Zusammenfassungen ersetzt.
- Datenbankmigrationen folgen jetzt einer beschreibenden Namenskonvention.
- Der Support-Dialog wurde verschlankt und der unbenutzte Feedback-Button entfernt.

## Infra

- Bessere Nachverfolgbarkeit der Embedding-Pipeline in Monitoring-Tools.
- Weniger Rauschen in den Tracing-Daten durch Deaktivierung unnötiger Spans.
- Weniger Logging-Rauschen im Server-Output.
- Code-Qualität verbessert durch Behebung von Linter-Warnungen.
- pnpm update-openapi funktioniert jetzt auch ohne laufende Datenbank.
- Alle GitHub-API-Aufrufe nutzen jetzt eine feste API-Version.
- Automatisches Deployment über GitHub Actions eingerichtet.
- Die Beta-Code-Abfrage bei der Registrierung wurde entfernt für den öffentlichen Launch.
- Versionsupdate auf 1.0.0.
- Automatisierte Tests für die Abrechnungslogik hinzugefügt.

## Deps

- 43 Abhängigkeiten auf aktuelle Versionen gebracht.

## Contributors

- **Pascal Schüler** (@pascalschueler-relyon)
- **orehman3035** (@orehman3035)
- **Justus Zorn** (@justusjz)
- **Santi Lema** (@santilema)
- **Oliver Rasch** (@oliv5r)
- **Mirko Tochtermann** (@MT74)
- **dependabot[bot]** (@dependabot[bot])

## Stats

- Files changed: 414
- Total commits: 96

---
*Generated by BugHunt Changelog Agent*
