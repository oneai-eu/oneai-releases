# OneGlue v0.211.0 — Nouveautés

**Date de publication :** 2026-07-17

**Exportez toutes les VMs d'un cloud en un CSV prêt pour la facturation, en un clic.** Depuis la vue de la flotte de VMs, vous pouvez désormais télécharger un inventaire complet de toutes les machines virtuelles d'un cloud — avec les totaux inclus, directement utilisable pour les rapports et la facturation.

## Export d'inventaire de VMs par cloud (CSV)

- **Une nouvelle action « Exporter CSV »** dans la vue de la flotte de VMs exporte toutes les machines virtuelles du cloud sélectionné. Chaque ligne inclut vCPU, RAM, stockage, balises et toutes les propriétés personnalisées SCVMM que vous gérez — par exemple un numéro client ou un code article enregistré dans votre SCVMM.
- **Ligne de totaux incluse.** L'export additionne automatiquement vCPU, RAM et stockage sur l'ensemble du cloud, de sorte que le fichier est prêt pour la facturation ou les rapports sans calcul supplémentaire.
- **Noms de colonnes lisibles pour les propriétés personnalisées.** Les propriétés personnalisées peuvent recevoir des intitulés de colonnes lisibles par serveur SCVMM, de sorte que les en-têtes de l'export correspondent à vos propres conventions plutôt qu'aux noms de champs internes de SCVMM.

## Contrôlé par conception

- L'export est **limité à votre organisation** — l'accès entre organisations et entre locataires est impossible par conception.
- **Aucune valeur secrète n'est incluse** dans l'export — uniquement des métadonnées d'inventaire.
- L'export est **soumis à l'autorisation existante de vue de la flotte** — aucun droit d'export séparé à gérer.
