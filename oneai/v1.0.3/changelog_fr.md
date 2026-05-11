# OneAI v1.0.3 — Traitement fiable des documents, même à quota complet

**Release Date:** 2026-05-11

## Highlights

### Le traitement des documents continue même lorsque le quota est atteint
Dans de rares cas, les résumés automatiques des chunks de documents pour les aperçus de recherche pouvaient être interrompus lorsqu’une organisation avait entièrement consommé son quota LLM.

Nous avons fondamentalement amélioré ce comportement :

- **Les documents continuent d’être entièrement traités**, même lorsque le quota LLM standard est atteint.
- **Les aperçus de recherche dans Spaces restent complets et cohérents.**
- L’utilisation continue d’être suivie de manière transparente pour la visibilité des rapports et de la facturation.

Pour vous, cela signifie aucune lacune inattendue dans les résultats de recherche et aucun document partiellement traité — même en période de forte utilisation.

Merci à Justus, qui a refactorisé cette partie du pipeline d’embedding afin de la rendre plus robuste et clairement séparée de la logique de quota côté utilisateur.

## Improvements

### Observabilité renforcée du traitement des documents
Nous avons considérablement étendu la supervision interne du pipeline d’embedding :

- Chaque tâche de traitement est désormais catégorisée selon son résultat (par exemple : succès, rate limit, nouvelle tentative, erreur).
- De nouveaux tableaux de bord offrent une visibilité en temps réel sur la longueur des files d’attente et le débit.

Bien que ces améliorations ne soient pas directement visibles pour les utilisateurs finaux, elles garantissent des **performances plus stables et prévisibles**, en particulier dans les environnements enterprise avec de grands volumes de documents.

## Under the Hood

- Séparation plus claire entre l’utilisation LLM côté utilisateur et le traitement interne au système.
- Métriques supplémentaires et mises à jour des tableaux de bord pour soutenir l’excellence opérationnelle.

---

Merci à Justus pour avoir renforcé la fiabilité et la transparence d’un composant clé de OneAI.

_2 commits · 2 PRs · 3 fichiers modifiés_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
