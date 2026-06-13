# Mathematical Privacy Guarantee (Target Design)

:::warning Research roadmap, not a current guarantee
Differential privacy is **not yet implemented** in the shipping product. This page describes the **target privacy model** SENEX is designing toward. Today, privacy is enforced by local-first governance: raw data and locators never leave the device, sharing is bounded and revocable. Do not read the parameters below as an active mathematical guarantee.
:::

## The goal: bound what a contribution can reveal

The design target is **differential privacy** applied at the client, before any contribution leaves the device, with a privacy budget of ε = 1.0 and δ = 1e-6 — strong enough that an adversary, even with unbounded computation, gains only a negligibly bounded advantage in determining whether any single record took part.

## Mathematical Formula

A differentially private mechanism $M$ satisfies, for any two neighboring datasets $D$ and $D'$ (differing in one record) and any set of outcomes $S$:

$$
Pr[M(D) \in S] \leq \exp(\epsilon) \cdot Pr[M(D') \in S] + \delta
$$

where:
- $M$ is the privacy mechanism
- $\epsilon = 1.0$ (target privacy budget)
- $\delta = 1e-6$ (target failure probability)

## Status

Reaching this target requires the client-side noise mechanism, per-contributor budget accounting, and independent validation to be implemented and audited. Until then, the honest claim is **local-first data sovereignty**, with formal differential privacy tracked as active research.
