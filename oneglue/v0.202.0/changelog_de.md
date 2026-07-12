# OneGlue v0.202.0 — Was ist neu

**Veröffentlicht am:** 2026-07-13

Verwalten Sie Ihre SCVMM-VMs vollständig — neu konfigurieren, Speicher anpassen und außer Betrieb nehmen — direkt in OneGlue, jede Aktion bestätigt und im Audit-Log erfasst.

## VM-Konfiguration bearbeiten

Aus der Detailansicht einer VM können Sie jetzt **Bearbeiten** öffnen und ändern:

- **Identität** — Name, Beschreibung, Besitzer und Notizen, **live** mit einem Klick übernommen.
- **Compute** — CPU-Anzahl und Arbeitsspeicher. Da diese einen Neustart der VM erfordern, fragt OneGlue nach einer **Bestätigung und warnt, dass die VM ausgeschaltet wird**.

Jede VM hat jetzt außerdem eine **Detailansicht** (Datenträger, Netzwerkadapter, Speichereinstellungen, Energiestatus) mit einer klaren „Zuletzt synchronisiert"-Anzeige und einer **Aktualisieren**-Schaltfläche.

## Virtuelle Datenträger verwalten — mit Storage QoS

- **Vergrößern** eines Datenträgers (online bei SCSI-Datenträgern; VMs auf IDE-Datenträgern werden nach Bestätigung neu gestartet).
- **Hinzufügen** eines neuen Datenträgers.
- **Storage QoS** — den Durchsatz eines Datenträgers mit minimalen/maximalen **IOPS** oder einer benannten Storage-QoS-Richtlinie begrenzen (sofern Ihr Speicher-Fabric das unterstützt; die Bedienelemente bleiben andernfalls ausgeblendet).
- **Entfernen** eines Datenträgers — eine destruktive, unumkehrbare Aktion, daher hinter einer **eigenen Berechtigung**, einer **VM-Namen-eintippen-Bestätigung** und einem starken Audit-Eintrag.

## VM löschen

Nehmen Sie eine virtuelle Maschine direkt aus OneGlue außer Betrieb — ein Hard-Delete, abgesichert durch eine **eigene Berechtigung**, eine **VM-Namen-eintippen-Bestätigung** und einen vollständigen Audit-Log-Eintrag (wer, wann, warum).

## Von Grund auf kontrolliert

Jede schreibende Aktion ist **pro Aktion berechtigungsgesteuert** (Bearbeiten, Datenträger-Entfernen und Löschen sind jeweils einzeln vergebbar), **risikogestaffelt** (harmlose Änderungen mit einem Klick; störende oder destruktive erfordern eine ausdrückliche Bestätigung) und **im Audit-Log erfasst**.
