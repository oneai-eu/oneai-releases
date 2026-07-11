# OneGlue v0.196.0 — Nouveautés

**Date de sortie :** 2026-07-11

Prenez le contrôle de vos machines virtuelles — et, au passage, une flotte plus fluide.

## Démarrer, arrêter et redémarrer des VM — directement depuis OneGlue

Vous pouvez désormais **piloter vos machines virtuelles SCVMM directement depuis OneGlue** : Démarrer, Arrêter et Redémarrer, depuis la flotte de VM. Chaque action demande d'abord une **confirmation** — une simple confirmation pour Démarrer/Redémarrer, et la saisie du nom de la VM pour les arrêts plus risqués — et chaque action est **consignée dans le journal d'audit** (qui, quand, pourquoi). Les arrêts et redémarrages existent en deux variantes : un arrêt **propre** du système d'exploitation invité par défaut, ou une **coupure forcée** en cas de besoin. L'accès est contrôlé par des autorisations — les membres d'une organisation peuvent recevoir le droit de gérer uniquement les VM de leur propre organisation.

## Une flotte de VM plus claire et plus rapide

- La **flotte de VM** apparaît désormais dans le menu d'une organisation **et** sous forme de tuile sur son tableau de bord dès que des clouds SCVMM lui sont associés — sans rechargement de page.
- **Cliquez n'importe où sur une ligne de VM** pour ouvrir ses détails (auparavant, seuls le nom/statut étaient cliquables).

## Suppression plus propre d'un serveur SCVMM

La suppression d'un serveur SCVMM effectue désormais un **nettoyage complet et confirmé** — ses associations de cloud, l'inventaire de VM en cache et les ressources de cloud générées sont tous supprimés en une seule étape (avec une protection saisir-pour-confirmer), afin que rien ne subsiste.
