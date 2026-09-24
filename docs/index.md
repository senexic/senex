---
title: SENEX Documentation
sidebar_label: Overview
description: What SENEX Intelligent Chain and AIA are, what works today, and how the project moves toward V1-testnet and V1.
slug: /
---

# SENEX Documentation

SENEX Intelligent Chain is a human-owned intelligence ecosystem. Personal AIA software works with owner-approved context on the owner's own devices. Future network components are intended to let independently owned agents cooperate under each data owner's control, and to recognize the value that data and computation actually contribute.

:::info Where the project is today
SENEX is a local-first desktop foundation under active development. The current milestone is **M0 — Trust foundations**: every public statement must match the software, keys must be protected by default, and the full test suite must pass. There is no public network yet, and ASHA exists in the software only as simulated accounting. See [Current status](status.md).
:::

## Product direction

| Horizon | Purpose | Status |
| --- | --- | --- |
| AIA foundation | A private, controllable assistant that works with the owner's local context | **Working foundation** |
| Proof-of-data kernel | Governed data access across owners, with value measured at the moment data is used | **Research direction** |
| V1-testnet | The complete V1 product and protocol, run as a production candidate with test-only ASHA | **V1-testnet target** |
| V1 | A separate fresh-genesis production network, launched only after testnet evidence and external review | **External validation required** |
| GENOME | Collective intelligence formed by connected agents, governed data, computation, proofs, and outcomes | **Research direction** |

V1 is one integrated product: desktop, mobile, wallet and devices, governed data, local inference, networking, proofs, a permissioned contribution chain, accounting, marketplace, security, operations, and release. No single component is the product on its own, and no milestone exit is a V1 claim.

## Design principles

- **Local first:** sensitive context stays in the owner's environment unless the owner authorizes a specific exchange.
- **Owner governs every hop:** when one agent asks another, each data owner on the path decides what may be used.
- **Explicit purpose:** a request states what is needed, why, and what result will be returned.
- **Minimum disclosure:** cooperation uses the smallest useful amount of information.
- **Revocable control:** ongoing permissions are visible and removable.
- **Proof before value:** contribution is recognized only after it has been verified.
- **Verifiable progress:** roadmap language is not a substitute for implementation evidence, testing, or independent assessment.

:::warning External validation required
Security, privacy, performance, governance, and economic claims remain subject to independent testing and review. No page in these docs should be read as a certification, a formal privacy guarantee, a financial offer, or an assurance that a production launch will occur.
:::

## Explore the documentation

- [Current status](status.md): what works today, what is partial, and what is simulated.
- [Key concepts](concepts.md): AIA, GENOME, ASHA, V1-testnet, V1, and the other terms these docs use.
- [Roadmap](roadmap.md): milestones M0 to M5 and the evidence each must produce.
- [Architecture](architecture/index.md): trust boundaries between AIA, the network, and GENOME.
- [Wallet and devices](architecture/wallet_devices.md): one owner wallet, many devices, and contribution roles.
- [Privacy and security](privacy/index.md): user controls, data flows, threats, and assurance limits.
- [Proof of data](thesis.md): the research thesis and how each hypothesis will be tested.
- [ASHA and contribution](tokenomics/index.md): how contribution is accounted for today and what gates stand before any live use.

These public docs explain outcomes, trust boundaries, and status. They intentionally leave out implementation details that could weaken security or enable reconstruction.
