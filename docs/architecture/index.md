# Architecture Overview

SENEX separates personal intelligence, governed exchange, and network coordination into distinct trust boundaries. This lets each layer be evaluated on its own instead of treating a future network as a prerequisite for useful local software.

:::info Working foundation
The active foundation is AIA: local-first software for user-directed assistance, local context, and controlled interaction. It is still under development and should not be interpreted as a completed production release.
:::

## The system at a glance

### 1. User-controlled environment

[AIA](aia_agents.md) operates at the edge of the system, where the user’s context and decisions originate. Its responsibility is to help the user while maintaining a clear boundary between local material and anything intentionally exchanged with another participant.

The user-controlled environment is the primary trust boundary. Local possession does not, by itself, guarantee privacy: device security, operating-system behavior, backups, extensions, and user configuration also matter. SENEX therefore treats clear consent and observable data flow as product requirements rather than relying on the word “local.”

### 2. Governed exchange

When cooperation is useful, the intended model is purpose-bound exchange. A participant should be able to understand what is requested, approve or reject it, limit the scope, and stop future access. Returned information should be bounded to the task rather than exposing an unrestricted source.

The exchange layer is a capability boundary, not a promise that every collaboration technique is already implemented or formally private.

### 3. Coordination network

The [Intelligent Chain](intelligent_chain.md) is the planned coordination and accountability layer. It is intended to record accepted events, support consistent outcomes among participants, and provide evidence for testing contribution-aware processes.

:::caution V1-testnet target
The coordination network is a future production-candidate test environment. It is not a live public blockchain. Any test value will be non-monetary, and testnet participation will not create a claim on a future production network.
:::

### 4. Collective intelligence research

[GENOME](genome.md) is a post-V1 research direction concerning useful collective intelligence across independently governed participants. It is not a deployed network mind, a current training system, or an implemented form of general intelligence.

## Release boundaries

V1-testnet and V1 are deliberately separate:

- **V1-testnet target:** validates integrations, operational controls, security assumptions, and user experience with test-only value.
- **V1:** a possible future production network, subject to evidence and approval, launched from a fresh genesis.
- **GENOME:** research considered after V1 foundations are stable; it is not part of the V1 launch claim.

:::warning External validation required
Independent review is required before treating network integrity, privacy properties, availability, or contribution accounting as production-ready. Architecture diagrams and design intentions are not evidence of those properties.
:::

Public documentation stays at the component, capability, and trust-boundary level. Internal protocols, thresholds, deployment topology, data schemas, model configuration, and security-sensitive operating details are intentionally excluded.
