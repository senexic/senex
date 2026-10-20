---
title: Proof of Data
description: The SENEX research thesis that data is valued by its proven impact at the moment it is used, stated as testable hypotheses.
---

# Proof of Data

SENEX is built on one research thesis: **the value of data is its proven impact on a computation at the moment the data is used.** Over time, the project expects value to move from money toward the new knowledge a network generates and the unique thinking of the people connected to it.

:::note Research direction
Every statement on this page is a hypothesis. Each one is assigned to the milestone whose exit gate tests it, and each is treated as possibly wrong until that gate passes. Negative results will be reported as results.
:::

## Where the thesis starts

Most intelligence services begin by moving a person's context into an environment the operator controls. SENEX starts from the opposite boundary: useful work should happen close to the owner when practical, and any exchange with someone else should be an explicit, visible event. Purpose, permission, minimum disclosure, and revocation are part of the intelligence workflow, not settings added afterwards.

Some problems still need knowledge held by other people. The thesis asks how independently governed owners can cooperate on such problems, with each request bounded to a purpose and each result revealing less than open access to its sources would. A path that one owner grants to another for this is called a [neurolink](concepts.md#neurolink): a trust relationship, not a brain-computer interface.

## Why value at the moment of use

Data is usually priced before anyone knows whether it helps: by volume, by access, or by who holds it. [Proof of Data](concepts.md#proof-of-data) takes the opposite approach. It measures what a piece of governed data actually contributed to a specific answer or task, and credits that contribution back along the path it traveled. Data that is never used earns nothing; data that changes an outcome is recognized when it does.

Combined with Proof of Computation, this gives [Proof of Intel](concepts.md#proof-of-intel): one record of useful contribution. These names describe research objectives. They do not mean that a public consensus mechanism, reward formula, or production economy is deployed.

## Hypotheses and how they are tested

| Hypothesis | What it claims | Tested in |
| --- | --- | --- |
| **Recursive governed access** | One owner's agent can ask another's, which can ask others, with every hop governed by that data owner. Recursion stops safely through a shrinking budget, loop prevention, deadlines, no-forward boundaries, and cancellation. | M1 |
| **Use once, forget, keep the path** | Computation goes to the data by default. Raw data that must travel is used once and then forgotten, and forgetting is either attested or labeled as unattested. The path is kept as a commitment, not as a copy. | M1 |
| **Value at use** | Contribution can be measured per answer, credited back along the path, and limited to independent demand, so that self-dealing earns nothing. Participants must rate the resulting credit as fair. | M1 |
| **Poisoned data is caught** | Corroboration by independent owners, credit clawback, and adversarial testing can catch data that is false or manipulative. | M1 |
| **Precision grows with participation** | The system becomes more useful as more people take part, and credit flows between owners who do not know each other. | M3 |
| **Knowledge over money** | Over the long term, generated knowledge and human insight become the main measure of value. | Long-range direction, not a dependency of any milestone |

M1 builds these mechanisms with a contribution-points record that carries no monetary value. See the [Roadmap](roadmap.md) for each milestone's exit gates.

## What exists today

Proof of Data and Proof of Computation records, re-execution by independent wallets, and prepare-and-commit finality run locally on one machine. Because there is no multi-validator network, they remain a **V1-testnet target**. Attribution uses fixed weights and grouping of duplicate sources; measuring each source's impact by recomputing without it is not yet running. Governed sharing between owners is a **Working foundation**, but purpose is not yet enforced and task inputs are still sent to the assigned peer rather than computed where the data lives. See [Current status](status.md).

## What this thesis does not claim

The thesis makes no capability, economic, privacy, medical, or intelligence claim. It does not claim that data owners will earn income, that the network is decentralized, or that GENOME exists. Those questions are answered only by the evidence each milestone produces.

SENEX publishes capability goals, user controls, status, limitations, evaluation methods, and safely aggregated results. It does not publish internal algorithms, scoring logic, thresholds, model configuration, interface details, deployment topology, or security control recipes.

## Related pages

- [Contribution incentives and credit routing](asha/incentives.md)
- [GENOME: collective intelligence research](architecture/genome.md)
- [Privacy and security](privacy/index.md)
- [Roadmap](roadmap.md)
