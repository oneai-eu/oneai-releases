# OneAI v0.3.3-beta — Google SSO, partage sécurisé d’Artifacts et AI Chat plus robuste

**Release Date:** 2026-03-13

## Highlights

### Google Sign-In comme nouveau fournisseur SSO
En plus de Microsoft, OneAI prend désormais en charge **Google Single Sign-On (SSO)** — à la fois pour la connexion et pour l’invitation de nouveaux membres d’équipe.

- Connectez-vous avec votre compte Google en quelques secondes
- Envoyez des invitations basées sur Google directement depuis la boîte de dialogue des membres
- Intégration fluide avec les environnements Google Workspace

Cela facilite considérablement l’onboarding des organisations utilisant Google.

---

### Partager, copier et confirmer les Artifacts
Les Artifacts sont désormais entièrement prêts pour le travail en équipe grâce à un modèle de partage clair et contrôlé.

**Nouveautés :**
- Partagez des Artifacts avec votre équipe ou créez une **copie privée**
- Sélection d’Artifacts consultable avec créateur, date de dernière mise à jour et statut de partage
- Cartes de confirmation et de création intégrées directement dans l’AI Chat

Point essentiel : lorsque l’IA souhaite créer un Artifact, une **confirmation explicite de l’utilisateur** est désormais requise avant l’exécution. Aucun changement inattendu — le contrôle reste entièrement entre les mains de votre équipe.

Un grand merci à Pascal pour la mise en œuvre complète du workflow de partage et de confirmation.

---

### Messages d’erreur clairs dans l’AI Chat
Les échecs silencieux appartiennent au passé.

En cas de problème lors de la génération d’une réponse — comme un dépassement de limite de contexte, des flux concurrents ou des problèmes d’autorisations — l’AI Chat affiche désormais **des messages d’erreur clairs et compréhensibles directement dans la conversation**.

Cela signifie :
- Plus de transparence
- Moins de confusion pour les utilisateurs
- Une résolution plus rapide au quotidien

---

### Rechercher du code source GitHub dans les Knowledge Spaces
Les Knowledge Spaces connectés à GitHub traitent désormais **plus de 60 types de fichiers de code et de configuration**, dont TypeScript, Python, Go, Rust, Java, C/C++, YAML, SQL, Dockerfile et Terraform.

Vous pouvez désormais :
- Rechercher et analyser du code source
- Poser des questions d’architecture dans l’AI Chat
- Utiliser les repositories comme base de connaissances structurée

Merci à Mirko pour l’extension significative de nos capacités de traitement documentaire pour le code.

---

### Recherche weclapp plus intelligente grâce à des embeddings narratifs
Les données weclapp (par ex. clients, commandes, factures) sont désormais transformées en **textes narratifs riches en contexte** avant traitement.

Résultat :
- Qualité de recherche nettement améliorée
- Réponses IA plus contextuelles
- Meilleure précision dans les workflows basés sur le RAG

## Improvements

- **Inviter plusieurs membres à la suite** avec une boîte de dialogue persistante et une vue d’ensemble des utilisateurs invités
- **Retour amélioré sur le traitement des documents** avec des indicateurs de statut plus clairs et des filtres
- **Défilement du chat plus fluide** sans chevauchements visuels
- **Analyse plus fiable des fichiers Outlook MSG**
- **Les erreurs de livraison d’e-mails sont désormais détectées et journalisées** sans bloquer les invitations
- Internationalisation complète de tous les textes de l’interface pour une prise en charge multilingue cohérente

## Breaking Changes

### Les Google Drive Spaces sont désormais en lecture seule
Les Knowledge Spaces connectés à Google Drive utilisent désormais exclusivement le scope `drive.readonly`.

**Ce qui change :**
- Les opérations d’upload et de suppression pour Google Drive ont été supprimées

**Action requise :**
- Veuillez reconnecter les Google Drive Spaces existants
- La nouvelle connexion demandera automatiquement le scope réduit en lecture seule

Cette modification réduit volontairement les autorisations au strict minimum nécessaire et renforce la conformité.

## Under the Hood

- Architecture de streaming du chat améliorée pour une gestion robuste des erreurs
- Pipeline d’embedding optimisé pour les données code et ERP
- Standards de qualité de code plus stricts et internationalisation cohérente

---

Un grand merci à **Pascal** (Google SSO, partage d’Artifacts, robustesse du chat et nombreuses améliorations UX) et **Mirko** (embedding de code GitHub et optimisation weclapp) pour cette excellente release.

_14 PRs · 213 fichiers modifiés · 4 514 insertions · 2 contributeurs_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
