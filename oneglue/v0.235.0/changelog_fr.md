# OneGlue v0.235.0 — Nouveautés

**Date de sortie :** 2026-07-31

**Vos secrets enregistrés sont à l'abri des écrasements accidentels.** Lorsque vous modifiez un mot de passe — ou tout secret enregistré —, le champ de valeur ne s'affiche désormais que lorsque vous choisissez explicitement de le changer. Le gestionnaire de mots de passe de votre navigateur ne peut donc plus remplir automatiquement et écraser en silence la valeur que vous avez déjà enregistrée.

## La modification d'un secret est désormais à l'épreuve des écrasements

- **La valeur reste masquée jusqu'à ce que vous vouliez vraiment la changer** — ouvrez un secret à modifier et le champ mot de passe/valeur affiche une action « Changer la valeur » au lieu d'une case vide. Renommez, reclassez ou ajustez les autorisations sans aucun risque de toucher à la valeur enregistrée.
- **La saisie automatique du navigateur ne peut pas l'écraser** — le champ n'existe pas sur la page tant que vous n'avez pas cliqué pour le changer ; un gestionnaire de mots de passe qui remplit automatiquement n'a donc rien à écraser.
- **La rotation reste en une étape** — choisissez « Changer la valeur », saisissez ou générez le nouveau secret, puis enregistrez comme avant.
- **Pour voir la valeur actuelle, utilisez Révéler** sur la page de détail du secret (la révélation faisant foi et journalisée) — l'affichage/masquage du formulaire d'édition ne reflète que ce que vous êtes en train de taper.
