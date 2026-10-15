# OneGlue v0.283.2 — Neuigkeiten

**Veröffentlicht am:** 2026-10-15

**Laden Sie neue Kunden zur Ersteinrichtung ein: Der Kunde beantwortet ein paar einfache Fragen, und seine Organisation in OneGlue füllt sich von selbst.**

## Kunden zur Ersteinrichtung einladen

- **Eine Einladung statt langer Telefonate.** Auf der Seite einer Organisation — oder direkt beim Anlegen — wählen Sie „Kunden zur Ersteinrichtung einladen“. Der Kunde bekommt eine E-Mail mit einem Link zu ein paar einfachen Fragen, in seiner Sprache (Deutsch, Englisch, Spanisch oder Französisch). Das dauert etwa zehn Minuten.
- **Geführt Schritt für Schritt:** Anschrift, weitere Standorte, IT-Ansprechpartner, Rechnungsadresse, Geräte, Unterlagen und genutzte Dienste und Anbieter. Zum Schluss sieht der Kunde eine Zusammenfassung und schickt alles ab.
- **Die Angaben landen dort, wo Sie sie brauchen:** als Standorte, Kontakte, Geräte und Dokumente in der Organisation des Kunden — gekennzeichnet als Angaben des Kunden, damit Sie wissen, was noch geprüft werden sollte.
- **Zugangsdaten nur, wenn der Kunde möchte.** Ganz am Ende kann er freiwillig Zugangsdaten eintragen. Sie werden verschlüsselt gespeichert, und der Kunde selbst kann sie danach nicht mehr einsehen.
- **Sie behalten den Überblick:** In der Organisation sehen Sie, ob der Kunde eingeladen ist, gerade ausfüllt oder abgeschickt hat. Sie können eine neue Einladung schicken oder die Ersteinrichtung jederzeit beenden. Eine persönliche Nachricht und die Frist (1 bis 90 Tage) legen Sie beim Einladen fest.
- **Auf Wunsch mit eigenem Zugang:** Am Ende kann der Kunde einen dauerhaften Zugang mit Passkey erhalten — nur wenn Sie ihn beim Einladen angeboten haben, und nur für seine eigene Organisation. Diesen Zugang dürfen Tenant- und Organisations-Administratoren anbieten.
- **Neue Einladungsberechtigung:** Damit können auch Kolleginnen und Kollegen ohne Administratorrolle Kunden zur Ersteinrichtung einladen.

## Mehr Schutz für Ihre Daten

- **Gesperrte Passwörter bleiben gesperrt.** Die Berechtigungen eines gesperrten Eintrags ändern oder die Sperre aufheben dürfen nur noch Tenant-Administratoren und Personen, denen genau dieser Eintrag ausdrücklich anvertraut ist. Beim Sperren werden allgemeine Rollen-Freigaben entfernt, und gesperrte Passwörter lassen sich nicht mehr über geteilte Zugänge nutzen.
- **Hochgeladene Dateien sind besser geschützt.** Jede Datei wird zunächst abgelegt, geprüft und erst dann freigegeben; danach lässt sie sich nicht mehr unbemerkt austauschen. Private Schlüssel im PEM-Format, die zusammen mit SSL-Zertifikaten hochgeladen werden, werden erkannt und verschlüsselt gespeichert.

## Behobene Fehler

- Nach dem Hochladen von Dateien konnte es zu einer kurzen Unterbrechung kommen. Das ist behoben.
- Bilder lassen sich wieder in Dokumente einfügen, und die Single-Sign-on-Einstellungen einer Organisation lassen sich wieder speichern.
- Fehlgeschlagene Anmeldeversuche werden jetzt klar gemeldet und protokolliert.
