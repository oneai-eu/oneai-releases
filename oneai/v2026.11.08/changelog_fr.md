# OneAI v2026.11.08 — Spaces plus rapides, modification des agents dans le chat, corbeille

**Release Date:** 2026-11-09

## Nouveautés

- **Les grands Spaces s'ouvrent nettement plus vite.** Les dossiers se chargent désormais page par page.
- **Trouver et modifier des agents dans le chat.** Vous n'avez plus besoin de créer un nouvel agent pour chaque modification.
- **Corbeille pour les fichiers supprimés.** Vous pouvez restaurer les fichiers supprimés pendant 30 jours. Passé ce délai, ils sont définitivement perdus.
- **Temps gagné estimé.** Passez la souris sur le montant en € sous une nouvelle réponse. Cette valeur est une estimation approximative, pas une mesure.
- **Onglet Feuille de route dans What's New.** L'onglet est en place, mais encore vide. Les entrées suivront.

## ⚠️ Ce qui change pour vous

Veuillez vérifier ces points si vous utilisez ces fonctions :

- **Agents avec Spaces ou connexions définis :** si l'utilisateur n'a pas accès à l'un d'eux, l'agent ne continue plus avec des droits réduits, il est refusé. Les exécutions planifiées échouent et leur déclencheur est suspendu. Accordez l'accès ou adaptez l'agent.
- **Agents sans supervision :** ils s'arrêtent désormais avant les actions irréversibles et avant les outils MCP sans annotation, jusqu'à ce que cela soit autorisé dans l'organisation et dans l'agent.
- **Confirmations :** les actions irréversibles affichent désormais toujours une carte de confirmation, même lorsqu'une fenêtre de confiance est ouverte.
- **Datasets :** les modèles écrivent désormais du SQL. Les anciens outils tels que `insert_data`, `update_data` et `delete_data` n'existent plus, et les agents enregistrés les perdent sans avertissement. Veuillez vérifier les agents qui écrivent dans des datasets. La modification des lignes, la création de tables et l'import CSV continuent de fonctionner. Les colonnes ne peuvent plus être modifiées dans l'écran des datasets, seulement dans le chat : le modèle effectue la modification et vous la confirmez.
- **Applications Canvas et tableaux de bord utilisant des datasets :** nous les avons migrés vers la nouvelle base de données. Si une application n'enregistre plus ou si une requête échoue, veuillez nous contacter.
- **oneAI Standard :** nous avons basculé le modèle oneAI Standard vers DeepSeek V4.1, hébergé en Allemagne.
- **Bot Teams :** la connexion exige désormais que la connexion Microsoft soit activée pour vous.

## Merci

À Pascal, Justus, Obaid, Mirko, Oliver et Santi.
