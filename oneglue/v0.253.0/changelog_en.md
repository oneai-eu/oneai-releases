# OneGlue v0.253.0 — What's New

**Release Date:** 2026-08-11

**Faster and more reliable for organizations with a lot of linked infrastructure.** This release fixes a rare issue that could freeze the interface for organizations with very large numbers of linked items, and makes the Related Items panel faster and cleaner across the board.

## Fixed: interface could freeze under very large link counts

- We fixed an issue where, in specific automated-sync scenarios, related infrastructure entries could keep getting recreated in a loop, quietly building up an unusually large number of linked items over time. For the small number of organizations affected, this could slow down or freeze parts of the interface. It's fixed at the source, and the affected data has been cleaned up.

## Related Items: faster, cleaner, more reliable

- **Loads a page at a time** — Related Items panels now fetch results with "Load more" instead of trying to render everything at once, and stay smooth even for resources with hundreds of links.
- **No more dead links** — items pointing at something that's already been deleted no longer show up in Related Items.
- **Clearer counts on Flexible Assets** — heavily-linked assets now show a "25+" style count instead of hiding how many links actually exist.
