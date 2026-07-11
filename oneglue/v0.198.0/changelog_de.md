# OneGlue v0.198.0 — Was ist neu

**Veröffentlicht am:** 2026-07-12

Flüssigere Remote-Sitzungen und eine VM-Flotte, die immer auf dem neuesten Stand ist.

## Remote-Verbindungen, die einfach funktionieren

Das Arbeiten in einer RDP- oder VNC-Remote-Sitzung ist jetzt deutlich angenehmer:

- **Ihr Tastaturlayout wird respektiert.** Sonderzeichen wie `|`, `\`, `@`, `{`, `[`, `]` und Umlaute werden jetzt korrekt eingegeben. Sie können das **Tastaturlayout pro Gerät wählen** (standardmäßig Deutsch) — was Sie tippen, kommt auch an. Kein Umschreiben von Befehlen mehr, nur um eine fehlende Pipe zu umgehen.
- **Kopieren & Einfügen in beide Richtungen.** Die Zwischenablage funktioniert jetzt in **beide Richtungen** — Text in die Remote-Sitzung einfügen (Strg+V oder die Schaltfläche *Zwischenablage senden*) und Text zurück auf den eigenen Rechner kopieren. Praktisch, um einen Befehl hineinzukopieren und dessen Ausgabe wieder herauszuholen.

## Eine frischere VM-Flotte — auf Knopfdruck

- **Aktualisierung auf Anfrage.** Jede Cloud in der VM-Flotte hat jetzt eine **Sync**-Schaltfläche, um ihren aktuellen VM-Bestand jederzeit abzurufen.
- **Automatische Aktualisierung nach Aktionen.** Nachdem Sie eine VM gestartet, gestoppt oder neu gestartet haben, aktualisiert sich die Flotte kurz darauf von selbst — der angezeigte Status entspricht dem, was tatsächlich passiert ist.
- **Eine ehrliche „Zuletzt synchronisiert"-Zeit.** Der Zeitstempel „Zuletzt synchronisiert" zeigt jetzt an, wann der Bestand **zuletzt geprüft** wurde — nicht nur, wann sich zuletzt etwas geändert hat. So können Sie ihm auf einen Blick vertrauen.
