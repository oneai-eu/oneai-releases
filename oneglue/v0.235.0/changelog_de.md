# OneGlue v0.235.0 — Neuigkeiten

**Veröffentlicht am:** 2026-07-31

**Ihre gespeicherten Secrets sind vor versehentlichem Überschreiben geschützt.** Wenn Sie ein Passwort — oder ein beliebiges gespeichertes Secret — bearbeiten, wird das Wert-Feld jetzt nur angezeigt, wenn Sie es ausdrücklich ändern möchten. So kann der Passwortmanager Ihres Browsers den bereits gespeicherten Wert nicht mehr unbemerkt per Autofill überschreiben.

## Secret-Bearbeitung ist jetzt überschreib-sicher

- **Der Wert bleibt verborgen, bis Sie ihn wirklich ändern wollen** — öffnen Sie ein Secret zum Bearbeiten, zeigt das Passwort-/Wert-Feld eine Aktion „Wert ändern" statt eines leeren Felds. Umbenennen, neu kategorisieren oder Berechtigungen anpassen — ganz ohne Risiko für den gespeicherten Wert.
- **Browser-Autofill kann ihn nicht überschreiben** — das Feld existiert erst auf der Seite, wenn Sie auf Ändern klicken; ein automatisch ausfüllender Passwortmanager hat also nichts zu überschreiben.
- **Rotieren bleibt ein Schritt** — „Wert ändern" wählen, das neue Secret eingeben oder generieren, speichern wie bisher.
- **Zum Ansehen des aktuellen Werts nutzen Sie „Anzeigen"** auf der Detailseite des Secrets (die maßgebliche, audit-protokollierte Anzeige) — das Ein-/Ausblenden im Bearbeiten-Formular zeigt nur, was Sie gerade tippen.
