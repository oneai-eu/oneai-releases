# OneAI v2026.08.18 — Collaboration, tableaux de bord en direct et intégrations sécurisées

**Release Date:** 2026-08-18

## Points forts

**Collaborer sur des présentations en temps réel**

Les présentations générées par l’IA deviennent des espaces de travail partagés. Plusieurs personnes peuvent modifier simultanément les diapositives, les textes, les tableaux et les graphiques, avec des changements instantanément visibles par tous et la présence des collaborateurs affichée en direct dans la présentation. Les modèles de présentation réutilisables aident également les équipes à démarrer plus rapidement avec un format cohérent.

**Créer des tableaux de bord BI en direct à partir de vos données**

Créez des indicateurs et graphiques interactifs à partir de vos tables oneData directement via AI Chat. Les tableaux de bord sont disponibles dans leur propre espace dédié, tandis que les fichiers CSV peuvent désormais être importés et les résultats exportés. Merci à Mirko d’avoir créé cette base pour des décisions pilotées par les données.

**Gérer les intégrations de manière centralisée avec des contrôles d’accès granulaires**

La nouvelle page Intégrations vous offre une meilleure visibilité et davantage de contrôle sur les connexions à Outlook, n8n, HubSpot, Lexware Office et d’autres services :

- Les collaborateurs peuvent gérer leurs propres connexions depuis un emplacement central.
- Les intégrations individuelles peuvent être désactivées au niveau personnel.
- Les administrateurs peuvent désactiver des intégrations dans toute l’organisation ou les limiter à des projets spécifiques.
- Les e-mails Outlook peuvent désormais être envoyés directement depuis OneAI.

**Nouveau Connector : Lexware Office**

Connectez Lexware Office à OneAI pour rechercher en toute sécurité des données comptables et les exploiter avec des outils alimentés par l’IA.

## Améliorations

**Une expérience AI Chat plus productive**

- Les messages envoyés peuvent désormais être modifiés. OneAI générera une nouvelle réponse à partir de votre demande révisée.
- Le composeur de chat a été repensé pour une expérience plus claire et plus efficace.
- Uno est désormais disponible sous la forme d’une fenêtre de chat flottante, afin de garder l’assistance plus proche de votre contexte de travail actuel.

**Des workflows de documents et de données plus fiables**

- Cliquer sur « Appliquer » dans une suggestion de modification de l’IA applique désormais la modification de manière fiable au document.
- Le traitement des données et les outils de jeux de données ont été davantage optimisés.
- Des vues de conformité améliorées aident les administrateurs à suivre plus efficacement les activités pertinentes.

## Sécurité

Cette version inclut des renforcements étendus en matière de sécurité et de conformité afin de permettre une utilisation sûre de OneAI avec les données de l’entreprise :

- Un mode de recherche interne ne peut plus créer de contenu sans confirmation explicite de l’utilisateur.
- Les actions destructrices sont désormais systématiquement et clairement signalées comme irréversibles dans les outils concernés.
- Les identifiants n8n sont désormais stockés sous forme chiffrée.
- Lorsqu’un membre est supprimé, ses connexions externes, telles que l’accès à Outlook, sont désactivées de manière fiable.
- Des protections supplémentaires renforcent la sécurité des sessions OAuth et SSO, l’isolation des tenants, les rôles et autorisations, ainsi que les workflows n8n.
- Les exports CSV sont mieux protégés contre l’injection de formules, tandis que les journaux de conformité et de chat appliquent des principes de minimisation des données renforcés.

Merci à Mirko et Pascal pour leurs contributions majeures à ces améliorations de sécurité.

## Notes importantes sur les changements

Dans le cadre de la nouvelle architecture des autorisations et des intégrations, les parcours existants d’accès et de configuration ont été standardisés. Après la mise à jour, les administrateurs doivent vérifier :

- L’activation des intégrations à l’échelle de l’organisation et les restrictions au niveau des projets
- Les connexions n8n et Outlook existantes
- Les rôles et autorisations pour les outils externes

Cela permet de garantir que vos politiques d’accès prévues restent en place.

## Sous le capot

Au-delà des fonctionnalités visibles, nous avons continué à faire évoluer le LLM Routing, le traitement de documents, les outils de données et l’architecture de la plateforme afin de rendre OneAI plus performant et plus résilient.

Merci à Pascal, Mirko, Justus, Oliver, Santi et Obaid pour leurs contributions à cette version.

_Périmètre de la version : 660 commits, 2 112 fichiers modifiés et 655 pull requests._

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
