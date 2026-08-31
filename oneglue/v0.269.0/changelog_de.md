# OneGlue v0.269.0 — Neuigkeiten

**Veröffentlicht am:** 2026-08-31

**Sehen Sie in Sekunden genau, was ein Benutzer getan hat — bis hin zu den Passwörtern, die er sich angesehen hat.**

## Zugriffsbericht für jeden Benutzer

- **Öffnen Sie den Zugriffsbericht eines beliebigen Benutzers** unter Einstellungen → Benutzer — das funktioniert auch für deaktivierte und ehemalige Benutzer — und sehen Sie in Sekunden: welche Passwörter dieser Benutzer aufgedeckt hat, mit Namen, Organisationen und Häufigkeit, als fertige Rotationsliste, die Sie mit einem Klick abhaken können; welche Seiten und Organisationen er sich angesehen hat; jeden abgelehnten Zugriffsversuch; sowie seine Anmeldesitzungen, Geräte und Rollenänderungen im Zeitverlauf.
- Exportieren Sie den Bericht als JSON oder CSV, direkt einsatzbereit für eine Offboarding-Checkliste oder einen Vorfallbericht.
- Genau das richtige Werkzeug für den Moment, in dem jemand das Unternehmen verlässt oder Sie einem Sicherheitsverdacht nachgehen müssen: Statt das Audit-Log mühsam von Hand zusammenzusetzen, erhalten Sie eine direkte Antwort auf „Worauf hatte diese Person Zugriff, und was muss ich jetzt ändern?"

## Übersichtlicheres Audit-Log

- Einträge im Audit-Log zeigen jetzt an, wer sie ausgelöst hat — namentlich, nicht mehr nur als Fragment einer ID zu erraten.
- Der Filter „nach Benutzer filtern" findet jetzt auch deaktivierte und ehemalige Benutzer, sodass Sie nachvollziehen können, was jemand getan hat, selbst nachdem er das Unternehmen verlassen hat.
- CSV-Exporte des Audit-Logs enthalten jetzt die Namen der betroffenen Objekte statt nur ihrer IDs und berücksichtigen korrekt die auf dem Bildschirm gesetzten Filter.

## Hinweis bei weitreichenden Zugriffsrechten

- Befördern Sie jemanden mit einer externen E-Mail-Adresse in eine tenant-weite Rolle, erhalten jetzt alle Tenant-Administratoren eine E-Mail darüber — damit eine unerwartete oder unautorisierte Beförderung nicht unbemerkt bleibt.

## Kleinere Korrekturen

- Eine Reihe von Zuverlässigkeits- und Sicherheitsverbesserungen im Hintergrund.
