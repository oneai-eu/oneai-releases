# OneGlue v0.198.0 — Nouveautés

**Date de publication :** 2026-07-12

Des sessions distantes plus fluides et un Parc de VM toujours à jour.

## Des connexions distantes qui fonctionnent, tout simplement

Travailler dans une session distante RDP ou VNC est désormais bien plus agréable :

- **Votre disposition de clavier est respectée.** Les caractères spéciaux comme `|`, `\`, `@`, `{`, `[`, `]` et les trémas se saisissent maintenant correctement. Vous pouvez **choisir la disposition du clavier par appareil** (allemand par défaut) : ce que vous tapez est ce qui s'affiche — fini les commandes réécrites pour contourner une barre verticale introuvable.
- **Copier-coller dans les deux sens.** Le presse-papiers fonctionne désormais dans **les deux sens** — collez du texte dans la session distante (Ctrl+V ou le bouton *Envoyer le presse-papiers*) et recopiez du texte vers votre propre machine. Pratique pour coller une commande et récupérer son résultat.

## Un Parc de VM plus frais, à la demande

- **Actualisation à la demande.** Chaque cloud du Parc de VM dispose désormais d'un bouton **Synchroniser** pour récupérer son inventaire de VM le plus récent quand vous le souhaitez.
- **Actualisation automatique après les actions.** Après avoir Démarré, Arrêté ou Redémarré une VM, le parc s'actualise de lui-même peu après : l'état affiché reflète ce qui s'est réellement passé.
- **Un horodatage « dernière synchronisation » honnête.** L'horodatage « dernière synchronisation » indique maintenant quand l'inventaire a été **vérifié** pour la dernière fois, et non seulement quand quelque chose a changé pour la dernière fois — vous pouvez donc vous y fier d'un coup d'œil.
