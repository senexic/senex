---
title: AIA Chain research archive
description: Historical context for AIA Chain, an early and retired SENEX research prototype.
---

# AIA Chain research archive

AIA Chain was an early, browser-based SENEX research prototype that tested whether independently operated participants could coordinate AI work. It came before the current [AIA](../concepts.md#aia) product and is now retired. This page keeps a short record of what it explored and what carried forward.

:::caution Historical experiment
AIA Chain is **not** the current AIA product or an active public service. Its setup instructions, contract pages, contributor guide, and implementation specifications have been retired because they no longer describe the current system. Older links to those pages lead here.
:::

## What the experiment explored

AIA Chain examined whether independently operated participants could coordinate AI work while keeping requests protected in transit and recording contribution outcomes in a shared test environment. It helped SENEXIC study several enduring questions:

- How can an owner explicitly authorize a participant or device?
- How can a contribution be attributed without treating every participant as equally useful?
- How should a system distinguish transport security from the trust placed in the participant performing a task?
- How can experimental accounting remain clearly separate from live financial value?

The prototype was deliberately limited. Its browser workflow, test-network assumptions, and experimental coordination model are not a supported path to the current product. There is no public validator onboarding and no live contribution payment, and no legacy configuration is supported.

## What carried forward

The current AIA direction retains the high-level principles that proved useful:

- local-first operation around the owner;
- explicit, revocable authority;
- governed knowledge instead of unrestricted collection;
- evidence and verification before contribution is recognized; and
- honest separation between working foundations and future network goals.

The underlying implementation has evolved. This archive does not describe its interfaces, security construction, infrastructure, or operating parameters.

## Related pages

- [AIA: local-first personal intelligence](../architecture/aia_agents.md)
- [Architecture overview](../architecture/index.md)
- [Privacy and security](../privacy/index.md)
- [Current status](../status.md)
- [Roadmap](../roadmap.md)
- [ASHA and contribution accounting](../asha/index.md)
