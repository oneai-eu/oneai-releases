# OneGlue v0.191.0 — Novedades

**Fecha de lanzamiento:** 2026-07-10

SCVMM: telemetría de dispositivos más clara, mapeo de cloud a organización y una flota de VM con búsqueda integrada.

## Asigne nubes privadas a las organizaciones de sus clientes

La página Integraciones → SCVMM ha sido rediseñada en torno a una matriz de mapeo de clouds: todas las nubes privadas descubiertas en un solo lugar, cada una asignada a una organización de forma directa — y puede asignar varias nubes a la misma organización de una sola vez (selección múltiple / asignación masiva). Un banner de descubrimiento muestra cuántas clouds se han encontrado, mapeado y aún no mapeado.

## Telemetría de dispositivo SCVMM enfocada

La página de dispositivo ya no muestra todas las clouds y todas las VM de forma inline. La tarjeta de telemetría SCVMM ahora muestra un resumen conciso — estado del proveedor, recuento total de nubes privadas y VM, y una línea compacta por cloud (VM, en ejecución/detenidas) — para que acceda a los detalles propios del dispositivo sin desplazamiento interminable.

## Vista de flota de VM con búsqueda

Una página dedicada a la flota de VM lista el inventario completo — todas las clouds y sus máquinas virtuales — con búsqueda y filtrado, para cuando necesite el panorama completo.

## Nubes privadas como assets

Cada nube privada descubierta aparece ahora como un asset "SCVMM Cloud" con búsqueda en su organización mapeada, con capacidad, uso y recuento de VM — de modo que las clouds aparecen en la búsqueda global y en las listas de assets de la organización.
