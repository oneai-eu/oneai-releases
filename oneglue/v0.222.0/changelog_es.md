# OneGlue v0.222.0 — Novedades

**Fecha de publicación:** 2026-07-26

**Guarde más de un método 2FA por inicio de sesión — e impórtelos directamente desde su app de autenticación.** Una cuenta documentada suele tener varios métodos de doble factor (un código principal, un código de respaldo, más de una app). OneGlue ahora permite que una contraseña tenga varios métodos MFA, los importa de forma masiva desde una exportación de Google Authenticator y ya no ignora en silencio un código QR que no entiende.

## Varios métodos MFA por credencial

- **Añada varios métodos de doble factor (TOTP) a una contraseña** — por ejemplo «Principal» y «Respaldo» — en lugar de solo uno. Cada método genera su propio código actual cuando lo solicite.
- **Sus códigos existentes se conservan automáticamente.** Cada contraseña que ya tenía un código de doble factor sigue funcionando; simplemente pasa a ser el primer método «Principal» — no hay que rehacer nada.

## Importar desde Google Authenticator

- **Escanee un código QR de «exportar/transferir cuentas»** de Google Authenticator (y apps compatibles) para importar varias cuentas a la vez, cada una añadida como su propio método MFA — ideal cuando traslada la 2FA entre teléfonos y quiere guardar los códigos en OneGlue.

## Escaneo de QR más claro

- **El escáner de QR ya no ignora en silencio un código que no puede leer.** Antes, si apuntaba la cámara a un QR que no era un código de inicio de sesión estándar, el escáner seguía mostrando «apunte la cámara al código QR» sin explicación. Ahora indica lo que detecta, y se ordenó la vista de la cámara.

## Controlado por diseño

- **Los métodos MFA están protegidos igual que la propia contraseña.** Mostrar el código de un método requiere el mismo permiso y la misma aprobación (quórum de varias personas, cuando esté configurado) que mostrar la contraseña — sin una vía separada más débil.
- **Los secretos nunca salen de la bóveda.** Las semillas MFA nunca se escriben en registros, nunca se incluyen en exportaciones y nunca se exponen a integraciones — solo se muestra el código actual a un usuario autorizado que lo solicite.
