# OneAI v2026.09.04 — Canvas-Apps teilen, CRM direkt im Chat verwalten

**Release Date:** 2026-09-08

## Highlights

### Canvas wird zur teilbaren Mini-App
Canvas-Apps lassen sich jetzt sicher über einen Link oder unter Ihrer **eigenen Firmendomain** veröffentlichen. Damit werden aus KI-erstellten Anwendungen direkt nutzbare Formulare, Portale und Tools für externe Zielgruppen.

- Besucher können sich per E-Mail-Link anmelden, ohne ein OneAI-Konto zu benötigen.
- Öffentliche Apps können Dateien und Bilder anzeigen; Besucher können Dateien hochladen.
- Formulare können nachvollziehbar machen, wer eine Einreichung vorgenommen hat. Eingereichte Antworten lassen sich anschließend korrigieren.
- Teams profitieren von stabileren Live-Updates und einer zuverlässigeren Nutzung auch bei vielen gleichzeitigen Besuchern.
- Größere und komplexere Canvas-Apps können von der KI schneller und zuverlässiger bearbeitet werden.

Dank **Pascal** und **Justus** ist Canvas damit deutlich besser für sichere, externe Anwendungsfälle geeignet.

### HubSpot nativ in OneAI
Die neue HubSpot-Anbindung bringt **26 Werkzeuge** direkt in den AI Chat. Ihre KI kann HubSpot-Daten nicht nur durchsuchen und analysieren, sondern auch operative CRM-Aufgaben vorbereiten.

- Kontakte, Unternehmen, Deals und Tickets erstellen, aktualisieren und verknüpfen
- Notizen, Aufgaben, Anrufe und Meetings dokumentieren
- Details, verfügbare Felder und Aktivitätsverläufe gezielt abrufen
- Jede schreibende Aktion wird vor der Ausführung mit einer klaren Bestätigung zur Freigabe angezeigt

Die Synchronisierung arbeitet zudem robuster: Vorübergehende Verbindungsprobleme führen nicht mehr dazu, dass bestehende Datensätze fälschlich verschwinden. Vielen Dank an **Mirko** für den umfassenden Ausbau unserer Connector-Landschaft.

### Neue und erweiterte Connectors
OneAI verbindet sich mit noch mehr Systemen und kann in bestehenden Tools mehr Aufgaben direkt erledigen.

- **Neu: Plytix** – Fragen Sie Ihren Produktkatalog, Attribute, Varianten und Bilder direkt aus Ihrem PIM-System ab.
- **weclapp** – Mehr Lese- und Schreibaktionen, inklusive robusterer Synchronisierung und Rechnungs-PDFs.
- **ClickUp** – Aufgaben erstellen und bearbeiten sowie Tags und Checklisten verwalten – stets mit Bestätigung bei Änderungen.
- **Fireflies** – Meeting-Transkripte durchsuchen, Meetings umbenennen, den Notetaker stoppen und weitere Aktionen ausführen.
- **n8n** – Workflow-Knoten vorab testen und wartende Workflows direkt aus dem Chat fortsetzen.
- **GitHub, ClickUp, weclapp und lexoffice** – Erweiterter API-Zugriff kann bei entsprechender Freigabe genutzt werden.

## Verbesserungen

- **Klarere Interaktion im Chat:** Wenn der AI Chat Informationen benötigt, erscheinen Rückfragen jetzt als klickbare Auswahlkarten statt als reine Textfragen.
- **Apple-Anmeldung:** Neben Google und Microsoft steht jetzt auch „Mit Apple anmelden“ zur Verfügung.
- **Neue KI-Modelle:** Gemini 3.8 Flash, Gemini 3.7 Flash und Grok 4.6 sind verfügbar. Für zahlende Organisationen ist Gemini 3.7 Flash nun das Standardmodell für Uno.
- **Präsentationen im Corporate Design:** Laden Sie Ihre eigene PowerPoint-Vorlage hoch; erzeugte Präsentationen übernehmen das hinterlegte Design automatisch. Bilder aus einem Wissensraum können direkt auf Folien verwendet werden.
- **Wissensräume:** Dateien können direkt umbenannt werden. Der Datei-Explorer ist zudem auf mobilen Geräten besser nutzbar.
- **SharePoint-Auswahl:** Auch in großen Microsoft-Umgebungen werden beim Verbinden über OneDrive jetzt alle verfügbaren SharePoint-Websites angezeigt.
- **Outlook-Verbindungen:** Unterbrochene Verbindungen werden sofort erkannt und können direkt repariert oder getrennt werden.
- **Spracheingabe:** Die Aufnahme funktioniert nun zuverlässig in Safari, auf iPhone und iPad sowie in Firefox – auch bei längeren Aufnahmen.
- **Gescannte PDFs:** Die Vorschau zeigt gescannte PDFs wieder korrekt und stabil an.
- **Team-Limits:** Die Verwaltung individueller Nutzungslimits funktioniert nun auch bei Teams mit mehr als zehn Mitgliedern. Zusätzlich warnt OneAI, wenn ein persönliches Limit das Organisationsbudget übersteigt.

## Sicherheit

- **Geschützte Canvas-Formulare:** Öffentliche Formulare können ausschließlich die dafür freigegebenen Felder ändern. Interne Datenfelder bleiben geschützt.
- **Sichere Connector-Zugangsdaten:** Zugangsdaten für HubSpot und ClickUp werden verschlüsselt gespeichert.
- **Sicherere n8n-Automatisierung:** Die automatische Fehlerkorrektur kann Anfragen nicht mehr unbemerkt an einen anderen Host weiterleiten.
- **Berechtigungsschutz in Uno:** Nicht-administrative Mitarbeitende können über Uno nicht mehr erkennen, wer Administratorrechte besitzt.

## Fehlerbehebungen

- Bestätigungskarten für Aktionen im Chat bleiben nicht mehr unsichtbar oder dauerhaft auf „ausstehend“. Der Status einer Aktion – durchgeführt, abgelehnt oder fehlgeschlagen – ist jetzt zuverlässig sichtbar.
- Mehrteilige Canvas-Apps funktionieren nun auch über öffentliche Freigabe-Links und eigene Domains.
- Canvas-Apps ohne Datenanbindung können ebenfalls öffentlich geteilt werden.
- Bestimmte ungewöhnliche E-Mail-Adressen verursachen keinen Fehler mehr in geteilten Canvas-Apps.
- Gemini-Abbrüche werden nicht länger irreführend als leere Modellantworten angezeigt.
- GitLab-Dateien zeigen keine fälschliche Größe von „0 Bytes“ mehr an.
- Änderungen an KI-Modell-Einstellungen werden auch bei schnellem Umschalten zuverlässig gespeichert.

## Unter der Haube

Wir haben die Grundlage für zukünftig geplante, eigenständig laufende KI-Agenten mit Zeitplänen und Freigabe-Workflows erweitert. Diese Funktion befindet sich weiterhin in interner Erprobung und ist noch nicht für Kunden freigeschaltet.

Danke an **Pascal, Mirko, Justus, Santi, Obaid und Oliver** für ihre Beiträge zu diesem Release.

*139 Pull Requests, 141 Commits und 1.183 geänderte Dateien.*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
