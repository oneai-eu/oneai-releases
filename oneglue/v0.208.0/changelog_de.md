# OneGlue v0.208.0 — Neuigkeiten

**Veröffentlicht am:** 2026-07-15

**Erreichen Sie eine VM, selbst wenn ihr Netzwerk nicht erreichbar ist.** OneGlue kann jetzt die **Konsole einer virtuellen Maschine über ihren Hyper-V-Host** öffnen — so gelangen Sie zu VMs in isolierten Kundennetzen, die eine direkte Remote-Desktop-Verbindung niemals erreichen kann.

## Konsolenzugriff über Hyper-V

- **Eine neue Aktion „Console (via Hyper-V)"** an jeder SCVMM-VM. Statt sich mit der eigenen Adresse der VM zu verbinden, geht OneGlue über den **Hyper-V-Host** und öffnet die **Konsole** der VM — genau wie am Bildschirm der Maschine, sogar vor dem Booten des Betriebssystems oder wenn die VM in einem nicht routbaren Netz liegt.
- **Funktioniert, wo direktes RDP nicht kann.** Das ist die Antwort für VMs in isolierten/segmentierten Kundennetzen: die Sitzung wird vom lokalen OneGlue-Agenten zum Hyper-V-Host weitergeleitet und braucht nie eine Route zur VM selbst.
- **Sichere Anmeldeaufforderung (Strg-Alt-Entf)** ist ein Klick entfernt für den Login-Bildschirm.
- **Zugangsdaten für den Login per Klick anzeigen.** Das für die VM geltende Domänen-/gemeinsame Zugangsdatum lässt sich anzeigen, damit Sie es an der Konsole eintippen (der Konsolenzugriff authentifiziert sich am Host; der Gast-Login bleibt in Ihrer Hand) — jede Anzeige wird im Audit-Log erfasst.

## RDP-Sicherheitsmodus wählen

- Beim **direkten** Verbinden zu einer Maschine per Remote-Desktop können Sie jetzt den **Sicherheitsmodus** wählen — **NLA** (Standard) oder **TLS** — für Maschinen, deren RDP-Server die Standard-Aushandlung ablehnt.

## Kontrolliert per Design

- Der Konsolenzugriff nutzt die **pro Organisation vergebbare „VM-Verbinden"-Berechtigung** — kein separates Recht zur Verwaltung von Zugangsdaten.
- **Organisations- und mandantenübergreifender Zugriff ist per Design ausgeschlossen.**
- **Jede Konsolensitzung und jede Anzeige von Zugangsdaten wird im Audit-Log erfasst** — nur Metadaten, niemals das Geheimnis.
