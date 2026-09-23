# oneAI v2026.09.04 — Partagez des apps Canvas et gérez votre CRM depuis le Chat

**Release Date:** 2026-09-08

## Points forts

### Canvas devient une mini-app partageable
Vous pouvez désormais publier des apps Canvas de manière sécurisée via un lien de partage ou sur **votre propre domaine d’entreprise**. Les applications créées par l’IA deviennent ainsi des formulaires, portails et outils pratiques pour des publics externes.

- Les visiteurs peuvent se connecter via un lien envoyé par e-mail sans avoir besoin d’un compte oneAI.
- Les apps publiques peuvent afficher des fichiers et des images, tandis que les visiteurs peuvent téléverser des fichiers.
- Les formulaires peuvent indiquer qui a soumis une entrée, et les personnes ayant soumis une réponse peuvent la modifier ultérieurement.
- Les équipes bénéficient de mises à jour en direct plus fiables et d’une utilisation plus fluide des apps à fort trafic.
- Les apps Canvas plus grandes et plus sophistiquées peuvent être modifiées par l’IA plus rapidement et de manière plus fiable.

Grâce à **Pascal** et **Justus**, Canvas est désormais bien mieux adapté aux cas d’usage externes sécurisés.

### HubSpot, connecté nativement à oneAI
Le nouveau Connector HubSpot apporte **26 outils** directement dans AI Chat. Votre IA peut désormais faire plus que rechercher et analyser des données CRM : elle peut aussi préparer des opérations CRM.

- Créer, mettre à jour et associer des contacts, entreprises, transactions et tickets
- Consigner des notes, tâches, appels et réunions
- Récupérer à la demande les détails des enregistrements, les champs disponibles et l’historique des activités
- Examiner chaque action d’écriture dans une étape de confirmation claire avant son exécution

La synchronisation est également plus résiliente : les problèmes de connexion temporaires n’entraînent plus la suppression incorrecte d’enregistrements existants. Merci à **Mirko** pour l’importante extension de nos capacités de Connectors.

### Nouveaux Connectors et Connectors étendus
oneAI se connecte à davantage de systèmes métier et peut effectuer plus de tâches directement dans les outils que vous utilisez déjà.

- **Nouveau : Plytix** – Interrogez votre catalogue produits, vos attributs, variantes et images directement depuis votre système PIM.
- **weclapp** – Davantage d’actions de lecture et d’écriture, avec notamment une synchronisation plus résiliente et le téléchargement de PDF de factures.
- **ClickUp** – Créez et mettez à jour des tâches, gérez les tags et les checklists, avec confirmation requise pour les modifications.
- **Fireflies** – Recherchez dans les transcriptions de réunions, renommez des réunions, arrêtez le notetaker et effectuez d’autres actions.
- **n8n** – Testez les nœuds de workflow avant utilisation et reprenez les workflows en attente directement depuis le Chat.
- **GitHub, ClickUp, weclapp et lexoffice** – Un accès API étendu est désormais disponible lorsqu’il est autorisé.

## Améliorations

- **Interactions plus claires dans le Chat :** Lorsque AI Chat a besoin de plus d’informations, il présente désormais des cartes de choix cliquables au lieu de questions uniquement textuelles.
- **Se connecter avec Apple :** Apple est désormais disponible comme option de connexion aux côtés de Google et Microsoft.
- **Nouveaux modèles d’IA :** Gemini 3.8 Flash, Gemini 3.7 Flash et Grok 4.6 sont désormais disponibles. Gemini 3.7 Flash est maintenant le modèle par défaut d’Uno pour les organisations payantes.
- **Présentations aux couleurs de votre marque :** Téléversez votre propre modèle PowerPoint et les présentations générées utiliseront automatiquement le design de votre entreprise. Vous pouvez également placer directement sur les diapositives des images provenant d’un Knowledge Space.
- **Knowledge Spaces :** Les fichiers peuvent désormais être renommés directement, et l’explorateur de fichiers est plus facile à utiliser sur les appareils mobiles.
- **Sélection SharePoint :** Lors de la connexion via OneDrive, tous les sites SharePoint disponibles sont désormais affichés de manière fiable, y compris dans les grands environnements Microsoft.
- **Connexions Outlook :** Les connexions interrompues sont détectées immédiatement et peuvent être réparées ou déconnectées directement.
- **Saisie vocale :** L’enregistrement fonctionne désormais de manière fiable dans Safari, sur iPhone et iPad, ainsi que dans Firefox, y compris pour les enregistrements longs.
- **PDF numérisés :** L’aperçu des PDF numérisés est désormais précis, plus net et plus stable.
- **Limites d’équipe :** Les limites d’utilisation individuelles peuvent désormais être gérées pour les équipes de plus de dix membres. oneAI avertit également les administrateurs lorsqu’une limite de membre dépasse le budget de l’organisation.

## Sécurité

- **Formulaires Canvas protégés :** Les formulaires publics ne peuvent mettre à jour que les champs explicitement prévus à cet effet. Les champs de données internes restent protégés.
- **Identifiants de Connectors sécurisés :** Les identifiants HubSpot et ClickUp sont désormais stockés de manière chiffrée.
- **Automatisation n8n plus sûre :** La correction automatique des erreurs ne peut plus rediriger silencieusement les requêtes vers un autre hôte.
- **Protection des autorisations dans Uno :** Les employés non administrateurs ne peuvent plus utiliser Uno pour identifier les administrateurs de l’organisation.

## Corrections de bugs

- Les cartes de confirmation des actions dans le Chat ne restent plus invisibles ou en attente de manière permanente. Vous pouvez désormais voir de manière fiable si une action a été effectuée, refusée ou a échoué.
- Les apps Canvas multi-fichiers fonctionnent désormais correctement via des liens de partage publics et des domaines personnalisés.
- Les apps Canvas sans liaisons de données peuvent désormais également être partagées publiquement.
- Certaines adresses e-mail inhabituelles ne provoquent plus d’erreurs dans les apps Canvas partagées.
- Les réponses Gemini interrompues ne sont plus signalées de manière trompeuse comme des réponses de modèle vides.
- Les fichiers GitLab n’affichent plus incorrectement une taille de « 0 octet ».
- Les paramètres des modèles d’IA sont désormais enregistrés de manière fiable, même lors de changements rapides.

## En coulisses

Nous avons étendu les fondations pour de futurs agents IA planifiés avec des workflows d’approbation. Cette capacité reste en test interne et n’est pas encore activée pour les clients.

Merci à **Pascal, Mirko, Justus, Santi, Obaid et Oliver** pour leurs contributions à cette release.

*139 pull requests, 141 commits et 1 183 fichiers modifiés.*

---
*This changelog was generated automatically by the oneAI Changelog Pipeline.*
