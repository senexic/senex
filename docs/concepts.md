---
title: Key concepts
description: Definitions of the terms used across the SENEX documentation, with their current status.
---

# Key concepts

These definitions are used consistently across the documentation. Where a concept is not yet implemented, its status says so. Status labels are defined on the [Current status](status.md#status-labels) page.

## The ecosystem

### SENEX Intelligent Chain {#senex-intelligent-chain}

The ecosystem as a whole: owners, their agents, governed data, computation, proofs, and the network that coordinates them. It is not one agent or one model. "SENEX" is the short name.

### SENEXIC {#senexic}

The company and brand behind SENEX, and the name of its sites: [senexic.com](https://senexic.com), [senexic.io](https://senexic.io), and this documentation.

### AIA {#aia}

AIA — Artificial Intelligent Assistant: the owner's personal agent. AIA runs on the owner's devices and works with governed local context. Status: **Working foundation**. See [AIA: local-first personal intelligence](architecture/aia_agents.md).

### AIA Chain {#aia-chain}

An early, browser-based research prototype that tested coordination between participants. It is retired and is not the current AIA product. See the [AIA Chain research archive](aia/index.md).

### GENOME {#genome}

The collective intelligence expected to form from connected agents, governed data, computation, proofs, and outcomes. Today it exists only as a local graph projection; it is not a running network mind. Status: **Research direction**. See [GENOME: collective intelligence research](architecture/genome.md).

### Recursive governed access {#recursive-governed-access}

One owner's agent may ask another owner's agent, which may ask others. Every hop is governed by the owner of the data at that hop. Status: **Research direction**. See [Proof of Data](thesis.md).

### Neurolink {#neurolink}

A governed path that one owner grants to another for a bounded purpose. It is a trust relationship, not a brain-computer interface. Status: **Working foundation** for grants between owners on one machine.

## Proof and value

### Proof of Data {#proof-of-data}

Evidence that a piece of owner-governed data was used in a computation, and what it contributed. The research thesis behind it is on the [Proof of Data](thesis.md) page. Status: **V1-testnet target**; today the records run locally on one machine.

### Proof of Computation {#proof-of-computation}

Evidence that a declared computation was performed, checked by re-execution. Status: **V1-testnet target**; today it runs locally on one machine.

### Proof of Intel {#proof-of-intel}

The combination of Proof of Data and Proof of Computation into one record of useful contribution. The name describes a research objective; it does not mean that a public consensus mechanism or reward formula is deployed.

### ASHA {#asha}

The unit SENEX uses for contribution accounting. In the software today ASHA is simulated and has no monetary value; on V1-testnet it will be test-only. Any live use depends on legal, security, economic, and operational readiness. Status: **Research direction**. See [ASHA and contribution accounting](asha/index.md).

## Network and release

### Permissioned contribution chain {#permissioned-contribution-chain}

The chain V1 targets: admitted validators record accepted contributions and settle them after finality. Open, permissionless admission is a separate later decision. Status: **V1-testnet target**. See [Intelligent Chain: coordination and accountability](architecture/intelligent_chain.md).

### V1-testnet {#v1-testnet}

The production candidate. It runs the complete V1 product and protocol with test-only ASHA and must pass the G0 to G13 qualification gates. Status: **V1-testnet target**.

### V1 {#v1}

The planned production network, launched from a fresh genesis only after V1-testnet evidence and external review. Nothing migrates from V1-testnet. Status: **External validation required**. See [Network transition and upgrade policy](migration.md).

### Milestones M0 to M5 {#milestones}

The ordered path to V1: trust foundations, the Proof of Data kernel, open research, private beta, V1-testnet, and V1. SENEX is at M0 today. See the [Roadmap](roadmap.md).

## Wallet and devices

### Wallet {#wallet}

One private owner identity. The wallet, not a login, is the source of ownership. See [Wallet, devices, and contribution roles](architecture/wallet_devices.md).

### Device key {#device-key}

Each device has its own key and a credential signed by the wallet. Devices can be revoked individually.

### Wallet account commitment {#wallet-account-commitment}

The value that appears in signed and public records instead of the raw wallet identifier.

### Contribution roles {#contribution-roles}

`request`, `approve`, `data`, `compute`, `validate`, `block_propose`, and `relay`. A role is a routing declaration, not a permission grant; the network accepts a contribution only after its proof verifies.

## Related pages

- [Current status](status.md)
- [Roadmap](roadmap.md)
- [Architecture overview](architecture/index.md)
