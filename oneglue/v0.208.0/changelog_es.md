# OneGlue v0.208.0 — Novedades

**Fecha de publicación:** 2026-07-15

**Llegue a una VM aunque su red sea inalcanzable.** OneGlue ahora puede abrir la **consola de una máquina virtual a través de su host Hyper-V** — para llegar a VMs en redes de cliente aisladas que una conexión de escritorio remoto directa nunca podría tocar.

## Acceso a la consola vía Hyper-V

- **Una nueva acción «Consola (vía Hyper-V)»** en cada VM de SCVMM. En lugar de conectarse a la propia dirección de la VM, OneGlue se conecta a través del **host Hyper-V** y abre la **consola** de la VM — igual que estar frente a su pantalla, incluso antes de que arranque el sistema operativo o cuando la VM está en una red no enrutable.
- **Funciona donde el RDP directo no puede.** Esta es la respuesta para VMs en redes de cliente aisladas/segmentadas: la sesión la retransmite el agente local de OneGlue hacia el host Hyper-V, sin necesitar nunca una ruta a la propia VM.
- **La secuencia de atención segura (Ctrl-Alt-Supr)** está a un clic para la pantalla de inicio de sesión.
- **Revelación de credenciales para el inicio de sesión en un clic.** La credencial de dominio/compartida que aplica a la VM puede revelarse para que la escriba en la consola (el acceso a la consola se autentica en el host; el inicio de sesión del invitado queda en sus manos) — cada revelación se registra en la auditoría.

## Elija el modo de seguridad RDP

- Al conectarse **directamente** a una máquina por escritorio remoto, ahora puede elegir el **modo de seguridad** — **NLA** (predeterminado) o **TLS** — para máquinas cuyo servidor RDP rechaza la negociación predeterminada.

## Controlado por diseño

- El acceso a la consola reutiliza el permiso **«conectar a la VM» otorgable por organización** — sin un derecho separado de gestión de credenciales.
- **El acceso entre organizaciones y entre inquilinos es imposible** por diseño.
- **Cada sesión de consola y cada revelación de credencial se registra en el registro de auditoría** — solo metadatos, nunca el secreto.
