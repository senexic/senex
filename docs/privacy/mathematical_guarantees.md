# Privacy Assurance and Evidence

Formal privacy is a property of a precisely defined system under explicit assumptions. It cannot be established by naming a cryptographic technique, publishing an equation, or describing a future architecture. SENEX therefore separates current product controls from research goals and independently validated guarantees.

:::info Working foundation
The current AIA foundation emphasizes local context handling, deliberate exchange, and user control. These are meaningful design constraints, but they do not constitute a mathematical privacy guarantee.
:::

## What a formal claim would require

Before SENEX can make a formal privacy claim, it must define:

- **Protected information:** exactly which user facts, source records, or derived attributes the claim covers.
- **Adversary:** what the observer can access, control, combine, and retain.
- **System boundary:** which software, devices, network participants, and operators are inside or outside the claim.
- **Assumptions:** conditions that must remain true for the claim to hold.
- **Composition:** how privacy changes when a user repeats actions or combines features.
- **Failure behavior:** what users and operators can observe and do when a control fails.

Those definitions must match the deployed system. A proof about an abstract component does not automatically cover the surrounding application, logs, metadata, endpoint security, recipient behavior, or operational process.

## Evidence levels

SENEX uses the following public distinction:

| Evidence level | Meaning |
| --- | --- |
| Design intent | A desired property has been documented |
| Implemented control | A control exists in a specific build and scope |
| Internally tested | Repeatable tests support a bounded claim |
| Independently assessed | An external specialist has reviewed the defined scope |
| Formally supported | The deployed mechanism and assumptions support a stated formal property |

Only evidence from the relevant build and deployment should be used. Roadmap text, laboratory prototypes, and testnet observations cannot be promoted into V1 guarantees without a new assessment.

:::caution V1-testnet target
V1-testnet is intended to generate evidence about real integration and operational behavior using test-only value. It is not itself a formal privacy guarantee and will not automatically transfer its state or assurance to a future V1 network.
:::

## Research boundary

Privacy-enhancing cooperation is a **Research direction**. SENEX may investigate mechanisms that reduce disclosure during multi-party work, but public documentation intentionally omits constructions, parameters, thresholds, and evaluation details that could expose proprietary design or weaken security.

:::warning External validation required
No current SENEX documentation should be interpreted as proof of anonymity, non-inference, unlinkability, confidential collective computation, or suitability for regulated data. Any such claim requires a defined scope, implementation evidence, independent assessment, and clear limitations.
:::

This evidence-first approach is deliberately conservative: it gives users a way to distinguish what is intended, what is implemented, and what has actually been validated.
