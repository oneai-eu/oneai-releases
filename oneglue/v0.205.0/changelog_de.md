# OneGlue v0.205.0 — Neuigkeiten

**Veröffentlicht am:** 2026-07-14

Nutzen Sie **ein Zugangsdatensatz für viele Maschinen**. Ein einzelnes Windows-Domänenkonto (oder jeder gemeinsame Login) lässt sich jetzt vielen Geräten und VMs zuweisen und wird beim Verbinden automatisch eingesetzt — kein Kopieren desselben Passworts mehr auf jede Maschine.

## Gemeinsame / Domänen-Zugangsdaten

- **Ein Passwort, viele Maschinen.** Weisen Sie ein einzelnes Zugangsdatum einer Menge von Zielen zu: **einzelne Konfigurationen**, **alle VMs einer SCVMM-Cloud** oder die **gesamte Organisation**.
- **Auto-Login beim Verbinden.** Wenn Sie eine RDP- oder VNC-Sitzung zu einer abgedeckten Maschine öffnen, wird das gemeinsame Zugangsdatum in der Auswahl angeboten und automatisch eingesetzt (`DOMÄNE\Benutzer`-Login). Das Passwort wird nur im Verbindungs-Worker eingesetzt — es **erreicht niemals Ihren Browser**.
- **Einmal rotieren, überall wirksam.** Aktualisieren Sie das Passwort an einer Stelle, und jede abgedeckte Maschine nutzt den neuen Wert.

## Verwaltung dort, wo Sie arbeiten

- **Teilen / Maschinen zuweisen an jedem Passwort.** Ein Passwort hat jetzt eine Aktion **„Teilen / Maschinen zuweisen"**, um festzulegen, welche Maschinen es abdeckt.
- **Bestehendes Maschinen-Passwort hochstufen.** Machen Sie aus einem an einer Maschine eingebetteten Passwort in einem Schritt ein gemeinsames Zugangsdatum — die ursprüngliche Maschine behält ihren Zugriff automatisch.
- **Ansicht „Gemeinsame Zugangsdaten" auf Organisationsebene.** Verwalten Sie alle gemeinsamen Zugangsdaten und ihre Geltungsbereiche direkt in der Organisation, nicht nur in den Mandanten-Einstellungen.
- **Sichtbar an der Maschine.** Die Detailseite einer Konfiguration zeigt jetzt **„Gemeinsame Zugangsdaten, die hier gelten"**, damit Sie immer wissen, welche gemeinsamen Logins eine Maschine abdecken.

## Kontrolliert per Design

- **Getrennte, pro Organisation vergebbare Berechtigungen** — das Nutzen eines gemeinsamen Zugangsdatums und das Verwalten seines Geltungsbereichs sind eigene Rechte, pro Organisation zuweisbar.
- **Organisations- und mandantenübergreifendes Teilen ist per Design ausgeschlossen.**
- **Jede Nutzung und jede Änderung des Geltungsbereichs wird im Audit-Log erfasst** (nur Metadaten — niemals der Passwortwert).
