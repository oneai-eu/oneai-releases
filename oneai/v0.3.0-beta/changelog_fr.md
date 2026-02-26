# OneAI v0.3.0-beta — Contrôle total du chat, nouveau Activity Hub & derniers modèles Anthropic

**Release Date:** 2026-02-26

Avec **OneAI v0.3.0-beta**, nous apportons plus de contrôle, plus de transparence et plus de performance sur l’ensemble de la plateforme.

Des réponses IA interrompables et reconnectables à un Activity Hub centralisé, en passant par des clés API multiples avec date d’expiration, cette version renforce significativement l’usage quotidien de l’IA en environnement enterprise.

## Highlights

### Interrompre les réponses IA & reconnexion transparente
Vous pouvez désormais interrompre à tout moment les réponses en cours dans **AI Chat**. En cas de perte de connexion, la réponse reprend automatiquement là où elle s’était arrêtée — **plus aucun message perdu**.

Les analyses longues et les réseaux instables deviennent ainsi nettement plus fiables.

Un grand merci à **Pascal** pour l’importante évolution de l’architecture de streaming.

### Nouveau Activity Hub dans la barre latérale
Toutes les activités en cours — **uploads, traitement de documents et Spaces minimisés** — sont désormais regroupées dans un Activity Hub structuré, accessible depuis la barre latérale.

Au lieu d’icônes flottantes, vous bénéficiez d’une vue centralisée claire avec un suivi d’état précis.

Également implémenté par **Pascal**.

### Nouveaux modèles Anthropic : Opus 4.6 & Sonnet 4.6
Nous avons ajouté les derniers modèles Anthropic :

- **Claude Opus 4.6** pour le raisonnement complexe et les tâches stratégiques
- **Claude Sonnet 4.6** comme alternative puissante et économique
- Jusqu’à 200k de contexte & capacités multimodales complètes

Merci à **Mirko** pour l’intégration rapide.

### Clés API multiples avec expiration
Les utilisateurs peuvent désormais créer et gérer **plusieurs clés API**, chacune avec :

- Description personnalisée
- Date d’expiration optionnelle
- Gestion centralisée dans le profil

Cela améliore la sécurité, la traçabilité et la séparation claire entre les intégrations.

Excellent travail de **Pascal**.

### Les chats sont désormais liés aux Spaces
Nous avons simplifié l’architecture : **les chats sont désormais directement associés aux Spaces** au lieu des projets.

Cela apporte :

- Une structure plus claire
- Plus de flexibilité
- Une base plus solide pour les futures fonctionnalités

Les projets existants ont été automatiquement convertis en Spaces de type project.

Important travail d’architecture réalisé par **Justus**.

---

## Improvements

### Nouvelle tentative automatique pour le traitement des documents
Si le traitement d’un document échoue (par exemple en raison d’erreurs API temporaires), OneAI relance automatiquement le processus avec un backoff intelligent.

Résultat : **des Knowledge Spaces plus fiables** et moins d’interventions manuelles.

### Coller des captures d’écran directement (Ctrl+V)
Vous pouvez désormais coller des images et captures d’écran directement dans AI Chat avec **Ctrl+V** — sans upload séparé.

### Affichage plus clair des étapes de raisonnement IA
Les étapes de raisonnement et les appels d’outils sont désormais repliés par défaut, réduisant le bruit visuel tout en conservant la transparence.

### Artifacts : créateur, horodatage & transfert
Les Artifacts affichent désormais :

- Le créateur
- La date de dernière modification

Ils peuvent également être déplacés ou copiés entre Spaces.

### Nouvelle page « What’s New? »
Une nouvelle page récapitulative des versions informe les utilisateurs et les notifie automatiquement lors des mises à jour.

### Nouvelle page d’accueil & suppression en masse
- Nouvel écran d’accueil après connexion
- Sélection multiple & suppression en masse pour les chats et Artifacts
- Navigation admin simplifiée

### Connecteur weclapp considérablement enrichi
- Résumés IA des données métier
- Enrichissement du contexte client
- Structure de dossiers améliorée
- Téléchargements plus robustes & meilleure gestion des rate limits

### Infrastructure des Spaces renforcée
Amélioration de la synchronisation, calcul correct du stockage et gestion des erreurs renforcée sur l’ensemble des fournisseurs.

---

## ⚠️ Sécurité

Nous avons corrigé une faille de multi-tenancy dans la création d’Artifacts générés par IA.

Les Artifacts sont désormais validés par rapport aux permissions d’accès au Space avant leur création, garantissant une isolation stricte des tenants.

---

## Breaking Changes

### Chats → Spaces (Database)
Les chats ne sont plus liés aux projets. Les projets ont été migrés vers des Spaces avec `provider='project'`.

**Migration requise :**
- 202602130000.sql
- 202602180000.sql

Les chats existants sont automatiquement migrés.

### Multi-API Keys (API)
Les clés API sont désormais stockées dans une table dédiée.

**Migration requise :** 202602250000.sql  
Les clés existantes sont automatiquement migrées.

### Ajustement tarifaire : Sonnet 4.5
Le prix de sortie de Sonnet 4.5 a été ajusté pour correspondre aux tarifs officiels Anthropic (60 % plus élevé que précédemment calculé).

Merci d’en tenir compte dans vos projections de coûts.

---

## Under the Hood

- Endpoints de chat unifiés
- Nouveau monitoring de l’usage LLM et des tokens
- Améliorations CI pour la gestion des branches de release
- 29 dépendances mises à jour
- Mise à jour du framework backend pour corriger des crashes serveur

---

Un grand merci à **Pascal, Mirko, Justus et Orehman** pour cette release majeure.

—

*26 commits · 25 PRs · 264 fichiers modifiés*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
