---
title: Privacy controls and technology direction
sidebar_label: Privacy controls
description: The layers of privacy control SENEX designs around, and how a control becomes a public claim.
---

# Privacy controls and technology direction

SENEX describes privacy technology by the protection it should provide, not by publishing a recipe for the underlying implementation. Technology names alone do not establish privacy; controls must be connected to a specific data flow, threat, and body of evidence.

:::info Working foundation
The current foundation is local-first AIA: keep user-selected context in the user-controlled environment, require deliberate action for external exchange, and bound sharing between owners by grantee and expiry. Purpose is recorded but not yet enforced; see [Current status](../status.md).
:::

## Control layers

### Local data control

The first layer limits unnecessary collection. AIA should let users choose which sources can be used, understand when context is active, and remove access that is no longer wanted. Sensitive processing should remain local where the task permits it.

Local processing does not eliminate device risk. Compromised accounts, unsafe backups, other software, physical access, and operating-system behavior can all cross the same boundary. Product guidance and testing must account for this wider environment.

### Purpose-bound exchange

When information must leave the local environment, the intended control is a narrowly scoped request and a bounded response. The user should be able to distinguish a one-time action from continuing access and understand the recipient and purpose.

Protection after disclosure has limits. Revocation can stop future authorized access, but it cannot erase knowledge already received by an independent party. Minimization before transfer is therefore more important than relying on revocation alone.

### Integrity and accountability

Future cooperation requires evidence that a request came from an authorized participant, that the approved content was not silently changed in transit, and that a relevant event can be investigated. Public documentation states these outcomes without exposing internal identity, messaging, audit, or validation constructions.

:::caution V1-testnet target
Authenticated network cooperation, consistent event records, and contribution-aware accountability are testnet targets. V1-testnet will use test-only ASHA and is not a production privacy network.
:::

### Privacy-enhancing collaboration

SENEX is researching ways for participants to cooperate while reducing what any participant can learn beyond the intended result. Candidate approaches will be selected and evaluated privately against defined threats, performance constraints, and failure behavior.

:::note Research direction
No formal privacy-preserving collaboration mechanism is claimed as a current feature. Protocol choices, parameters, and internal evaluation details are intentionally not published before implementation and review.
:::

## How a control becomes a claim

A privacy control should move through an evidence path:

1. define the protected information and the trust boundary;
2. state the threat and expected failure behavior;
3. implement the control without widening unrelated access;
4. test normal, adversarial, and recovery scenarios;
5. document limitations in user-facing language; and
6. obtain independent review before making a strong public claim.

:::warning External validation required
Implementation review, adversarial testing, and deployment-specific assessment are necessary before any control is described as formally private, anonymous, tamper-proof, or suitable for regulated use.
:::

## Related pages

- [Privacy and security](index.md)
- [Privacy assurance and evidence](mathematical_guarantees.md)
- [Security threat model](threat_model.md)
- [Compliance and responsible data use](compliance.md)
