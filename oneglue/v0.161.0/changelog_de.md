# OneGlue v0.161.0 — Neuigkeiten

**Veröffentlicht am:** 2026-07-03

Dieses Release macht das Anbinden eines Geräts an OneGlue über den integrierten Agenten einfacher und intelligenter – ein Befehl zur Installation, und keine versehentlichen doppelten Geräteeinträge mehr.

## Geräte-Agent mit einem Befehl installieren

Das Anbinden einer Maschine an OneGlue über den Geräte-Agenten erforderte bisher mehrere manuelle Einrichtungsschritte. Jetzt installiert sich der vorkonfigurierte Agent, den du aus OneGlue herunterlädst, vollständig von selbst.

- **Ein Befehl, komplett eingerichtet.** Auf einem Linux-Host registriert der heruntergeladene Installer den Agenten nun als verwalteten Hintergrunddienst, betreibt ihn unter einem eigenen Konto mit minimalen Rechten und verbindet ihn automatisch mit OneGlue – keine manuelle Dienstkonfiguration.
- **Läuft sicher im Hintergrund.** Der Agent läuft über Neustarts hinweg weiter, baut nur ausgehende Verbindungen auf (er öffnet keine eingehenden Ports) und arbeitet unter einem streng abgesicherten Profil mit minimalen Rechten.

## Intelligenteres Geräte-Matching – keine Dubletten mehr

Wenn eine Maschine, die du bereits in OneGlue dokumentiert hast, ihren Agenten verbindet, erkennt OneGlue sie jetzt und hängt sich an den bestehenden Eintrag an, statt einen zweiten anzulegen.

- **Erkennt das bereits vorhandene Gerät.** Der Agent wird über starke Signale (etwa die Hardware-Netzwerkadresse) einem bestehenden Eintrag zugeordnet, sodass eine bereits angelegte Maschine nicht doppelt erscheint.
- **Im Zweifel fragt er nach.** Kann OneGlue einen Agenten nicht zweifelsfrei einem bestehenden Gerät zuordnen, wird er zur Prüfung markiert statt geraten – du verknüpfst ihn mit einem Klick.
- **Deine Angaben bleiben erhalten.** Von dir gepflegte Informationen (wie der vollständige Name eines Geräts) bleiben erhalten und werden nie vom automatischen Bericht des Agenten überschrieben.
