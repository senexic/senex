# AIA: Local-First Personal Intelligence

AIA is the user-facing foundation of SENEX. Its purpose is to help a person work with their own context while keeping control, visibility, and consent close to the point where that context is used.

:::info Working foundation
Local execution, local context handling, user-directed workflows, and governed-sharing foundations are under active development. Availability and maturity may vary by platform and build; this page describes the intended product boundary, not a universal production guarantee.
:::

## What AIA is designed to do

AIA brings together three user outcomes:

- **Contextual assistance:** use material the user selects to support conversation, research, organization, and task workflows.
- **Local control:** keep sensitive working context in the user-controlled environment unless a particular exchange is approved.
- **Governed cooperation:** allow narrowly scoped requests between participants without turning personal data into a shared repository.

The local-first approach is architectural, but it is not absolute isolation. Features that call an external service, communicate with another participant, or retrieve public information can create a data flow beyond the device. AIA should make that boundary understandable before the exchange and expose enough information for the user to make a meaningful choice.

## Working foundation scope

The current development baseline provides foundations in the following areas.
Each item remains subject to build-specific testing and release qualification:

| Area | Public capability boundary |
| --- | --- |
| Owner authority | An owner-controlled identity direction that does not depend on a centralized SENEX account |
| Authorized devices | Multiple separately admitted devices with a foundation for bounded authority and revocation |
| Local intelligence | Local model execution and lifecycle foundations for supported configurations |
| Governed knowledge | Local retrieval, memory, provenance, and answer-evidence foundations |
| Protected content | Encrypted local content-storage foundations; complete device security still depends on the surrounding environment |
| Product surfaces | Desktop, local API, command-line, and mobile foundations at different stages of maturity |
| Admitted collaboration | Permission-bounded interaction between participants that have been explicitly admitted |
| Contribution research | Foundations for Proof of Data, Proof of Computation, Proof of Intel, provider-marketplace simulation, and test-only accounting |

“Foundation” is intentionally narrow. It indicates demonstrated development
groundwork for a stated scope, not universal platform support, production
assurance, or a public network service.

## Trust and permission model

AIA treats access as a purpose-bound permission rather than a permanent entitlement. A governed request should identify:

1. the party or capability requesting access;
2. the purpose of the request;
3. the category and scope of information involved;
4. whether the request is one-time or continuing; and
5. how the user can decline or revoke it.

The intended result is bounded disclosure: return what is useful for the approved task, not the underlying collection by default. This principle also applies to derived information, because summaries and inferences may remain sensitive even when raw source material is not transferred.

## Relationship to the network

AIA does not require a live public blockchain to provide local value. The future [V1-testnet coordination layer](intelligent_chain.md) is intended to test authenticated cooperation, consistent event records, and contribution-aware workflows between independent participants.

:::caution V1-testnet target
Network participation, contribution records, and test value remain future testnet capabilities. They are not production services, financial assets, or evidence of a live token economy.
:::

A possible V1 production network would be a fresh-genesis system, launched only after separate security, operational, and governance decisions. Testnet identity, state, or value would not automatically carry over.

## Assurance limits

Local-first design reduces unnecessary central collection, but the complete security posture also depends on device integrity, account access, software supply chain, backups, user choices, and any approved external recipient. See [Privacy and Security](../privacy/index.md) for the public assurance model.

:::warning External validation required
Privacy boundaries, authorization behavior, update safety, and cross-platform consistency require independent testing. Until that evidence exists, AIA should be evaluated as a working foundation under development rather than a certified secure environment.
:::

Implementation-specific model choices, storage formats, permission internals, and network interfaces are not published in these public docs.
