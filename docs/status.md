---
title: Current status
description: What the SENEX software does today, what is partial or simulated, and what is not claimed.
---

# Current status

This page is the public source of truth for what exists. It is updated when the software changes, and every entry uses one of the four status labels below. If another page seems to say more, this page wins.

:::info Current milestone: M0 — Trust foundations
The work now is to make every public statement match the software, keep keys protected by default, and keep the full test suite passing before the next capability is built. See the [Roadmap](roadmap.md).
:::

| Status label | Meaning |
| --- | --- |
| **Working foundation** | Implemented and covered by behaviour tests for the stated scope. |
| **V1-testnet target** | Required for V1-testnet and not yet qualified. |
| **Research direction** | Being designed or tested as a hypothesis, with no release commitment. |
| **External validation required** | Needs independent technical, legal, operational, or security review. |

## What works today

| Area | What exists | Status |
| --- | --- | --- |
| Desktop app | Local-first desktop application with a local API and command line. Development builds are unsigned; consumer installers wait until the private beta (M3). | **Working foundation** |
| Local inference | Manages a local llama.cpp-compatible engine. The owner supplies a model or explicitly approves a download; no model is bundled. NVIDIA CUDA acceleration works; other accelerators are not yet used. | **Working foundation** |
| Governed knowledge | Governed source registry, trust ceilings, confirmed folder ingestion, encrypted vault and memory, and answers that show their evidence. | **Working foundation** |
| Wallet and devices | One owner wallet with a separate key for each device. Wallet keys are sealed by default: OS secure storage on desktop, a passphrase on the command line. Custody is not hardware-backed. | **Working foundation** |
| Device revocation | A revoked device can no longer sign API calls, proofs, or local validator votes. | **Working foundation** |
| Recovery | An encrypted recovery kit restores the wallet into an empty workspace on the same machine. Recovery on a second device is not yet verified. | **Working foundation** |
| Local protection | Encrypted storage for workspace secrets, vault, memory, and queues; one-time launch codes, content security policy, and host checks on the local API; terminal access off by default. Sealing of every chat-derived copy is being completed in M0. | **Working foundation** |
| Governed sharing | Grants between owners carry a commitment to the shared location, and the grantee and expiry are enforced. Purpose is recorded but not yet enforced, and task inputs are still sent to the assigned peer. | **Working foundation** |
| Networking | Signed messages between agents, tested between processes on one machine. Multi-machine networking, encrypted transport, and NAT traversal are not yet built. | **V1-testnet target** |
| Proofs and finality | Proof of Data and Proof of Computation records, re-execution by independent wallets, and prepare-and-commit finality, all running locally. There is no multi-validator network. | **V1-testnet target** |
| ASHA accounting | Simulated accounting only. No amount in the software has monetary value, and no product action moves value. | **Research direction** |
| Mobile | Desktop-side pairing and a device-signed API, tested against a simulated phone. The mobile app is in development; there is no signed mobile build. | **V1-testnet target** |
| GENOME | A local, privacy-preserving graph projection. There is no network-wide GENOME. | **Research direction** |

## Claims audit

In September 2026 every capability claim in the product README, feature list, and interface was checked against the code and its behaviour tests. Claims that overstated the software were corrected, and a remaining interface statement is being fixed in code rather than in wording. This page follows the corrected record.

## Not claimed

SENEX does not currently claim:

- a public, permissionless, or multi-validator network;
- live ASHA, or any value, transfer, redemption, or reward in the software;
- differential privacy, anonymity, or any other formal privacy guarantee;
- hardware-backed or non-exportable key custody;
- detection of undeclared common control (Sybil identities);
- independent security, cryptographic, or privacy review; or
- artificial general or super intelligence.

## V1-testnet qualification

V1-testnet is qualified through fourteen gates, G0 to G13, covering product truth and licensing, durable state, consensus, transport, runtime, the ASHA lifecycle, evidence, custody, privacy, governance, product journeys, cross-platform qualification, security and legal review, and the public testnet itself. The gates are in progress; none has exited yet. See [Network transition](migration.md) for how V1-testnet relates to V1.
