# Incentives & Rewards

## Dynamic Fee Structure

### Transaction Types

1. **Data Contribution Fee**: Paid by contributors submitting training data
   - Base: 0.1 [ASHA](index.md) per contribution
   - Multiplier: Based on data quality score (0.5x to 2.0x)

2. **Query Fee**: Paid by users requesting [Genome](../architecture/genome.md) inference
   - Simple query: 0.01 [ASHA](index.md)
   - Complex inference: 0.1-1.0 ASHA
   - Real-time computation: 1.0-10.0 ASHA

3. **Model Update Fee**: Gas cost for updating Genome on-chain
   - Paid by validators, reimbursed from reward pool

4. **Governance Fee**: Cost to submit [DAO proposals](../governance.md)
   - Base: 100 [ASHA](index.md) (anti-spam)
   - Refunded if proposal passes

## Reward Distribution (AI-Optimized)

### Fee Distribution (AI-adjusted per epoch)
- **Data Contributors**: 40-60% (quality-weighted)
- **Compute Validators**: 20-35% (work-based)
- **Development & Maintenance**: 10-20%
- **DAO Governance**: 5-15%
- **Protocol Reserve**: 5-10%

### Quality Metrics
```
Quality Score = w₁·Accuracy + w₂·Uniqueness + w₃·Relevance + w₄·Volume
```

**Component Definitions:**
- **Accuracy**: How much does data improve model performance? (Validation loss reduction)
- **Uniqueness**: How rare/novel is this data? (Distance from existing distribution)
- **Relevance**: How useful for current model priorities? (Alignment with goals)
- **Volume**: How much data provided? (Logarithmic scale)

### Reputation Multipliers
- New contributor: 0.8x (probationary)
- Established (>10 contributions): 1.0x
- Trusted (>100 contributions, high quality): 1.2x
- Elite (>1000 contributions, consistently high): 1.5x
- Flagged (suspicious activity): 0.5x
- Banned (proven malicious): 0x

## Cross-Domain Incentive Balancing

### Domain-Specific Pools
- Healthcare: 25% of contribution rewards
- Finance: 20% of contribution rewards
- Navigation: 15% of contribution rewards
- Disaster Prediction: 15% of contribution rewards
- General Purpose: 25% of contribution rewards

### Dynamic Rebalancing
- If domain underserved: Increase reward multiplier
- If domain saturated: Decrease reward multiplier
- Adjustments weekly based on model performance gaps
