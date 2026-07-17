# OneGlue v0.211.0 — Neuigkeiten

**Veröffentlicht am:** 2026-07-17

**Exportieren Sie alle VMs einer Cloud mit einem Klick in ein abrechnungsbereites CSV.** Aus der VM-Flottenansicht können Sie jetzt ein vollständiges Inventar aller virtuellen Maschinen einer Cloud herunterladen — mit Summenzeile, direkt bereit für Berichte und Abrechnung.

## VM-Inventarexport pro Cloud (CSV)

- **Eine neue Aktion „CSV exportieren"** in der VM-Flottenansicht exportiert alle virtuellen Maschinen der gewählten Cloud. Jede Zeile enthält vCPUs, RAM, Speicher, Tags und alle SCVMM-Custom-Properties, die Sie pflegen — zum Beispiel eine Kundennummer oder ein Artikelcode aus Ihrem SCVMM.
- **Summenzeile enthalten.** Der Export summiert automatisch vCPUs, RAM und Speicher über die gesamte Cloud, sodass die Datei ohne weitere Berechnung für die Abrechnung oder Berichte verwendbar ist.
- **Lesbare Spaltennamen für Custom-Properties.** Custom-Properties können pro SCVMM-Server mit eigenen Spaltenbezeichnungen versehen werden, damit die Exportheader Ihren eigenen Konventionen entsprechen und nicht den internen SCVMM-Feldnamen.

## Kontrolliert per Design

- Der Export ist **auf Ihre Organisation beschränkt** — organisations- und mandantenübergreifender Zugriff ist per Design ausgeschlossen.
- **Keine Geheimniswerte im Export** — nur Inventarmetadaten.
- Der Export ist **an die bestehende Flottenansicht-Berechtigung gekoppelt** — kein separates Exportrecht erforderlich.
