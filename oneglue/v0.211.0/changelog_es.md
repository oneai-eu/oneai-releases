# OneGlue v0.211.0 — Novedades

**Fecha de publicación:** 2026-07-17

**Exporte todas las VMs de una nube a un CSV listo para facturación con un solo clic.** Desde la vista de flota de VMs, ahora puede descargar un inventario completo de todas las máquinas virtuales de una nube — con totales incluidos, listo para informes y facturación.

## Exportación de inventario de VMs por nube (CSV)

- **Una nueva acción «Exportar CSV»** en la vista de flota de VMs exporta todas las máquinas virtuales de la nube seleccionada. Cada fila incluye vCPU, RAM, almacenamiento, etiquetas y cualquier propiedad personalizada de SCVMM que mantenga — por ejemplo, un número de cliente o código de artículo almacenado en su SCVMM.
- **Fila de totales incluida.** La exportación suma automáticamente vCPU, RAM y almacenamiento en toda la nube, de modo que el archivo está listo para facturación o informes sin cálculos adicionales.
- **Nombres de columna personalizados para propiedades SCVMM.** Las propiedades personalizadas pueden recibir nombres de columna legibles por servidor SCVMM, de modo que los encabezados del archivo coincidan con sus propias convenciones en lugar de los nombres de campo internos de SCVMM.

## Controlado por diseño

- La exportación está **confinada a su organización** — el acceso entre organizaciones y entre inquilinos es imposible por diseño.
- **No se incluyen valores secretos** en la exportación — solo metadatos de inventario.
- La exportación está **limitada por el permiso existente de vista de flota** — no requiere ningún derecho de exportación independiente.
