# OneGlue v0.168.0 — Novedades

**Fecha de lanzamiento:** 2026-07-06

Conexiones más estables con sus dispositivos, y sus nodos de cómputo de IA ahora muestran la imagen completa.

## Sesiones remotas y conexiones de dispositivos más fiables

Hemos localizado y corregido una caída intermitente del enlace entre OneGlue y sus dispositivos conectados. Las sesiones remotas (RDP/VNC) y las conexiones de los agentes de dispositivo ahora se mantienen conectadas de forma mucho más constante, y cuando es necesario reconectar, ocurre en aproximadamente un segundo en lugar de quedarse bloqueado hasta un minuto. Menos interrupciones durante su trabajo y una recuperación más rápida ante fluctuaciones de red.

## La supervisión de nodos de cómputo de IA ahora muestra la imagen completa

La visión de los nodos de cómputo de IA que presentamos recientemente ahora muestra su detalle completo de forma fiable. En la página del dispositivo en OneGlue verá:

- **Datos de hardware y motor** — modelo de GPU y VRAM, distribución MIG, el motor de inferencia en ejecución y su imagen, y el modelo servido: nombre, cuantización, longitud de contexto y adaptadores LoRA.
- **Telemetría en vivo** — VRAM en uso, utilización y temperatura de la GPU, además del estado del motor por despliegue — actualizada automáticamente con un indicador claro de "visto por última vez".
- **Un registro duradero y consultable** — los datos estables también se escriben en un activo "AI Compute Node" vinculado al dispositivo, para que su documentación se mantenga actualizada por sí sola.

Estos detalles ahora se completan correctamente y se mantienen al día por sí mismos. Como antes, el lector es estrictamente de solo lectura y nunca ve ni transmite secretos.
