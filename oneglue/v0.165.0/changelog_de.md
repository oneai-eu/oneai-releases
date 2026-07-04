# OneGlue v0.165.0 — Neuigkeiten

**Veröffentlicht:** 2026-07-04

Das Fundament für eine neue Funktion: OneGlue kann jetzt kleine, signierte Plugins auf Ihren verbundenen Geräten ausführen — und das erste liefert einen Live-Blick auf Ihre KI-Compute-Knoten.

## Geräte-Plugins — ein sicheres Fundament

Der OneGlue-Agent kann nun kleine, zweckgebundene Plugins laden, die ein Tenant-Admin direkt aus der OneGlue-Oberfläche bereitstellt — ganz ohne Serverzugriff. Jedes Plugin wird kryptografisch signiert und auf dem Gerät geprüft, bevor es läuft, und wird mit minimalen Rechten in einer Sandbox ausgeführt. Darauf bauen wir künftig reichhaltigere Geräte-Integrationen auf.

## Erstes Plugin: Live-Einblick in Ihre KI-Compute-Knoten

Das erste Plugin ist ein rein lesender Reader für onestack-GPU-Knoten. Einmal auf einem Gerät bereitgestellt, zeigt es — direkt auf der Geräteseite in OneGlue:

- **Hardware- & Engine-Fakten** — GPU-Modell, VRAM, Treiber/CUDA, MIG-Aufteilung, die laufende Inferenz-Engine + Image sowie das/die geladene(n) Modell(e): Name, Quantisierung, Kontextlänge, LoRA-Adapter.
- **Live-Telemetrie** — belegter VRAM, GPU-Auslastung & Temperatur sowie Engine-Zustand und Antwortlatenz je Deployment — automatisch aktualisiert, mit klarer „Zuletzt gesehen"-Anzeige.
- **Ein dauerhafter Eintrag** — die stabilen Fakten werden zusätzlich in einen durchsuchbaren „AI Compute Node"-Datensatz geschrieben, der mit dem Gerät verknüpft ist, damit Ihre Dokumentation von selbst aktuell bleibt.

Der Reader ist streng nur lesend und sieht oder überträgt niemals Geheimnisse.
