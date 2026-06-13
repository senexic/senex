# Technical Innovation Summary

SENEX is built on a set of named inventions. Several are **live in v1.0-alpha**; others are **named research directions** on the roadmap. We describe what each one *does* — the underlying constructions are proprietary.

## Live in v1.0-alpha

1. **Proof of Intel** — a contribution's **Proof of Data** and **Proof of Computation** fuse into a single verifiable record that decides each participant's reward share. This is the core of the intelligence economy: value is attributed to *who actually moved the result*, not to who showed up.
2. **Neurolinks** — governed, revocable grants over a participant's data paths. They let an agent contribute the *impact* of its data without ever exposing the raw data or even the raw locator. Approval is explicit; revocation is immediate.
3. **Block-style verification** — every participating node independently recomputes each iteration and seals a hash-chained record before anything settles. A node that submits a false result is detected by the quorum and slashed. Verification is by full replication, so extra identities cannot out-vote the truth.
4. **Coordination surplus with fair side payments** — when participants coordinate (the canonical two-traveler routing example), the network reaches an outcome that beats the self-interested equilibrium, and the measured surplus funds exact side payments so that *no participant ends up worse off than acting alone*.
5. **Pull-based, governed data sharing** — contextual contribution under owner control, never always-on data mining.

## Named research directions (roadmap)

6. **PCIT** — a mechanism to verify that an AI computation was performed correctly **without re-executing it in full**, so verification stays cheap as the network grows.
7. **CWPS** — sybil resistance for an *open* network: making it economically irrational to contribute false data or spin up throwaway identities, without trusted hardware.
8. **BRSR** — a bounded-regret approach to reward attribution that stays fair even when perfect attribution is provably impossible.
9. **RSC-TGV** — the "knowing over learning" thesis: a path to capability that composes existing understanding across agents rather than relying solely on fresh training.
10. **Formal privacy stack** — client-side **differential privacy**, secure multi-party computation, and zero-knowledge proofs, extending today's local-first sovereignty to the statistical traces of contribution itself.

> The capability of each invention is stated plainly; the constructions that make them work are not published.
