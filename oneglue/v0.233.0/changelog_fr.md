# OneGlue v0.233.0 — Nouveautés

**Date de sortie :** 2026-07-29

**Un foyer pour vos codes de récupération.** OneGlue peut désormais stocker et gérer les codes de récupération / de secours à usage unique qu'un service vous remet — juste à côté du mot de passe et de l'authentificateur de ce service, comme une méthode gérée sur le secret.

## Les codes de récupération comme méthode MFA gérée

- **Générez et stockez un jeu de codes à usage unique** pour une connexion — affichés une seule fois à la création, avec copie + téléchargement PDF, puis chiffrés au repos comme tout autre secret.
- **Révélez-les quand vous en avez besoin** — sous les mêmes autorisations et approbations qui protègent le secret lui-même, chaque révélation étant inscrite au journal d'audit.
- **Marquez un code comme utilisé** pour garder le compte, voyez le nombre restant sur le total d'un coup d'œil, et régénérez un jeu neuf quand ils s'épuisent (l'ancien jeu cesse de fonctionner, avec un avertissement clair).

## Hôtes gérés par agent : le statut du worker de retour sur la page

- Pour un hôte géré par un GlueAgent, la page de configuration affiche à nouveau un aperçu en lecture seule de l'état worker / `.glue`, des informations de l'hôte et des exécutions d'automatisation les plus récentes — là où vous l'attendez, sans avoir à chercher.
