# OneGlue v0.256.0 — Neuigkeiten

**Veröffentlicht am:** 2026-08-12

**Eine leichtere Plattform und ein saubereres Audit-Log.** Dieses Release optimiert die Hintergrund-Synchronisierung und interne Datenbankabfragen, um die Systemlast zu senken, und macht das Audit-Log zu einem verlässlicheren Protokoll — durch weniger wiederkehrendes automatisiertes Rauschen, bei vollständig erhaltener Nachvollziehbarkeit jeder echten Aktion.

## Schneller und leichter unter der Haube

- **Die Hintergrund-Synchronisierung läuft in einem entspannteren Takt.** Wir haben angepasst, wie häufig OneGlue nach Aktualisierungen für verbundene Systeme prüft, sowie mehrere interne Datenbankabfragen optimiert — das reduziert die Datenbanklast, ohne zu ändern, was synchronisiert wird oder wann Ihre eigenen Aktionen wirksam werden.
  > **Hinweis:** Ist Ihr Workspace mit oneAI verbunden, erreichen Hinweise auf entzogene Berechtigungen oneAI jetzt innerhalb von rund einer Minute statt rund zehn Sekunden. Das betrifft nur, wie schnell der eigene Referenzindex von oneAI nachzieht — OneGlue setzt jede Berechtigungsänderung weiterhin sofort auf der eigenen Seite durch, sodass bei der Zugriffskontrolle selbst keine Lücke entsteht.
- **Die Sitzungsseite ist datenbankschonender.** Der Zeitstempel „Zuletzt verwendet" Ihrer aktiven Sitzungen wird jetzt höchstens einmal pro Minute aktualisiert statt bei jeder einzelnen Anfrage. Da die Seite Zeiten ohnehin auf die Minute genau anzeigt, ist keine sichtbare Änderung erkennbar.

## Ein saubereres, verlässlicheres Audit-Log

- **Weniger Rauschen durch automatisierte Aktivität.** Routinemäßige Hintergrundaktionen — etwa periodische Synchronisierungsläufe — überfluten das Audit-Log nicht mehr mit einer Flut nahezu identischer Einträge. Unveränderte Aktivität wird jetzt zu periodischen Sammeleinträgen zusammengefasst, die anzeigen, wie oft sie aufgetreten ist — so lassen sich Ihre eigenen Aktionen und echte Änderungen leicht finden. Nichts geht verloren: Jede tatsächliche Änderung wird weiterhin im Moment ihres Auftretens erfasst, und die Sammeleinträge berücksichtigen alles, was zusammengefasst wurde.
- **Automatisierte Aktionen werden jetzt korrekt dem System zugeordnet** statt der Person, deren Zugangsdaten im Hintergrund zufällig verwendet werden — Audit-Einträge schreiben Routine-Hintergrundarbeit nicht mehr fälschlich einer Person zu.
- **Eine Klasse von Fehlalarmen behoben**, die in der Token-Bereinigung normale, erwartete Token-Vorgänge fälschlich als Auffälligkeit meldete.
- **Erfolgreiche automatisierte Aktionen erfassen jetzt Netzwerk-Ursprungsdaten**, genau wie es bei fehlgeschlagenen Versuchen bereits der Fall war — das schließt eine kleine Lücke für alle, die das Audit-Log auswerten.
