# OneGlue v0.196.0 — Neuerungen

**Veröffentlicht am:** 2026-07-11

Übernehmen Sie die Kontrolle über Ihre virtuellen Maschinen — und obendrein eine aufgeräumtere Flotte.

## VMs starten, stoppen und neu starten — direkt aus OneGlue

Sie können Ihre SCVMM-VMs jetzt **direkt aus OneGlue steuern**: Start, Stopp und Neustart, direkt aus der VM-Flotte. Jede Aktion fragt zuerst nach einer **Bestätigung** — eine einfache Bestätigung bei Start/Neustart, und das Eintippen des VM-Namens bei den riskanteren Stopps — und jede Aktion wird im **Audit-Log** festgehalten (wer, wann, warum). Stopp und Neustart gibt es in zwei Varianten: standardmäßig ein **sauberes** Herunterfahren des Gastbetriebssystems, oder ein **hartes** Ausschalten, wenn nötig. Der Zugriff ist rechtegesteuert — Mitgliedern einer Organisation kann die Berechtigung erteilt werden, nur die VMs ihrer eigenen Organisation zu verwalten.

## Eine übersichtlichere, schnellere VM-Flotte

- Die **VM-Flotte** erscheint jetzt im Menü einer Organisation **und** als Kachel auf deren Dashboard, sobald SCVMM-Clouds zugeordnet sind — ganz ohne Seiten-Neuladen.
- **Ein Klick irgendwo auf eine VM-Zeile** öffnet deren Details (vorher war nur Name/Status klickbar).

## Sauberes Entfernen eines SCVMM-Servers

Das Entfernen eines SCVMM-Servers führt jetzt eine **vollständige, bestätigte Bereinigung** durch — Cloud-Zuordnungen, zwischengespeichertes VM-Inventar und generierte Cloud-Assets werden in einem Schritt entfernt (mit einer Tippen-zum-Bestätigen-Absicherung), sodass nichts zurückbleibt.
