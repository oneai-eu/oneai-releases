# OneGlue v0.206.0 — Novedades

**Fecha de publicación:** 2026-07-14

**Conéctese directamente a una máquina virtual.** Abra una sesión RDP a cualquiera de sus VMs de SCVMM directamente desde OneGlue — tunelizada de forma segura a través de su agente local, con inicio de sesión de dominio en un clic.

## Escritorio remoto a una VM de SCVMM

- **Un clic desde la VM.** Cada VM de SCVMM tiene ahora una acción **Escritorio remoto** — sin buscar su IP ni pasar por un host.
- **Tunelizado a través de su agente.** La sesión la retransmite el agente de OneGlue que ya se ejecuta en su gateway de SCVMM, de modo que alcanza VMs en redes internas que el navegador nunca podría tocar directamente. La conexión se negocia por sesión y es de un solo uso.
- **Inicio de sesión de dominio en un clic.** Si una credencial compartida/de dominio cubre la VM (a través de su nube SCVMM o su organización), OneGlue lo autentica automáticamente como `DOMINIO\usuario`. Cuando aplican varias, usted elige; la contraseña se inyecta solo en el agente y **nunca llega a su navegador**.
- **Gestión inteligente de la dirección.** OneGlue usa la dirección IP conocida de la VM; cuando una VM tiene varias, puede elegir, y si ninguna es alcanzable recibe un mensaje claro en lugar de un bloqueo.

## Controlado por diseño

- Un permiso dedicado y **otorgable por organización de «conectar a la VM»** — separado de quién puede gestionar las credenciales.
- **El acceso entre organizaciones y entre inquilinos es imposible** por diseño.
- **Cada sesión se registra en el registro de auditoría** (abierta, cerrada, tiempo de inactividad) — solo metadatos, nunca el secreto.
