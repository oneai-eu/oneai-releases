# OneGlue v0.163.0 — What's New

**Release Date:** 2026-07-04

A follow-up to the device-agent improvements: your connected devices now report their full network details, and agent updates are more reliable.

## Full network details from your devices

Devices connected through the OneGlue agent now report their complete set of network interfaces — names, MAC addresses and IP addresses — straight into the device's record.

- **See every interface.** A device's network adapters now populate automatically in OneGlue, so you get an accurate, up-to-date picture without typing them in by hand.
- **More reliable matching.** Because the agent now reports a device's hardware network address, OneGlue links an agent to the right existing device more reliably — and still asks you to confirm whenever it isn't certain.

## More reliable agent updates

We hardened the way the device agent updates itself: an update now reliably finishes and the agent comes back online on its own, without needing a manual restart.
