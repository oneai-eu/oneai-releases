# OneGlue v0.253.0 — Neuigkeiten

**Veröffentlicht am:** 2026-08-11

**Schneller und stabiler für Organisationen mit vielen verknüpften Elementen.** Dieses Release behebt ein seltenes Problem, das bei Organisationen mit sehr vielen verknüpften Elementen zu einer eingefrorenen Oberfläche führen konnte, und macht das Panel „Verknüpfte Elemente" insgesamt schneller und übersichtlicher.

## Behoben: Oberfläche konnte bei sehr vielen Verknüpfungen einfrieren

- Wir haben ein Problem behoben, bei dem in bestimmten Szenarien mit automatischer Synchronisierung verknüpfte Infrastruktur-Einträge wiederholt neu angelegt wurden und sich so über die Zeit eine ungewöhnlich große Anzahl an verknüpften Elementen ansammelte. Bei den wenigen betroffenen Organisationen konnte das Teile der Oberfläche verlangsamen oder einfrieren lassen. Die Ursache ist behoben, und die betroffenen Daten wurden bereinigt.

## Verknüpfte Elemente: schneller, übersichtlicher, zuverlässiger

- **Lädt seitenweise** — das Panel „Verknüpfte Elemente" lädt Ergebnisse jetzt über „Mehr laden", statt alles auf einmal darzustellen, und bleibt auch bei Elementen mit hunderten Verknüpfungen flüssig.
- **Keine toten Links mehr** — Verknüpfungen zu bereits gelöschten Elementen werden nicht mehr angezeigt.
- **Klarere Anzahl bei Flexible Assets** — stark verknüpfte Assets zeigen jetzt eine „25+"-Anzeige, statt die tatsächliche Anzahl der Verknüpfungen zu verbergen.
