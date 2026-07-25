# OneGlue v0.222.0 — Neuigkeiten

**Veröffentlicht am:** 2026-07-26

**Mehrere 2FA-Verfahren pro Login speichern — und direkt aus der Authenticator-App importieren.** Ein dokumentierter Zugang hat oft mehrere Zwei-Faktor-Verfahren (einen primären Code, einen Backup-Code, mehr als eine App). OneGlue erlaubt einem Passwort jetzt mehrere MFA-Verfahren, importiert sie gebündelt aus einem Google-Authenticator-Export und ignoriert einen nicht erkannten QR-Code nicht mehr stillschweigend.

## Mehrere MFA-Verfahren pro Zugang

- **Fügen Sie einem Passwort mehrere Zwei-Faktor-Verfahren (TOTP) hinzu** — zum Beispiel „Primär" und „Backup" — statt nur eines. Jedes Verfahren erzeugt auf Wunsch seinen eigenen aktuellen Code.
- **Bestehende Codes werden automatisch übernommen.** Jedes Passwort, das bereits einen Zwei-Faktor-Code hatte, funktioniert weiter; es wird schlicht zum ersten Verfahren „Primär" — nichts muss neu eingerichtet werden.

## Import aus Google Authenticator

- **Scannen Sie einen „Konten exportieren/übertragen"-QR-Code** aus Google Authenticator (und kompatiblen Apps), um mehrere Konten auf einmal zu importieren — jedes als eigenes MFA-Verfahren. Ideal beim Wechsel der 2FA zwischen Handys, wenn Sie die Codes in OneGlue speichern möchten.

## Klareres QR-Scannen

- **Der QR-Scanner ignoriert einen nicht lesbaren Code nicht mehr stillschweigend.** Bisher zeigte der Scanner beim Ausrichten auf einen QR-Code, der kein Standard-Login-Code war, weiterhin nur „Kamera auf den QR-Code richten" — ohne Erklärung. Jetzt meldet er, was er erkennt, und die Kameraansicht wurde aufgeräumt.

## Kontrolliert per Design

- **MFA-Verfahren sind genauso geschützt wie das Passwort selbst.** Das Anzeigen des Codes eines Verfahrens erfordert dieselbe Berechtigung und dieselbe Freigabe (Mehr-Augen-Quorum, sofern konfiguriert) wie das Anzeigen des Passworts — kein separater, schwächerer Weg.
- **Geheimnisse verlassen den Tresor nie.** MFA-Seeds werden nie in Protokolle geschrieben, nie in Exporte aufgenommen und nie an Integrationen weitergegeben — nur der aktuelle Code wird einem berechtigten Nutzer auf Anfrage angezeigt.
