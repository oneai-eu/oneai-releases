# OneGlue v0.253.0 — Nouveautés

**Date de sortie :** 2026-08-11

**Plus rapide et plus fiable pour les organisations avec de nombreux éléments liés.** Cette version corrige un problème rare qui pouvait figer l'interface pour les organisations comptant un très grand nombre d'éléments liés, et rend le panneau des éléments associés plus rapide et plus clair dans l'ensemble.

## Corrigé : l'interface pouvait se figer avec un très grand nombre de liens

- Nous avons corrigé un problème où, dans certains scénarios de synchronisation automatique, des entrées d'infrastructure liées pouvaient être recréées en boucle, accumulant silencieusement au fil du temps un nombre inhabituellement élevé d'éléments liés. Pour le petit nombre d'organisations concernées, cela pouvait ralentir ou figer certaines parties de l'interface. Le problème est corrigé à la source et les données concernées ont été nettoyées.

## Éléments associés : plus rapides, plus propres, plus fiables

- **Chargement page par page** — le panneau des éléments associés récupère désormais les résultats via « Charger plus » plutôt que de tout afficher d'un coup, et reste fluide même pour des ressources comptant des centaines de liens.
- **Fini les liens morts** — les éléments pointant vers une ressource déjà supprimée n'apparaissent plus dans les éléments associés.
- **Compteurs plus clairs sur les Actifs flexibles** — les actifs fortement liés affichent désormais un compteur du type « 25+ » au lieu de masquer le nombre réel de liens.
