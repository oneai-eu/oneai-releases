# OneGlue v0.168.0 — Was ist neu

**Release-Datum:** 2026-07-06

Stabilere Verbindungen zu Ihren Geräten – und Ihre AI-Compute-Nodes zeigen jetzt das vollständige Bild.

## Zuverlässigere Remote-Sitzungen und Geräteverbindungen

Wir haben einen sporadischen Abbruch der Verbindung zwischen OneGlue und Ihren angebundenen Geräten gefunden und behoben. Remote-Sitzungen (RDP/VNC) und die Verbindungen der Geräte-Agents bleiben jetzt deutlich zuverlässiger bestehen, und wenn eine Neuverbindung nötig ist, erfolgt sie in etwa einer Sekunde statt bis zu einer Minute zu hängen. Weniger Unterbrechungen bei der Arbeit und eine schnellere Erholung bei Netzwerkschwankungen.

## AI-Compute-Node-Überwachung zeigt jetzt das vollständige Bild

Der kürzlich eingeführte Einblick in AI-Compute-Nodes zeigt seine Details nun zuverlässig vollständig an. Auf der Geräteseite in OneGlue sehen Sie:

- **Hardware- und Engine-Fakten** – GPU-Modell und VRAM, MIG-Aufteilung, die laufende Inference-Engine und das Image sowie das bereitgestellte Modell: Name, Quantisierung, Kontextlänge und LoRA-Adapter.
- **Live-Telemetrie** – belegter VRAM, GPU-Auslastung und -Temperatur sowie die Engine-Gesundheit pro Deployment – automatisch aktualisiert mit einer klaren „Zuletzt gesehen"-Anzeige.
- **Ein dauerhafter, durchsuchbarer Eintrag** – die stabilen Fakten werden zusätzlich in ein mit dem Gerät verknüpftes „AI Compute Node"-Asset geschrieben, damit Ihre Dokumentation von selbst aktuell bleibt.

Diese Details werden jetzt korrekt befüllt und halten sich selbst aktuell. Wie zuvor arbeitet der Reader ausschließlich lesend und sieht oder überträgt niemals Geheimnisse.
