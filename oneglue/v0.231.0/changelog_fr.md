# OneGlue v0.231.0 — Nouveautés

**Date de sortie :** 2026-07-29

**Des connexions de navigateur plus sûres pour Passkey-Safe.** Cette version renforce l'étape où vous connectez un navigateur pour vous authentifier avec un passkey enregistré : le code de confirmation est plus difficile à deviner, les demandes de connexion non terminées sont nettoyées automatiquement, et une couche de protection supplémentaire est ajoutée en périphérie. Tout le reste concernant vos passkeys demeure exactement identique.

## Connexion de navigateur renforcée

- **Le code de confirmation est désormais protégé** — une tentative de connexion qui saisit plusieurs fois le mauvais code est arrêtée, afin que personne ne puisse essayer des codes pour rattacher un navigateur que vous n'avez pas autorisé.
- **Les demandes de connexion non terminées expirent d'elles-mêmes** — une demande de connexion commencée mais jamais finalisée ne subsiste plus ; elle est nettoyée automatiquement.
- **Une couche supplémentaire en périphérie** — l'étape de connexion est désormais limitée en fréquence avant même d'atteindre l'application, ce qui freine les abus automatisés.

## Rien d'autre ne change pour vous

- Vos passkeys enregistrés, autorisations, partages et journal d'audit restent intacts. Il s'agit d'une version de renforcement de la sécurité pour le flux de connexion de navigateur introduit dans la version précédente.
