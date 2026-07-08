# v1.1.6 — Developer Changelog

**Release Date:** 2026-07-08
**GitHub Release:** [v1.1.6](https://github.com/0codekit/oneai/releases/tag/v1.1.6)

## Feature

- Decks können automatisch mit Brand-Farbe aus der Corporate Identity und einem aus dem Logo abgeleiteten Akzent eingefärbt werden.
- Erste echte Direktbearbeitung für Decks — kein erneutes Prompten der KI mehr nötig, um die Foliengruppe umzustellen.
- Nachträglich zwischen Light, Dark, Corporate, Editorial und Slate umschalten, ohne die Präsentation neu generieren zu lassen.
- Excel, PDF, Word, CSV und weitere produzierte Dateien werden im Chat als Downloads mit korrektem Dateinamen bereitgestellt, Bilder bleiben inline.
- Alle PDFs werden nun über das Vision-Modell interpretiert — das liefert bessere Ergebnisse bei komplexen Layouts, Grafiken und gemischten Inhalten.
- Neue Grundlage, um strukturierte Daten (Tabellen, Datensätze) in Chats zu speichern und wieder abzufragen — insert_data und query-Tools stehen bereit, mit sauberer Rechteprüfung pro Space.
- Wird ein Chat mit einem großen AI-Modell besonders lang (über 200K Tokens), gilt jetzt ein gestaffelter Preis — damit gibt es keine Überraschungen mehr bei extrem umfangreichen Kontexten.

## Bugfix

- Statt eines Abbruchs mit „Konversation zu groß" werden ältere Nachrichten und der aktuelle Turn automatisch gekürzt, mit sichtbarem Kürzungs-Marker.
- Wenn OneAI eine Unterhaltung mitten drin zusammenfassen muss, landet die frische Zusammenfassung jetzt korrekt im Systemprompt — vorher war stattdessen die veraltete Version aktiv.
- In langen Chats lädt das Nachladen älterer Nachrichten wieder wie erwartet — vorher blieb die Historie bei Scroll-nach-oben stehen.
- Wenn ein GPT-Modell vor einem Tool-Aufruf Text schreibt (z.B. „Ich erstelle jetzt das Bild…"), bricht der Chat nicht mehr mit einem 400er ab.
- Der „HubSpot verbinden"-Button startet jetzt wirklich den OAuth-Flow — vorher blieb der Wizard auf einer leeren Seite hängen.
- Exportierte PDFs zeigen jetzt gerenderte Mermaid-Diagramme und syntax-gehighlighteten Code — vorher stand dort nur der rohe Quelltext.
- Kurzzeitige Verbindungsprobleme zum Storage-Backend brechen keine ganzen Sync-Läufe mehr ab — es wird jetzt erneut versucht und automatisch auf eine andere Replica ausgewichen.
- Microsofts Outlook-Webhooks liefern manchmal Nachrichten ohne den erwarteten Änderungstyp — der Sync antwortet darauf jetzt sauber statt in eine 500er-Schleife zu geraten.
- Claude Opus 4.6 und Sonnet 4.6 nutzen jetzt das aktuelle „Adaptive Thinking"-Verfahren von Anthropic — vorher wurde eine veraltete Konfiguration verwendet, die bei den nächsten Modell-Versionen fehlgeschlagen wäre.
- Wenn ein AI-Anbieter überlastet ist oder ein Rate-Limit greift, seht ihr im Chat jetzt die tatsächliche Ursache statt einer generischen Fehlermeldung.
- Anthropic-Modelle konnten die exec_sql- und exec_python-Tools nicht mehr aufrufen, wenn keine Input-Dateien nötig waren — jetzt behandelt OneAI ausgelassene Argumente korrekt.
- Bei einem PostgreSQL-Failover erzeugte der Activity-Stream fälschlicherweise viele Unhandled-Promise-Rejection-Fehler im Backend-Log — reine Log-Hygiene, ohne Auswirkung auf die User Experience.

## Performance

- Große GitHub-Repos werden zuverlässiger embedded, ohne das GitHub-API-Limit zu erreichen — Verzeichnisstrukturen und Datei-Inhalte werden intelligent gecached.
- Das Vision-Modell beschreibt Bilder in eingebetteten Dokumenten jetzt detaillierter und produziert kompaktere Mermaid-Diagramme.
- Bei ausgelasteten internen GPUs kann OneAI die Bildanalyse und Chunk-Zusammenfassung des Embeddings jetzt automatisch zu Vertex AI (Gemini) umleiten — für unterbrechungsfreie Dokumentenverarbeitung.
- Die Vision- und Summary-Calls für Dokumente laufen jetzt an einem Bottleneck im Google-SDK vorbei — Uploads werden bei paralleler Last spürbar zügiger verarbeitet.
- Auch für die selbstgehostete OneStack-Route umgeht OneAI jetzt ein SDK-Bottleneck — die Embedding-Pipeline parallelisiert Requests spürbar besser.
- Der volumenstärkste Teil der Embedding-Pipeline — die eigentlichen Vektor-Berechnungen — läuft nun ebenfalls über den optimierten direkten HTTP-Pfad, was die Verarbeitungszeit weiter verkürzt.
- Eine ineffiziente Datenbankabfrage im Embedding-Worker, die den PostgreSQL-Server dauerhaft auf 100% CPU trieb, wurde optimiert.

## Ui

- Wenn OneAI eine bekannte Störung hat, wird jetzt ein dezenter Statusbanner in der App angezeigt — ihr müsst nicht mehr in einer separaten Statusseite nachschauen.

## Infra

- Die Priority-Tier-Konvention für lokal gehostete Modelle wurde vereinheitlicht — für konsistentes Verhalten zwischen unterschiedlichen Backend-Setups.
- Interne Basis-Infrastruktur für zukünftige, provider-übergreifende Integrationen (n8n, OneGlue u.a.) — noch nicht user-sichtbar.
- Interne Metriken pro Pipeline-Stage — Vision, Summary, Embedding, Transcription — als always-on Prometheus-Series und Grafana-Panels. Kein user-sichtbarer Effekt.
- Neue Prometheus-Series machen sichtbar, wenn HTTP-Requests im Client-Queue hängen — hilft dem Team, Bottlenecks zu diagnostizieren. Kein user-sichtbarer Effekt.
- Neue interne Metriken für die PDF-Rendering-Latenz und Concurrency im oneai-worker. Kein user-sichtbarer Effekt.
- Zusätzliche Prometheus-Counter machen sichtbar, wie viele PDF-Seiten OneAI pro Sekunde verarbeitet. Interne Beobachtbarkeit.

## Deps

- Regelmäßige Sicherheits- und Wartungs-Updates aller Abhängigkeiten (SDKs für Anthropic, Google GenAI, Mistral; UI-Libs; Tooling). Kein user-sichtbarer Effekt.

## Contributors

- **Pascal Schüler** (@pascalschueler-relyon)
- **Justus Zorn** (@justusjz)
- **Mirko** (@MT74)
- **Oliver Rasch** (@oliv5r)
- **Santiago** (@santilema)
- **Obaid Rehman** (@orehman3035)

## Stats

- Files changed: 109
- Total commits: 34

---
*Generated by BugHunt Changelog Agent*
