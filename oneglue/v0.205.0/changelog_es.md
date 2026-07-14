# OneGlue v0.205.0 — Novedades

**Fecha de publicación:** 2026-07-14

Use **una credencial en muchas máquinas**. Una única cuenta de dominio de Windows (o cualquier inicio de sesión compartido) ahora puede asignarse a muchos dispositivos y VMs e inyectarse automáticamente al conectar — sin volver a copiar la misma contraseña en cada máquina.

## Credenciales compartidas / de dominio

- **Una contraseña, muchas máquinas.** Asigne una única credencial a un conjunto de destinos: **configuraciones concretas**, **todas las VMs de una nube SCVMM** o la **organización completa**.
- **Inicio de sesión automático al conectar.** Al abrir una sesión RDP o VNC hacia una máquina cubierta, la credencial compartida se ofrece en el selector y se inyecta automáticamente (inicio de sesión `DOMINIO\usuario`). La contraseña se inyecta solo en el worker de conexión — **nunca llega a su navegador**.
- **Rote una vez, aplica en todas partes.** Actualice la contraseña en un solo lugar y cada máquina cubierta usará el nuevo valor.

## Gestiónela donde trabaja

- **Compartir / asignar máquinas desde cualquier contraseña.** Una contraseña tiene ahora una acción **«Compartir / asignar máquinas»** para definir qué máquinas cubre.
- **Promover una contraseña de máquina existente.** Convierta una contraseña incrustada en una máquina en una credencial compartida en un solo paso — la máquina original conserva su acceso automáticamente.
- **Vista «Credenciales compartidas» a nivel de organización.** Gestione todas las credenciales compartidas y sus ámbitos desde la propia organización, no solo en la configuración del inquilino.
- **Visible en la máquina.** La página de detalle de una configuración muestra ahora **«Credenciales compartidas que aplican aquí»**, para que siempre sepa qué inicios de sesión compartidos cubren una máquina.

## Controlado por diseño

- **Permisos separados y otorgables por organización** — usar una credencial compartida y gestionar su ámbito son concesiones distintas, asignables por organización.
- **Compartir entre organizaciones y entre inquilinos es imposible** por diseño.
- **Cada uso y cada cambio de ámbito se registra en el registro de auditoría** (solo metadatos — nunca el valor del secreto).
