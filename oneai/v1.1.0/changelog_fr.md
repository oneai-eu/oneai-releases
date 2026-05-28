# OneAI v1.1.0 — Notre plus grande release depuis v1.0

**Release Date:** 2026-05-28

OneAI v1.1.0 marque une étape majeure : **AI Chat devient plus performant**, **Knowledge Spaces est plus facile à administrer**, et **les administrateurs bénéficient de contrôles renforcés pour les environnements réglementés**. En complément, cette version introduit de nouveaux connecteurs, une organisation des projets nettement améliorée et des gains significatifs de fiabilité sur l’ensemble de la plateforme.

## Highlights

- **Modifier des images directement dans AI Chat**
  - Vous pouvez désormais modifier des images générées ou importées à l’aide du langage naturel.
  - Des demandes comme « rends l’arrière-plan plus bleu » ou « supprime la personne à gauche » fonctionnent directement dans la conversation.
  - Merci à **Mirko** : AI Chat propose désormais un workflow d’édition d’images beaucoup plus naturel.

- **Recherche en texte intégral dans les conversations**
  - La recherche ne se limite plus aux titres des chats, elle analyse également le contenu de vos messages.
  - Il devient ainsi beaucoup plus simple de retrouver d’anciennes conversations lorsque vous vous souvenez d’une formulation, mais pas du nom.
  - Merci à **Pascal**, qui a rendu la recherche nettement plus utile au quotidien.

- **Organiser les projets avec archive, tags et actions groupées**
  - Les projets peuvent désormais être archivés au lieu d’être supprimés.
  - Des tags personnalisés facilitent la structuration, et plusieurs projets peuvent être modifiés en une seule action.
  - La vue d’ensemble des projets a également été entièrement repensée pour un usage responsive et inclut désormais une gestion dédiée des tags.

- **Mettre des Spaces en pause au lieu de les supprimer**
  - Les administrateurs d’organisation peuvent désormais désactiver des Knowledge Spaces sans perdre de contenu ni de configuration.
  - Les Spaces en pause sont invisibles pour les membres et peuvent être réactivés à tout moment.
  - Particulièrement utile pour les audits de conformité, les pauses de projet ou les interruptions temporaires.

- **Des réponses plus fiables avec un meilleur contrôle des sources**
  - Deux nouveaux paramètres d’organisation permettent à OneAI de prioriser les sources internes lors de la génération de réponses.
  - Si souhaité, OneAI peut également être configuré pour répondre uniquement lorsque l’information est effectivement étayée par des sources.
  - Une fonctionnalité de gouvernance essentielle pour les secteurs réglementés. Merci à **Mirko** pour la mise en œuvre de ces fonctionnalités clés liées aux exigences SAG.

- **Nouveaux connecteurs : HubSpot et SMB**
  - **HubSpot** est désormais disponible comme nouvelle source de données et apporte les contenus CRM dans OneAI.
  - Le nouveau **connecteur SMB** permet de connecter des lecteurs réseau de votre environnement interne comme source de connaissances.
  - Merci à **Pascal** pour HubSpot et à **Justus** pour le connecteur SMB et la base agent associée.

## Improvements

- **Serveur MCP pour outils AI externes**
  - Des outils tels que Cursor, Claude Desktop, Copilot ou n8n peuvent désormais se connecter à OneAI via le standard ouvert MCP et interroger vos bases de connaissances.
  - Merci à **Santi** pour cette extension clé destinée aux équipes techniques.

- **Meilleure visibilité sur l’usage, les budgets et les dépassements**
  - Les paramètres d’abonnement incluent désormais un onglet dédié à l’usage avec consommation en temps réel, limites budgétaires et contrôle des dépassements.
  - Le dashboard présente également la facturation et l’utilisation de manière plus claire grâce à de nouvelles cartes KPI et une structure épurée.
  - Merci à **Obaid** pour une gestion des usages et des coûts beaucoup plus transparente.

- **Les fichiers de projet utilisent désormais l’explorateur familier**
  - Les fichiers de projet utilisent désormais la même expérience d’explorateur que dans les Spaces.
  - Cela garantit un workflow cohérent pour la prévisualisation, la navigation et la gestion des fichiers.

- **Reconnexion simplifiée pour Outlook et OneDrive**
  - Les connexions expirées peuvent désormais être renouvelées en un clic, sans recréer un Space.
  - Cela réduit significativement la charge administrative.

- **Meilleure visibilité opérationnelle**
  - Les Spaces en pause sont clairement signalés sur les pages de détail des projets et des Spaces.
  - Le badge de statut du OneAI Agent se met désormais à jour automatiquement.
  - Les achats d’add-ons sont disponibles immédiatement, sans rechargement de page.

## Bug Fixes

- **Traitement des documents plus fiable**
  - Les documents volumineux et les fichiers convertis lentement sont traités de manière plus fiable.
  - Les pièces jointes HTML issues d’e-mails et d’uploads sont désormais prises en charge et converties en contenu exploitable pour les Knowledge Spaces.
  - Une boucle mémoire critique déclenchée par certains e-mails Outlook a été corrigée, rendant le traitement des documents beaucoup plus stable sous charge.
  - Merci à **Mirko** et **Pascal** pour ces améliorations majeures d’un composant central de la plateforme.

- **Intégrations Microsoft et Teams stabilisées**
  - La connexion via l’add-in Teams fonctionne de nouveau de manière fiable, y compris dans des environnements AD hybrides.
  - Les renouvellements de webhooks Microsoft ne restent plus bloqués en boucle en cas d’échec.
  - La reconnexion OneDrive redirige désormais systématiquement vers le bon Space.

- **Synchronisation et artefacts plus cohérents**
  - La synchronisation cloud n’échoue plus en cas de chemins dupliqués.
  - Les artefacts de chat sont désormais correctement limités à leur projet.
  - Le statut d’indexation des documents est visible, facilitant la vérification de la disponibilité du contenu pour les réponses.

- **Affichage et gestion des sessions améliorés**
  - Les diagrammes ASCII et Mermaid s’affichent à nouveau correctement dans le chat.
  - Les sessions expirées redirigent proprement vers la page de connexion au lieu de laisser l’utilisateur dans un état d’erreur.
  - Les magic links fonctionnent à nouveau pour les adresses e-mail contenant un signe plus.

## Security

- **Association d’identités Microsoft/Teams renforcée**
  - Les identités Microsoft Entra sont désormais associées à l’aide d’identifiants stables de tenant et d’utilisateur, au lieu de se baser uniquement sur les adresses e-mail.
  - Cela réduit les risques de mauvaise attribution et renforce la connexion Teams, en particulier dans les scénarios AD hybrides.

- **Les tokens Agent ne sont plus stockés en clair**
  - Les tokens d’upload et de download du OneAI Agent sont désormais stockés sous forme de hash.
  - Cela améliore significativement la protection des identifiants de connexion sensibles.

## Under the Hood

- Nous avons fortement unifié l’architecture des connecteurs, créant une base plus propre pour les futures intégrations.
- Nous avons également étendu la couverture de tests automatisés sur des composants backend centraux afin d’améliorer encore la stabilité et la prévisibilité de la plateforme.

Merci à **Pascal**, **Mirko**, **Obaid**, **Justus** et **Santi** pour cette release.

*43 commits, 43 PRs, 271 fichiers modifiés*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
