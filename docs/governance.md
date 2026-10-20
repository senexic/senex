---
title: Governance model
sidebar_label: Governance
description: How SENEX decisions are classified, reviewed, recorded, and contested, and how governance is expected to evolve toward V1.
---

# Governance model

Governance is the process for deciding what the system may do, who is responsible, how changes are reviewed, and how harmful decisions are corrected. It must cover product, data, security, network, and contribution policies, not only software upgrades.

:::warning Governance is not live
SENEX does not currently operate a public DAO or holder-based governance system. In the software, [ASHA](concepts.md#asha) is simulated accounting and grants no voting rights. Development decisions and controlled testing are managed by the project team, and each owner keeps authority over their own AIA configuration and participation.
:::

Published operating policies, test roles, change notices, and challenge paths for testers are V1-testnet targets. Broader representation and long-term stewardship are research directions, and the effectiveness of appeals needs external validation. Status labels are defined in [Current status](status.md#status-labels).

## Governance layers

### Local authority

The owner of an AIA should control local configuration, approved connections, and optional participation within the limits of law and platform safety. Network governance should not silently override a local consent boundary.

### Operational governance

Operators need documented responsibility for availability, incident handling, policy enforcement, evidence preservation, and safe upgrades. Their authority should be limited to the role they accepted.

### Product and protocol governance

Changes that affect interoperability, data handling, safety, contribution recognition, or shared outcomes require a review path proportionate to their impact.

### Independent oversight

High-impact claims—especially about security, privacy, fairness, and economic behavior—require review outside the team that designed them. The form of oversight remains to be determined and must match the deployed risk.

## Decision classes

Different decisions should not share one undifferentiated voting mechanism.

| Decision class | What it covers |
| --- | --- |
| Routine maintenance | Compatible changes with limited user impact |
| Material product changes | Changes to behavior, permissions, data use, or user expectations |
| Security response | Time-sensitive containment, with documented scope and retrospective review |
| Network policy | Admission, interoperability, service obligations, and enforcement |
| Contribution policy | Eligibility, verification, disputes, and test-only recognition |
| Constitutional changes | Changes to decision authority, rights, or the governance process itself |

Each class should have its own assigned authority and a review path proportionate to its risk and reversibility.

## Proposed decision lifecycle

The V1-testnet governance target is a legible process:

1. **Describe** the problem, scope, affected parties, evidence, and alternatives.
2. **Classify** the decision by risk and reversibility.
3. **Review** security, privacy, operational, legal, and user-impact considerations.
4. **Consult** affected participants when the decision is not an emergency.
5. **Decide** through the authority assigned to that decision class.
6. **Record** the rationale, policy version, implementation owner, and review date.
7. **Deploy** with monitoring and a recovery plan appropriate to the risk.
8. **Evaluate** actual outcomes and correct unintended effects.

Exact approval thresholds, internal controls, and emergency procedures are not published while the design is under security review.

## Participant rights

Governance should preserve:

- clear notice of material policy changes;
- an understandable record of the rule applied to a consequential decision;
- a channel to report errors, vulnerabilities, or abuse;
- a meaningful review path where a decision can be contested;
- protection against retaliation for good-faith reporting;
- disclosure of material conflicts of interest; and
- an exit path that explains what happens to active obligations and retained records.

These are design goals, not a claim of certification or legal compliance.

## Safeguards against capture

Future governance research must address concentration, coordinated influence, voter fatigue, hidden conflicts, inaccessible participation, and emergency powers that become permanent. Holdings alone are not treated as proof of expertise, legitimacy, or public interest.

The system should prefer limited mandates, transparent reasoning, separation of duties, auditable policy versions, and periodic review of delegated authority. Sensitive security details and personal information should remain protected even when the existence and rationale of a decision are public.

## Relationship to V1

V1-testnet is a test environment, not a source of permanent governance rights. Participation, test records, and test-only ASHA do not carry into V1. V1, the planned production network, requires a fresh governance mandate, fresh operating terms, and evidence from external validation. The intended direction is that, at V1, stewardship moves to an independent body rather than remaining with the founding team.

## Related pages

- [ASHA and contribution accounting](asha/index.md)
- [Economic integrity](asha/security.md)
- [Network transition and upgrade policy](migration.md)
- [Roadmap](roadmap.md)
