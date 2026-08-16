# OneGlue v0.261.0 — Nouveautés

**Date de sortie :** 2026-08-16

**Quelques corrections ciblées de fiabilité.** Cette version corrige un cas particulier dans la gestion des passkeys, clarifie la validation des adresses réseau et améliore certains diagnostics en coulisses.

## Gestion des passkeys plus fiable

- **L'ajout d'un passkey fonctionne désormais de manière fiable, à chaque fois.** Certains utilisateurs connectés pouvaient occasionnellement voir l'erreur « No tenant matches » en ajoutant un passkey supplémentaire depuis Profil → Sécurité — par exemple comme sauvegarde, ou depuis un nouvel appareil. L'ajout d'un passkey est désormais entièrement géré au sein de votre session déjà ouverte, et ne dépend donc plus de la façon dont vous avez accédé à OneGlue. Il s'agit purement d'une correction de fiabilité pour une fonctionnalité de sécurité existante — aucune action n'est requise de votre part.

## Validation réseau plus claire

- **Des messages d'erreur utiles et précis lors de la saisie d'adresses réseau.** Si vous saisissiez une adresse réseau avec des bits supplémentaires définis au-delà de son préfixe — par exemple `192.168.2.1/24` au lieu de l'adresse réseau `192.168.2.0/24` — OneGlue affichait parfois une erreur serveur générique au lieu de vous guider vers la correction. Un message clair s'affiche désormais directement à la saisie, avec l'adresse correcte suggérée. Cela s'applique à la fois aux Réseaux et à la liste blanche des cibles SSH.

## Dans les coulisses

- Journalisation de diagnostic améliorée pour la synchronisation de l'inventaire SCVMM et un suivi interne plus fiable des échecs de build, afin de repérer et résoudre les problèmes plus rapidement.
