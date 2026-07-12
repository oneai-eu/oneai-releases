# OneGlue v0.202.0 — What's New

**Release Date:** 2026-07-13

Manage your SCVMM virtual machines end-to-end — reconfigure, resize storage, and retire — right from OneGlue, every action confirmed and audit-logged.

## Edit a VM's configuration

From a VM's detail view you can now open **Edit** and change:

- **Identity** — name, description, owner and notes, applied **live** with a single click.
- **Compute** — CPU count and memory. Because these require the VM to restart, OneGlue asks you to **confirm and warns you the VM will power off** first.

Every VM now also has a **detailed view** (disks, network adapters, memory settings, power state) with a clear "last synced" time and a one-click **Refresh**.

## Manage virtual disks — with Storage QoS

- **Expand** a disk (online for SCSI disks; VMs on IDE disks are restarted with a confirmation).
- **Add** a new disk.
- **Storage QoS** — cap a disk's throughput with minimum/maximum **IOPS** or a named Storage-QoS policy (where your storage fabric supports it; the controls stay hidden when it doesn't).
- **Remove** a disk — a destructive, irreversible action, so it sits behind a **separate permission**, a **type-the-VM-name confirmation**, and a strong audit record.

## Delete a VM

Retire a virtual machine directly from OneGlue — a hard delete guarded by a **separate permission**, a **type-the-VM-name confirmation**, and a full audit-log entry (who, when, why).

## Governed by design

Every write action is **permission-controlled per action** (edit, disk-remove and delete are each independently grantable), **risk-graduated** (harmless changes are one click; disruptive or destructive ones require explicit confirmation), and **recorded in the audit log**.
