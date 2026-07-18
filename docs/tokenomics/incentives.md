# Contribution Incentives

:::warning Research direction
Contribution rewards and provider settlement are not live. ASHA is used only as a simulated, test-only accounting unit and has no monetary value. This page describes desired behavior, not a payout schedule, formula, or offer.
:::

The contribution-economy research asks how a network can encourage useful, authorized work while discouraging surveillance, low-quality volume, and strategic manipulation.

## Status

| Status label | Scope |
| --- | --- |
| **Working foundation** | Local-first AIA operation does not depend on rewards. Simulation can be used to inspect hypothetical coordination outcomes. |
| **V1-testnet target** | Test-only records may help evaluate whether contribution and service events can be verified and contested safely. |
| **Research direction** | Attribution, provider settlement, prioritization, and long-term incentive design. |
| **External validation required** | Fairness, security, privacy, accounting, legal treatment, and resistance to coordinated abuse. |

## Desired outcomes

A credible model should:

- reward verified usefulness rather than raw activity;
- preserve a person's control over whether and how context is contributed;
- make the applicable rules visible before work begins;
- account for quality, reliability, risk, and resource responsibility without exposing private inputs;
- prevent a single party from unilaterally validating its own claim;
- handle delayed discovery of faults or abuse;
- offer review and appeal for consequential decisions; and
- remain understandable enough to audit.

## Conceptual evaluation dimensions

The research considers several outcome-level dimensions. They are not a published scoring formula:

- **Authorization:** the work was within the participant's approved scope.
- **Validity:** the claimed service or contribution can be independently supported.
- **Usefulness:** the outcome advances the declared task or shared objective.
- **Quality:** the result meets the applicable acceptance policy.
- **Reliability:** the participant fulfilled commitments consistently and reported failures honestly.
- **Risk:** privacy, safety, security, and policy concerns are accounted for.
- **Originality:** duplicate, replayed, or fabricated activity is not treated as new value.

The relative importance of these dimensions remains research-sensitive and may vary by use case. Exact weights, thresholds, and detection methods are intentionally not public.

## Contribution flow

1. A task or contribution opportunity declares its purpose and participation policy.
2. A participant opts in to a bounded scope.
3. The system records evidence needed to validate the outcome, while minimizing unnecessary disclosure.
4. The result is checked against the relevant policy.
5. A test-only recognition record may be created when the claim qualifies.
6. Suspicious, incomplete, or disputed claims enter review rather than automatic settlement.
7. The participant can inspect the outcome and use the available challenge process.

## Anti-gaming principles

The model must account for common incentive failures without revealing operational countermeasures. Evaluation should cover:

- duplicate or replayed contributions;
- fabricated work and self-dealing;
- identity multiplication and coordinated accounts;
- collusion between requesters, contributors, or operators;
- manipulation of quality signals;
- withholding useful failures while reporting only favorable results;
- concentration of influence; and
- attempts to infer private information from recognition records.

Possible controls must be tested as a system. A control that reduces one abuse pattern but creates discrimination, centralization, or privacy leakage is not automatically acceptable.

## Provider settlement boundary

SENEX is not currently paying independent providers through the network. Before provider settlement could become real, the system would need:

- clear service definitions and acceptance criteria;
- evidence that work was authorized and delivered;
- identity and jurisdiction controls appropriate to the service;
- invoicing, tax, accounting, refund, and dispute processes;
- monitoring for abuse and conflicts of interest;
- operational reserves and failure handling; and
- independently reviewed legal terms.

## Measuring the research

Evaluation should focus on observable outcomes: false acceptance, false rejection, dispute quality, concentration, participation diversity, privacy impact, reliability, and whether useful work is encouraged without coercive data collection. Results should be published only when the methodology and limitations can be explained.

See [Economic Integrity](security.md) for the abuse-resistance model and [Governance](../governance.md) for how policy decisions should be reviewed.
