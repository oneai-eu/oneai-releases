# OneGlue v0.261.0 — Novedades

**Fecha de lanzamiento:** 2026-08-16

**Un puñado de correcciones específicas de fiabilidad.** Esta versión pule un caso particular en la gestión de passkeys, hace más clara la validación de direcciones de red y mejora algunos diagnósticos internos.

## Gestión de passkeys más fiable

- **Añadir un passkey ahora funciona de forma fiable, siempre.** Algunos usuarios con sesión iniciada podían ver ocasionalmente el error «No tenant matches» al añadir un passkey adicional desde Perfil → Seguridad — por ejemplo, como copia de seguridad o desde un dispositivo nuevo. Añadir un passkey ahora se gestiona íntegramente dentro de su sesión ya iniciada, por lo que ya no depende de cómo haya accedido a OneGlue. Se trata únicamente de una corrección de fiabilidad de una función de seguridad ya existente — no requiere ninguna acción por su parte.

## Validación de red más clara

- **Mensajes de error útiles y específicos al introducir direcciones de red.** Si introducía una dirección de red con bits adicionales activados más allá de su prefijo — por ejemplo, `192.168.2.1/24` en lugar de la dirección de red `192.168.2.0/24` — OneGlue a veces mostraba un error genérico del servidor en lugar de guiarle hacia la corrección. Ahora se muestra un mensaje claro en línea con la dirección correcta sugerida, justo donde está escribiendo. Esto aplica tanto a Redes como a la lista blanca de destinos SSH.

## Entre bambalinas

- Registro de diagnóstico mejorado para la sincronización de inventario de SCVMM y un seguimiento interno más fiable de los fallos de compilación, para detectar y resolver problemas más rápido.
