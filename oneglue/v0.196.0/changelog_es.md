# OneGlue v0.196.0 — Novedades

**Fecha de lanzamiento:** 2026-07-11

Tome el control de sus máquinas virtuales — y, de paso, una flota más ágil.

## Iniciar, detener y reiniciar VM — directamente desde OneGlue

Ahora puede **controlar sus máquinas virtuales SCVMM directamente desde OneGlue**: Iniciar, Detener y Reiniciar, desde la propia flota de VM. Cada acción pide primero una **confirmación** — una confirmación sencilla para Iniciar/Reiniciar, y escribir el nombre de la VM para las detenciones más arriesgadas — y cada acción queda **registrada en el registro de auditoría** (quién, cuándo, por qué). Las detenciones y reinicios vienen en dos modos: un apagado **ordenado** del sistema operativo invitado de forma predeterminada, o un apagado **forzado** cuando lo necesite. El acceso está controlado por permisos — a los miembros de una organización se les puede conceder gestionar únicamente las VM de su propia organización.

## Una flota de VM más clara y rápida

- La **flota de VM** ahora aparece en el menú de una organización **y** como mosaico en su panel en cuanto se le asignan nubes SCVMM — sin necesidad de recargar la página.
- **Haga clic en cualquier parte de una fila de VM** para abrir sus detalles (antes solo el nombre/estado era clicable).

## Eliminación más limpia de un servidor SCVMM

Eliminar un servidor SCVMM ahora realiza una **limpieza completa y confirmada** — sus asignaciones de nube, el inventario de VM en caché y los activos de nube generados se eliminan en un solo paso (con una salvaguarda de escribir-para-confirmar), de modo que no queda nada atrás.
