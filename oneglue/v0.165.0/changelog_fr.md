# OneGlue v0.165.0 — Nouveautés

**Date de publication :** 2026-07-04

Les fondations d'une nouvelle capacité : OneGlue peut désormais exécuter de petits plugins signés sur vos appareils connectés, et le premier vous donne une vue en direct de vos nœuds de calcul IA.

## Plugins d'appareil — une base sécurisée

L'agent OneGlue peut maintenant charger de petits plugins dédiés qu'un Tenant-Admin déploie directement depuis l'interface OneGlue — sans aucun accès au serveur. Chaque plugin est signé cryptographiquement et vérifié sur l'appareil avant son exécution, et s'exécute en bac à sable (sandbox) avec des privilèges minimaux. C'est la base sur laquelle nous construirons des intégrations d'appareils plus riches.

## Premier plugin : un aperçu en direct de vos nœuds de calcul IA

Le premier plugin est un lecteur en lecture seule pour les nœuds GPU onestack. Une fois déployé sur un appareil, il affiche — directement sur la page de l'appareil dans OneGlue :

- **Informations matériel et moteur** — modèle de GPU, VRAM, pilote/CUDA, répartition MIG, le moteur d'inférence en cours + image, et le(s) modèle(s) chargé(s) : nom, quantification, longueur de contexte, adaptateurs LoRA.
- **Télémétrie en direct** — VRAM utilisée, utilisation et température du GPU, ainsi que l'état du moteur et la latence de réponse par déploiement — actualisé automatiquement, avec un indicateur clair « vu pour la dernière fois ».
- **Un enregistrement durable** — les informations stables sont également écrites dans une fiche « AI Compute Node » consultable et liée à l'appareil, afin que votre documentation reste à jour d'elle-même.

Le lecteur est strictement en lecture seule et ne voit ni ne transmet jamais de secrets.
