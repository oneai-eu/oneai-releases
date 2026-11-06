# OneGlue v0.304.0 — Neuigkeiten

**Veröffentlicht am:** 2026-11-06

**Die Microsoft-Anmeldung ist sicherer, Microsoft Entra gleicht nur Benutzer und Gruppen ab, und eingeschränkte ITGlue-Einträge bleiben beim Import eingeschränkt.**

- **Sicherere Microsoft-Anmeldung.** Verlangt eine Aktion eine frische Anmeldung, werden Personen, die sich mit Microsoft anmelden, gebeten, sich erneut mit Microsoft anzumelden (innerhalb der letzten 5 Minuten). Mit Microsoft gestartete Sitzungen enden spätestens nach 24 Stunden.
- **Microsoft Entra gleicht nur Benutzer und Gruppen ab.** Entra vergibt nie Rollen – weder Tenant-weit noch in einer Organisation. Es füllt nur eigene Gruppen ohne Tenant-weite Rechte. Rollen vergeben Sie in OneGlue.
- **Masseneinladung aus einer Entra-Gruppe.** Die Rolle wählen Sie im Dialog selbst; „keine Rolle“ ist möglich. OneGlue rät nicht mehr eine Rolle aus der Gruppe.
- **Verknüpfung mit einem Microsoft-Konto braucht eine erlaubte Domain.** Ein bestehendes Konto wird nur dann mit der Microsoft-Anmeldung verknüpft, wenn die Adresse zu einer erlaubten Domain gehört.
- **Eingeschränkte ITGlue-Einträge bleiben eingeschränkt.** Beim Import bleiben in ITGlue als „eingeschränkt“ markierte Einträge auch in OneGlue eingeschränkt, samt ihrer Passwörter und angehängter Einträge. Fehlt in einem Export die Spalte „eingeschränkt“, stoppt der Import, statt alles sichtbar zu machen.
- **Klarere Einladungen und Hinweise.** Abgelaufene Einladungen zeigen eine klare Meldung. Tenant-Admins erfahren, wenn eine externe Person eine Einladung verschickt. Organisations-Admins von außerhalb Ihrer Domains werden anhand der Domains Ihres Tenants beurteilt.
- **Sicherheit der Plattform gehärtet.** Plattform-Administratoren registrieren nach einer Wiederherstellung einen neuen Passkey nur über einen per E-Mail gesendeten Link, und beim Wechsel des Tenants bleibt die Art der aktuellen Anmeldung erhalten.
- **Korrigierte Texte.** Hinweise und Fehlermeldungen bei Einladung, Wiederherstellung und Anmeldung sagen jetzt, was OneGlue tatsächlich tut.
