# OneGlue v0.303.0 — Neuigkeiten

**Veröffentlicht am:** 2026-11-05

**Externe Personen mit Organisations-Rollen können jetzt sehen und aufdecken, was ihre Rolle erlaubt – und wer seinen Passkey verliert, hat einen Weg zurück.**

> Wichtig: Org-Leser, Org-Bearbeiter und Tenant-Leser können ab jetzt alle Passwörter mit Standardzugriff ihrer Organisation(en) aufdecken. Einträge, die nur bestimmte Personen sehen sollen, bitte auf „eingeschränkt“ setzen („Anzeige-Standard → Eingeschränkt“).

- **Externe Personen mit Organisations-Rollen.** Sie können jetzt sehen und aufdecken, was ihre Rolle erlaubt. Importierte Einträge verhalten sich dabei wie Einträge, die in OneGlue angelegt wurden.
- **Ein Weg zurück nach verlorenem Passkey – für alle Konten in Tenants.** Per E-Mail erhalten Sie einen Link, mit dem Sie einen neuen Passkey registrieren. Bei Konten in Tenants legen Wiederherstellungscodes allein keinen Passkey mehr an.
- **Einladungen passen immer zum aktuellen Zugriff.** Ändert ein Administrator die Rolle oder sperrt er das Konto, bevor die Einladung eingelöst wurde, wird die Einladung ungültig.
- **Klare Warnung vor weitreichenden Rollen.** Bevor eine Tenant-weite Rolle vergeben wird, zeigt OneGlue mit Zahlen, was die Rolle bewirkt. Für Adressen außerhalb Ihrer eigenen Domains ist zusätzlich eine eigene Bestätigung nötig.
- **Reaktivieren und erneut einladen funktioniert wieder.** Das gilt auch für Konten und Mitgliedschaften mit Enddatum. Abgelaufene Konten sehen einen klaren Hinweis.
- **Zugriff endet, wenn der Zugang endet.** Offene Remote-Sitzungen enden spätestens etwa eine Minute, nachdem der Zugang entzogen wurde. Im Browser gilt die Änderung ab der nächsten Aktion.
- **Tenant-Rollen vergeben Sie in OneGlue, nicht über Microsoft-Entra-Gruppen.** Der Gruppenabgleich für andere Gruppen funktioniert weiterhin.
- **Anmeldung nur mit Microsoft.** Verlangt eine Aktion eine frische Anmeldung, können sich Personen, die sich nur mit Microsoft anmelden, dafür erneut mit Microsoft anmelden.
- **Korrigierte Texte.** Die Hinweise dazu, wer was sehen und aufdecken darf, wurden überall berichtigt.
- **Sicherheit der Plattform gehärtet.** Umgang mit Schlüsseln verbessert, Benachrichtigungen, wenn über einen Wiederherstellungscode ein Passkey hinzugefügt wird, und der letzte Passkey eines Plattform-Administrators lässt sich nicht mehr entfernen.
