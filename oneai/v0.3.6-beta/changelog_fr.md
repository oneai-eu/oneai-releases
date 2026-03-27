# OneAI v0.3.6-beta — Contrôles de conformité renforcés, chats plus intelligents, prise en charge complète de GPT‑5.4

**Release Date:** 2026-03-27

Avec v0.3.6-beta, OneAI devient plus sécurisé, plus performant et plus fluide au quotidien. Cette version introduit un système de conformité entièrement repensé, un workflow de chat considérablement amélioré, un filtrage GitHub avancé et la prise en charge de tous les nouveaux modèles GPT‑5.4.

## Highlights

### Système de conformité avec niveaux de risque et blocage
Nous avons profondément remanié la couche de conformité. Les administrateurs peuvent désormais définir **par niveau de risque** si les requêtes sont uniquement journalisées ou activement bloquées.

- Actions configurables par niveau de risque : **Audit** ou **Audit & Block**
- Mode synchrone optionnel pour bloquer immédiatement les prompts à haut risque
- Journalisation d’audit étendue pour :
  - Messages de chat
  - Invitations de membres
  - Modifications des autorisations des Spaces
- Interface de paramètres de conformité claire, structurée par onglets

Cela offre aux organisations un contrôle nettement renforcé, en ligne avec l’EU AI Act et les politiques de gouvernance internes.

Un grand merci à **Oliver** pour avoir piloté cette initiative.

### Nouveau workflow de chat : création différée, renommage inline & artefacts dans le chat
Nous avons simplifié l’expérience principale de AI Chat.

- Les chats sont créés **uniquement lors de l’envoi du premier message** (plus de chats vides)
- Les chats peuvent être **renommés inline** directement depuis la liste
- Les artefacts apparaissent désormais **directement dans le chat** au lieu d’une fenêtre séparée
- Les messages vides ou invalides sont systématiquement bloqués

Résultat : des listes plus claires, moins de cas limites et une expérience AI Chat plus fiable.

Merci à **Pascal** pour avoir mené cette amélioration majeure de notre workflow central.

### Connecteur GitHub avec filtrage avancé des fichiers
Lors de la connexion de dépôts GitHub, vous pouvez désormais contrôler précisément quels fichiers sont synchronisés et intégrés.

- Modèles d’inclusion et d’exclusion (par ex. `*.md`, `docs/`, `test*`)
- Filtrage distinct pour la synchronisation et l’embedding
- Indications plus claires en cas de limites de taux API atteintes
- Icônes de fichiers adaptées pour une meilleure lisibilité

Cela permet de réduire les embeddings inutiles, d’optimiser les coûts et d’améliorer la qualité des Knowledge Spaces.

### Tous les modèles GPT‑5.4 disponibles
Toutes les nouvelles variantes GPT‑5.4 sont désormais prises en charge :

- **Nano & Mini** – rapides et économiques
- **Standard** – modèle polyvalent performant avec grande fenêtre de contexte
- **Pro** – capacité maximale pour les raisonnements complexes

Vous pouvez désormais aligner encore plus précisément le choix du modèle avec votre cas d’usage, votre budget et vos exigences de gouvernance.

### Hub d’activité en temps réel
Un nouveau flux d’activité unifié affiche en temps réel :

- Les synchronisations
- Le traitement des documents (embedding)
- Les distillations

Le tout dans une vue consolidée avec indicateurs de progression — particulièrement utile pour les Knowledge Spaces volumineux.

## Improvements

- Tri des projets par **nom, date de création ou dernière mise à jour**
- Boîte de dialogue de confirmation avant la suppression d’un chat
- Le rôle Admin dans les Spaces impose automatiquement les droits d’écriture (modèle d’accès cohérent)
- Système de modèles d’instructions de projet entièrement reconstruit avec nouvelle interface et fonctionnalité de vitrine
- Modèles weclapp améliorés pour une qualité d’extraction supérieure
- Gestion des messages plus robuste (plus d’échecs dus à des blocs de contenu vides)

Un grand merci à **Mirko** pour la reconstruction du système de modèles d’instructions et à **Santi** pour ses premières contributions autour du tri des projets et de la suppression sécurisée des chats.

## ⚠️ Security

Nous avons encore renforcé notre architecture de sécurité :

- **Isolation multi-tenant renforcée :** Les affectations d’équipe sont désormais strictement validées par rapport à leur organisation
- **Enregistrement WebAuthn plus sûr :** La vérification du challenge est désormais entièrement gérée dans la transaction de base de données, empêchant les race conditions

Ces changements renforcent significativement l’isolation des tenants et la sécurité de l’authentification.

## Under the Hood

- Migration vers **Vite 8** pour une configuration de build modernisée
- 65 mises à jour de dépendances
- Mise à niveau vers Mistral SDK v2
- Améliorations supplémentaires des performances, de la stabilité et de la qualité du code

---

Merci à **Pascal, Oliver, Mirko et Santi** — ainsi qu’à nos mises à jour automatisées des dépendances.

_24 PRs · 147 fichiers modifiés · 14 422 insertions · 5 595 suppressions_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
