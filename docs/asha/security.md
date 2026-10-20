---
title: Economic integrity
description: Threats to fair contribution recognition, the defense principles SENEX evaluates, and the accountability expected of network operators.
---

# Economic integrity

Economic integrity means that recognition and settlement decisions remain trustworthy even when participants have conflicting incentives. It complements, but does not replace, software security, privacy controls, operational governance, and legal accountability.

:::note Research direction
The local-first foundation does not rely on a stake, a price, or an economic-security budget. In the software, [ASHA](../concepts.md#asha) is simulated accounting. This page defines evaluation goals; it does not claim that economic security has been proven. Test-only contribution records under adversarial conditions are a V1-testnet target, and threat modeling, economic analysis, and red-team testing need external validation. Status labels are defined in [Current status](../status.md#status-labels).
:::

## Threat categories

Public evaluation should cover at least:

### False contribution claims

A participant may claim work that was not performed, was duplicated, was outside authorization, or did not meet the declared acceptance policy.

### Coordinated manipulation

Multiple parties may collaborate to approve one another's claims, distort shared signals, or suppress legitimate challenges.

### Identity abuse

One operator may present multiple identities to evade limits, manufacture consensus, or gain disproportionate influence.

### Service-quality manipulation

A provider may selectively report successful outcomes, conceal failures, degrade service after selection, or misrepresent capacity.

### Governance capture

Concentrated participants may try to change policy for private advantage, block accountability, or create rules competitors cannot satisfy.

### Information leakage

Recognition records, disputes, and operational metadata may reveal more about participants or their activity than the task requires.

### Operational failure

Outages, inconsistent state, faulty upgrades, or compromised operators may create incorrect records even without malicious intent.

## Defense principles

SENEX is evaluating outcome-level safeguards rather than publishing exploitable parameters:

- separate claiming, verification, approval, and appeal responsibilities where appropriate;
- collect the minimum evidence necessary for the declared purpose;
- make consequential decisions traceable to a versioned policy;
- hold ambiguous outcomes for review instead of forcing automatic settlement;
- detect repeated and coordinated behavior without treating identity alone as proof of abuse;
- limit the effect of a single participant or correlated group;
- support correction and recovery when an error is discovered;
- preserve an accountable emergency path with review after use; and
- monitor whether safeguards create unfair exclusion or privacy harm.

No single mechanism—including stake, reputation, identity, cryptography, or governance—should be presented as sufficient on its own.

## Operator commitments

Participants who operate shared infrastructure or provide a network service may need to make verifiable commitments and face proportionate consequences when they fail them. Whether that requires any economic mechanism is an open research question; the preferred answer is the least financialized mechanism that meets the accountability need.

An operator would be expected to:

- accept a clearly defined role and policy version;
- demonstrate that it can perform the declared service;
- protect credentials and report compromise promptly;
- meet service-quality and availability obligations appropriate to the role;
- disclose material conflicts of interest;
- take part in incident response and dispute resolution; and
- exit in an orderly way without abandoning active obligations.

Failures can come from malice, negligence, software defects, ambiguous policy, or events outside an operator's control, and a credible process distinguishes among them. Evidence comes before consequential action, remedies are proportionate, the affected participant can challenge a decision, and safe re-entry is possible where appropriate. SENEX offers no staking, delegated staking, yield, or revenue share.

## Testnet safety boundary

V1-testnet will use test-only ASHA. This allows failure, reset, and adversarial testing without representing test records as assets. Testnet participation does not guarantee access, rewards, balances, or influence in V1.

## Evidence required before production

The V1 launch decision requires evidence that:

- the end-to-end threat model matches the deployed system;
- independent reviewers can reproduce key security findings;
- dispute and recovery procedures work under realistic load and conflict;
- privacy controls cover both content and metadata;
- concentration and collusion risks are measured;
- policy changes cannot silently rewrite prior obligations; and
- incident response can contain harm and communicate it accurately.

Detailed detection logic, thresholds, internal scoring, and response playbooks are intentionally excluded from public documentation. Security concerns should follow the project's responsible-disclosure process when one is published.

## Related pages

- [ASHA and contribution accounting](index.md)
- [Contribution incentives and credit routing](incentives.md)
- [Governance model](../governance.md)
- [Security threat model](../privacy/threat_model.md)
