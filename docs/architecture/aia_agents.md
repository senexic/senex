---
title: "AIA: local-first personal intelligence"
sidebar_label: AIA
description: What AIA (Artificial Intelligent Assistant) does for its owner, its current capability boundary, and its permission model.
---

# AIA: local-first personal intelligence

[AIA](../concepts.md#aia) — Artificial Intelligent Assistant — is the user-facing foundation of SENEX. Its purpose is to help a person work with their own context while keeping control, visibility, and consent close to the point where that context is used.

:::info Working foundation
Local inference, governed knowledge, encrypted local storage, the owner wallet and devices, backup and recovery, and governed sharing between owners are implemented and tested for the scope stated in [Current status](../status.md). Networking, proofs, and the mobile app are V1-testnet targets. AIA is not a production release.
:::

## What AIA is designed to do

AIA brings together three user outcomes:

- **Contextual assistance:** use material the user selects to support conversation, research, organization, and task workflows.
- **Local control:** keep sensitive working context in the user-controlled environment unless a particular exchange is approved.
- **Governed cooperation:** allow narrowly scoped requests between participants without turning personal data into a shared repository.

The local-first approach is architectural, but it is not absolute isolation. Features that call an external service, communicate with another participant, or retrieve public information can create a data flow beyond the device. AIA should make that boundary understandable before the exchange and expose enough information for the user to make a meaningful choice.

## Capability boundary today

Each row uses the status from [Current status](../status.md), which lists the detail and the limits.

| Area | Public capability boundary | Status |
| --- | --- | --- |
| Owner authority | One owner wallet; ownership never depends on a login or a SENEXIC account | **Working foundation** |
| Authorized devices | A separate key for each device, a wallet-signed credential, and revocation per device. See [Wallet, devices, and contribution roles](wallet_devices.md) | **Working foundation** |
| Local intelligence | A managed local inference engine; the owner supplies a model or explicitly approves a download. Intent routers are rule-based, not language models | **Working foundation** |
| Governed knowledge | Local retrieval, memory, provenance, and answers that show their evidence | **Working foundation** |
| Protected content | Encrypted local storage and wallet keys sealed by default; complete device security still depends on the surrounding environment | **Working foundation** |
| Backup and exit | A four-step wallet backup flow, same-machine recovery, a signed activity timeline, and Right to Exit export of the owner's data | **Working foundation** |
| Governed sharing | Grants between owners with the grantee and expiry enforced; purpose is recorded but not yet enforced | **Working foundation** |
| Networking | Signed messages between agents, tested between processes on one machine | **V1-testnet target** |
| Mobile | Desktop-side pairing tested against a simulated phone; the mobile app is in development | **V1-testnet target** |
| Contribution records | Proof of Data and Proof of Computation records running locally | **V1-testnet target** |
| ASHA accounting | Simulated accounting with no monetary value | **Research direction** |

"Working foundation" is intentionally narrow. It means implemented and tested for a stated scope, not universal platform support, production assurance, or a public network service.

## Trust and permission model

AIA treats access as a purpose-bound permission rather than a permanent entitlement. A governed request should identify:

1. the party or capability requesting access;
2. the purpose of the request;
3. the category and scope of information involved;
4. whether the request is one-time or continuing; and
5. how the user can decline or revoke it.

The intended result is bounded disclosure: return what is useful for the approved task, not the underlying collection by default. This principle also applies to derived information, because summaries and inferences may remain sensitive even when raw source material is not transferred.

## Relationship to the network

AIA does not require a live public blockchain to provide local value. The [Intelligent Chain](intelligent_chain.md) is the planned coordination layer, to be qualified on V1-testnet. It is intended to support authenticated cooperation, consistent event records, and contribution-aware workflows between independent participants.

:::caution V1-testnet target
Network participation, contribution records, and test-only ASHA are V1-testnet targets. They are not production services, financial assets, or evidence of a live contribution economy.
:::

V1 is the planned production network. It starts from a fresh genesis and launches only after V1-testnet evidence and external review. Testnet identity, state, and test-only ASHA do not carry over.

## Assurance limits

Local-first design reduces unnecessary central collection, but the complete security posture also depends on device integrity, account access, software supply chain, backups, user choices, and any approved external recipient. See [Privacy and security](../privacy/index.md) for the public assurance model.

:::warning External validation required
Privacy boundaries, authorization behavior, update safety, and cross-platform consistency require independent testing. Until that evidence exists, AIA should be evaluated as a working foundation, not as a certified secure environment.
:::

Implementation-specific model choices, storage formats, permission internals, and network interfaces are not published in these public docs.

## Related pages

- [Current status](../status.md)
- [Wallet, devices, and contribution roles](wallet_devices.md)
- [Architecture overview](index.md)
- [Privacy and security](../privacy/index.md)
