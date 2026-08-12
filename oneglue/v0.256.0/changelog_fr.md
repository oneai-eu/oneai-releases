# OneGlue v0.256.0 — Nouveautés

**Date de sortie :** 2026-08-12

**Une plateforme plus légère et un journal d'audit plus clair.** Cette version optimise la synchronisation en arrière-plan et plusieurs requêtes internes de la base de données pour réduire la charge, et rend le journal d'audit plus fiable en réduisant le bruit répétitif de l'activité automatisée, tout en conservant une traçabilité complète de chaque action réelle.

## Plus rapide et plus léger sous le capot

- **La synchronisation en arrière-plan tourne à un rythme plus détendu.** Nous avons ajusté la fréquence à laquelle OneGlue vérifie les mises à jour à transmettre aux systèmes connectés, ainsi que plusieurs requêtes internes de la base de données — cela réduit la charge de la base de données sans changer ce qui est synchronisé ni le moment où vos propres actions prennent effet.
  > **Remarque :** si votre espace de travail est connecté à oneAI, les signaux de révocation d'autorisation atteignent désormais oneAI en environ une minute au lieu d'environ dix secondes. Cela affecte uniquement la rapidité avec laquelle l'index de référence propre à oneAI se met à jour — OneGlue continue d'appliquer immédiatement chaque changement d'autorisation de son côté, si bien que le contrôle d'accès lui-même ne présente aucune faille.
- **La page des sessions est plus légère pour la base de données.** L'horodatage « Dernière utilisation » de vos sessions actives est désormais mis à jour au plus une fois par minute, au lieu de chaque requête. La page affichant déjà les horaires à la minute près, ce changement n'est pas visible.

## Un journal d'audit plus clair et plus fiable

- **Moins de bruit provenant de l'activité automatisée.** Les actions routinières en arrière-plan — comme les cycles périodiques de synchronisation — n'inondent plus le journal d'audit d'un flot d'entrées quasi identiques. L'activité inchangée est désormais regroupée en entrées de synthèse périodiques indiquant le nombre d'occurrences, afin que vos propres actions et les changements réels soient faciles à repérer. Rien n'est perdu : chaque changement réel continue d'être enregistré au moment où il se produit, et les synthèses comptabilisent tout ce qui a été regroupé.
- **Les actions automatisées sont désormais correctement attribuées au système**, plutôt qu'à la personne dont les identifiants sont utilisés en coulisses — les entrées d'audit n'attribuent plus par erreur un travail routinier automatisé à une personne.
- **Correction d'une classe de fausses alertes** dans les rapports de nettoyage des jetons, qui pouvait faire passer une gestion normale et attendue des jetons pour une anomalie.
- **Les actions automatisées réussies enregistrent désormais l'origine réseau**, comme c'était déjà le cas pour les tentatives échouées — comblant un petit angle mort pour quiconque examine le journal d'audit.
