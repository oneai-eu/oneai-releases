# OneAI v0.4.1-beta — Nouvelles intégrations, génération d’images IA et une expérience AI Chat plus intelligente

**Release Date:** 2026-04-16

La version v0.4.1-beta apporte des améliorations significatives sur l’ensemble de la plateforme : un connecteur ClickUp profondément intégré, la génération d’images IA directement dans AI Chat, une qualité de réponse nettement améliorée pour les données weclapp et une expérience de chat sensiblement plus fluide.

## Points forts

### Nouveau connecteur ClickUp avec synchronisation complète
Vous pouvez désormais connecter les Spaces et Lists ClickUp directement à OneAI.

- Synchronisation des tâches, descriptions, commentaires et checklists
- Traitement automatique pour la recherche alimentée par l’IA dans les Knowledge Spaces
- Résumés au niveau des listes pour un meilleur contexte
- Mises à jour quasi en temps réel via webhooks

ClickUp devient ainsi une source de connaissance entièrement exploitable dans AI Chat — sans export manuel.

Excellent travail de **Mirko**, qui a développé le connecteur de bout en bout.

### Génération d’images IA avec sélection du modèle et contrôles administrateur
Vous pouvez désormais générer des images directement dans AI Chat, avec un contrôle total sur :

- Le modèle (par ex. OpenAI ou Google Imagen)
- Les paramètres de qualité
- La taille et le format d’image (1:1, 16:9, 9:16, etc.)

Les administrateurs peuvent définir de manière centralisée quels modèles d’image sont disponibles dans toute l’organisation, garantissant un usage conforme aux politiques internes et aux exigences de conformité.

Un ajout puissant pour les équipes marketing, produit, RH et toutes celles qui créent des contenus visuels — implémenté par **Mirko**.

### Chat plus fluide avec aperçu en direct des outils
AI Chat est désormais nettement plus réactif et transparent.

- Aperçu en direct des appels d’outils, y compris les arguments transmis en streaming
- Les étapes de raisonnement se déploient automatiquement pendant le traitement puis se replient ensuite
- Indicateurs de statut dépendants du modèle (« Thinking » vs. « Processing »)
- Plus d’états de chargement infinis silencieux en cas d’erreurs API

Résultat : plus de clarté, moins de surprises et une expérience globale plus professionnelle. Merci à **Pascal** pour la refonte du streaming — et à **Oliver** pour la correction d’un problème rare mais critique dans la gestion des erreurs OpenAI.

### Intégration weclapp : des réponses nettement plus fiables
Pour de nombreux clients, weclapp est un système critique pour l’activité. Nous avons entièrement repensé la logique RAG sous-jacente :

- Nouveaux types d’entités (par ex. postes ouverts, marchandises entrantes)
- Rendu structuré des champs au lieu de blocs de texte génériques
- Résumés améliorés
- Mesures concrètes anti-hallucination

Résultat : des réponses sensiblement plus précises et fiables concernant les documents, postes ouverts et transactions.

Excellent travail de **Mirko** sur cette amélioration qualité.

### Tableau de bord repensé avec des graphiques modernes
Le tableau de bord a été modernisé à la fois visuellement et techniquement :

- Nouveaux types de graphiques (dont un diagramme en anneau pour la distribution des modèles)
- Options de filtrage améliorées
- Présentation plus claire des KPI
- Meilleur regroupement des modèles (incluant une catégorie « Others »)

Les administrateurs bénéficient désormais d’une vision plus claire de l’utilisation, de la distribution des modèles et de l’activité organisationnelle.

Conçu et implémenté par **Pascal**.

### Dialogue des références en explorateur à deux panneaux
Le dialogue des références de projet a été entièrement repensé — à la manière d’un gestionnaire de fichiers :

- Navigation par dossiers à gauche
- Détails des fichiers à droite
- Visibilité sur le statut des embeddings et le nombre de fichiers

La navigation dans de grands Knowledge Spaces devient ainsi beaucoup plus intuitive.

## Améliorations

- **Traitement des documents plus rapide** : Les documents à un seul segment ignorent une étape LLM inutile, améliorant l’efficacité.
- **Passkeys désormais optionnelles** : Les nouveaux utilisateurs peuvent s’inscrire sans configurer immédiatement une passkey et sont invités à le faire après connexion. Merci à **Justus**.
- **Activity Hub optimisé** : Moins de requêtes en arrière-plan inutiles et meilleure visibilité des tâches.
- **Validation d’outils plus stricte** : Génération d’images et transcription plus fiables grâce au rétablissement d’une validation stricte des schémas.
- **Compatibilité Gemini améliorée** : Les étapes de raisonnement sont désormais correctement préservées entre les messages.

## Corrections de bugs

- Correction d’un problème où des erreurs OpenAI pouvaient entraîner un chargement infini dans AI Chat.
- Stabilisation de la logique du LLM gateway et de la communication HTTP après des mises à jour de dépendances.

## Sous le capot

- Les modèles Vision sont désormais entièrement routés via notre routeur LLM central (OneGateway) pour un suivi précis de l’utilisation.
- Mises à jour complètes des dépendances (dont postgres 3.4.9) pour plus de stabilité et de sécurité.
- Refactorisation interne et amélioration de la sûreté des types.

---

Un grand merci à **Pascal, Mirko, Justus et Oliver** pour 18 PRs sur 124 fichiers modifiés.

_18 commits · 18 PRs · 124 fichiers modifiés · +9,242 / −4,347 lignes_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
