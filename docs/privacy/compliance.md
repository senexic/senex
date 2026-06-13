# Privacy Compliance & Guarantees

:::info Design goals, not a certification
The frameworks below are **compliance goals the architecture is designed toward**, not audited certifications. Local-first data handling makes them achievable, but no formal GDPR/CCPA/HIPAA/COPPA certification has been completed.
:::

## Regulatory Compliance (Design Goals)
- **GDPR (EU)**: Data minimization, purpose limitation, right to erasure
- **CCPA (California)**: Consumer data rights, opt-out capability
- **HIPAA (Healthcare)**: PHI protection via local-only processing
- **COPPA (Children)**: Age-gated features, parental consent flows

## Client Opt-In/Opt-Out
- **Granular Controls**: Per-domain contribution settings (health, finance, etc.)
- **Dynamic Weighting**: Opt-out reduces contribution but maintains access
- **Confidence Scores**: Results tagged with contributor participation rate
- **Complete Opt-Out**: Zero contribution mode (still benefits from global model)
