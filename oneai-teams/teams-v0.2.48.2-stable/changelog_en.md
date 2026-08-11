# OneAI teams-v0.2.48.2-stable — Security and Monitoring Hardening

**Release Date:** 2026-08-11

## Security

We have closed a security vulnerability that could, under certain circumstances, make a monitoring endpoint accessible through alternative casing. Access protection is now enforced consistently.

We also strengthened several safeguards across our operational services:

- Sensitive information in shutdown messages is redacted more reliably.
- Encryption key validation at startup has been standardized.
- Very long path values can no longer disrupt log output.

## Improvements

- Server-level system warnings are now reliably visible in monitoring, helping operations teams identify and respond to issues earlier.
- Error data in the monitoring dashboard is now organized more clearly.

## Under the Hood

- Automated post-deployment checks are working reliably again.
- Release documentation and version information have been updated.

Thanks to **Mirko** for delivering these security and operational improvements.

_13 commits · 32 files changed_

---
*This changelog was generated automatically by the OneAI Changelog Pipeline.*
