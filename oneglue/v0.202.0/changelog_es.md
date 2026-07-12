# OneGlue v0.202.0 — Novedades

**Fecha de lanzamiento:** 2026-07-13

Gestiona tus máquinas virtuales SCVMM de principio a fin — reconfigurar, redimensionar el almacenamiento y retirar — directamente desde OneGlue, con cada acción confirmada y registrada en el log de auditoría.

## Editar la configuración de una VM

Desde la vista de detalle de una VM ahora puedes abrir **Editar** y cambiar:

- **Identidad** — nombre, descripción, propietario y notas, aplicados **en vivo** con un solo clic.
- **Cómputo** — número de CPU y memoria. Como requieren reiniciar la VM, OneGlue te pide **confirmación y advierte de que la VM se apagará** primero.

Cada VM tiene ahora además una **vista detallada** (discos, adaptadores de red, ajustes de memoria, estado de energía) con una hora clara de «última sincronización» y un botón de **Actualizar**.

## Gestionar discos virtuales — con Storage QoS

- **Ampliar** un disco (en línea para discos SCSI; las VM en discos IDE se reinician con una confirmación).
- **Añadir** un disco nuevo.
- **Storage QoS** — limita el rendimiento de un disco con **IOPS** mínimas/máximas o una política de Storage QoS con nombre (donde tu fabric de almacenamiento lo admita; los controles permanecen ocultos cuando no).
- **Quitar** un disco — una acción destructiva e irreversible, por eso está detrás de un **permiso independiente**, una **confirmación escribiendo el nombre de la VM** y un registro de auditoría sólido.

## Eliminar una VM

Retira una máquina virtual directamente desde OneGlue — un borrado definitivo protegido por un **permiso independiente**, una **confirmación escribiendo el nombre de la VM** y una entrada completa en el log de auditoría (quién, cuándo, por qué).

## Controlado por diseño

Cada acción de escritura está **controlada por permisos por acción** (editar, quitar disco y eliminar se conceden de forma independiente), es **graduada por riesgo** (los cambios inofensivos son de un clic; los disruptivos o destructivos requieren confirmación explícita) y queda **registrada en el log de auditoría**.
