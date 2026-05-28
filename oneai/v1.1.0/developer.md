# v1.1.0 — Developer Changelog

**Release Date:** 2026-05-28
**GitHub Release:** [v1.1.0](https://github.com/0codekit/oneai/releases/tag/v1.1.0)

## Bugfix

- Mermaid-Diagramme und ASCII-Boxzeichnungen, die das Modell ausgibt, werden jetzt sauber gerendert — kein zerschossener Whitespace mehr.
- Ein Memory-Loop bei der Verarbeitung bestimmter Outlook-E-Mails ist gefixt. Eure Dokumente werden auch unter Last zuverlässig verarbeitet.
- Kund*innen mit On-Prem-AD ohne gepflegtes mail-Attribut können sich wieder zuverlässig per Teams-Add-In verbinden. Identität wird jetzt über oid+tid plus E-Mail-Fallback erkannt.
- Beim Testen privater Modelle könnt ihr jetzt mehrere Modelle in einem Rutsch durchprobieren. Plan-Gates sind dort entfernt — der Test funktioniert unabhängig vom Abo.
- HTML-Dateien aus E-Mails und Uploads werden nicht mehr abgelehnt, sondern in lesbares Markdown umgewandelt — sie sind damit endlich für RAG nutzbar.
- Wer eine E-Mail-Adresse wie name+tag@firma.de nutzt, kann den Signup-Link aus der E-Mail jetzt wieder direkt anklicken — das Pluszeichen wird korrekt URL-encoded.
- Längere Texte und LibreOffice-konvertierte Dokumente brechen nicht mehr in einem Timeout ab. Das Embedding ist robuster gegen langsame Downstream-Dienste.
- Wenn ein Cloud-Sync den gleichen Pfad zweimal liefert, bricht die Synchronisation nicht mehr ab — der Sync läuft sauber durch.
- Wenn die Sitzung im Chat abläuft, landet ihr nicht mehr in einem hängenden Fehlerzustand, sondern werdet direkt zur erneuten Anmeldung geführt.
- Internes Build-Issue rund um den neuen Connector-Code behoben.
- Der grüne „Online"-Punkt am OneAI-Agent aktualisiert sich jetzt automatisch — ihr seht sofort, wenn ein Agent die Verbindung verliert oder zurückkehrt.
- Nach dem Kauf eines Add-ons aktualisiert sich der Abo-Status ohne Reload — die freigeschalteten Features sind sofort verfügbar.
- Artefakte aus einem Chat tauchen nicht mehr in fremden Projekten auf. Außerdem seht ihr, ob ein Dokument noch indexiert wird oder bereits für RAG nutzbar ist.
- Wenn die Graph-Abo-Verlängerung scheitert, versucht das System nicht mehr in einer Endlos-Schleife — die Renewal-Logik ist mit Backoff abgesichert.
- Kleiner Folgefix für den neuen OneDrive-Reconnect — die OAuth-Rückleitung landet jetzt zuverlässig im richtigen Space.

## Refactor

- Interne Aufräumarbeit am OneAI-Standardmodell — keine sichtbare Änderung für Endnutzer*innen, aber sauberere Basis für künftige Modell-Updates.
- Interne Architektur-Umstellung: Konnektoren laufen jetzt über eine zentrale Registry. Sichtbarer Effekt für Nutzer*innen: konsistenteres Verhalten und schnellere Anbindung neuer Quellen wie HubSpot oder SMB.
- OneDrive nutzt intern dieselbe Registry-Architektur wie GitHub und HubSpot. Für Nutzer*innen ändert sich nichts — Verbindung, Sync und Reconnect verhalten sich identisch.

## Ui

- Das Dashboard zeigt Abrechnungs- und Verbrauchsdaten klarer an: neue KPI-Cards, überarbeiteter Header, schönerer Reconciliation-Strip.
- Der Preis-Dialog für Modelle ist hübscher und übersichtlicher — Preise pro Modell werden konsistenter formatiert.
- Wenn ein Space pausiert ist, zeigen Projekt- und Space-Detailseite jetzt einen klaren Hinweisbanner — niemand wundert sich mehr, warum keine Daten kommen.

## Infra

- Neue Unit-Tests für Auth, Crypto, Chat, Plans, Pricing und weitere zentrale Bausteine — höhere Stabilität, weniger Regressionen.
- Interne Wartung — neuere pnpm-Version für Build und CI.

## Deps

- Routinemäßiges Sicherheits- und Wartungs-Update von Frontend- und Backend-Bibliotheken.
- Routinemäßiges Sicherheits- und Wartungs-Update von Bibliotheken.

## Feature

- Die Suche findet jetzt auch Wörter aus euren Nachrichten — nicht mehr nur Chat-Titel.
- Projekte lassen sich archivieren, taggen und in Gruppen verwalten.
- Wenn sich eine neue Organisation registriert, geht jetzt automatisch eine Benachrichtigungs-E-Mail an das interne Team raus.
- Externe Tools wie Cursor, Claude Desktop, Copilot oder n8n können sich jetzt direkt mit OneAI verbinden und die Wissensdatenbank durchsuchen — über den offenen Model-Context-Protocol-Standard.
- Ihr könnt jetzt generierte oder hochgeladene Bilder per natürlicher Sprache anpassen lassen.
- Grundlage für SMB-Konnektor und On-Prem-Anbindungen: Agent und Hub sprechen jetzt über ein verschlüsseltes Protokoll mit gehashten Upload-/Download-Tokens.
- Admins deaktivieren Spaces auf Knopfdruck ohne Datenverlust.
- Zwei neue Org-Settings: Antworten bevorzugt aus euren eigenen Dokumenten ableiten — und nur antworten, wenn die Quelle wirklich belegt ist.
- Im Abo-Bereich gibt es einen neuen Verbrauchs-Tab: ihr seht Auslastung in Echtzeit, definiert Budget-Limits und entscheidet selbst, ob Overage-Verbrauch erlaubt sein soll.
- Neuer Konnektor für SMB-Shares — ihr könnt ein Netzlaufwerk in eurem internen Netz als Space anbinden, ohne Daten in die Cloud zu spiegeln. Verbindung läuft über den OneAI-Agent.
- Neuer Konnektor für HubSpot CRM — verbindet euer CRM mit OneAI: OAuth, Sync, Webhooks. Chat-Tools für HubSpot kommen in einem Folge-Release.
- Wenn das OAuth-Token abgelaufen ist, könnt ihr die Verbindung mit einem Klick erneuern — ohne den Space neu anzulegen oder zu re-konfigurieren.
- Die Dateiansicht in Projekten nutzt jetzt denselben File-Explorer wie Spaces — gleiche Bedienung, gleiche Vorschau, gleiche Aktionen.
- Die Projektübersicht passt sich jetzt sauber an kleine Bildschirme an. Im Tag-Manager könnt ihr mehrere Tags in einem Rutsch anlegen — neue Inline-Create-Row.

## Contributors

- **Pascal Schüler** (@pascalschueler-relyon)
- **Mirko** (@MT74)
- **Obaid Rehman** (@orehman3035)
- **Justus Zorn** (@justusjz)
- **Santiago** (@santilema)

## Stats

- Files changed: 271
- Total commits: 43

---
*Generated by BugHunt Changelog Agent*
