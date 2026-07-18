# Economic Integrity

:::warning Research direction
The current local-first foundation does not rely on a live stake, token price, or economic-security budget. ASHA is simulated and test-only. This page defines evaluation goals for a possible contribution economy; it does not claim that economic security has been proven.
:::

Economic integrity means that recognition and settlement decisions remain trustworthy even when participants have conflicting incentives. It complements, but does not replace, software security, privacy controls, operational governance, and legal accountability.

## Status

- **Working foundation:** simulations can expose incentive failures without placing real value at risk.
- **V1-testnet target:** exercise test-only contribution records, policy enforcement, review, and recovery under adversarial conditions.
- **Research direction:** identity assurance, verification, accountability, dispute handling, and concentration controls.
- **External validation required:** threat modeling, independent security review, economic analysis, privacy assessment, and red-team testing.

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

## Testnet safety boundary

V1-testnet, if launched, would use test-only value. This allows failure, reset, and adversarial testing without representing test records as assets. Testnet participation would not guarantee access, rewards, balances, or influence in V1.

## Evidence required before production

A production decision would require evidence that:

- the end-to-end threat model matches the deployed system;
- independent reviewers can reproduce key security findings;
- dispute and recovery procedures work under realistic load and conflict;
- privacy controls cover both content and metadata;
- concentration and collusion risks are measured;
- policy changes cannot silently rewrite prior obligations; and
- incident response can contain harm and communicate it accurately.

Detailed detection logic, thresholds, internal scoring, and response playbooks are intentionally excluded from public documentation. Security concerns should follow the project's responsible-disclosure process when one is published.

Continue to [Participation Commitments](staking.md) for the non-financial model of operator responsibility.
