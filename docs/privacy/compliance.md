---
title: Compliance and responsible data use
sidebar_label: Compliance
description: What SENEX's local-first design can and cannot establish about legal compliance, and who is responsible for what.
---

# Compliance and responsible data use

SENEX's local-first direction can support data minimization and user control, but architecture alone does not establish legal compliance. Applicable duties depend on the operator, user population, purpose, jurisdiction, data category, deployment, and contracts surrounding a specific use.

:::info Working foundation
AIA is built around local context, deliberate exchange, and user-directed permissions. These product principles may support responsible data handling, but SENEX does not currently claim regulatory certification or approval for a regulated workload.
:::

## Compliance-by-design goals

The public design goals are:

- **Purpose clarity:** explain why information is requested and how it will be used.
- **Data minimization:** use and disclose only what is necessary for an approved task.
- **User control:** provide meaningful choices for access, sharing, and continuing permissions.
- **Retention awareness:** avoid indefinite retention by default and make retention responsibilities visible.
- **Traceable change:** maintain accountable product, policy, and governance changes.
- **Incident readiness:** establish reporting, containment, recovery, and user-notification processes appropriate to the deployment.

These goals are compatible with common privacy principles, but compatibility is not a declaration that every legal requirement has been met.

## Roles and responsibilities

A deployment must determine who decides the purpose and means of processing, who acts on instructions, who receives information, and who handles user requests. Those roles can change between a personal installation, an employer-managed environment, a service provider, and a network participant.

Users and deployers remain responsible for:

- confirming that they have authority to use the selected information;
- configuring access appropriate to their environment;
- evaluating external recipients before sharing;
- applying sector-specific retention and recordkeeping duties; and
- obtaining professional advice where law or regulation requires it.

SENEX documentation and software behavior should support those decisions without representing that the software transfers responsibility away from the deployer.

## Regulated and sensitive contexts

Health, financial, employment, education, children's data, biometric information, and other sensitive categories may require additional controls, agreements, notices, assessments, or prohibitions. A local-first workflow is not automatically suitable for these contexts.

:::caution V1-testnet target
V1-testnet is a planned test environment with test-only ASHA. It is not approved for production personal data, regulated processing, or financial activity. V1, the planned production network, launches from a fresh genesis only after V1-testnet evidence, external review, and deployment-specific legal review.
:::

## Claims and evidence

Compliance statements should identify the exact product version, deployment scope, responsible organization, applicable jurisdiction, and supporting assessment. General references to a law or standard are not substitutes for that evidence.

:::warning External validation required
No current page represents legal advice, certification, an audit opinion, or a claim of compliance with a named privacy, security, healthcare, financial, or child-protection regime. Independent legal and technical assessment is required before a deployment makes such a claim.
:::

## Related pages

- [Privacy and security](index.md)
- [Privacy assurance and evidence](mathematical_guarantees.md)
- [Security threat model](threat_model.md)
