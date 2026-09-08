# v2026.09.04 — Developer Changelog

**Release Date:** 2026-09-08
**GitHub Release:** [v2026.09.04](https://forgejo.infra.oneai.eu/oneai/oneai/releases/tag/v2026.09.04)

## Feature

- Öffentlich geteilte Canvas-Apps können Besucher jetzt per E-Mail-Link anmelden, ohne dass diese ein OneAI-Konto brauchen.
- Eine Canvas-App kann jetzt erkennen und anzeigen, wer eingeloggt ist bzw. wer einen Formular-Eintrag abgeschickt hat.
- Wer über ein Formular in einer geteilten Canvas-App etwas eingereicht hat, kann seine eigene Antwort danach korrigieren, statt eine neue Zeile anzulegen.
- Eine Canvas-App kann jetzt Dateien aus dem Space lesen, verarbeiten und dort ablegen — zum Beispiel eine CSV-Datei hochladen und direkt als Diagramm anzeigen.
- Öffentlich geteilte Canvas-Apps können jetzt Bilder und Dateien direkt anzeigen, und Besucher können Dateien hochladen — ganz ohne Login.
- Eine geteilte Canvas-App kann jetzt unter der eigenen Firmendomain statt einer OneAI-URL veröffentlicht werden, inklusive automatischer Einrichtung.
- Eigene, bereits im Space abgelegte Bilder können jetzt direkt auf Präsentationsfolien platziert werden, nicht nur von der KI erzeugte Bilder.
- Unternehmen können ihre eigene PowerPoint-Vorlage hochladen, statt das Layout manuell nachzubauen — erzeugte Präsentationen übernehmen automatisch das echte Corporate Design.
- Unternehmen können bald eigene KI-Agenten erstellen, die selbstständig nach Zeitplan laufen und sensible Aktionen erst nach Freigabe ausführen. Diese Funktion ist aktuell noch nicht für Kunden aktiv.
- Wenn die KI eine Rückfrage braucht, bevor sie eine Aufgabe erledigen kann, bekommt der Nutzer jetzt eine übersichtliche Auswahlkarte statt einer Textfrage.
- Die KI kann jetzt einzelne HubSpot-Datensätze im Detail abrufen, verfügbare Felder nachschlagen und den vollständigen Verlauf zu einem Kontakt anzeigen.
- Die KI kann jetzt in HubSpot direkt Kontakte und Firmen anlegen oder ändern und sie miteinander verknüpfen — jede Änderung wird vorher als Karte mit Vorher/Nachher-Vergleich zur Bestätigung angezeigt.
- Die KI kann Notizen und Aufgaben anlegen, Anrufe/Termine protokollieren sowie Deals und Tickets erstellen, bearbeiten und deren Phase bzw. Status ändern — jede Aktion erfordert immer eine ausdrückliche Bestätigung.
- Sie können jetzt Ihren Plytix-Produktkatalog mit OneAI verbinden — Ihr KI-Assistent kann direkt Fragen zu Produkten, Attributen und Bildern aus Ihrem PIM-System beantworten.
- Im Hintergrund wurde eine neue Anbindung an selbstgehostetes Forgejo/Git gebaut — Repository-Inhalte, Issues und Pull Requests durchsuchbar machen, mit bestätigungspflichtigen Schreibaktionen. Diese Funktion ist noch nicht für Kunden freigeschaltet.
- Der Assistent kann Pull-Request-Diffs und Review-Status lesen, um beim Code-Review zu helfen; eine bestätigte Aktion wird auch bei Netzwerkfehlern nie versehentlich doppelt ausgeführt. Noch nicht für Kunden aktiv.
- Die weclapp-Anbindung kann jetzt mehr Geschäftsvorgänge direkt erstellen und ändern, Rechnungen als PDF herunterladen, und bricht bei einem unvollständigen Sync keine Daten mehr fälschlich ab.
- Die ClickUp-Anbindung kann jetzt Aufgaben erstellen, ändern, mit Tags und Checklisten-Einträgen versehen — jede Schreibaktion mit Bestätigung — und der Verbindungs-Token wird verschlüsselt gespeichert.
- Die Fireflies-Anbindung kann jetzt innerhalb eines Meeting-Transkripts suchen, den Notetaker aktiv stoppen, Meetings umbenennen und zu einem laufenden Meeting hinzufügen.
- Ein n8n-Knoten lässt sich jetzt vor dem Einsatz probeweise ausführen, ein wartender Workflow kann direkt aus dem Chat fortgesetzt werden, und die automatische Fehlerkorrektur kann eine Anfrage nie mehr heimlich an einen anderen Host umleiten.
- Für GitHub, ClickUp, weclapp und lexoffice kann die KI jetzt — wenn vom Nutzer freigegeben — auch direkt auf zusätzliche Funktionen der jeweiligen Schnittstelle zugreifen.
- Nicht kundenrelevant — rein interne Vorarbeit für eine mögliche künftige Dynamics-365-Sales-Anbindung, noch nicht nutzbar.
- Für unsere Vertriebspartner gibt es jetzt eine übersichtliche monatliche Abrechnungsansicht: Sie sehen, welche Kunden abgerechnet werden können, was noch fehlt, und können die Daten als CSV exportieren.
- Partner können eine Kundenorganisation jetzt vorübergehend sperren, ohne sie zu löschen — etwa bei Zahlungsverzug. Nutzer sehen dann einen Hinweis und können sich abmelden, alle Daten bleiben erhalten.
- Internes Werkzeug für unser eigenes Support-Team, um Administrator-Zugänge im Partnerportal sicherer zu verwalten. Keine sichtbaren Änderungen für Kunden.
- Nutzer können sich ab sofort auch mit ihrem Apple-Konto bei oneAI anmelden, zusätzlich zu Google und Microsoft.
- Partner-Portal-Nutzer können jetzt mehrere Passkeys selbst verwalten und verlieren so nicht mehr komplett den Zugang, falls ein Gerät nicht mehr verfügbar ist.
- Wenn der KI-Agent im Browser-Modus eine Webseite besucht, kann er sich dort nun dauerhaft mit einem eigenen Zugang anmelden, statt bei jeder Sitzung neu einzuloggen.
- Es stehen drei neue, leistungsfähigere KI-Modelle zur Auswahl (Gemini 3.8 Flash, Grok 4.6, Gemini 3.7 Flash). Gemini 3.7 Flash ist ab sofort das Standardmodell für Uno bei zahlenden Organisationen.
- Dateien in Spaces lassen sich jetzt direkt umbenennen, ohne sie neu hochzuladen. Der Datei-Explorer funktioniert jetzt zuverlässig auf dem Smartphone.

## Security

- Öffentliche Formulare in Canvas-Apps können nur noch genau die Felder überschreiben, die im Formular sichtbar sind — interne Spalten bleiben geschützt.
- Eine E-Mail-Adresse mit ungewöhnlichen Zeichen führt nicht mehr dazu, dass die Canvas-App für den betroffenen Besucher abstürzt.
- Uno versteht jetzt zuverlässiger, wenn Nutzer um eine Aktion bitten, egal wie die Formulierung lautet. Normale Mitarbeitende können über Uno nicht mehr sehen, wer Administrator ist.
- HubSpot-Zugangsdaten werden jetzt verschlüsselt gespeichert, und bestehende Verbindungen lassen sich über einen 'Neu verbinden'-Knopf auf die neuen Schreibrechte aktualisieren.

## Bugfix

- Beliebte geteilte Canvas-Apps mit vielen gleichzeitigen Besuchern werden nicht mehr fälschlich blockiert, und bei einem erreichten Limit erscheint eine klare Meldung.
- Komplexere Canvas-Apps, die aus mehreren Dateien bestehen, funktionieren jetzt auch zuverlässig, wenn man sie über einen Freigabe-Link öffnet.
- Einfache, in sich geschlossene Canvas-Apps ohne Datenanbindung lassen sich jetzt ebenfalls öffentlich teilen.
- Nach dem Beenden der Präsentationsansicht wird der Vorlagen-Editor nicht mehr abgeschnitten angezeigt.
- Werkzeug-Bestätigungskarten im Chat bleiben nicht mehr unsichtbar oder ewig 'ausstehend' hängen — Nutzer sehen jetzt immer, ob eine Aktion durchgeführt, abgelehnt oder fehlgeschlagen ist.
- Wenn die Verbindung zu Outlook abbricht, sieht man das jetzt sofort und kann sie selbst mit wenigen Klicks reparieren oder trennen.
- Bei Nutzung von Google-Gemini-Modellen erscheint bei bestimmten abgebrochenen Antworten nicht mehr die irreführende Meldung, das Modell habe eine leere Antwort zurückgegeben.
- HubSpot-Synchronisierungen können bei vorübergehenden Verbindungsproblemen keine Datensätze mehr fälschlich löschen, und Administratoren können die Live-Aktualisierung selbst reparieren.
- Bei über GitLab angebundenen Repositories wurde die Dateigröße bisher fälschlich mit '0 Bytes' angezeigt. Diese falsche Angabe ist jetzt behoben.
- Beim Verbinden von SharePoint-Websites über OneDrive fehlten in Mandanten mit vielen Websites teilweise Einträge im Auswahldialog. Jetzt werden alle verfügbaren Websites zuverlässig angezeigt.
- Wenn ein Admin einem Mitarbeiter ein höheres Nutzungslimit gibt, als das Gesamtbudget der Organisation hergibt, wird jetzt sofort gewarnt — mit einem Klick lässt sich das Budget passend erhöhen.
- Firmen mit mehr als 10 Mitarbeitenden können jetzt auch die zweite Seite der Nutzungslimit-Tabelle öffnen — vorher war das Setzen individueller Limits für diese Kunden praktisch unmöglich.
- Interne Korrekturen an der Abrechnungslogik, damit Rechnungsdaten für Partner immer vollständig und korrekt berechnet werden. Keine sichtbaren Änderungen für Kunden.
- Beim schnellen An- und Ausschalten von KI-Modellen in den Organisationseinstellungen konnten Änderungen bisher verloren gehen oder Schalter sprangen von selbst zurück. Das ist jetzt behoben.
- Eingescannte PDF-Dokumente werden in der Dateivorschau jetzt korrekt mit Text angezeigt statt als leere Seite, und die Anzeige ist schärfer und stabiler beim schnellen Blättern.
- Die Spracheingabe funktioniert jetzt zuverlässig auch in Safari, auf dem iPhone/iPad und in Firefox — vorher schlug sie dort unbemerkt fehl. Auch längere Sprachaufnahmen werden jetzt korrekt verarbeitet.

## Performance

- Canvas-Apps, die von mehreren Personen gleichzeitig genutzt werden, können jetzt effizient prüfen, ob sich Daten geändert haben.
- Größere, komplexere Canvas-Apps lassen sich jetzt zuverlässig von der KI bearbeiten, ohne dass sie beim Speichern kaputtgehen, und Änderungen werden spürbar schneller umgesetzt.
- Der Chat findet passende Werkzeuge effizienter, was die Antwortqualität bei komplexeren Anfragen verbessern kann.

## Refactor

- Die technische Grundlage dafür, dass die KI künftig größere, besser strukturierte Canvas-Apps aus mehreren Dateien bauen kann, ist jetzt vorhanden — für Nutzer ändert sich noch nichts sichtbar.
- Interne technische Vorbereitung für die künftige Zusammenführung von Personas und Agenten; für Kunden aktuell nicht sichtbar.
- Internes Testwerkzeug zur Qualitätssicherung von Uno; keine direkte Auswirkung für Kunden.

## Docs

- Neue HubSpot-Projekte erhalten von Anfang an passende Anleitungen, wie die KI mit Kontakten, Firmen, Deals und Tickets arbeiten soll.
- Internes Wartungsupdate ohne direkte Auswirkung auf Nutzer.

## Ui

- Ein zu groß dargestelltes Symbol in kleinen Beschriftungen (Badges) auf der Spaces-Übersicht, das den danebenstehenden Text abgeschnitten hat, wurde korrigiert.

## Infra

- Internes Wartungsupdate ohne direkte Auswirkung auf Nutzer.
- Internes Wartungsupdate ohne direkte Auswirkung auf Nutzer.

## Contributors

- **MTO74** (@MTO74)
- **Pascal-Sch** (@Pascal-Sch)
- **Justus Zorn** (@justus)
- **Santiago** (@santilema)
- **Obaid Rehman** (@orehman3035)
- **Oliver Rasch** (@oliver)

## Stats

- Files changed: 1183
- Total commits: 141

---
*Generated by BugHunt Changelog Agent*
