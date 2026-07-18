---
title: AIA Chain research archive
description: Historical context for an early SENEX research prototype.
---

# AIA Chain research archive

:::caution Historical experiment
This section records the purpose of an early browser-based research prototype.
It is **not** the current AIA product, an active public service, a live
blockchain, or a token network. Previous setup instructions and implementation
specifications have been retired because they no longer describe the current
system.
:::

## What the experiment explored

AIA Chain examined whether independently operated participants could coordinate
AI work while keeping requests protected in transit and recording contribution
outcomes in a shared test environment. It helped SENEXIC study several enduring
questions:

- How can an owner explicitly authorize a participant or device?
- How can a contribution be attributed without treating every participant as
  equally useful?
- How should a system distinguish transport security from the trust placed in
  the participant performing a task?
- How can experimental accounting remain clearly separate from live financial
  value?

The prototype was deliberately limited. Its browser workflow, test-network
assumptions, and experimental coordination model are not a supported path to
the current product.

## What carried forward

The current AIA direction retains the high-level principles that proved useful:

- local-first operation around the owner;
- explicit, revocable authority;
- governed knowledge instead of unrestricted collection;
- evidence and verification before contribution is recognized; and
- honest separation between working foundations and future network goals.

The underlying implementation has evolved. This archive does not describe its
interfaces, security construction, infrastructure, or operating parameters.

## Current documentation

- [AIA product direction](../architecture/aia_agents.md)
- [System architecture](../architecture/index.md)
- [Trust and privacy](../privacy/index.md)
- [Current status and roadmap](../roadmap.md)
- [Contribution-economy research](../tokenomics/index.md)
