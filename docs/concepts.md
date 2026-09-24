---
title: Key concepts
description: Definitions of the terms used across the SENEX documentation, with their current status.
---

# Key concepts

These definitions are used consistently across the documentation. Where a concept is not yet implemented, its status says so.

## The ecosystem

- **SENEX Intelligent Chain:** The ecosystem as a whole: owners, their agents, governed data, computation, proofs, and the network that coordinates them. It is not one agent or one model.
- **SENEXIC:** The company and brand behind SENEX, and the name of its sites: [senexic.com](https://senexic.com), [senexic.io](https://senexic.io), and this documentation.
- **AIA (Artificial Intelligent Assistant):** The owner's personal agent. AIA runs on the owner's devices and works with governed local context. Status: **Working foundation**. See [AIA](architecture/aia_agents.md).
- **GENOME:** The collective intelligence expected to form from connected agents, governed data, computation, proofs, and outcomes. Today it exists only as a local graph projection; it is not a running network mind. Status: **Research direction**. See [GENOME](architecture/genome.md).
- **Recursive governed access:** One owner's agent may ask another owner's agent, which may ask others. Every hop is governed by the owner of the data at that hop. Status: **Research direction**. See [Proof of data](thesis.md).
- **Neurolink:** A governed path that one owner grants to another for a bounded purpose. It is a trust relationship, not a brain-computer interface. Status: **Working foundation** for grants between owners on one machine.

## Proof and value

- **Proof of Data:** Evidence that a piece of owner-governed data was used in a computation, and what it contributed. See [Proof of data](thesis.md).
- **Proof of Computation:** Evidence that a declared computation was performed, checked by re-execution.
- **Proof of Intel:** The combination of Proof of Data and Proof of Computation into one record of useful contribution.
- **ASHA:** The native unit for contribution accounting in SENEX. In the software today ASHA is simulated and has no monetary value. Any live use depends on legal, security, economic, and operational readiness. See [ASHA and contribution](tokenomics/index.md).
- **Hybrid Ledger:** The recommended default accounting model for ASHA, unless experiments show a better one. Status: **Research direction**.

## Network and release

- **Permissioned Contribution Chain:** The chain V1 targets: admitted validators record accepted contributions and settle them after finality. Open, permissionless admission is a separate later decision. Status: **V1-testnet target**. See [Intelligent Chain](architecture/intelligent_chain.md).
- **V1-testnet:** The production candidate. It runs the complete V1 product and protocol with test-only ASHA and must pass the G0 to G13 qualification gates. Status: **V1-testnet target**.
- **V1:** The production network, launched from a fresh genesis only after V1-testnet evidence and external review. Nothing migrates from V1-testnet. Status: **External validation required**. See [Network transition](migration.md).
- **Milestones M0 to M5:** The ordered path to V1: trust foundations, the proof-of-data kernel, open research, private beta, V1-testnet, and V1. See the [Roadmap](roadmap.md).
- **Level 0:** Documentation, simulation, prototypes, and preparation for V1. SENEX is at Level 0 today.
- **Level 1:** The first operational layer, after V1 and after the way initial contribution accounting should work has been established.
- **Super System:** The broader multi-node operational network that SENEX aims to become.
- **Bootstrap Company Node:** Company hardware may help the network start, then becomes one node among many. No company hardware is part of any network today.

## Wallet and devices

- **Wallet:** One private owner identity. The wallet, not a login, is the source of ownership. See [Wallet and devices](architecture/wallet_devices.md).
- **Device key:** Each device has its own key and a credential signed by the wallet. Devices can be revoked individually.
- **Wallet account commitment:** The value that appears in signed and public records instead of the raw wallet identifier.
- **Contribution roles:** `request`, `approve`, `data`, `compute`, `validate`, `block_propose`, and `relay`. A role is a routing declaration, not a permission grant; the network accepts a contribution only after its proof verifies.
