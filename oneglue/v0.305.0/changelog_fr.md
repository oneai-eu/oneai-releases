# OneGlue v0.305.0 — Nouveautés

**Publié le :** 2026-11-07

**Si votre Tenant exige deux Passkeys, un compte bloqué configure désormais son deuxième Passkey juste après la connexion.**

- **Page obligatoire pour le deuxième Passkey.** Un compte bloqué parce qu'il lui manque un deuxième Passkey se connecte comme d'habitude avec son Passkey et arrive sur une page dédiée. Il peut seulement y ajouter un Passkey, voir ses Passkeys et se déconnecter. Jusqu'ici, un tel compte restait entièrement bloqué jusqu'à l'enregistrement d'un nouveau Passkey via le lien de réinscription.
- **Le compte refonctionne automatiquement.** Dès que le deuxième Passkey est ajouté, le compte redevient actif, sans intervention d'un administrateur. Le journal d'audit l'enregistre.
- **Aucun autre accès avant cela.** Tant que le deuxième Passkey n'existe pas, OneGlue refuse toute autre requête de ce compte, y compris via les clés d'API et MCP. La connexion avec un code de récupération reste refusée pour les comptes bloqués.
- **Sans Passkey.** Une personne qui n'a plus aucun Passkey demande, comme avant, le lien de réinscription sur la page des codes de récupération.
