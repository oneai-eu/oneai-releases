# OneAI v0.3.7-beta — Recherche plus intelligente, personas personnalisées et audit complet

**Release Date:** 2026-04-03

## Highlights

### Recherche documentaire plus intelligente avec récupération hybride & reranking
La recherche dans les Knowledge Spaces a été profondément améliorée.

OneAI combine désormais la **recherche classique par mots-clés (BM25)** avec la **recherche vectorielle basée sur l’IA**, suivie d’une étape de reranking par pertinence. Résultat : des réponses nettement plus précises, notamment pour les requêtes complexes ou nuancées.

- Meilleurs résultats pour la terminologie métier et les synonymes
- Réponses plus cohérentes sur de grands volumes de documents
- Les signaux de pertinence influencent directement la génération des réponses

Merci à Pascal — notre nouvelle architecture de recherche établit un nouveau standard en matière de qualité de traitement documentaire.

### Créez et partagez vos propres personas
Vous pouvez désormais créer des **personas IA personnalisées** pour différents rôles et cas d’usage — de la Vente au Juridique en passant par l’IT.

- Personas privées visibles uniquement par vous
- Personas partagées créées par les admins pour un usage à l’échelle de l’organisation
- Nouvelle page « Mes personas » dans votre profil

Les personas sont désormais sélectionnées par chat et ne sont plus liées aux projets.

### Nouveau système d’audit pour les équipes Compliance
Les administrateurs Compliance disposent désormais d’un workflow de revue robuste :

- Examiner, approuver ou bloquer les messages signalés
- Historique complet des revues avec horodatage et attribution du reviewer
- Nouvelle vue détaillée incluant l’historique du chat et les sources

Les chats peuvent être automatiquement bloqués jusqu’à validation si nécessaire. Merci à Oliver pour la mise en œuvre de cette fonctionnalité clé de gouvernance.

### Épinglez vos projets individuellement & visualisez vos permissions
L’épinglage des projets est désormais **par utilisateur** — vos priorités sont indépendantes de celles de vos collègues.

Vous pouvez également voir instantanément :
- Si vous disposez des droits d’écriture
- Si vous êtes administrateur du projet

Cela améliore la transparence et réduit les confusions dans les environnements collaboratifs.

### GitHub Code Intelligence v2
Notre intégration GitHub analyse désormais les repositories à un niveau bien plus approfondi :

- Détection des relations d’import
- Analyse des appels de fonctions entre fichiers
- Graphes de code générés automatiquement par répertoire

Les connaissances techniques intégrées dans les bases de code deviennent ainsi beaucoup plus faciles à rechercher et à exploiter. Merci à Mirko pour cette mise à niveau majeure.

## Improvements

- Les images générées par l’IA peuvent désormais être enregistrées directement dans les projets
- Les listes de projets affichent la date de création, la dernière mise à jour et le créateur
- L’IA prend désormais en compte votre nom et votre rôle pour des réponses plus personnalisées
- Les contenus volumineux collés apparaissent sous forme de documents compacts avec aperçu
- Dialogue d’invitation unifié pour les Spaces (utilisateurs et équipes)
- Prise en charge étendue de WebAuthn pour des algorithmes Passkey supplémentaires
- Synchronisation Outlook plus robuste pour les identifiants de messages complexes

## Bug Fixes

- Connexions de chat nettement plus stables en cas de problèmes WebSocket (les messages sont conservés et peuvent être renvoyés)
- Traitement des documents plus fiable pour les fichiers vides et les erreurs temporaires
- Notifications regroupées lors des ré-embeddings massifs au lieu d’un envoi individuel
- Les redirections SSO renvoient désormais systématiquement vers la page prévue
- Les erreurs d’upload sont clairement affichées
- Le mode Research respecte correctement les flux de confirmation
- Les liens externes fonctionnent à nouveau comme prévu

## Security

Nous avons mis en œuvre plusieurs améliorations de sécurité importantes :

- **Les clés API sont immédiatement révoquées lorsque des utilisateurs sont désactivés via SCIM**
- Les webhooks Stripe valident strictement le contexte organisationnel
- Les requêtes d’audit sont entièrement isolées par tenant pour éviter tout accès inter-tenant

Ces évolutions renforcent le contrôle d’accès et soutiennent une gouvernance alignée avec l’EU AI Act.

## Breaking Changes

### Ré-embedding complet des Knowledge Spaces requis
L’architecture de recherche est passée aux vecteurs hybrides. Par conséquent, tous les documents sont automatiquement retraités.

- La migration réinitialise tous les embeddings à « pending »
- La file d’embedding réindexe l’ensemble des fichiers
- Merci de prévoir une capacité suffisante pour la phase initiale de retraitement

### Personas non liées aux projets
`defaultPersonaId` n’est plus pris en charge. Les personas sont désormais sélectionnées librement par chat.

La migration est effectuée automatiquement.

### Mise à jour du modèle d’épinglage des projets
Les épingles sont désormais spécifiques à chaque utilisateur et non plus globales. Les épingles existantes ont été migrées automatiquement.

## Under the Hood

En plus de 47 mises à jour de dépendances, nous avons amélioré la stabilité, la logique de retry et la tolérance aux pannes sur l’ensemble de la plateforme.

---

Un grand merci à Pascal, Oliver, Mirko, Justus et à toute l’équipe pour les 39 commits de cette version.

_39 commits · 38 PRs · 160 fichiers modifiés_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
