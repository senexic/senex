# Security Threat Model & Mitigations

## THREAT 1: Data Poisoning Attacks
**Attack:** Malicious clients submit crafted gradients to degrade model performance

**Mitigation:**
- Byzantine-robust aggregation (Krum, Trimmed Mean, Median)
- Reputation system: Track contribution quality over time
- Outlier detection: Statistical tests on gradient distributions
- Slashing: Penalize validators who accept obvious poisoned data

## THREAT 2: Model Inversion Attacks
**Attack:** Adversary attempts to reconstruct training data from model gradients

**Mitigation:**
- [Differential privacy](mathematical_guarantees.md) (ε=1.0) provides provable protection
- Gradient clipping before noise addition (||g|| ≤ C)
- Secure aggregation prevents access to individual gradients
- Only aggregated updates available, never individual contributions

## THREAT 3: Membership Inference Attacks
**Attack:** Determine if specific data point was in training set

**Mitigation:**
- [Differential privacy](mathematical_guarantees.md) fundamentally prevents this (δ = 1e-6)
- Model checkpoints versioned, old versions retired
- Privacy budget tracking per client across all contributions

## THREAT 4: Sybil Attacks
**Attack:** Single entity creates many fake identities to gain influence

**Mitigation:**
- Proof-of-Stake: Requires token stake for validator participation
- Identity verification for high-value contributors (optional tier)
- Reputation weighting: New contributors have lower influence
- Economic disincentive: Costs more to attack than potential gain

## THREAT 5: Inference Attacks on Encrypted Data
**Attack:** Pattern analysis on encrypted communications or timing attacks

**Mitigation:**
- Mixnet/onion routing eliminates network-level tracking
- Randomized submission times (uniform distribution over time window)
- Dummy traffic to obscure real contributions
- Constant-time operations to prevent timing side-channels

## THREAT 6: Malicious Validators
**Attack:** Compromised validators attempt to learn client data or manipulate results

**Mitigation:**
- MPC threshold: Requires ⌈2N/3⌉ honest validators (Byzantine fault tolerance)
- Secret sharing: No single validator sees complete information
- Slashing: Validators lose stake if caught cheating
- Verifiable computation: ZK proofs ensure correct execution

## THREAT 7: Smart Contract Vulnerabilities
**Attack:** Exploit bugs in smart contracts to steal tokens or manipulate model

**Mitigation:**
- Formal verification of mission-critical contracts
- Multi-signature governance for contract upgrades
- Bug bounty program (10% of TVL reserved)
- Gradual rollout: Testnet → limited mainnet → full deployment
- Circuit breakers: Auto-pause on anomalous activity

## THREAT 8: Collusion Between Clients and Validators
**Attack:** Coordinated attack to manipulate model or steal rewards

**Mitigation:**
- Economic game theory: Defection more profitable than cooperation
- Random validator assignment per aggregation round
- Reputation slashing for detected collusion patterns
- Whistleblower rewards from slashed stakes
