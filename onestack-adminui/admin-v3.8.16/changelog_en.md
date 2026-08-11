# OneAI admin-v3.8.16 — More reliable internal alerting

**Release Date:** 2026-08-11

## Bug Fixes

We fixed an issue in our internal monitoring and alerting infrastructure. On newly provisioned servers, a missing contact configuration could trigger a crash loop in Grafana alerting. The required configuration is now created automatically.

There are **no visible changes** to the Admin interface or day-to-day use of OneAI.

## Under the Hood

This update improves the reliability of operational monitoring, especially when setting up new system environments.

Thanks to **Mirko** for the swift fix and the release documentation update.

*2 commits · 9 files changed*

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
