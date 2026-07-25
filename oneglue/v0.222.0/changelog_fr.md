# OneGlue v0.222.0 — Nouveautés

**Date de publication :** 2026-07-26

**Enregistrez plusieurs méthodes 2FA par identifiant — et importez-les directement depuis votre application d'authentification.** Un compte documenté possède souvent plusieurs méthodes de double authentification (un code principal, un code de secours, plus d'une application). OneGlue permet désormais à un mot de passe de porter plusieurs méthodes MFA, les importe en masse depuis un export Google Authenticator, et n'ignore plus silencieusement un code QR qu'il ne comprend pas.

## Plusieurs méthodes MFA par identifiant

- **Ajoutez plusieurs méthodes de double authentification (TOTP) à un mot de passe** — par exemple « Principal » et « Secours » — au lieu d'une seule. Chaque méthode génère son propre code actuel à la demande.
- **Vos codes existants sont conservés automatiquement.** Chaque mot de passe qui possédait déjà un code de double authentification continue de fonctionner ; il devient simplement la première méthode « Principal » — rien à refaire.

## Import depuis Google Authenticator

- **Scannez un QR code « exporter/transférer des comptes »** depuis Google Authenticator (et les applications compatibles) pour importer plusieurs comptes d'un coup, chacun ajouté comme sa propre méthode MFA — idéal lorsque vous déplacez la 2FA entre téléphones et souhaitez enregistrer les codes dans OneGlue.

## Scan de QR plus clair

- **Le scanner de QR n'ignore plus silencieusement un code qu'il ne parvient pas à lire.** Auparavant, si vous pointiez la caméra vers un QR qui n'était pas un code de connexion standard, le scanner continuait d'afficher « pointez votre caméra vers le code QR » sans explication. Il indique désormais ce qu'il détecte, et la vue de la caméra a été épurée.

## Encadré par conception

- **Les méthodes MFA sont protégées exactement comme le mot de passe lui-même.** Afficher le code d'une méthode exige la même autorisation et la même approbation (quorum à plusieurs personnes, lorsqu'il est configuré) que d'afficher le mot de passe — pas de voie séparée plus faible.
- **Les secrets ne quittent jamais le coffre.** Les graines MFA ne sont jamais écrites dans les journaux, jamais incluses dans les exports et jamais exposées aux intégrations — seul le code actuel est montré à un utilisateur autorisé sur demande.
