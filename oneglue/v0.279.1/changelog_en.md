# OneGlue v0.279.0 — What's New

**Released:** 2026-10-11

**See exactly what you are granting when you invite someone — and pickers now follow the organization you are working in.**

## Inviting and changing roles now shows the reach

- **Roles that cover the whole Tenant say so everywhere.** Whether you are inviting someone, changing a role, or working in the superadmin area, every tenant-wide role now states that it applies to **all** organizations — and on the invite screen you see how many that is. Until now this appeared in one place only; now it appears in every one.
- **A short confirmation before it takes effect.** The first time you grant someone a tenant-wide role, OneGlue summarises who receives it and what it covers. One click forward and it is granted; one click back and nothing has happened. If you only meant to give access to a single organization, the way to do that sits right beside it.

## Pickers and access overviews follow your organization

- **People pickers, permission overviews and sharing lists show what belongs to your organization.** When you work inside an organization, you see that organization's people and grants — not everyone else's. Lists get shorter, search gets faster, and the choice is unambiguous. You can still see your own access at any time, and Tenant-Admins keep the full picture.
- **Naming prefixes and group details join them.** These views now follow the organization you are in as well.

## A check before every release

- **From now on, every new version has to prove that the boundaries between organizations hold.** OneGlue runs a dedicated check before each deploy. A version that does not pass it is not shipped — neither to the test environment nor to production. That promise now covers not just today's release but every future update.

## Small improvement

- The description of the **Org-Administrator** role now states plainly that the role can see the passwords stored in that organization by default — unless an individual password has been restricted.
