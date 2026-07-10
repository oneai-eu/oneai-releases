# OneGlue v0.194.0 — Nouveautés

**Date de sortie :** 2026-07-11

Sachez où s'exécute chaque VM — et si sa réplique est saine.

## Hôte, cluster et réplication en un coup d'œil

La flotte de VM affiche désormais, pour chaque machine virtuelle, **sur quel hôte et quel cluster de basculement elle s'exécute** — directement dans la vue d'ensemble, sans avoir à déplier. À côté, un **badge d'état de réplication** indique d'un coup d'œil si la réplique Hyper-V d'une VM est saine (vert), nécessite une attention (ambre) ou est critique (rouge).

## Détail complet de la réplication au clic

Ouvrez une VM pour voir sa situation de réplication complète : le **rôle** (Primary ou Recovery), l'**état de santé** et l'**état** actuel. Comme les VM répliquées existent à deux endroits, elles apparaissent désormais comme deux entrées — la primaire et sa copie de récupération — chacune clairement étiquetée, afin que vous puissiez voir votre géo-redondance (par exemple, une VM primaire dans un centre de données avec sa copie de récupération dans un autre).
