# OneGlue v0.168.0 — Nouveautés

**Date de sortie :** 2026-07-06

Des connexions plus stables vers vos appareils, et vos nœuds de calcul IA affichent désormais l'image complète.

## Sessions distantes et connexions d'appareils plus fiables

Nous avons identifié et corrigé une coupure intermittente du lien entre OneGlue et vos appareils connectés. Les sessions distantes (RDP/VNC) et les connexions des agents d'appareil restent maintenant connectées de façon nettement plus constante, et lorsqu'une reconnexion est nécessaire, elle se fait en une seconde environ au lieu de rester bloquée jusqu'à une minute. Moins d'interruptions pendant votre travail et une récupération plus rapide en cas d'aléa réseau.

## La supervision des nœuds de calcul IA affiche désormais l'image complète

L'aperçu des nœuds de calcul IA que nous avons introduit récemment affiche maintenant l'intégralité de ses détails de façon fiable. Sur la page de l'appareil dans OneGlue, vous verrez :

- **Faits matériels et moteur** — modèle de GPU et VRAM, répartition MIG, le moteur d'inférence en cours d'exécution et son image, ainsi que le modèle servi : nom, quantification, longueur de contexte et adaptateurs LoRA.
- **Télémétrie en direct** — VRAM utilisée, utilisation et température du GPU, ainsi que l'état du moteur par déploiement — actualisée automatiquement avec un indicateur clair de « vu pour la dernière fois ».
- **Un enregistrement durable et consultable** — les faits stables sont également écrits dans un actif « AI Compute Node » lié à l'appareil, afin que votre documentation reste à jour d'elle-même.

Ces détails se remplissent maintenant correctement et se tiennent à jour d'eux-mêmes. Comme auparavant, le lecteur est strictement en lecture seule et ne voit ni ne transmet jamais de secrets.
