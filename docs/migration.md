# Token Migration & Upgrade Path

:::danger Planned path — no token is deployed
This is the **planned** token-platform path. There is **no live ASHA token on Polygon or any chain today**; ASHA is a simulated accounting unit with transferability disabled. The phases below are design intent, not a deployed state, and nothing here is an offer or financial advice.
:::

## PHASE 1: POLYGON (PLANNED FIRST STEP)
- Planned ERC-20 [ASHA token](tokenomics/index.md) on Polygon PoS
- Benefits: Low fees, fast transactions, established ecosystem
- Limitations: Dependent on Polygon infrastructure
- Duration: 12-18 months

## PHASE 2: CUSTOM LAYER 1 (FUTURE)
- Native [ASHA token](tokenomics/index.md) on [SENEX Intelligent Chain](architecture/intelligent_chain.md)
- Benefits: Full control, optimized for AI workloads, custom consensus

### Migration Process
1. Snapshot of Polygon ASHA balances
2. 1:1 bridge to new chain (6-month window)
3. Old tokens burned on Polygon
4. New tokens minted on Intelligent Chain

### Requirements
- Validator Requirement: 100K [ASHA](tokenomics/index.md) minimum stake
- Consensus: Proof-of-Contribution + Proof-of-Stake

### Backward Compatibility
- Bridge remains open for late migrators (reduced rewards)
- Legacy contracts remain functional on Polygon
- Cross-chain messaging for unified experience
