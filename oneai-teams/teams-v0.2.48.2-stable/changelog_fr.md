# OneAI teams-v0.2.48.2-stable — Renforcement de la sécurité et du monitoring

**Release Date:** 2026-08-11

## Sécurité

Nous avons corrigé une vulnérabilité de sécurité qui pouvait, dans certaines circonstances, rendre un endpoint de monitoring accessible via des variantes de casse. La protection des accès est désormais appliquée de manière cohérente.

Nous avons également renforcé plusieurs mesures de protection dans nos services opérationnels :

- Les informations sensibles dans les messages d’arrêt sont masquées de manière plus fiable.
- La validation des clés de chiffrement au démarrage a été standardisée.
- Les valeurs de chemin très longues ne peuvent plus perturber la sortie des logs.

## Améliorations

- Les avertissements système au niveau des serveurs sont désormais visibles de manière fiable dans le monitoring, ce qui aide les équipes opérationnelles à identifier les problèmes et à y répondre plus tôt.
- Les données d’erreur dans le tableau de bord de monitoring sont désormais organisées plus clairement.

## Sous le capot

- Les vérifications automatisées après déploiement fonctionnent à nouveau de manière fiable.
- La documentation de release et les informations de version ont été mises à jour.

Merci à **Mirko** pour la mise en œuvre de ces améliorations en matière de sécurité et d’exploitation.

_13 commits · 32 fichiers modifiés_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
