# OneAI v0.3.6-beta — Controles de cumplimiento reforzados, chats más inteligentes y soporte completo de GPT‑5.4

**Release Date:** 2026-03-27

Con v0.3.6-beta, OneAI es más seguro, más potente y más fluido en el uso diario. Esta versión introduce un sistema de cumplimiento completamente rediseñado, un flujo de chat significativamente mejorado, filtrado avanzado para GitHub y soporte para todos los nuevos modelos GPT‑5.4.

## Highlights

### Sistema de cumplimiento con niveles de riesgo y bloqueo
Hemos rediseñado por completo la capa de cumplimiento. Los administradores ahora pueden definir **por nivel de riesgo** si las solicitudes solo se registran o se bloquean activamente.

- Acciones configurables por nivel de riesgo: **Audit** o **Audit & Block**
- Modo síncrono opcional para bloquear inmediatamente prompts de alto riesgo
- Registro de auditoría ampliado para:
  - Mensajes de chat
  - Invitaciones de miembros
  - Cambios en permisos de Spaces
- Interfaz clara de configuración de cumplimiento basada en pestañas

Esto brinda a las organizaciones un control mucho más sólido en línea con el EU AI Act y las políticas internas de gobernanza.

Muchas gracias a **Oliver** por liderar esta iniciativa.

### Nuevo flujo de chat: creación diferida, renombrado inline y artefactos en el chat
Hemos optimizado la experiencia principal de AI Chat.

- Los chats se crean **solo cuando se envía el primer mensaje** (sin chats vacíos)
- Los chats pueden **renombrarse inline** directamente desde la lista
- Los artefactos ahora aparecen **directamente dentro del chat** en lugar de en un diálogo separado
- Los mensajes vacíos o inválidos se bloquean de forma consistente

Resultado: listas más limpias, menos casos límite y una experiencia de AI Chat más fiable.

Gracias a **Pascal** por impulsar esta gran mejora de nuestro flujo principal.

### Conector de GitHub con filtrado avanzado de archivos
Al conectar repositorios de GitHub, ahora puedes controlar con precisión qué archivos se sincronizan e integran.

- Patrones de inclusión y exclusión (p. ej., `*.md`, `docs/`, `test*`)
- Filtrado separado para sincronización vs. embedding
- Orientación más clara cuando se alcanzan los límites de la API
- Iconos de archivo adecuados para una mejor visualización

Esto ayuda a reducir embeddings innecesarios, optimizar costes y mejorar la calidad de los Knowledge Spaces.

### Todos los modelos GPT‑5.4 disponibles
Ya están disponibles todas las variantes de GPT‑5.4:

- **Nano & Mini** – rápidos y eficientes en costes
- **Standard** – modelo versátil y potente con gran ventana de contexto
- **Pro** – máxima capacidad para tareas de razonamiento complejas

Ahora puedes alinear la elección del modelo con mayor precisión según tu caso de uso, presupuesto y requisitos de gobernanza.

### Hub de actividad en tiempo real
Un nuevo flujo de actividad unificado muestra en tiempo real:

- Sincronizaciones
- Procesamiento de documentos (embedding)
- Destilaciones

Todo en una vista consolidada con indicadores de progreso — especialmente valioso para Knowledge Spaces de gran tamaño.

## Improvements

- Ordenar proyectos por **nombre, fecha de creación o última actualización**
- Diálogo de confirmación antes de eliminar chats
- El rol Admin en Spaces aplica automáticamente permisos de escritura (modelo de acceso coherente)
- Sistema de plantillas de instrucciones de proyecto completamente reconstruido con nueva UI y funcionalidad de showcase
- Plantillas de weclapp mejoradas para mayor calidad de extracción
- Manejo de mensajes más robusto (sin fallos por bloques de contenido vacíos)

Gracias especiales a **Mirko** por reconstruir el sistema de plantillas y a **Santi** por sus primeras contribuciones en la ordenación de proyectos y la eliminación segura de chats.

## ⚠️ Security

Hemos reforzado aún más nuestra arquitectura de seguridad:

- **Aislamiento multi‑tenant reforzado:** Las asignaciones de equipos ahora se validan estrictamente contra su organización
- **Registro WebAuthn más seguro:** La verificación del challenge ahora se gestiona completamente dentro de la transacción de base de datos, evitando race conditions

Estos cambios fortalecen significativamente el aislamiento entre tenants y la seguridad de autenticación.

## Under the Hood

- Migración a **Vite 8** para una configuración de build modernizada
- 65 actualizaciones de dependencias
- Actualización a Mistral SDK v2
- Mejoras adicionales de rendimiento, estabilidad y calidad de código

---

Gracias a **Pascal, Oliver, Mirko y Santi** — y a nuestras actualizaciones automáticas de dependencias.

_24 PRs · 147 archivos modificados · 14.422 inserciones · 5.595 eliminaciones_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
