---
title: Network transition and upgrade policy
sidebar_label: Network transition
description: How development, V1-testnet, and V1 stay separate, why V1 starts from a fresh genesis, and how upgrades are handled.
---

# Network transition and upgrade policy

This page explains how development builds, V1-testnet, and V1 stay separate, why V1 starts from a fresh genesis, and how software upgrades are handled. Test environments are for validation, not for creating permanent balances, state, rights, or financial expectations.

:::info Nothing to migrate yet
There is no production SENEX network and no live provider economy. In the software, [ASHA](concepts.md#asha) is simulated accounting. [V1-testnet](concepts.md#v1-testnet) is the planned production candidate; V1 is the planned production network, launched from a fresh genesis only after V1-testnet evidence and external review.
:::

Validating upgrades, export, recovery, and participant communication with test-only ASHA is a V1-testnet target. Status labels are defined in [Current status](status.md#status-labels).

## Environment boundaries

### Development environments

Development builds may change frequently. Test records can be reset or invalidated as designs evolve. They are not durable claims against a future release.

### V1-testnet

V1-testnet is intended to evaluate a production-candidate design under controlled participation. It may use test credentials and test-only ASHA.

Testnet participants should expect:

- software and policy changes during evaluation;
- planned or emergency resets when required for safe testing;
- correction or removal of invalid test records;
- access changes as the threat model and operating policy evolve; and
- no monetary value, redemption, yield, or guaranteed continuation.

### V1 production

V1 is the planned production network. Its launch is a separate decision with fresh operating terms, security review, privacy assessment, governance authorization, and release evidence, and it begins from a **fresh genesis**.

**No V1-testnet balance, test-only ASHA amount, transaction history, governance position, reputation, provider record, or application state will migrate into V1.** Participation in testing creates no allocation or preferred status.

## What may be portable

Fresh genesis does not require users to lose ownership of ordinary local material. Where safe and supported, a release may offer explicit export and import for user-controlled content or configuration.

Portability should be:

- initiated or approved by the owner;
- limited to documented data categories;
- validated before import;
- version-aware and reversible where practical;
- clear about information that cannot be transferred safely; and
- separate from network balances, authority, recognition, or economic state.

This is a product-policy target, not a claim that every format or release is already supported. Today the desktop app's Right to Exit export writes the owner's selected data into local export packs; see [Current status](status.md).

## Software upgrade principles

1. **Identify the boundary.** State whether a change affects only local software, interoperability, policy, stored data, or a shared environment.
2. **Assess compatibility.** Document supported versions and known breaking behavior.
3. **Protect owner control.** Avoid silently expanding permissions or external sharing.
4. **Provide notice.** Explain material changes, required actions, and the consequences of declining.
5. **Stage the release.** Validate on non-production environments before broader use.
6. **Preserve recovery.** Define backup, rollback, or safe-forward behavior appropriate to the change.
7. **Verify the outcome.** Monitor errors and policy violations after release.
8. **Retire safely.** End unsupported versions without leaving users uncertain about data or access.

## Testnet resets and incidents

A testnet may need a reset after a design change, integrity failure, or security incident. The operating policy should explain the reason, affected scope, evidence retained, and steps required from participants. Resets should not be framed as compensation events because test-only records have no financial status.

Emergency actions may prioritize containment, but they still require documentation and later review through the [Governance model](governance.md).

## No bridge or conversion promise

SENEX does not promise a bridge, balance snapshot, conversion ratio, claim window, or backward-compatible economic state between environments. Any future production economy would be a separate decision documented only after the necessary validation and legal review.

## Related pages

- [ASHA and contribution accounting](asha/index.md)
- [Roadmap](roadmap.md)
- [Governance model](governance.md)
