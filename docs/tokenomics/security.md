# Economic Security Model

:::info Design model — simulated economy
This analysis models the security of the proposed economy. ASHA is a simulated accounting unit (not live or tradeable); the costs and prices below are illustrative design figures.
:::

## Attack Cost Analysis

To compromise 33% of validators (Byzantine threshold):
```
Cost = 0.33 × Total_Staked × Token_Price

Example: If 100M ASHA staked at $0.10: $3.3M attack cost
```

**Expected Gain from Attack:**
- Manipulate model: Limited benefit (caught quickly, stake slashed)
- Steal rewards: Maximum 1 epoch (then slashed)
- Extract data: prevented by local-first governance today; the differential-privacy design target would extend this to contribution traces

**Result:** Attack cost >> Expected gain (economically secure)

## Sybil Resistance
- Linear cost: Creating N identities costs N × minimum_stake
- Sublinear benefit: Rewards scale with sqrt(stake) for large holders
- Result: Sybil attacks unprofitable
