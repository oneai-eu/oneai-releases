# OneGlue v0.157.0 — What's New

**Release Date:** 2026-07-02

Three things arrive together in this release: a plain-language record of what's new, an AI assistant that can now safely act on your devices, and a broad security hardening pass that quietly makes the whole platform sturdier. Here's what's new right now.

## This changelog & release notes

We're opening up our release notes. OneGlue improves constantly, and until now most of that work happened quietly behind the scenes — you'd notice a new button or a faster page, but the full story was buried in technical logs. This page changes that: a clear, plain-language record of what's new, written for the people who actually use OneGlue every day.

- **See what's changed at a glance.** Updates are grouped into meaningful milestones — the story of what we shipped — instead of a wall of version numbers you'd have to decode.
- **Understand the benefit, not the mechanics.** Every entry explains what you can now do and what got safer, faster, or simpler, in everyday language rather than engineering terms.
- **In your language, always current.** The changelog is localized and kept up to date as new features ship, so you never have to hunt to find out what's new.

## Your AI assistant, now hands-on

Once your OneGlue workspace is connected to oneAI, a built-in AI assistant becomes available across the app. It understands your IT documentation and can help you find answers in plain language — and, when you approve it, take real action on your connected devices. The goal is a genuine working partner that lives inside OneGlue, not a bolt-on chatbot: it operates entirely within what you can already see and access, and you stay in control of every action it takes.

- **Ask questions across everything you can see.** Open the assistant from any device page, or use the workspace-wide assistant to ask about your configurations, documents, and assets conversationally — no need to know where a fact is filed. Because it works within your own permissions, it only ever surfaces information you already have access to.
- **Get real answers about live devices.** With your explicit approval, the assistant can run read-only checks against a connected device — things like disk usage or system status — and explain what the results mean, so you diagnose from OneGlue instead of jumping between tools and terminals.
- **Let it propose fixes — you stay in control.** The assistant can suggest corrections to device details such as hostname, IP addresses, operating system, notes, and more. Every proposal is shown as a clear before/after comparison and only applies when you approve it; each applied change is versioned and fully reversible, so nothing happens to your records without your say-so.
- **Save any answer as documentation in one click.** When a response is worth keeping, turn it into a saved document attached to the relevant device — capturing the reasoning and the outcome so the knowledge stays with your records instead of scrolling out of a chat window.
- **Full transparency on every run.** Each answer shows which AI model and expertise profile produced it, so you always know how a result was generated and can trust it accordingly.

> **Note:** The AI assistant and the device-action features described here require your OneGlue workspace to be paired with oneAI. If you haven't connected yet, pairing is a one-time setup that unlocks everything in this section.

## Stronger by default: a security hardening pass

Alongside the new assistant, we ran a broad security and reliability review across the entire platform — the kind of deep, unglamorous work that never shows up as a feature but is exactly what you want your documentation and secrets tool to be doing. Most of it happens invisibly in the background; the result is simply a OneGlue you can trust with more confidence.

- **Up-to-date, hardened foundations.** We refreshed the core components OneGlue is built on and applied the latest security fixes across the stack, so known weaknesses are closed before they can ever be a problem for you.
- **Tighter internal isolation.** Sensitive services — like the database that holds your records — are now walled off from the parts of the system that face the public internet. If any single component were ever compromised, this dramatically limits how far a problem could spread.
- **Stronger protection for automated actions.** The approved device actions introduced with the AI assistant now use single-use, tamper-evident authorization and verified device identity. In plain terms: an approved action can't be captured and replayed later, and it can't be redirected to the wrong machine.
- **Everything stays auditable.** Security-relevant events continue to be recorded in a tamper-evident audit trail, so there's always a trustworthy, reviewable record of what happened and who did it.

---
*This changelog was generated automatically. Source: [OneGlue Releases](https://github.com/oneai-eu/oneglue/releases)*
