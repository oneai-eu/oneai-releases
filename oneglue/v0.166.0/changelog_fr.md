# OneGlue v0.166.0 — Nouveautés

**Date de publication :** 2026-07-05

Deux corrections attendues depuis longtemps et une nouvelle fonctionnalité pratique.

## Sessions à distance : les clics fonctionnent à nouveau

Dans les sessions RDP et VNC, les clics de souris atterrissaient au mauvais endroit — vers le coin supérieur gauche de l'écran plutôt qu'à l'endroit où vous aviez cliqué. Cela rendait les menus et les boutons peu fiables, voire totalement inutilisables dans les sessions avec mise à l'échelle. La cause sous-jacente est maintenant corrigée, et les clics se comportent comme prévu.

## Les liens partagés survivent maintenant à la connexion

Lorsque quelqu'un vous envoie un lien OneGlue — vers un appareil, un document, une entrée réseau ou tout autre élément — l'ouvrir alors que vous n'êtes pas connecté ne vous amène plus sur le tableau de bord après la connexion. Vous atterrissez directement sur l'élément pointé par le lien. Cela fonctionne avec la connexion par Passkey, par e-mail et par SSO.

## Nouveau : bouton « Copier le lien » sur chaque page de détail

Chaque page de détail (appareils, identifiants, documents, réseaux, domaines, certificats SSL, enregistrements d'actifs flexibles, emplacements, contacts) dispose désormais d'un bouton « Copier le lien ». En un seul clic, la bonne URL canonique est copiée dans votre presse-papiers — celle qui fonctionne de manière fiable comme lien partagé, sans confusion de session ou de domaine.
