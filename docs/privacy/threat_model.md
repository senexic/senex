# Security Threat Model

This public threat model identifies the classes of risk SENEX considers and the trust boundaries where they arise. It intentionally avoids operational details that could help an attacker reproduce the system, target a control, or infer an internal security design.

:::info Working foundation
Current work focuses on the AIA user environment, local context boundaries, deliberate sharing, and safe software behavior. Control coverage is still being developed and has not received comprehensive independent validation.
:::

## Assets to protect

The public model prioritizes:

- personal source material and derived sensitive information;
- user permissions, identity, and account control;
- the integrity of AIA actions and displayed results;
- the authenticity of approved exchanges;
- future network records and governance decisions; and
- the availability of recovery, revocation, and challenge paths.

## Threat categories

### User environment compromise

Malware, account takeover, unsafe extensions, insecure backups, physical access, or misconfiguration may expose local context or authorize actions without meaningful user intent. Local-first architecture reduces central collection but cannot make a compromised device trustworthy.

### Excessive or misleading permission

A request may be too broad, unclear, persistent, or unrelated to the user’s expected purpose. Sensitive inferences can also escape even if raw source material does not. Controls should favor understandable scope, minimum disclosure, and visible continuing access.

### Untrusted recipient

An approved recipient may retain, combine, misrepresent, or redistribute information. Technical revocation cannot force an independent recipient to forget information already received. The primary defenses are minimization, recipient clarity, and accountability before disclosure.

### Software and update compromise

Defects, malicious dependencies, unsafe releases, or compromised update channels may change how data is processed. Release provenance, constrained privileges, testing, rollback readiness, and incident response are required assurance areas; implementation details remain private.

### Network manipulation

Future participants may submit misleading events, replay prior actions, create conflicting views, coordinate dishonestly, or interfere with service. V1-testnet is intended to examine these behaviors without attaching real monetary value.

### Privacy leakage through metadata or results

Timing, frequency, identity relationships, error behavior, and derived outputs may reveal information even when content is protected. Privacy review must cover the complete observable system, not only stored payloads.

### Governance and operator abuse

Privileged parties may make unauthorized changes, hide incidents, or apply policy inconsistently. Change transparency, separation of duties, reviewable decisions, and bounded emergency authority are governance requirements.

:::caution V1-testnet target
Network defenses are future production-candidate tests. V1-testnet is not a live public blockchain or a production security guarantee, and its test-only value carries no financial rights.
:::

## Assurance boundary

Threats are tracked internally with implementation-specific scenarios, control ownership, test evidence, and remediation status. Public pages disclose categories and user-relevant limitations without publishing exploit paths, thresholds, topology, or control internals.

:::warning External validation required
Independent security assessment, adversarial testing, and deployment review are required before V1. No system can promise zero risk, and post-V1 [GENOME research](../architecture/genome.md) would require a new threat model rather than inheriting V1 assurances.
:::
