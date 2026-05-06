# OneAI 1.0 — Prêt pour la production avec Credit Pool, Partner Program & 80+ améliorations

**Release Date:** 2026-05-06

Avec OneAI 1.0, nous quittons officiellement la phase bêta.

Cette version rend OneAI prêt pour un usage en production en entreprise : contrôle centralisé du budget IA, nouveau Partner Program pour les organisations gérées, authentification à deux facteurs via application et pipeline de traitement des documents entièrement modernisé.

## Highlights

### Credit Pool pour un contrôle centralisé des coûts
Les organisations en plan Team disposent désormais d’un **budget IA centralisé**.

- Les admins peuvent attribuer des **budgets individuels par utilisateur**
- Contrôle proactif des dépassements
- **Alertes automatiques par e-mail** en cas de seuil atteint
- Le tableau de bord affiche le coût total réel, y compris les requêtes mises en cache

L’utilisation de l’IA devient prévisible, transparente et maîtrisable — idéal pour les équipes compliance et finance.

Un immense merci à **orehman3035** pour la conception complète du nouveau système de crédits et d’abonnement.

### Partner Program pour les organisations gérées
Grâce au nouveau **Partner Program**, les organisations peuvent désormais fonctionner sans leur propre abonnement Stripe.

- Les partenaires gèrent la facturation de manière centralisée
- Journal dédié des événements de facturation pour une transparence maximale
- Nouvelle page de détails partenaire dans les paramètres

Parfait pour les cabinets de conseil, prestataires IT et revendeurs enterprise.

### Authentification à deux facteurs (TOTP)
Sécurité de niveau enterprise : les utilisateurs peuvent désormais activer une **application d’authentification (ex. Google Authenticator, 1Password)** comme second facteur.

- Codes TOTP en alternative aux codes par e-mail
- Intégration fluide dans le processus de connexion
- Processus d’activation stable et fiable

Merci à **Justus Zorn** pour l’implémentation.

### L’IA peut créer des projets & générer des diagrammes Mermaid
L’IA peut désormais :

- **Créer automatiquement de nouveaux projets** sur demande
- Générer des **diagrammes Mermaid valides** grâce à une référence syntaxique intégrée

Cela réduit la configuration manuelle et facilite considérablement la documentation visuelle.

Merci à **Mirko Tochtermann** et **Pascal Schüler**.

### Audit logs avec système tricolore
La compliance gagne en transparence :

- Les entrées d’audit affichent désormais un **niveau de risque codé par couleur**
- Nouveau filtre par niveau de risque
- Audit logs fournisseur avec données tenant anonymisées

Idéal pour les audits internes et la documentation liée à l’EU AI Act. Merci à **Oliver Rasch**.

---

## Performance & Scalabilité

### File d’attente d’embedding équitable
Nous avons entièrement repensé le traitement des documents.

- Répartition équitable des ressources entre organisations et Knowledge Spaces
- Les gros uploads ne bloquent plus les autres équipes
- Temps d’attente maximum prévisible

De plus :

- Réduction des coûts et de la latence grâce à un retrieval simplifié
- Traitement plus stable des PDF volumineux et des images
- Écritures en base vectorielle par lots pour plus de fiabilité
- Gestion automatique des limites de taux GitHub

Travail remarquable de **Pascal Schüler**, qui a rendu le pipeline d’embedding prêt pour la production.

### Une application nettement plus rapide
- Activation du caching des assets
- Lazy loading pour le dashboard et la liste des projets
- Bundle optimisé (aucune librairie en double)
- Correction des erreurs de chargement de chunks sous forte charge

OneAI est désormais sensiblement plus rapide et plus stable.

---

## Améliorations au quotidien

- Upload de fichiers par glisser-déposer directement sur la page d’accueil du chat
- Panneau d’artefacts entièrement utilisable sur mobile
- Sources cliquables dans le chat
- L’IA répond automatiquement dans la langue de l’utilisateur
- Personal Space automatiquement lié au projet personnel
- Nouvel onglet « Conflicts » dans les paramètres de projet
- Umlauts allemands autorisés dans les noms de projets et d’équipes

De nombreuses petites améliorations — un impact réel au quotidien.

---

## Sécurité

Nous avons implémenté plusieurs améliorations de sécurité :

- Suppression complète du cache React Query à la connexion (empêche la visibilité inter-comptes sur navigateurs partagés)
- Protections mémoire pour le traitement d’images et de PDF
- Limites de contenu dans le Connecteur ClickUp pour éviter l’épuisement du heap

De plus, la génération de résumés de chat fonctionne désormais sur **notre propre infrastructure UE** — l’historique des chats ne quitte plus l’UE.

---

## Breaking Changes

### Suppression du Beta Code Gate
L’inscription est désormais publique — aucun code d’invitation requis.

Aucune action nécessaire.

### Google Sign-In & Google Drive temporairement désactivés
Google SSO et le Connecteur Google Drive sont temporairement désactivés.

Veuillez utiliser :
- OneDrive
- SharePoint
- GitHub

La réactivation est prévue dans une prochaine version.

### Suppression du contextual retrieval
L’ancienne approche d’embedding contextuel a été remplacée par une méthode plus efficace.

Pour une qualité de recherche optimale, nous recommandons de **ré-encoder les documents existants**.

---

## Under the Hood

- 43 dépendances mises à jour
- Tests unitaires pour la logique de tarification et de crédits
- Infrastructure de tracing améliorée
- Pipeline de déploiement automatisé
- Standardisation des conventions de nommage des migrations de base de données

---

OneAI 1.0 représente 96 commits et 88 pull requests.

Un merci particulier à **Pascal (47 changes)**, **orehman3035**, **Justus**, **Santi**, **Oliver** et **Mirko** pour avoir rendu ce lancement en production possible.

—
96 commits · 88 PRs · 414 fichiers modifiés · 7 contributeurs

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
