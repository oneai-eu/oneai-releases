# OneGlue v0.206.0 — Neuigkeiten

**Veröffentlicht am:** 2026-07-14

**Direkt zur virtuellen Maschine verbinden.** Öffnen Sie eine RDP-Sitzung zu jeder Ihrer SCVMM-VMs direkt aus OneGlue — sicher über Ihren lokalen Agenten getunnelt, mit Domänen-Login per Klick.

## Remote Desktop zu einer SCVMM-VM

- **Ein Klick von der VM aus.** Jede SCVMM-VM hat jetzt eine **Remote-Desktop**-Aktion — kein Nachschlagen der IP, kein Umweg über einen Host.
- **Über Ihren Agenten getunnelt.** Die Sitzung wird vom OneGlue-Agenten weitergeleitet, der bereits auf Ihrem SCVMM-Gateway läuft — so erreicht sie VMs in internen Netzen, die der Browser nie direkt erreichen könnte. Die Verbindung wird pro Sitzung vermittelt und ist einmalig nutzbar.
- **Domänen-Login per Klick.** Wenn ein gemeinsames/Domänen-Zugangsdatum die VM abdeckt (über ihre SCVMM-Cloud oder ihre Organisation), meldet OneGlue Sie automatisch als `DOMÄNE\Benutzer` an. Passen mehrere, wählen Sie aus; das Passwort wird nur am Agenten eingesetzt und **erreicht niemals Ihren Browser**.
- **Intelligente Adresswahl.** OneGlue verwendet die bekannte IP-Adresse der VM; hat eine VM mehrere, können Sie wählen, und ist keine erreichbar, erhalten Sie eine klare Meldung statt eines Hängers.

## Kontrolliert per Design

- Eine eigene, **pro Organisation vergebbare „VM-Verbinden"-Berechtigung** — getrennt davon, wer Zugangsdaten verwalten darf.
- **Organisations- und mandantenübergreifender Zugriff ist per Design ausgeschlossen.**
- **Jede Sitzung wird im Audit-Log erfasst** (geöffnet, geschlossen, Leerlauf-Timeout) — nur Metadaten, niemals das Geheimnis.
