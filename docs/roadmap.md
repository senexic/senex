# Roadmap

:::info Outcome-based roadmap
This roadmap describes evidence and release outcomes, not calendar promises. SENEX has local-first working foundations and is developing toward a future V1-testnet. There is no live public blockchain, token economy, provider settlement, or contribution-reward system.
:::

Each stage must produce evidence before the next stage is treated as ready. Research can continue in parallel, but it does not become a product claim until it passes the applicable release gate.

## Status map

| Status label | Meaning |
| --- | --- |
| **Working foundation** | Implemented foundations under active development and controlled evaluation. |
| **V1-testnet target** | Intended outcome for a future production-candidate test network using test-only value. |
| **Research direction** | A capability or policy being explored without a release commitment. |
| **External validation required** | A claim or release gate that must be reviewed independently of the implementing team. |

## Stage 1 — Strengthen the local-first foundation

**Status: Working foundation**

The immediate objective is a dependable AIA that provides value while keeping owner control visible.

Outcome gates:

- local behavior is documented for supported configurations;
- private context and approved external interactions have a clear boundary;
- users can understand and change relevant permissions;
- storage, retention, deletion, recovery, and upgrade behavior are testable;
- failures are visible rather than presented as successful outcomes;
- security and privacy assumptions match the implementation; and
- documentation distinguishes implemented behavior from research.

This stage does not require a token, public chain, provider marketplace, or shared reward system.

## Stage 2 — Validate governed interaction

**Status: Working foundation moving toward V1-testnet target**

The objective is to demonstrate that independently operated AIA systems can interact within bounded, owner-approved policy.

Outcome gates:

- participants can identify the purpose and policy of an interaction before accepting it;
- authorization can be limited, reviewed, and revoked;
- outcomes carry sufficient provenance for the use case;
- replay, duplication, unauthorized expansion, and common failure conditions are tested;
- disputes and incident reports reach an accountable owner;
- degraded connectivity and incompatible versions fail safely; and
- operational observability does not become unnecessary surveillance.

## Stage 3 — Prepare the V1-testnet candidate

**Status: V1-testnet target**

V1-testnet is intended as a production-candidate validation environment, not a production economy.

Release gates:

- a defined release candidate and supported operating policy;
- documented participant roles and responsibilities;
- repeatable deployment, upgrade, backup, and recovery procedures;
- end-to-end tests for authorization, interaction, revocation, failure, and review;
- test-only contribution records and simulated ASHA clearly isolated from monetary systems;
- clear notice that test access and state can change or reset;
- no implication that test activity creates future balances, rewards, or governance rights; and
- an incident-response and communication process tested before broader participation.

Provider settlement and contribution rewards remain non-live during this stage.

## Stage 4 — Adversarial and independent validation

**Status: External validation required**

The objective is evidence strong enough to support or reject a production decision.

Validation areas:

- implementation security and dependency risk;
- privacy behavior across content, metadata, logs, and recovery;
- authorization and revocation under realistic failure;
- abuse, collusion, identity, and concentration risks;
- accessibility and usability of consequential controls;
- reliability, capacity, and degraded-mode behavior;
- governance, dispute handling, and emergency authority;
- documentation accuracy and reproducibility; and
- legal and regulatory suitability for the intended jurisdictions and uses.

Findings should be remediated and retested. A testnet that reveals unacceptable risk has succeeded as a test; it should not be promoted merely to preserve a schedule.

## Stage 5 — Decide whether to launch V1

**Status: Research direction; external validation required**

V1 is not an automatic continuation of V1-testnet. It would require an explicit production decision based on evidence, a defined scope, fresh terms, accountable operators, and an approved governance model.

If approved:

- V1 begins as a separate **fresh-genesis** production network;
- V1-testnet balances, state, simulated ASHA, recognition, and governance positions do not migrate;
- user-controlled local content may be portable only through an explicit, documented import process;
- production claims are limited to capabilities supported by release evidence; and
- any economic function receives separate security, operational, accounting, and legal review.

If the evidence does not support production, the design should remain in research or be revised.

## Longer-term research

**Status: Research direction**

Potential research includes:

- privacy-preserving collective intelligence;
- accountable service discovery among independently operated AIAs;
- verifiable contribution without publishing private context;
- resilient interoperability across heterogeneous systems;
- governance that resists capture while preserving local authority; and
- contribution-economy mechanisms that do not depend on speculation.

These directions are not delivery promises. Technical details that would expose proprietary implementation or weaken security are evaluated in controlled documentation, while public pages focus on purpose, boundaries, evidence, and user impact.

## How progress should be reported

Progress updates should name the release or test, state what was actually evaluated, publish limitations, and distinguish internal results from independent findings. Dates, scale claims, and performance claims should appear only when backed by reproducible evidence.

Related pages:

- [Applications & Use Cases](applications.md)
- [Scalability & Performance](scalability.md)
- [Governance Model](governance.md)
- [Network Transition & Upgrade Policy](migration.md)
- [Contribution Economy Research](tokenomics/index.md)
