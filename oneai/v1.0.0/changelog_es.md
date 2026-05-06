# OneAI 1.0 — Listo para producción con Credit Pool, Partner Program y más de 80 mejoras

**Release Date:** 2026-05-06

Con OneAI 1.0 dejamos oficialmente atrás la fase beta.

Esta versión prepara OneAI para el uso en producción empresarial: control centralizado del presupuesto de IA, un nuevo Partner Program para organizaciones gestionadas, autenticación de dos factores mediante app y un pipeline de procesamiento de documentos completamente renovado.

## Highlights

### Credit Pool para control centralizado de costes
Las organizaciones del plan Team ahora disponen de un **presupuesto central de IA**.

- Los admins pueden asignar **presupuestos individuales por usuario**
- Control proactivo de sobrecostes
- **Alertas automáticas por correo electrónico** al alcanzar umbrales
- El dashboard muestra el coste total real, incluidas las solicitudes en caché

El uso de la IA se vuelve predecible, transparente y controlable — ideal para equipos de compliance y finanzas.

Muchas gracias a **orehman3035** por desarrollar de extremo a extremo el nuevo sistema de créditos y suscripciones.

### Partner Program para organizaciones gestionadas
Con el nuevo **Partner Program**, las organizaciones pueden operar sin su propia suscripción a Stripe.

- Los partners gestionan la facturación de forma centralizada
- Registro dedicado de eventos de facturación para máxima transparencia
- Nueva página de detalles del partner en configuración

Perfecto para consultoras, proveedores IT y resellers enterprise.

### Autenticación de dos factores (TOTP)
Seguridad de nivel enterprise: los usuarios pueden activar una **app de autenticación (p. ej., Google Authenticator, 1Password)** como segundo factor.

- Códigos TOTP como alternativa a los tokens por correo electrónico
- Integración fluida en el inicio de sesión
- Flujo de configuración estable y fiable

Gracias a **Justus Zorn** por la implementación.

### La IA puede crear proyectos y generar diagramas Mermaid
Ahora la IA puede:

- **Crear nuevos proyectos automáticamente** bajo solicitud
- Generar **diagramas Mermaid válidos** utilizando una referencia de sintaxis integrada

Esto reduce la configuración manual y facilita considerablemente la documentación visual.

Gracias a **Mirko Tochtermann** y **Pascal Schüler**.

### Audit logs con sistema de semáforo
La compliance gana en transparencia:

- Las entradas del audit log muestran ahora un **nivel de riesgo codificado por colores**
- Nuevo filtro por nivel de riesgo
- Audit logs del proveedor con datos de tenant anonimizados

Ideal para revisiones internas y documentación del EU AI Act. Gracias a **Oliver Rasch**.

---

## Performance & Escalabilidad

### Cola de embeddings equitativa
Rediseñamos por completo el procesamiento de documentos.

- Distribución equitativa de recursos entre organizaciones y Knowledge Spaces
- Las cargas grandes ya no bloquean a otros equipos
- Tiempos máximos de espera predecibles

Además:

- Menor coste y latencia gracias a un retrieval simplificado
- Procesamiento más estable de PDFs e imágenes de gran tamaño
- Escrituras en la base de datos vectorial por lotes para mayor fiabilidad
- Gestión automática de los límites de tasa de GitHub

Excelente trabajo de **Pascal Schüler**, quien dejó el pipeline de embeddings listo para producción.

### Una aplicación notablemente más rápida
- Caché de assets activado
- Lazy loading para el dashboard y la lista de proyectos
- Bundle optimizado (sin librerías duplicadas)
- Errores de carga de chunks bajo alta carga resueltos

OneAI ahora se siente significativamente más rápido y estable.

---

## Mejoras en el día a día

- Subida de archivos mediante drag-and-drop directamente en la página inicial del chat
- Panel de artefactos totalmente utilizable en móvil
- Referencias de fuentes clicables en el chat
- La IA responde automáticamente en el idioma del usuario
- Personal Space vinculado automáticamente al proyecto personal
- Nueva pestaña “Conflicts” en la configuración del proyecto
- Umlauts alemanes permitidos en nombres de proyectos y equipos

Muchas pequeñas mejoras — gran impacto en el trabajo diario.

---

## Seguridad

Hemos implementado varias mejoras de seguridad:

- El caché de React Query se elimina al iniciar sesión (evita la visibilidad de datos entre cuentas en navegadores compartidos)
- Salvaguardas de memoria para el procesamiento de imágenes y PDFs
- Límites de contenido en el Conector ClickUp para prevenir agotamiento del heap

Además, la resumización de chats ahora se ejecuta en **nuestra propia infraestructura en la UE** — el historial de chat ya no sale de la UE.

---

## Breaking Changes

### Eliminado el Beta Code Gate
El registro ahora es público — ya no se requieren códigos de invitación.

No se requiere ninguna acción.

### Google Sign-In y Google Drive ocultos temporalmente
Google SSO y el Conector de Google Drive están temporalmente desactivados.

Por favor, utilice:
- OneDrive
- SharePoint
- GitHub

La reactivación llegará en una próxima versión.

### Eliminado el contextual retrieval
El anterior enfoque de embeddings contextuales ha sido reemplazado por un método más eficiente.

Para obtener la mejor calidad de búsqueda, recomendamos **re-embeddings de los documentos existentes**.

---

## Under the Hood

- 43 dependencias actualizadas
- Tests unitarios para la lógica de precios y créditos
- Infraestructura de tracing mejorada
- Pipeline de despliegue automatizado
- Estandarización de la nomenclatura de migraciones de base de datos

---

OneAI 1.0 representa 96 commits y 88 pull requests.

Agradecimiento especial a **Pascal (47 changes)**, **orehman3035**, **Justus**, **Santi**, **Oliver** y **Mirko** por hacer posible este lanzamiento a producción.

—
96 commits · 88 PRs · 414 archivos modificados · 7 contributors

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
