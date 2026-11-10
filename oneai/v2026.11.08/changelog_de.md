# OneAI v2026.11.08 — Schnellere Spaces, Agenten im Chat bearbeiten, Papierkorb

**Release Date:** 2026-11-09

## Neu

- **Große Spaces öffnen sich deutlich schneller.** Ordner werden jetzt seitenweise geladen.
- **Agenten im Chat finden und ändern.** Du musst nicht mehr für jede Änderung einen neuen Agenten anlegen.
- **Papierkorb für gelöschte Dateien.** Gelöschte Dateien kannst du 30 Tage lang wiederherstellen, danach sind sie endgültig weg.
- **Geschätzte Zeitersparnis.** Fahre mit der Maus über den €-Betrag unter einer neuen Antwort. Der Wert ist eine Faustregel, keine Messung.
- **Roadmap-Tab unter What's New.** Der Tab ist da, aber noch leer. Einträge folgen.

## ⚠️ Was sich für dich ändert

Bitte prüfe diese Punkte, falls du die Funktionen nutzt:

- **Agenten mit festgelegten Spaces oder Verbindungen:** Fehlt dem Nutzer der Zugriff auf einen davon, läuft der Agent nicht mehr mit weniger Rechten weiter, sondern wird abgelehnt. Geplante Läufe schlagen fehl und ihr Trigger pausiert. Gib den Zugriff frei oder passe den Agenten an.
- **Unbeaufsichtigte Agenten:** Sie halten jetzt vor unumkehrbaren Aktionen und vor MCP-Tools ohne Kennzeichnung an, bis das in Organisation und Agent erlaubt ist.
- **Bestätigungen:** Unumkehrbare Aktionen zeigen jetzt immer eine Bestätigungskarte, auch wenn gerade ein Vertrauensfenster offen ist.
- **Datasets:** Modelle schreiben jetzt SQL. Die bisherigen Tools wie `insert_data`, `update_data` und `delete_data` gibt es nicht mehr, gespeicherte Agenten verlieren sie ohne Hinweis. Prüfe Agenten, die in Datasets schreiben. Zeilen bearbeiten, Tabellen anlegen und CSV-Import funktionieren weiter. Spalten ändern geht nicht mehr im Dataset-Bildschirm, sondern nur noch im Chat: Das Modell führt die Änderung aus und du bestätigst sie.
- **Canvas-Apps und Dashboards mit Datasets:** Wir haben sie auf die neue Datenbank umgestellt. Falls eine App nicht mehr speichert oder eine Abfrage fehlschlägt, melde dich bei uns.
- **oneAI Standard:** Wir haben das oneAI-Standard-Modell auf das in Deutschland gehostete DeepSeek V4.1 umgestellt.
- **Teams-Bot:** Die Verbindung setzt jetzt voraus, dass die Microsoft-Anmeldung für dich aktiviert ist.

## Danke

An Pascal, Justus, Obaid, Mirko, Oliver und Santi.
