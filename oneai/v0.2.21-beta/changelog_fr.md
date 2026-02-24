# OneAI v0.2.21-beta — Gouvernance centralisée des modèles, Spaces stables & traitement moderne des documents

**Release Date:** 2026-02-24

Avec v0.2.21-beta, nous renforçons OneAI dans trois domaines critiques : **la gouvernance des modèles d’IA**, **la stabilité des Knowledge Spaces volumineux** et une **pipeline de traitement des documents entièrement modernisée**.

---

## Highlights

### Configurer les modèles d’IA par organisation et par équipe
Les administrateurs peuvent désormais définir de manière centralisée :

- **Quels modèles d’IA sont disponibles à l’échelle de l’organisation**
- Le **modèle par défaut** pour tous les utilisateurs
- Des modèles supplémentaires attribués à des équipes spécifiques

Tous les paramètres sont accessibles dans la nouvelle section Admin à l’adresse `/dashboard/admin`, structurée avec une navigation claire par onglets.

**Ce que cela signifie pour vous :**
- Une gouvernance claire de l’utilisation des modèles (alignée avec les exigences du EU AI Act)
- Aucun accès non intentionnel à des modèles non approuvés
- Un modèle par défaut cohérent pour des résultats fiables dans toute l’entreprise

Les préférences de modèle précédemment enregistrées par utilisateur ont été remplacées par la nouvelle logique au niveau organisationnel. Le modèle par défaut défini par l’admin s’applique désormais automatiquement.

Un grand merci à Orehman (avec le soutien de Pascal) pour la mise en place de ce système complet de gouvernance des modèles.

---

### Plus de plantages du navigateur dans les grands Spaces
Dans les Knowledge Spaces très volumineux contenant des milliers de documents, une utilisation élevée de la mémoire pouvait auparavant entraîner des ralentissements ou des plantages du navigateur.

Le monitoring des embeddings charge désormais uniquement des données d’état agrégées au lieu des listes complètes de fichiers.

**Résultat :**
- Plus de **99 % de réduction du volume de données transférées** (par exemple, ~1,6 Mo réduits à ~5 Ko pour 11 000+ fichiers)
- Une stabilité nettement améliorée dans les grands Spaces
- Des mises à jour de statut plus rapides et plus efficaces

Merci à Mirko (co-auteur : Pascal) pour cette amélioration de performance à fort impact.

---

### Traitement des PDF et des images entièrement modernisé
Nous avons entièrement repensé le traitement des PDF, des documents scannés et des images.

- L’analyse d’images repose désormais sur un **modèle d’IA de vision configurable** au lieu d’un OCR traditionnel
- L’ancienne pipeline de rendu PDF, peu fiable, a été supprimée
- Les PDF scannés et basés sur des images sont désormais traités **de manière beaucoup plus fiable**

**Vos bénéfices :**
- Meilleure extraction à partir de documents scannés
- Résultats plus cohérents dans les Knowledge Spaces
- Moins de contenus vides ou incomplets après traitement

Justus a considérablement amélioré la base technique de notre traitement documentaire avec cette version.

---

## Améliorations

- Routes Admin consolidées sous `/dashboard/admin/*` (Payment, SCIM, Private Models)
- Application plus stricte des règles d’accès aux modèles dans Chat et Distillation
- Synchronisation plus fiable des Artifacts entre les différentes vues
- 40 dépendances mises à jour pour plus de sécurité et de stabilité
- Framework backend (Yedra) mis à niveau

---

## Corrections de bugs

Une série de problèmes d’interface résolus dans une seule version :

- Design des cartes de chat plus épuré
- Boîte de confirmation avant la suppression d’Artifacts
- La vue Artifact est de nouveau scrollable
- Correction de la mise en page de la barre d’outils dans les panneaux réduits
- Le bouton « Replace existing files » fonctionne de nouveau de manière fiable

Résultat : une expérience utilisateur nettement plus fluide au quotidien.

---

## Breaking Changes

### La gestion des modèles est désormais basée sur l’organisation
- L’ancien champ par utilisateur `preferred_model` a été supprimé
- L’accès aux modèles est désormais géré uniquement au niveau de l’organisation et des équipes
- Le modèle par défaut défini par l’admin s’applique automatiquement à tous les utilisateurs

**Action requise :** veuillez vérifier votre configuration des modèles dans la nouvelle section Admin.

### Nouvelles variables d’environnement requises pour le modèle de vision
Le nouveau traitement des images et des PDF nécessite :

- `VISION_URL`
- `VISION_KEY`
- `VISION_MODEL`

Merci de les configurer avant le déploiement.

### URLs Admin mises à jour
- `/dashboard/payment` → `/dashboard/admin/payment`
- `/dashboard/private-models` → `/dashboard/admin/private-models`
- `/dashboard/scim` → `/dashboard/admin/scim`

Merci de mettre à jour vos favoris ou votre documentation interne en conséquence.

---

Un grand merci à Orehman, Justus, Mirko et Pascal pour cette release majeure.

_7 PRs · 156 files changed · 4,346 insertions · 3,268 deletions · 4 contributors_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
