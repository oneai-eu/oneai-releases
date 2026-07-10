# OneGlue v0.194.0 — Novedades

**Fecha de lanzamiento:** 2026-07-11

Sepa dónde se ejecuta cada VM — y si su réplica está en buen estado.

## Host, clúster y replicación de un vistazo

La flota de VM ahora muestra, para cada máquina virtual, **en qué host y clúster de conmutación por error se ejecuta** — directamente en la vista general, sin necesidad de desplegar. Junto a ello, una **insignia de estado de replicación** indica de un vistazo si la réplica Hyper-V de una VM está en buen estado (verde), necesita atención (ámbar) o es crítica (rojo).

## Detalle completo de replicación al hacer clic

Abra cualquier VM para ver su panorama de replicación completo: el **rol** (Primary o Recovery), el **estado de salud** y el **estado** actual. Como las VM replicadas existen en dos lugares, ahora aparecen como dos entradas — la primaria y su copia de recuperación — cada una claramente etiquetada, para que pueda ver su geo-redundancia (por ejemplo, una VM primaria en un centro de datos con su copia de recuperación en otro).
