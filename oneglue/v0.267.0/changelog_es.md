# OneGlue v0.267.0 — Novedades

**Fecha de lanzamiento:** 2026-08-29

**Duplique cualquier elemento para crear uno similar en segundos, y deje que OneGlue mantenga los datos de sus dominios actualizados automáticamente.**

## Duplicar configuraciones, redes, contactos, ubicaciones, dominios y activos flexibles

- **Un botón "Duplicar" en cada página de detalle** de configuraciones, redes, contactos, ubicaciones, dominios y activos flexibles abre el formulario de creación previamente rellenado con los datos de ese elemento. Los identificadores únicos — número de serie, etiqueta de activo, dirección MAC y (en el caso de los dominios) el propio nombre de dominio — siempre empiezan vacíos, ya que deben ser únicos. Los campos que normalmente difieren solo en uno o dos caracteres — nombre de host, direcciones IP, nombre de red, VLAN, subred y similares — se rellenan previamente y se resaltan, para que vea exactamente qué debe revisar antes de guardar. Si intenta guardar sin cambiar ninguno de los campos resaltados, OneGlue le pedirá confirmación primero.
- El nuevo elemento registra de qué elemento se duplicó, visible en su historial. Un elemento restringido (Lockbox) produce un duplicado igualmente restringido, y las contraseñas, los archivos adjuntos y otros datos vinculados sensibles nunca se copian — en esos siempre partirá de cero.

## Sincronización automática con el registrador para dominios

- **Los dominios con una credencial de registrador vinculada ahora se mantienen actualizados por sí solos.** Cada noche, OneGlue consulta al registrador y actualiza por usted la fecha de vencimiento, los servidores de nombres, el estado de auto-renovación y el estado de DNSSEC — así, un dominio que renovó en el registrador deja de mostrar una advertencia de vencimiento obsoleta.
- ¿Lo necesita antes? Un botón **"Sincronizar desde el registrador ahora"** en la página del dominio activa la misma comprobación bajo demanda, y un indicador de "última sincronización" le muestra cuándo se ejecutó por última vez. Si una sincronización encuentra algún problema, se muestra claramente en la página del dominio en lugar de fallar en silencio.

## Pequeña mejora

- Al crear un activo flexible ahora se le lleva directamente a su página de detalle, tal como ya ocurre con configuraciones, redes, contactos, ubicaciones y dominios.
