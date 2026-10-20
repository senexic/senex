---
title: ASHA and contribution accounting
sidebar_label: ASHA and contribution
description: How SENEX accounts for contribution today, how ASHA is planned for V1-testnet and V1, and the gates that stand before any live use.
---

# ASHA and contribution accounting

[ASHA](../concepts.md#asha) is the unit SENEX uses to account for contribution. This page explains how contribution is recorded today, what changes on V1-testnet, and what must be true before any live use.

:::warning Simulated in the software
In the SENEX software today, **ASHA is simulated accounting**. No amount has monetary value, no product action moves value, and no reward or provider payment is live. Nothing in these docs is an offer of any asset.
:::

SENEX is researching how independently owned agents can recognize useful contribution without turning private context into a commodity. The objective is a fair and auditable model, not a promise of financial return.

## What ASHA is for

ASHA is designed to record the value that governed data and computation actually add, measured at the moment of use through Proof of Data, Proof of Computation, and Proof of Intel. The thesis behind this is on the [Proof of Data](../thesis.md) page.

| Stage | How contribution is recorded | Status |
| --- | --- | --- |
| Today | Simulated ASHA in local experiments, with no monetary value | **Research direction** |
| M1 kernel | Contribution points with no monetary value | **Research direction** |
| V1-testnet | Test-only ASHA with no monetary value; state never migrates to V1 | **V1-testnet target** |
| V1 | Any live use only after every M4 and M5 exit gate passes | **External validation required** |

## Gates before any live use

Live use of ASHA requires every V1-testnet (M4) and V1 (M5) exit gate to pass, including independent protocol and economic reviews, regulatory clearance in each launch jurisdiction, a fresh genesis, and a majority of independent validators. The full list is in the [Roadmap](../roadmap.md#gates-before-any-live-use-of-asha).

The V1 design has no fiat peg, no redemption promise, and no asset bridge.

## Economic design and the whitepaper

Supply, issuance, access, and distribution are not set in these docs. They will be described in a future edition of the SENEX whitepaper, after the technical, legal, and governance evidence exists. The current edition of the whitepaper is [Edition 2026.1 (September 2026)](https://senexic.com/whitepaper/). Until then, no production supply, price, allocation, reward schedule, or yield is published, and none should be inferred.

## What the research is trying to solve

- **What was authorized?** Participation begins with an understandable, revocable grant.
- **What was useful?** Recognition reflects a verified outcome, not raw data volume or activity.
- **Who carried responsibility?** Operators and providers are accountable for service quality, policy compliance, and failures.
- **Can the result be challenged?** Disputes need evidence, review, and a documented resolution path.
- **Can the system resist manipulation?** Repetition, identity abuse, collusion, fabricated work, and self-dealing must not pay.
- **Can participation remain optional?** AIA must remain useful locally when a person declines network contribution.

## Design principles

- **Local value comes first.** Network participation is never a prerequisite for core local use.
- **Recognition follows evidence.** Only verified contributions are recognized, never volume, speculation, or unverifiable claims.
- **Rules are legible.** Eligibility, review, and appeal rules are understandable before participation, and changes are versioned.
- **Safety outranks throughput.** Questionable activity is reviewable before it affects shared outcomes.
- **No implied rights.** Simulation and test records confer no ownership, equity, yield, redemption, future allocation, or entitlement to a production network.

## Public documentation boundary

These pages describe the intended accountability model. They do not publish scoring formulas, weights, abuse thresholds, settlement logic, security parameters, or operator-sensitive controls.

## Related pages

- [Contribution incentives and credit routing](incentives.md)
- [Economic integrity](security.md)
- [Governance model](../governance.md)
- [Network transition and upgrade policy](../migration.md)
