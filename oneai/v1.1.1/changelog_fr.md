# OneAI v1.1.1 — Mode vocal, présentations et automatisation plus intelligente

**Release Date:** 2026-06-24

## Highlights

OneAI v1.1.1 est l’une de nos plus grandes releases à ce jour. L’accent est mis sur de nouvelles façons de travailler dans **AI Chat**, des **artifacts** plus puissants et une avancée majeure vers une **automatisation avec contrôle**.

- **Mode vocal dans AI Chat** : Vous pouvez désormais parler à OneAI au lieu de taper. Grâce à Justus, le premier déploiement est déjà fiable, avec une meilleure stabilité du streaming et des indications plus claires dans le produit.
- **Présentations générées par IA dans le chat** : Créez des présentations complètes directement à partir d’une conversation, prévisualisez-les en direct dans le panneau d’artifact et exportez-les en **PowerPoint ou PDF**. Merci à Pascal pour cette implémentation de bout en bout.
- **Uno – votre nouvel assistant** : Avec son propre système de connaissances, le contexte du workspace et un flux conversationnel amélioré, Uno propose une expérience d’assistant plus ciblée. Santi a posé ici les bases des prochaines évolutions.
- **Meilleur partage des artifacts** : Les artifacts prennent désormais en charge les images et peuvent être partagés via des **liens privés, à l’échelle du projet ou publics**. Les flux de partage publics et privés sont désormais beaucoup plus clairs pour les destinataires.
- **Modèles de projet** : Enregistrez vos configurations de projet courantes comme modèles et réutilisez-les en un seul clic.

## Improvements

- **Moins de clics pour les actions d’outils** : Grâce à la nouvelle logique de **trust window**, OneAI peut désormais apprendre quand des actions de confiance peuvent être exécutées automatiquement ou approuvées plus simplement — par exemple avec Outlook, n8n, les outils MCP ou des API approuvées. L’automatisation devient ainsi beaucoup plus fluide sans compromettre la gouvernance. Une grande partie de cette base a été développée par Mirko.
- **Meilleure visibilité dans Knowledge Spaces** : Vous pouvez désormais voir la progression de l’indexation des documents directement dans la barre d’activité et sur les cartes des espaces.
- **Vues spécifiques aux connecteurs** : Les contenus issus des Connectors sont désormais affichés dans des formats plus adaptés, notamment une vue dédiée pour les messages Outlook.
- **Suggestions de chat plus pertinentes** : AI Chat propose désormais des questions de suivi plus pertinentes.
- **Python plus puissant dans le chat** : Les sorties Python peuvent maintenant inclure des images, et les fichiers provenant des Knowledge Spaces peuvent être transmis directement à Python.
- **Intégrations et modèles étendus** : Cela inclut Vertex AI, Grok 4.3 via Vertex, la gestion des serveurs MCP ainsi que de nouveaux blocs de construction pour les intégrations et portails.
- **Feedback sur les réponses IA** : Les utilisateurs peuvent désormais évaluer les réponses de l’IA, et les administrateurs consulter les retours agrégés dans un tableau de bord.

## Bug Fixes

Cette release comprend également de nombreuses améliorations ciblées pour la fiabilité au quotidien :

- **Traitement des documents plus fiable** : Les documents sont désormais traités de manière plus robuste, même en cas d’interruptions de requêtes ou d’erreurs temporaires. Merci à Pascal — cela réduit significativement les interventions manuelles, notamment dans les grands Knowledge Spaces.
- **Synchronisation et Connectors plus stables** : La synchronisation OneDrive est désormais plus fiable, en particulier pour les fichiers volumineux. Google Drive et Google SSO ont également été réintroduits proprement sous contrôle de fonctionnalités.
- **Moins d’interruptions dans le chat** : Les confirmations d’outils ne restent plus bloquées lors d’appels parallèles, les confirmations déjà résolues ne réapparaissent plus après reconnexion, et les prompts trop longs échouent beaucoup plus rarement.
- **Meilleure expérience avec les artifacts** : Les artifacts s’affichent correctement dès la première ouverture, les références à l’artifact actif sont résolues plus fiablement et les exports PDF attendent correctement les diagrammes et la coloration syntaxique.
- **Gestion des erreurs plus claire** : Les erreurs des fournisseurs de modèles et d’authentification Microsoft sont désormais plus compréhensibles, ce qui facilite leur diagnostic.
- **Améliorations admin et projet** : Les administrateurs peuvent désormais supprimer des membres même en présence de données historiques de facturation ou de persona. Nous avons également ajouté la suppression en masse des listes de chats de projet et corrigé plusieurs petits problèmes d’interface.

## Security

- **Toutes les vulnérabilités connues des dépendances résolues** : Les résultats de l’audit pnpm ont été réduits de **54 à 0**.
- **Contrôles d’exécution des outils plus sûrs** : Le nouveau mécanisme de trust window comble les lacunes liées aux exécutions silencieuses et rend les décisions automatiques plus transparentes et sécurisées.
- **Comportement d’authentification plus robuste** : Les échecs permanents Microsoft AAD sont désormais gérés proprement au lieu de relancer continuellement avec des identifiants invalides.

## Under the Hood

Au-delà des fonctionnalités visibles, nous avons migré davantage de Connectors vers une plateforme unifiée, étendu l’infrastructure des outils, amélioré les diagnostics de session et posé les bases des futures intégrations et automatisations.

Merci à **Pascal, Mirko, Justus, Oliver, Obaid et Santi** pour cette release d’une ampleur exceptionnelle.

*111 commits · 108 PRs · 690 fichiers modifiés*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
