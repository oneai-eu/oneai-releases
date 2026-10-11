# OneGlue v0.279.0 — Nouveautés

**Publié le :** 2026-10-11

**Voyez exactement ce que vous accordez lorsque vous invitez quelqu'un, et les sélecteurs suivent désormais l'organisation dans laquelle vous travaillez.**

## Lors d'une invitation ou d'un changement de rôle, la portée est visible

- **Les rôles qui couvrent tout le tenant l'indiquent partout.** Que vous invitiez quelqu'un, modifiiez un rôle ou travailliez dans l'espace de super-administration, chaque rôle à portée de tenant précise désormais qu'il s'applique à **toutes** les organisations, et l'écran d'invitation vous indique combien elles sont exactement. Jusqu'ici cette mention n'apparaissait qu'à un seul endroit ; elle apparaît maintenant partout.
- **Une courte confirmation avant que cela ne prenne effet.** La première fois que vous accordez à quelqu'un un rôle à portée de tenant, OneGlue résume qui le reçoit et ce qu'il englobe. Un clic en avant et c'est accordé ; un clic en arrière et rien ne s'est produit. Si vous souhaitiez en réalité ne donner accès qu'à une seule organisation, le chemin pour le faire se trouve juste à côté.

## Les sélecteurs et les vues d'accès suivent votre organisation

- **Les sélecteurs de personnes, les vues d'autorisations et les listes de partage montrent ce qui appartient à votre organisation.** Lorsque vous travaillez dans une organisation, vous voyez les personnes et les accès de cette organisation, et non ceux de toutes les autres. Les listes raccourcissent, la recherche s'accélère et le choix devient sans ambiguïté. Vos propres accès restent visibles à tout moment, et les administrateurs de tenant conservent la vue d'ensemble.
- **Les préfixes de nommage et les détails de groupe s'y ajoutent.** Ces vues suivent elles aussi désormais l'organisation dans laquelle vous vous trouvez.

## Une vérification avant chaque diffusion

- **Désormais, chaque nouvelle version doit prouver que les frontières entre organisations tiennent.** OneGlue exécute une vérification dédiée avant chaque déploiement. Une version qui ne la réussit pas n'est pas diffusée, ni vers l'environnement de test ni en production. Cette garantie ne couvre donc pas seulement la version du jour, mais chaque mise à jour future.

## Petite amélioration

- La description du rôle **Administrateur d'organisation** indique maintenant clairement que ce rôle peut voir par défaut les mots de passe enregistrés dans cette organisation, sauf si un mot de passe a été restreint individuellement.
