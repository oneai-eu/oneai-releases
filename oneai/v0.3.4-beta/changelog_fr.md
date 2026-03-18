# OneAI v0.3.4-beta — Génération d’images, GitHub Spaces plus intelligents & importantes améliorations UX

**Release Date:** 2026-03-18

Avec v0.3.4-beta, OneAI devient plus visuel, plus intelligent et nettement plus fiable dans l’usage quotidien. Cette version introduit un deuxième générateur d’images, améliore GitHub Spaces avec une compréhension approfondie du code et rend le travail avec les artefacts beaucoup plus puissant.

## Highlights

### Google Imagen 4 pour la génération d’images
En plus d’OpenAI, vous pouvez désormais utiliser **Google Imagen 4** directement dans OneAI.

Disponible en trois variantes :

- **Standard** – qualité et vitesse équilibrées  
- **Fast** – optimisé pour des itérations rapides  
- **Ultra** – qualité maximale pour des visuels exigeants  
- Jusqu’à **4 images par requête**

Cela offre aux équipes davantage de flexibilité en matière de qualité, de vitesse et de coûts — parfaitement intégré dans notre routage LLM existant. Merci à **Mirko** pour l’intégration propre au sein de notre architecture.

### Analyse intelligente du code pour GitHub Spaces
GitHub Spaces comprend désormais réellement vos repositories.

Lors de chaque synchronisation, OneAI analyse automatiquement :

- La structure du repository et des répertoires  
- La répartition des langages de programmation  
- Les dépendances (par ex. package.json, requirements.txt, go.mod, Cargo.toml)  
- Les points d’entrée potentiels

Nous générons des fichiers d’aperçu structurés et enrichissons les fichiers de code avec un contexte architectural. Résultat : **des réponses plus précises et conscientes de l’architecture dans AI Chat**, en particulier pour les grandes bases de code.

Également réalisé par **Mirko** — une avancée majeure pour les équipes d’ingénierie utilisant OneAI.

### Artefacts — entièrement repensés
Les artefacts deviennent un composant collaboratif de premier plan dans OneAI.

Nouvelles fonctionnalités :

- **Partage d’artefacts** (bascule public/privé)  
- **Liens directs** vers des artefacts individuels  
- Demande d’accès avec notification par e-mail  
- **Recherche, tri et pagination**  
- Onglet **Artefacts** dédié dans les projets (à côté de Chats et Fichiers)

Les artefacts sont désormais plus faciles à trouver, partager et gérer au sein des équipes.  
Un grand merci à **Pascal** pour cette refonte UX complète.

### Personas désormais au niveau du chat
Les personas peuvent maintenant être sélectionnées **par chat**, et non plus uniquement par projet.

Cela permet :

- Différentes personnalités d’IA au sein d’un même projet  
- Une meilleure séparation des cas d’usage (par ex. « Strategy Advisor » vs. « Technical Reviewer »)  
- Un contrôle plus granulaire du comportement de l’IA

Les projets existants conservent automatiquement leur persona principale comme valeur par défaut. Cette évolution structurelle a été mise en œuvre par **Pascal**.

## Improvements

### Synchronisation Outlook nettement plus fiable
L’intégration Outlook a été profondément améliorée :

- **Synchronisation incrémentale** au lieu d’une réanalyse complète de la boîte de réception  
- Renouvellement automatique des webhooks expirés  
- Rafraîchissement robuste des tokens sans race conditions  

Résultat : synchronisation plus rapide, moins d’erreurs et fiabilité accrue en environnement de production.

### Plus de transparence dans AI Chat
- Chaque réponse IA affiche désormais un **badge de modèle**.  
- Un **indicateur de réflexion** visible apparaît lors d’interactions complexes avec des outils.

Cela améliore la clarté et offre une expérience plus fluide lors d’opérations longues.

### Streaming Anthropic plus stable
Les longues phases de raisonnement (par ex. génération complexe d’artefacts) n’échouent plus en raison de timeouts, ce qui améliore la fiabilité des workflows avancés.

### Base UI modernisée
Nous avons migré l’ensemble de notre bibliothèque de composants de **Radix UI vers Base UI**.

Pour vous, cela signifie :

- Des interactions plus stables  
- Une base technique modernisée  
- Une meilleure maintenabilité et performance

Nous avons également résolu plusieurs problèmes de dropdown et de select apparus lors de la migration.

## Breaking Changes

### Système de personas (base de données)
Le système de personas passe du niveau projet au niveau chat.

- La table de jointure `project_personas` a été supprimée.  
- L’ancienne persona principale reste la **persona par défaut**.  
- Les personas sont désormais attribuées directement par chat.

La migration s’exécute automatiquement. Aucune action manuelle n’est requise.

### Changement API : Space Files
L’API Space Files renvoie désormais un objet au lieu d’un tableau plat :

- `files` (array)  
- `totalFiles`  
- `hasNextPage` (optionnel)

Les intégrations externes doivent accéder à `response.files` au lieu de la racine de la réponse.

## Under the Hood

- Amélioration du suivi d’utilisation des modèles (y compris la mesure des tailles d’images)  
- Consolidation de la gestion des types de fichiers de code dans un module partagé  
- Simplification du load balancing interne via l’infrastructure  
- Préparation interne pour les futures améliorations RAG

---

Une version majeure axée sur la génération d’images, les workflows développeurs et la stabilité opérationnelle.  
Merci à **Pascal** (13 changes) et **Mirko** (3 changes) pour cette avancée.

_16 commits · 15 PRs · 320 fichiers modifiés_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
