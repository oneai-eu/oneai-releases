# OneGlue v0.163.0 — Novedades

**Fecha de publicación:** 2026-07-04

Una continuación de las mejoras del agente de dispositivo: tus dispositivos conectados ahora informan todos sus detalles de red, y las actualizaciones del agente son más fiables.

## Detalles de red completos de tus dispositivos

Los dispositivos conectados mediante el agente de OneGlue ahora informan su conjunto completo de interfaces de red — nombres, direcciones MAC y direcciones IP — directamente en el registro del dispositivo.

- **Ve todas las interfaces.** Los adaptadores de red de un dispositivo ahora se rellenan automáticamente en OneGlue, de modo que obtienes una imagen precisa y actualizada sin escribirlos a mano.
- **Emparejamiento más fiable.** Como el agente ahora informa la dirección de red de hardware de un dispositivo, OneGlue vincula un agente al dispositivo existente correcto con mayor fiabilidad — y sigue pidiéndote confirmación siempre que no esté seguro.

## Actualizaciones del agente más fiables

Hemos reforzado la forma en que el agente de dispositivo se actualiza a sí mismo: una actualización ahora finaliza de forma fiable y el agente vuelve a estar en línea por sí solo, sin necesidad de un reinicio manual.
