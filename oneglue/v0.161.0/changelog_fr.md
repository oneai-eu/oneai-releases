# OneGlue v0.161.0 — Nouveautés

**Date de publication :** 2026-07-03

Cette version rend la connexion d'un appareil à OneGlue via l'agent intégré plus simple et plus intelligente : une seule commande pour l'installer, et fini les entrées d'appareil créées en double par accident.

## Installation de l'agent d'appareil en une commande

Connecter une machine à OneGlue avec l'agent d'appareil demandait auparavant plusieurs étapes de configuration manuelles. Désormais, l'agent préconfiguré que vous téléchargez depuis OneGlue s'installe tout seul, de bout en bout.

- **Une commande, tout est configuré.** Sur un hôte Linux, l'installateur téléchargé enregistre maintenant l'agent comme un service d'arrière-plan géré, l'exécute sous un compte dédié à privilèges minimaux et le connecte automatiquement à OneGlue — sans configuration manuelle du service.
- **Fonctionne en toute sécurité en arrière-plan.** L'agent continue de fonctionner après les redémarrages, n'établit que des connexions sortantes (il n'ouvre aucun port entrant) et opère sous un profil verrouillé à privilèges minimaux.

## Appariement d'appareils plus intelligent — plus de doublons

Lorsqu'une machine que vous avez déjà documentée dans OneGlue connecte son agent, OneGlue la reconnaît désormais et se rattache à l'enregistrement existant au lieu d'en créer un second.

- **Reconnaît l'appareil que vous avez déjà.** L'agent est associé à une configuration existante grâce à des signaux forts (comme l'adresse réseau matérielle), de sorte qu'une machine déjà ajoutée n'apparaît pas en double.
- **En cas de doute, il demande.** Si OneGlue ne peut pas associer un agent à un appareil existant avec certitude, il le signale pour votre vérification au lieu de deviner — vous le reliez en un clic.
- **Vos informations sont conservées.** Les informations que vous avez renseignées (comme le nom complet d'un appareil) sont conservées et ne sont jamais écrasées par le rapport automatique de l'agent.
