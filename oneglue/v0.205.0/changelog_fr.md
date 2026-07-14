# OneGlue v0.205.0 — Nouveautés

**Date de publication :** 2026-07-14

Utilisez **un identifiant sur plusieurs machines**. Un seul compte de domaine Windows (ou tout identifiant partagé) peut désormais être attribué à de nombreux appareils et VMs et injecté automatiquement à la connexion — fini de copier le même mot de passe sur chaque machine.

## Identifiants partagés / de domaine

- **Un mot de passe, plusieurs machines.** Attribuez un seul identifiant à un ensemble de cibles : **configurations précises**, **toutes les VMs d'un cloud SCVMM** ou l'**organisation entière**.
- **Connexion automatique.** Lorsque vous ouvrez une session RDP ou VNC vers une machine couverte, l'identifiant partagé est proposé dans le sélecteur et injecté automatiquement (connexion `DOMAINE\utilisateur`). Le mot de passe n'est injecté qu'au niveau du worker de connexion — il **n'atteint jamais votre navigateur**.
- **Une seule rotation, appliquée partout.** Mettez à jour le mot de passe à un seul endroit et chaque machine couverte utilise la nouvelle valeur.

## Gérez-le là où vous travaillez

- **Partager / attribuer des machines depuis n'importe quel mot de passe.** Un mot de passe dispose désormais d'une action **« Partager / attribuer des machines »** pour définir les machines qu'il couvre.
- **Promouvoir un mot de passe de machine existant.** Transformez un mot de passe intégré à une machine en identifiant partagé en une seule étape — la machine d'origine conserve automatiquement son accès.
- **Vue « Identifiants partagés » au niveau de l'organisation.** Gérez tous les identifiants partagés et leurs portées directement dans l'organisation, et pas seulement dans les paramètres du locataire.
- **Visible sur la machine.** La page de détail d'une configuration affiche désormais **« Identifiants partagés applicables ici »**, pour toujours savoir quels identifiants partagés couvrent une machine.

## Contrôlé par conception

- **Autorisations distinctes et attribuables par organisation** — utiliser un identifiant partagé et gérer sa portée sont des droits distincts, attribuables par organisation.
- **Le partage entre organisations et entre locataires est impossible** par conception.
- **Chaque utilisation et chaque changement de portée est consigné dans le journal d'audit** (métadonnées uniquement — jamais la valeur du secret).
