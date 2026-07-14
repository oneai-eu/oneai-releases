# OneGlue v0.206.0 — Nouveautés

**Date de publication :** 2026-07-14

**Connectez-vous directement à une machine virtuelle.** Ouvrez une session RDP vers n'importe laquelle de vos VMs SCVMM directement depuis OneGlue — tunnelisée en toute sécurité via votre agent local, avec connexion au domaine en un clic.

## Bureau à distance vers une VM SCVMM

- **Un clic depuis la VM.** Chaque VM SCVMM dispose désormais d'une action **Bureau à distance** — sans chercher son IP ni passer par un hôte.
- **Tunnelisé via votre agent.** La session est relayée par l'agent OneGlue déjà en cours d'exécution sur votre passerelle SCVMM ; elle atteint ainsi des VMs sur des réseaux internes que le navigateur ne pourrait jamais joindre directement. La connexion est négociée par session et à usage unique.
- **Connexion au domaine en un clic.** Si un identifiant partagé/de domaine couvre la VM (via son cloud SCVMM ou son organisation), OneGlue vous connecte automatiquement en tant que `DOMAINE\utilisateur`. Lorsque plusieurs s'appliquent, vous choisissez ; le mot de passe n'est injecté qu'au niveau de l'agent et **n'atteint jamais votre navigateur**.
- **Gestion intelligente de l'adresse.** OneGlue utilise l'adresse IP connue de la VM ; lorsqu'une VM en a plusieurs, vous pouvez choisir, et si aucune n'est joignable vous obtenez un message clair au lieu d'un blocage.

## Contrôlé par conception

- Une autorisation dédiée et **attribuable par organisation « se connecter à la VM »** — distincte de qui peut gérer les identifiants.
- **L'accès entre organisations et entre locataires est impossible** par conception.
- **Chaque session est consignée dans le journal d'audit** (ouverte, fermée, délai d'inactivité) — métadonnées uniquement, jamais le secret.
