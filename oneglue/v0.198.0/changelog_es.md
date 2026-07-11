# OneGlue v0.198.0 — Novedades

**Fecha de lanzamiento:** 2026-07-12

Sesiones remotas más fluidas y una Flota de VM siempre actualizada.

## Conexiones remotas que simplemente funcionan

Trabajar dentro de una sesión remota RDP o VNC es ahora mucho más fluido:

- **Se respeta la distribución de tu teclado.** Los caracteres especiales como `|`, `\`, `@`, `{`, `[`, `]` y las diéresis ahora se escriben correctamente. Puedes **elegir la distribución del teclado por dispositivo** (alemán de forma predeterminada), de modo que lo que pulsas es lo que aparece — sin tener que reescribir comandos para esquivar una barra vertical que no salía.
- **Copiar y pegar en ambos sentidos.** El portapapeles ahora funciona en **ambas direcciones** — pega texto en la sesión remota (Ctrl+V o el botón *Enviar portapapeles*) y copia texto de vuelta a tu propio equipo. Ideal para pegar un comando y copiar su resultado de vuelta.

## Una Flota de VM más fresca, bajo demanda

- **Actualización bajo demanda.** Cada nube en la Flota de VM tiene ahora un botón **Sincronizar** para obtener su inventario de VM más reciente en el momento que quieras.
- **Actualización automática tras las acciones.** Después de Iniciar, Detener o Reiniciar una VM, la flota se actualiza sola poco después, de modo que el estado que ves refleja lo que realmente ocurrió.
- **Una hora de «última sincronización» honesta.** La marca de tiempo de «última sincronización» ahora muestra cuándo se **comprobó** el inventario por última vez, no solo cuándo cambió algo por última vez — para que puedas confiar en ella de un vistazo.
