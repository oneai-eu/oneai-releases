# OneGlue v0.161.0 — Novedades

**Fecha de publicación:** 2026-07-03

Esta versión hace que conectar un dispositivo a OneGlue con el agente integrado sea más sencillo e inteligente: un solo comando para instalarlo y se acabaron las entradas de dispositivo duplicadas por accidente.

## Instalación del agente de dispositivo con un solo comando

Conectar una máquina a OneGlue con el agente de dispositivo requería antes varios pasos de configuración manual. Ahora el agente preconfigurado que descargas desde OneGlue se instala solo de principio a fin.

- **Un comando, todo configurado.** En un host Linux, el instalador descargado registra ahora el agente como un servicio en segundo plano gestionado, lo ejecuta bajo una cuenta dedicada con privilegios mínimos y lo conecta a OneGlue automáticamente, sin configuración manual del servicio.
- **Se ejecuta de forma segura en segundo plano.** El agente sigue funcionando tras los reinicios, solo establece conexiones salientes (no abre ningún puerto entrante) y opera bajo un perfil restringido de privilegios mínimos.

## Emparejamiento de dispositivos más inteligente: sin duplicados

Cuando una máquina que ya has documentado en OneGlue conecta su agente, OneGlue ahora la reconoce y se vincula al registro existente en lugar de crear un segundo.

- **Reconoce el dispositivo que ya tienes.** El agente se asocia a una configuración existente mediante señales fuertes (como la dirección de red del hardware), de modo que una máquina que ya añadiste no aparece por duplicado.
- **Cuando no está seguro, pregunta.** Si OneGlue no puede asociar con certeza un agente a un dispositivo existente, lo marca para tu revisión en lugar de adivinar: lo vinculas con un clic.
- **Tus datos se conservan.** La información que has curado (como el nombre completo de un dispositivo) se conserva y nunca la sobrescribe el informe automático del agente.
