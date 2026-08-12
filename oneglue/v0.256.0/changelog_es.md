# OneGlue v0.256.0 — Novedades

**Fecha de lanzamiento:** 2026-08-12

**Una plataforma más ligera y un registro de auditoría más limpio.** Esta versión ajusta la sincronización en segundo plano y varias consultas internas de la base de datos para reducir la carga, y hace que el registro de auditoría sea un historial más fiable, reduciendo el ruido repetitivo de la actividad automatizada sin dejar de registrar por completo cada acción real.

## Más rápido y más ligero por dentro

- **La sincronización en segundo plano funciona a un ritmo más relajado.** Ajustamos la frecuencia con la que OneGlue comprueba si hay actualizaciones que retransmitir a los sistemas conectados, además de varias consultas internas de la base de datos — esto reduce la carga de la base de datos sin cambiar qué se sincroniza ni cuándo surten efecto sus propias acciones.
  > **Nota:** Si su espacio de trabajo está conectado a oneAI, los avisos de revocación de permisos ahora llegan a oneAI en aproximadamente un minuto en lugar de unos diez segundos. Esto solo afecta a la rapidez con la que se actualiza el índice de referencia propio de oneAI — OneGlue sigue aplicando cada cambio de permisos de forma inmediata en su propio lado, por lo que el control de acceso en sí no tiene ninguna brecha.
- **La página de sesiones es más ligera para la base de datos.** La marca de tiempo de «Último uso» de sus sesiones activas ahora se actualiza como máximo una vez por minuto en lugar de en cada solicitud. Como la página ya muestra las horas con precisión de minuto, no hay ningún cambio visible.

## Un registro de auditoría más limpio y fiable

- **Menos ruido procedente de la actividad automatizada.** Las acciones rutinarias en segundo plano — como los ciclos periódicos de sincronización — ya no inundan el registro de auditoría con una avalancha de entradas casi idénticas. La actividad sin cambios ahora se agrupa en entradas de resumen periódicas que indican cuántas veces ocurrió, de modo que sus propias acciones y los cambios reales sean fáciles de encontrar. No se pierde nada: cada cambio real se sigue registrando en el momento en que ocurre, y los resúmenes contabilizan todo lo que se agrupó.
- **Las acciones automatizadas ahora se atribuyen correctamente al sistema**, en lugar de a la persona cuyas credenciales se usan de forma incidental en segundo plano — las entradas de auditoría ya no atribuyen erróneamente trabajo rutinario automatizado a una persona.
- **Se corrigió una clase de falsas alarmas** en los informes de limpieza de tokens que podía hacer que el manejo normal y esperado de tokens pareciera una anomalía.
- **Las acciones automatizadas exitosas ahora registran datos de origen de red**, igual que ya se registraba en los intentos fallidos — cerrando un pequeño punto ciego para quien revise el registro de auditoría.
