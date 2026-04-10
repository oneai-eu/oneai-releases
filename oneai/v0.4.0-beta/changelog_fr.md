# OneAI v0.4.0-beta — Comprendre l’audio et la vidéo, traitement PDF plus intelligent

**Release Date:** 2026-04-10

## Highlights

### Les fichiers audio et vidéo sont désormais interrogeables
Vous pouvez désormais **téléverser des fichiers audio et vidéo directement dans OneAI** — et les utiliser comme n’importe quel autre document dans vos Knowledge Spaces.

- Prise en charge des formats MP3, WAV, M4A et plus
- Transcription automatique avec horodatage
- Extraction audio côté client pour les fichiers vidéo
- Dans AI Chat, vous pouvez interroger des plages temporelles spécifiques d’un enregistrement

Appels clients, réunions internes, webinaires — les connaissances orales sont désormais pleinement intégrées à vos workflows d’IA d’entreprise.

Un grand merci à **Pascal**, qui a implémenté l’ensemble de la pipeline audio/vidéo, y compris la transcription et l’intégration dans le chat.

---

### Traitement PDF plus intelligent grâce à une pipeline hybride
Les PDFs sont désormais traités **plus rapidement, de manière plus économique et plus précise**.

La nouvelle approche hybride fonctionne en deux étapes :
1. **Extraction directe du texte** (rapide, sans coût LLM)
2. **Analyse d’images sélective basée sur l’IA** uniquement pour les pages contenant réellement des images intégrées

Pour vous, cela signifie :
- Traitement plus rapide des documents volumineux
- Réduction des coûts d’IA
- Meilleure gestion des PDFs scannés ou riches en images

Cette amélioration fondamentale de notre pipeline documentaire a également été réalisée par Pascal.

---

### Traitement des documents plus rapide grâce aux embeddings par lots
Au lieu d’envoyer chaque segment de texte individuellement, OneAI traite désormais les embeddings par lots.

Cela réduit considérablement la surcharge réseau et accélère sensiblement le traitement — en particulier pour les Knowledge Spaces volumineux ou les imports massifs.

---

## Improvements

### Activity Center repensé avec visibilité claire des erreurs
L’Activity Center a été entièrement repensé.

- Synchronisation, traitement des documents et distillation réunis dans un onglet central
- Mises à jour de statut en temps réel via WebSocket
- **Indicateurs d’erreur clairs** lorsque des documents ne peuvent pas être traités

Vous voyez immédiatement si une action est nécessaire — sans devoir analyser des logs.

---

### Drag & Drop unifié — y compris pour les dossiers
Le téléversement par glisser-déposer fonctionne désormais de manière cohérente sur toute la plateforme :

- Dans AI Chat
- Dans les Knowledge Spaces
- Via la barre latérale

Les structures de dossiers sont conservées et les fichiers non pris en charge sont clairement signalés. Les téléversements volumineux deviennent ainsi plus simples et plus transparents.

---

### Recherche et comportement du chat plus robustes
Plusieurs améliorations renforcent la fiabilité au quotidien :

- Fallback si le service de reranking est temporairement indisponible
- Nouveaux essais automatiques en cas d’erreurs de connexion transitoires
- Validation des arguments des outils LLM pour éviter les erreurs d’exécution
- Les personas du chat sont désormais priorisées et appliquées plus fiablement
- Le chat comprend désormais l’artefact actif pendant l’édition

Résultat : des réponses plus stables, moins d’interruptions et un comportement plus cohérent.

---

## Bug Fixes

- Les erreurs de streaming avec les modèles Google sont désormais gérées correctement
- Les verrous de traitement sont renouvelés lors du traitement de fichiers volumineux (évite les doublons)
- Les documents de code sont segmentés proprement selon des limites de taille définies
- Les contenus weclapp sont mis en cache pour un traitement plus efficace
- Plusieurs correctifs UI (badges, dialogue d’artefact, rendu des formules mathématiques)

Beaucoup de ces améliorations renforcent la fiabilité en arrière-plan — en particulier pour les jeux de données volumineux.

---

## Breaking Changes

### Consolidation des variables d’environnement Gateway
Les six variables d’environnement précédentes pour embeddings, vision et reranking ont été consolidées.

**Nouvelles variables :**
- `ONESTACK_GW_URL`
- `ONESTACK_GW_KEY`

Veuillez mettre à jour vos fichiers `.env`, `compose.yaml` et vos configurations de déploiement en conséquence.

---

## Under the Hood

- Logique de retry unifiée pour des appels API plus stables
- Timeout dédié pour le worker PDF
- Agent interne de revue de PR avec règles de sécurité et de multi-tenancy (merci à Santi)

---

Cette release a été largement portée par **Pascal**, de la prise en charge audio/vidéo à la nouvelle pipeline PDF jusqu’à la refonte de l’Activity Center. Merci également à **Santi** pour l’introduction de directives de revue structurées.

—
21 commits · 21 PRs · 90 fichiers modifiés · 2 contributeurs

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
