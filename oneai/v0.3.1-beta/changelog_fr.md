# OneAI v0.3.1-beta — Traitement des documents plus rapide & contrôle total dans le Chat

**Release Date:** 2026-02-27

Avec la v0.3.1-beta, nous avons rendu le traitement des documents dans OneAI nettement plus rapide et plus flexible. Vos documents téléchargés manuellement sont disponibles plus rapidement — et si vous changez d’avis, vous pouvez désormais annuler le traitement instantanément.

## Highlights

### Annuler le traitement d’un document — directement dans le Chat et la zone d’upload
Vous avez téléchargé un document et réalisez finalement que vous n’en avez pas besoin ? Vous gardez le contrôle.

Vous pouvez désormais **annuler activement un traitement de document en cours** :

- directement dans la **zone d’upload** via un nouveau bouton Annuler  
- directement dans le **AI Chat** lorsque vous supprimez un fichier joint

Cela signifie **plus d’attente inutile**, aucune capacité de traitement bloquée et un contrôle total sur vos Knowledge Spaces.

Merci à Pascal pour l’implémentation de cette fonctionnalité et son intégration fluide dans les workflows du Chat et d’upload.

### Vos documents sont désormais traités en priorité
Lorsque vous déclenchez manuellement un traitement de document (par exemple après avoir téléchargé des fichiers dans un Knowledge Space), ces tâches sont désormais traitées **avant les processus de synchronisation automatique en arrière-plan**.

Concrètement, cela signifie :

- Disponibilité plus rapide des nouveaux contenus dans AI Chat  
- Temps d’attente réduit après un upload manuel  
- Meilleure prévisibilité pour les documents critiques en termes de délai

Les processus de synchronisation automatique (par exemple depuis OneDrive ou SharePoint) continuent de fonctionner de manière fiable en arrière-plan — mais ne concurrencent plus vos tâches immédiates.

Cette amélioration fait également partie de la refonte de la logique de notre embedding queue par Pascal.

## Améliorations

- Priorisation plus intelligente dans le traitement des documents  
- Gestion de l’embedding queue plus efficace et plus fiable

## Sous le capot

- Mise à niveau majeure de notre Agent Suite interne (v3.0), permettant un développement plus rapide et plus cohérent de la plateforme — merci à Mirko pour la modernisation de nos outils développeur.

---

Un grand merci à **Pascal** et **Mirko** pour leurs contributions à cette release.

_2 PRs · 2 commits · 19 fichiers modifiés · 2 contributeurs_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
