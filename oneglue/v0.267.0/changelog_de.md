# OneGlue v0.267.0 — Neuigkeiten

**Veröffentlicht am:** 2026-08-29

**Duplizieren Sie jeden Eintrag und erstellen Sie in Sekunden einen ähnlichen — und lassen Sie OneGlue Ihre Domain-Daten automatisch aktuell halten.**

## Duplizieren für Konfigurationen, Netzwerke, Kontakte, Standorte, Domains und Flexible Assets

- **Eine Schaltfläche „Duplizieren" auf jeder Detailseite** für Konfigurationen, Netzwerke, Kontakte, Standorte, Domains und Flexible Assets öffnet das Erstellungsformular, vorausgefüllt mit den Daten dieses Eintrags. Eindeutige Kennungen — Seriennummer, Asset-Tag, MAC-Adresse und (bei Domains) der Domainname selbst — bleiben immer leer, da diese eindeutig sein müssen. Felder, die sich meist nur um ein oder zwei Zeichen unterscheiden — Hostname, IP-Adressen, Netzwerkname, VLAN, Subnetz und Ähnliches — werden vorausgefüllt und hervorgehoben, damit Sie genau sehen, was Sie vor dem Speichern noch prüfen sollten. Versuchen Sie zu speichern, ohne eines der hervorgehobenen Felder geändert zu haben, fragt OneGlue vorher noch einmal nach.
- Der neue Eintrag vermerkt, aus welchem Eintrag er dupliziert wurde — sichtbar in seinem Verlauf. Ein eingeschränkter (Lockbox-)Eintrag erzeugt ein ebenso eingeschränktes Duplikat, und Passwörter, Anhänge und andere sensible verknüpfte Daten werden nie kopiert — hier starten Sie immer bei null.

## Automatische Registrar-Synchronisierung für Domains

- **Domains mit hinterlegter Registrar-Anmeldeinformation bleiben jetzt von selbst aktuell.** Jede Nacht prüft OneGlue beim Registrar nach und aktualisiert für Sie das Ablaufdatum, die Nameserver, den Auto-Verlängerungsstatus und den DNSSEC-Status — eine beim Registrar verlängerte Domain zeigt danach keine veraltete Ablaufwarnung mehr an.
- Soll es schneller gehen? Eine Schaltfläche **„Jetzt vom Registrar synchronisieren"** auf der Domain-Seite löst dieselbe Prüfung bei Bedarf sofort aus, und eine Anzeige „zuletzt synchronisiert" zeigt Ihnen, wann das zuletzt geschah. Tritt bei einer Synchronisierung ein Problem auf, wird das klar auf der Domain-Seite angezeigt, statt stillschweigend zu scheitern.

## Kleine Verbesserung

- Nach dem Anlegen eines Flexible Assets gelangen Sie jetzt direkt zu dessen Detailseite — genau wie es bei Konfigurationen, Netzwerken, Kontakten, Standorten und Domains bereits der Fall ist.
