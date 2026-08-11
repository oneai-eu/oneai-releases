# OneGlue v0.253.0 — Novedades

**Fecha de lanzamiento:** 2026-08-11

**Más rápido y más fiable para organizaciones con muchos elementos vinculados.** Esta versión corrige un problema poco frecuente que podía congelar la interfaz en organizaciones con un número muy elevado de elementos vinculados, y hace que el panel de elementos relacionados sea más rápido y más claro en general.

## Corregido: la interfaz podía congelarse con un número muy alto de vínculos

- Corregimos un problema por el cual, en determinados escenarios de sincronización automática, las entradas de infraestructura relacionadas podían volver a crearse en bucle, acumulando silenciosamente un número inusualmente alto de elementos vinculados con el tiempo. En las pocas organizaciones afectadas, esto podía ralentizar o congelar partes de la interfaz. El problema está corregido de raíz y los datos afectados ya se han limpiado.

## Elementos relacionados: más rápidos, más claros, más fiables

- **Carga página a página** — el panel de elementos relacionados ahora obtiene resultados con «Cargar más» en lugar de intentar mostrarlo todo de una vez, y se mantiene fluido incluso en recursos con cientos de vínculos.
- **Sin enlaces rotos** — los elementos que apuntan a algo que ya se ha eliminado dejan de aparecer en elementos relacionados.
- **Recuentos más claros en Activos flexibles** — los activos muy vinculados ahora muestran un recuento tipo «25+» en lugar de ocultar cuántos vínculos existen realmente.
