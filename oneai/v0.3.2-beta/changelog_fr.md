# OneAI v0.3.2-beta — Agent de recherche, génération d’images et intégration Outlook

**Release Date:** 2026-03-10

Avec la v0.3.2-beta, OneAI franchit une étape majeure. Cette version introduit un nouveau **Research Agent** pour des analyses multi-étapes, la **génération d’images par IA directement dans le chat**, un **connecteur Outlook pour les Knowledge Spaces basés sur les e-mails**, ainsi qu’une **saisie vocale propulsée par Whisper** pour une qualité de transcription nettement améliorée. Nous avons également renforcé les outils de conformité et amélioré la fiabilité globale de la plateforme.

## Highlights

### Research Agent pour analyses complexes
AI Chat peut désormais lancer un **Research Agent** autonome. Il réalise des investigations multi-étapes à travers vos Knowledge Spaces et — si nécessaire — sur le web, utilise les outils disponibles de manière itérative et compile des résultats structurés.

Idéal pour les analyses de marché, les études concurrentielles et les investigations internes complexes.

Un grand merci à **Justus**, qui a conçu la base flexible de l’agent permettant cette fonctionnalité.

### Génération d’images IA dans le chat
Vous pouvez désormais demander à OneAI de **générer des images** directement dans AI Chat — idéal pour des présentations, des concepts produits ou la communication interne.

- Images affichées directement dans le chat
- Téléchargement sous forme de fichiers
- Enregistrement dans un Knowledge Space
- Suivi transparent des coûts selon le niveau de qualité

Grâce à **Pascal**, les images générées s’intègrent parfaitement dans vos workflows d’entreprise.

### Connecteur Outlook pour la synchronisation des e-mails
Le nouveau **connecteur Outlook** vous permet de connecter des boîtes mail en tant que Knowledge Spaces.

- Sélection de dossiers spécifiques
- Synchronisation automatique
- E-mails consultables avec objet, expéditeur, contenu et pièces jointes
- Mises à jour quasi en temps réel via webhooks

Vos connaissances institutionnelles issues des e-mails sont désormais accessibles en toute sécurité dans AI Chat.

### Reconnaissance vocale avec Whisper
La saisie vocale dans AI Chat est désormais propulsée par **OpenAI Whisper**, en remplacement de l’API basée sur le navigateur.

- Précision nettement supérieure
- Excellente prise en charge de la langue allemande
- Meilleure reconnaissance de la terminologie métier

Une amélioration notable pour les équipes utilisant régulièrement la voix.

### Nouvel éditeur de chat avec sauvegarde des brouillons
Nous avons entièrement repensé l’expérience de saisie dans le chat :

- Éditeur de texte enrichi moderne et stable
- Mentions @ pour les Spaces et les contenus
- Sauvegarde automatique des brouillons par chat

Particulièrement utile pour les prompts longs et les instructions complexes.

## Améliorations

### AI Personas organisationnelles
Les administrateurs peuvent désormais définir des **AI Personas** avec des prompts système dédiés et des rôles spécifiques. Les Personas peuvent être assignées à des projets afin de garantir un ton, une structure ou une spécialisation cohérente au sein des équipes.

### Export des journaux d’audit (CSV & JSON)
Les journaux d’audit peuvent désormais être exportés au format **CSV ou JSON**, facilitant les revues de conformité, le travail des DPO et les audits externes.

Nous avons également ajouté de nouveaux modèles de conformité par défaut, notamment :

- RGPD (y compris l’Article 9)
- Identifiants nationaux allemands
- IBAN, numéros de TVA intracommunautaire, numéros de téléphone européens
- KDG (réglementation allemande sur la protection des données de l’Église)
- BSI IT-Grundschutz & règles de souveraineté des données

Merci à **Oliver** pour le renforcement de nos capacités de conformité.

### Feedback en temps réel pour la synchronisation et le traitement des documents
- Progression en direct lors de la synchronisation des Spaces
- Mises à jour de statut en temps réel pour le traitement des documents
- Logique de gestion des erreurs et de reprise plus robuste

Résultat : **plus de transparence et une fiabilité nettement améliorée** pour les grands volumes de données.

### Suivi plus précis de l’utilisation et des coûts
- Filtrage correct par date dans les analyses d’usage
- Logique tarifaire améliorée (y compris les tokens mis en cache)
- Suivi transparent des coûts pour la génération d’images et la transcription

Une avancée clé pour les clients Enterprise avec des exigences de contrôle budgétaire.

## Corrections de bugs

- Connexions chat plus stables et messages d’erreur plus clairs
- Gestion correcte des limites de tokens
- Fermeture fiable de la boîte de dialogue des clés API
- Problèmes de mise en page et de défilement résolus
- Plusieurs améliorations de stabilité issues de notre revue interne BugHunt

## Under the Hood

- Mise en cache des prompts pour OpenAI et Claude afin de réduire la latence et les coûts
- Nouvelle infrastructure de stockage blob pour les fichiers du chat
- 36 dépendances mises à jour
- Configuration améliorée de l’observabilité et du monitoring

---

Merci à **Pascal, Justus, Oliver, Orehman et Mirko** pour cette release majeure.

_29 PRs · 218 fichiers modifiés · 6 contributeurs_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
