# OneAI v1.1.6 — Präsentationen im Markenlook und deutlich robustere Chats

**Release Date:** 2026-07-08

## Highlights

**Präsentationen wirken jetzt sofort wie eure Marke.** Generierte Decks können automatisch eure Brand-Farben übernehmen: mit Primärfarbe aus eurer CI und einem zusätzlichen Akzent aus dem Logo. So passen Präsentationen deutlich besser in bestehende Unternehmensvorlagen. Thanks to Pascal, ist das Präsentations-Erlebnis in OneAI damit ein großes Stück professioneller geworden.

**Präsentationen lassen sich jetzt direkt im Viewer bearbeiten.** Folien können per Drag-and-Drop umsortiert, dupliziert oder gelöscht werden — ohne das Deck neu generieren oder die KI erneut anweisen zu müssen. Das macht aus generierten Präsentationen deutlich schneller nutzbare Arbeitsstände.

**Designs lassen sich nachträglich umschalten.** Zwischen Light, Dark, Corporate, Editorial und Slate könnt ihr jetzt jederzeit wechseln, ohne die Präsentation neu erstellen zu müssen.

**Python-Ergebnisse im Chat sind jetzt vollständig als Download verfügbar.** Neben Bildern stellt OneAI nun auch Excel-, PDF-, Word- und CSV-Dateien direkt im AI Chat bereit — inklusive korrektem Dateinamen. Thanks to Mirko, lassen sich Analyseergebnisse und Reports jetzt deutlich einfacher weiterverwenden.

**Lange Chats bleiben stabil.** Wenn Unterhaltungen oder eingefügte Inhalte sehr groß werden, kürzt OneAI ältere Inhalte jetzt automatisch, statt mit „Konversation zu groß“ abzubrechen. Zusätzlich werden erzeugte Zusammenfassungen wieder korrekt in den weiteren Kontext übernommen. Thanks to Pascal, sind lange Arbeitsgespräche mit dem AI Chat jetzt deutlich zuverlässiger.

## Verbesserungen

- **Ältere Nachrichten in langen Chats laden wieder zuverlässig nach**, wenn ihr nach oben scrollt. Thanks to Oliver.
- **GPT-basierte Chats brechen nicht mehr ab**, wenn ein Modell vor einem Tool-Aufruf bereits Text ausgibt. Thanks to Santi.
- **PDF-Exporte sind vollständiger**, inklusive gerenderter Mermaid-Diagramme und Syntax-Highlighting für Code.
- **HubSpot lässt sich im Space-Wizard wieder korrekt verbinden**, ohne auf einer leeren Seite zu landen.
- **Space-Synchronisation läuft robuster**, auch wenn das Storage-Backend kurzzeitig nicht erreichbar ist.
- **Outlook-Sync bleibt bei ungewöhnlichen Microsoft-Payloads stabil**, statt Fehlerketten auszulösen.
- **GitHub-Connectoren arbeiten effizienter**, wodurch große Repositories zuverlässiger verarbeitet werden, ohne schneller an API-Limits zu stoßen.
- **PDFs werden jetzt durchgängig mit Vision verarbeitet**, was besonders bei komplexen Layouts, Grafiken und gemischten Inhalten bessere Ergebnisse liefert. Thanks to Justus.
- **Bild- und Diagrammbeschreibungen in Dokumenten sind aussagekräftiger**, was die Qualität in Wissensräumen weiter verbessert. Thanks to Justus.
- **Störungsinformationen erscheinen jetzt direkt in der Anwendung**, sodass ihr bekannte Plattformprobleme schneller einordnen könnt.
- **Mehr Kostentransparenz bei sehr großen Modellkontexten:** Für besonders lange Chats mit großen Modellen wurden Preislogiken für sehr hohe Tokenmengen klarer abgebildet. Thanks to Obaid.

## Fehlerbehebungen

- **Klarere Fehlermeldungen bei überlasteten Modellen oder Rate Limits** statt generischer Chat-Fehler. Thanks to Oliver.
- **Anthropic-Tools wie Python und SQL funktionieren wieder zuverlässig**, auch wenn keine Eingabedateien benötigt werden.
- **Claude Opus 4.6 und Sonnet 4.6 sind sauber auf die aktuelle Adaptive-Thinking-Logik abgestimmt**, für stabilere Modellnutzung.

## Security

- **Sicherere Datei-Downloads im AI Chat:** Nicht-bildbasierte Python-Ergebnisse werden jetzt konsequent als Download ausgeliefert. Das schließt einen potenziellen Inline-Rendering-Angriffsvektor bei HTML- und SVG-Dateien.
- **Strengere Rechteprüfung für strukturierte Daten in Wissensräumen:** Schreibzugriffe auf den Datenspeicher eines Space werden jetzt korrekt an Space-Schreibrechte gebunden.

## Unter der Haube

- Die Dokumentenverarbeitung wurde in mehreren Schritten deutlich beschleunigt und resilienter gemacht — inklusive schnellerer Pipeline, besserem Failover und optimierter Datenbankabfragen. Thanks to Justus.
- Außerdem haben wir die technische Beobachtbarkeit der Embedding- und PDF-Verarbeitung weiter ausgebaut, um Engpässe schneller zu erkennen.

Danke an Pascal, Justus, Mirko, Oliver, Santi und Obaid für diese Version.

*34 Commits, 109 geänderte Dateien*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
