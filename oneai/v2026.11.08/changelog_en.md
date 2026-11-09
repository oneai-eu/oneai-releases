# OneAI v2026.11.08 — Faster Spaces, Edit Agents in Chat, File Trash

**Release Date:** 2026-11-09

## New

- **Large Spaces open much faster.** Folders now load page by page.
- **Find and edit agents in chat.** You no longer need to create a new agent for every change.
- **Trash for deleted files.** You can restore deleted files for 30 days. After that they are permanently gone.
- **Estimated time saved.** Hover over the € amount below a new answer. The value is a rule of thumb, not a measurement.
- **Roadmap tab under What's New.** The tab is there but still empty. Entries will follow.

## ⚠️ What changes for you

Please check these points if you use these features:

- **Agents with fixed Spaces or connections:** If the user lacks access to one of them, the agent no longer continues with reduced access. It is refused instead. Scheduled runs fail and their trigger is paused. Grant the access or adjust the agent.
- **Unattended agents:** They now stop before irreversible actions and before MCP tools without an annotation, until this is allowed in both the organization and the agent.
- **Confirmations:** Irreversible actions now always show a confirmation card, even while a trust window is open.
- **Datasets:** Models now write SQL. The previous tools such as `insert_data`, `update_data` and `delete_data` no longer exist, and saved agents lose them without notice. Please check agents that write to datasets. Editing rows, creating tables and CSV import keep working. Changing columns is no longer possible on the dataset screen, only in chat: the model makes the change and you confirm it.
- **Canvas apps and dashboards using datasets:** We have moved them to the new database. If an app no longer saves or a query fails, please contact us.
- **oneAI Standard:** We have switched the oneAI Standard model to DeepSeek V4.1, hosted in Germany.
- **Teams bot:** The connection now requires Microsoft sign-in to be enabled for you.

## Thank you

To Pascal, Justus, Obaid, Mirko, Oliver and Santi.
