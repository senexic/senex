---
title: Security threat model
sidebar_label: Threat model
description: The classes of risk SENEX considers, from device compromise to network manipulation and operator abuse.
---

# Security threat model

This public threat model identifies the classes of risk SENEX considers and the trust boundaries where they arise. It intentionally avoids operational details that could help an attacker reproduce the system, target a control, or infer an internal security design.

:::info Working foundation
Current controls cover the AIA user environment: encrypted local storage, sealed wallet keys, a hardened local API, device revocation, and governed sharing between owners, as listed in [Current status](../status.md). They have not received independent validation.
:::

## Assets to protect

The public model prioritizes:

- personal source material and derived sensitive information;
- user permissions, identity, and account control;
- the integrity of AIA actions and displayed results;
- the authenticity of approved exchanges;
- future network records and governance decisions; and
- the availability of recovery, revocation, and challenge paths.

## Threats at a glance

The status column describes the controls for each threat today, using the labels from [Current status](../status.md#status-labels).

| Threat | Boundary | Status of controls |
| --- | --- | --- |
| [User environment compromise](#user-environment-compromise) | User environment | **Working foundation** for local protections; a compromised device stays out of scope |
| [Excessive or misleading permission](#excessive-or-misleading-permission) | Governed exchange | **Working foundation**: grantee and expiry enforced, purpose recorded but not yet enforced |
| [Untrusted recipient](#untrusted-recipient) | Approved recipient | **Research direction**: sending computation to the data instead of data to the recipient |
| [Software and update compromise](#software-and-update-compromise) | Operators and maintainers | **External validation required**: development and internal builds are unsigned |
| [Network manipulation](#network-manipulation) | Coordination network | **V1-testnet target** |
| [Privacy leakage through metadata or results](#privacy-leakage-through-metadata-or-results) | All boundaries | **Research direction**: no formal privacy guarantee is claimed |
| [Governance and operator abuse](#governance-and-operator-abuse) | Operators and governance | **V1-testnet target** for published policies; independent oversight needs **external validation** |

## Threat categories

### User environment compromise

Malware, account takeover, unsafe extensions, insecure backups, physical access, or misconfiguration may expose local context or authorize actions without meaningful user intent. Local-first architecture reduces central collection but cannot make a compromised device trustworthy.

### Excessive or misleading permission

A request may be too broad, unclear, persistent, or unrelated to the user's expected purpose. Sensitive inferences can also escape even if raw source material does not. Controls should favor understandable scope, minimum disclosure, and visible continuing access.

### Untrusted recipient

An approved recipient may retain, combine, misrepresent, or redistribute information. Technical revocation cannot force an independent recipient to forget information already received. The primary defenses are minimization, recipient clarity, and accountability before disclosure.

### Software and update compromise

Defects, malicious dependencies, unsafe releases, or compromised update channels may change how data is processed. Release provenance, constrained privileges, testing, rollback readiness, and incident response are required assurance areas; implementation details remain private.

### Network manipulation

Future participants may submit misleading events, replay prior actions, create conflicting views, coordinate dishonestly, or interfere with service. V1-testnet is intended to examine these behaviors with test-only ASHA, which has no monetary value.

### Privacy leakage through metadata or results

Timing, frequency, identity relationships, error behavior, and derived outputs may reveal information even when content is protected. Privacy review must cover the complete observable system, not only stored payloads.

### Governance and operator abuse

Privileged parties may make unauthorized changes, hide incidents, or apply policy inconsistently. Change transparency, separation of duties, reviewable decisions, and bounded emergency authority are governance requirements.

:::caution V1-testnet target
Network defenses are V1-testnet targets. V1-testnet is not a live public blockchain or a production security guarantee, and test-only ASHA carries no financial rights.
:::

## Assurance boundary

Threats are tracked internally with implementation-specific scenarios, control ownership, test evidence, and remediation status. Public pages disclose categories and user-relevant limitations without publishing exploit paths, thresholds, topology, or control internals.

:::warning External validation required
Independent security assessment, adversarial testing, and deployment review are required before V1. No system can promise zero risk, and post-V1 [GENOME research](../architecture/genome.md) would require a new threat model rather than inheriting V1 assurances.
:::

## Related pages

- [Privacy and security](index.md)
- [Wallet, devices, and contribution roles](../architecture/wallet_devices.md)
- [Economic integrity](../asha/security.md)
- [Governance model](../governance.md)
