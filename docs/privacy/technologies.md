# Privacy Technologies

## A. Differential Privacy (DP)
- **Applied at CLIENT LEVEL** before any data leaves the device
- **Privacy Budget**: ε = 1.0, δ = 1e-6 (strong privacy guarantee)
- **Mechanism**: Gaussian noise calibrated to sensitivity of gradients
- **Composition**: Advanced composition for multiple contributions

**Implementation:**
```python
gradient_noisy = gradient + Normal(0, sigma^2)
# where sigma = (2 * ln(1.25/delta) * delta_sensitivity^2) / epsilon^2
# delta_sensitivity = global sensitivity (max gradient norm)
```

## B. Secure Multi-Party Computation (MPC)
- **Protocol**: SPDZ (Secure Pattern Detection and Zero-knowledge)
- **Participants**: N validator nodes (N ≥ 5, threshold = ⌈2N/3⌉)
- **Secret Sharing**: Shamir's secret sharing with polynomial degree t = ⌊N/2⌋
- **Operations**: Addition and multiplication in encrypted domain

**Data Flow:**
1. Client splits noisy gradient into N shares: \{s₁, s₂, ..., sₙ\}
2. Each share sent to different validator via encrypted channel
3. Validators compute f(s₁, s₂, ..., sₙ) = Σ gradients collaboratively
4. Only aggregated result is revealed, individual shares remain secret

## C. Zero-Knowledge Proofs (ZKP)
- **Type**: zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge)
- **Purpose**: Prove computation correctness without revealing inputs

**Applications:**
- Prove gradient computed correctly without revealing local data
- Prove contribution quality without revealing dataset statistics
- Prove compliance with privacy budget without revealing parameters

## D. Homomorphic Encryption (HE)
- **Scheme**: Partially Homomorphic (Paillier) or Fully Homomorphic (SEAL)
- **Use Case**: Encrypted queries to [Genome](../architecture/genome.md) for sensitive inference tasks
- **Operations**: Addition and multiplication on encrypted values

## E. Federated Learning with Secure Aggregation
- **Architecture**: Cross-silo federated learning ([AIA agents](../architecture/aia_agents.md) = silos)
- **Aggregation**: FedAvg with secure aggregation protocol
- **Privacy**: Double masking + differential privacy
- **Byzantine Robustness**: Krum or Trimmed Mean aggregation

**Algorithm:**
1. Each client k computes local gradient gₖ on private data
2. Add DP noise: g̃ₖ = gₖ + N(0, σ²I)
3. Apply secure aggregation: G = Σₖ g̃ₖ (computed via MPC)
4. Global model update: θₜ₊₁ = θₜ - η·G
5. Broadcast updated model to clients (pull-based)

## F. Anonymization Network
- **Layer 1**: TLS 1.3 encryption for all communications
- **Layer 2**: Tor-like onion routing or mixnet for submission anonymity
- **Layer 3**: Temporal obfuscation (randomized submission times)
- **Layer 4**: Network-level unlinkability (different IPs per contribution)
