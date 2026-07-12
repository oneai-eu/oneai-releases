# OneGlue v0.202.0 — Nouveautés

**Date de publication :** 2026-07-13

Gérez vos machines virtuelles SCVMM de bout en bout — reconfigurer, redimensionner le stockage et mettre hors service — directement depuis OneGlue, chaque action confirmée et journalisée dans l'audit.

## Modifier la configuration d'une VM

Depuis la vue détaillée d'une VM, vous pouvez maintenant ouvrir **Modifier** et changer :

- **Identité** — nom, description, propriétaire et notes, appliqués **à chaud** en un clic.
- **Calcul** — nombre de processeurs et mémoire. Comme cela nécessite un redémarrage de la VM, OneGlue demande une **confirmation et prévient que la VM va s'éteindre** au préalable.

Chaque VM dispose désormais aussi d'une **vue détaillée** (disques, cartes réseau, paramètres mémoire, état d'alimentation) avec un horodatage « dernière synchronisation » clair et un bouton **Actualiser**.

## Gérer les disques virtuels — avec Storage QoS

- **Agrandir** un disque (à chaud pour les disques SCSI ; les VM sur disques IDE sont redémarrées avec une confirmation).
- **Ajouter** un nouveau disque.
- **Storage QoS** — plafonnez le débit d'un disque avec des **IOPS** minimales/maximales ou une stratégie Storage QoS nommée (là où votre fabric de stockage le prend en charge ; les contrôles restent masqués sinon).
- **Supprimer** un disque — une action destructive et irréversible, donc protégée par une **autorisation distincte**, une **confirmation en saisissant le nom de la VM** et un enregistrement d'audit fort.

## Supprimer une VM

Mettez hors service une machine virtuelle directement depuis OneGlue — une suppression définitive protégée par une **autorisation distincte**, une **confirmation en saisissant le nom de la VM** et une entrée complète dans le journal d'audit (qui, quand, pourquoi).

## Contrôlé par conception

Chaque action d'écriture est **contrôlée par autorisation par action** (modifier, supprimer un disque et supprimer sont chacune attribuables indépendamment), **graduée selon le risque** (les changements anodins se font en un clic ; les changements perturbateurs ou destructifs exigent une confirmation explicite) et **consignée dans le journal d'audit**.
