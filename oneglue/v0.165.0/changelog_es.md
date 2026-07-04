# OneGlue v0.165.0 — Novedades

**Fecha de publicación:** 2026-07-04

La base para una nueva capacidad: OneGlue ya puede ejecutar pequeños plugins firmados en sus dispositivos conectados, y el primero le ofrece una vista en vivo de sus nodos de cómputo de IA.

## Plugins de dispositivo — una base segura

El agente de OneGlue ahora puede cargar pequeños plugins específicos que un Tenant-Admin aprovisiona directamente desde la interfaz de OneGlue, sin necesidad de acceso al servidor. Cada plugin se firma criptográficamente y se verifica en el dispositivo antes de ejecutarse, y se ejecuta aislado (sandbox) con privilegios mínimos. Es la base sobre la que construiremos integraciones de dispositivo más completas.

## Primer plugin: visión en vivo de sus nodos de cómputo de IA

El primer plugin es un lector de solo lectura para nodos GPU de onestack. Una vez aprovisionado en un dispositivo, muestra —directamente en la página del dispositivo en OneGlue:

- **Datos de hardware y motor** — modelo de GPU, VRAM, controlador/CUDA, distribución MIG, el motor de inferencia en ejecución + imagen, y el/los modelo(s) cargado(s): nombre, cuantización, longitud de contexto, adaptadores LoRA.
- **Telemetría en vivo** — VRAM en uso, utilización y temperatura de la GPU, además del estado del motor y la latencia de respuesta por despliegue —actualizado automáticamente, con un indicador claro de «visto por última vez».
- **Un registro duradero** — los datos estables también se escriben en un registro «AI Compute Node» consultable y vinculado al dispositivo, para que su documentación se mantenga al día por sí sola.

El lector es estrictamente de solo lectura y nunca ve ni transmite secretos.
