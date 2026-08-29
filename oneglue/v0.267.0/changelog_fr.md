# OneGlue v0.267.0 — Nouveautés

**Date de sortie :** 2026-08-29

**Dupliquez n'importe quel élément pour en créer un similaire en quelques secondes, et laissez OneGlue tenir automatiquement à jour les informations de vos domaines.**

## Duplication pour les configurations, réseaux, contacts, sites, domaines et actifs flexibles

- **Un bouton « Dupliquer » sur chaque page de détail** des configurations, réseaux, contacts, sites, domaines et actifs flexibles ouvre le formulaire de création pré-rempli à partir de cet élément. Les identifiants uniques — numéro de série, étiquette d'actif, adresse MAC et (pour les domaines) le nom de domaine lui-même — restent toujours vides, car ils doivent être uniques. Les champs qui ne diffèrent généralement que d'un ou deux caractères — nom d'hôte, adresses IP, nom de réseau, VLAN, sous-réseau, etc. — sont pré-remplis et mis en évidence, afin que vous voyiez exactement ce qu'il faut vérifier avant d'enregistrer. Si vous essayez d'enregistrer sans avoir modifié l'un des champs mis en évidence, OneGlue vous demande d'abord une confirmation.
- Le nouvel élément indique à partir de quel élément il a été dupliqué, visible dans son historique. Un élément restreint (Lockbox) produit un duplicata tout aussi restreint, et les mots de passe, pièces jointes et autres données liées sensibles ne sont jamais copiés — vous repartez toujours de zéro sur ces points-là.

## Synchronisation automatique avec le bureau d'enregistrement pour les domaines

- **Les domaines associés à un identifiant de bureau d'enregistrement restent désormais à jour tout seuls.** Chaque nuit, OneGlue interroge le bureau d'enregistrement et actualise pour vous la date d'expiration, les serveurs de noms, le statut de renouvellement automatique et le statut DNSSEC — un domaine que vous avez renouvelé chez le bureau d'enregistrement cesse ainsi d'afficher un avertissement d'expiration obsolète.
- Besoin que ce soit plus rapide ? Un bouton **« Synchroniser depuis le bureau d'enregistrement maintenant »** sur la page du domaine déclenche la même vérification à la demande, et un indicateur « dernière synchronisation » vous montre quand elle a eu lieu pour la dernière fois. Si une synchronisation rencontre un problème, cela s'affiche clairement sur la page du domaine au lieu d'échouer silencieusement.

## Petite amélioration

- La création d'un actif flexible vous amène désormais directement à sa page de détail, tout comme le font déjà les configurations, réseaux, contacts, sites et domaines.
