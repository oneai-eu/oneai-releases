# OneAI v0.4.4-beta — Automatisation, protection des accès & un AI Chat nettement plus stable

**Release Date:** 2026-04-27

Cette version apporte trois avancées majeures : **l’automatisation des workflows avec n8n**, une **protection proactive des accès aux projets** pour éviter les fuites de données, et un **AI Chat nettement plus stable et réactif** — en particulier pour les modèles privés.

---

## Highlights

### Connecteur n8n : créez des workflows directement depuis OneAI
Vous pouvez désormais connecter votre **instance n8n comme un Space** et créer des workflows d’automatisation directement depuis AI Chat.

- Assistant de configuration guidé avec validation API  
- Modèles de workflows prêts à l’emploi  
- Création et activation des workflows directement depuis le chat  
- Synchronisation automatique via webhooks  
- Suppression propre lors de la suppression d’un Space  

OneAI devient votre couche de contrôle d’automatisation pilotée par l’IA — ancrée dans vos données d’entreprise.

Un grand merci à **Mirko**, qui a développé le connecteur de bout en bout.

---

### Protection des accès aux projets : détecter les conflits, prévenir les fuites de données
Les projets liés à des Knowledge Spaces sont désormais nettement plus sécurisés.

Les administrateurs de projet peuvent immédiatement voir :
- Quels membres **n’ont pas accès aux Spaces liés**  
- Où existent des conflits d’autorisations potentiels  

Ils peuvent directement :
- Accorder l’accès (s’ils y sont autorisés)  
- Envoyer des demandes d’accès structurées aux administrateurs de Space (avec limitation intelligente d’1 heure)  

En outre, les appels d’outils sont strictement filtrés en arrière-plan pour n’inclure que des documents provenant de Spaces autorisés. Cela empêche toute exposition involontaire de données entre Spaces.

Une avancée majeure pour la gouvernance IA et la protection des données alignée sur l’EU AI Act.  
La conception et la mise en œuvre ont été dirigées par **Pascal**.

---

### Modèles privés : stables, visibles, prêts pour la production
Les modèles auto‑hébergés sont désormais beaucoup plus fiables :

- Streaming stable incluant tool calls et reasoning  
- Visibilité correcte dans le sélecteur de modèles  
- Contrôle d’accès approprié dans les paramètres d’organisation  
- Plus de plantages dus à des formats de réponse inattendus  

Grâce au passage à une API backend plus robuste, les streams longs s’exécutent désormais de manière fiable — tout en conservant la protection SSRF.

---

### Gestion proactive des sessions
Plus de sécurité, moins de mauvaises surprises :

- Alerte précoce avant l’expiration de session (avec réauthentification instantanée)  
- Déconnexion automatique après une inactivité prolongée  
- Préférence de thème désormais stockée de manière persistante côté serveur  

Cela réduit le risque de sessions actives oubliées, en particulier dans des environnements partagés.

---

### Une expérience AI Chat nettement plus fluide
AI Chat bénéficie d’améliorations majeures de stabilité :

- Plus de blocages de l’interface lors de suggestions d’artefacts volumineux  
- Touche Entrée correctement bloquée pendant le streaming actif  
- Plus de « messages fantômes » après des erreurs  
- Problème de curseur après collage de document résolu  
- Gestion des erreurs plus claire pour les échecs de recherche web  

Résultat : une expérience de chat quotidienne nettement plus robuste et professionnelle.

---

## Improvements

### Traitement des documents : plus rapide, plus équitable, plus résilient
L’ensemble de la file d’attente d’embedding a été amélioré :

- Répartition plus équitable entre organisations  
- Worker dédié pour les uploads interactifs (critiques)  
- Réveil instantané inter‑réplicas via PostgreSQL NOTIFY  
- Cycles de retry plus courts après échec  
- Prefix caching pour les modèles vision → traitement plus rapide des documents volumineux  
- Validation des images avant traitement vision pour échouer tôt et proprement  

Les documents téléversés depuis le chat sont désormais prioritaires — même lorsque de gros jobs de synchronisation s’exécutent en arrière-plan.

Une part importante de ce travail système a été menée par **Pascal**.

---

### Catalogue de modèles mis à jour
Le catalogue de modèles a été entièrement actualisé :

- Derniers modèles de OpenAI, Anthropic, Google et Mistral  
- Fenêtres de contexte jusqu’à 1 million de tokens  
- GPT‑5.5 et GPT‑5.5 Pro pré‑enregistrés  
- Support de l’API Adaptive Thinking d’Anthropic (Opus 4.7)  

Merci à **Mirko** et **Oliver** pour les mises à jour — et à **Justus** pour l’extension du LLM gateway avec `prompt_cache_key` et `max_output_tokens`.

---

## Bug Fixes

- Modèles Google : gestion stable des thought signatures sur plusieurs tool calls  
- Mistral : plus de timeout de 30 secondes sur les requêtes complexes  
- Drag & drop dans l’explorateur de fichiers rétabli  
- Suppression de dossiers et mise à l’échelle des tableaux corrigées  
- Les instructions de projet se mettent à jour instantanément  
- Logs d’audit compliance correctement liés aux messages de chat  

De nombreux petits détails ont été améliorés — avec un impact concret au quotidien.

---

## Under the Hood

- Stabilité améliorée des WebSockets et de la suppression de Spaces  
- Suppression de fichiers par lots pour éviter l’épuisement des ressources d’infrastructure  
- 44 dépendances mises à jour  

---

Merci à **Pascal, Mirko, Justus, Oliver** et dependabot pour cette version majeure.

— 40 PRs · 114 fichiers modifiés · ~7 900 lignes ajoutées

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
