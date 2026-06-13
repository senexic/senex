# Privacy & Security Architecture

SENEX is built local-first: your data and the raw locations of your data stay on your device, and nothing is shared without an explicit, governed, revocable grant. On top of that foundation, SENEX is designing a cryptographic privacy stack so that even the *contributions* a node makes to the network reveal as little as possible.

:::info What holds today vs. what is on the roadmap
**Today (v1.0-alpha), enforced and tested:** data and raw locators never leave the device; sharing happens only through governed **neurolink** grants you approve and can revoke; shared evidence is bounded (short excerpts, commitments only) and carries trust ceilings; chat history is encrypted at rest; the local API requires a per-start bearer token. **On the research roadmap (designed, not yet a guarantee):** the formal cryptographic mechanisms in these pages — differential privacy, secure multi-party computation, zero-knowledge proofs, homomorphic encryption.
:::

## Core Philosophy

**Data sovereignty by default.** Unlike systems that rely on trust or best-effort anonymization after data has already been collected, SENEX never collects raw data in the first place — governed access and bounded, committed evidence are the substrate. The cryptographic stack on the roadmap is intended to extend that protection from raw data to the statistical traces of contribution itself.
