# Staking Mechanisms

## Validator Staking
- **Minimum Stake**: 100,000 [ASHA](index.md)
- **Lock Period**: 30-365 days (longer = higher rewards)
- **APY**: 5-15% (dynamic based on network needs)

**Slashing Conditions:**
- Downtime > 10%: -5% stake
- Model poisoning: -50% stake
- Byzantine behavior: -100% stake

## Delegated Staking
- **Minimum**: 100 [ASHA](index.md)
- **Commission**: 5-20% (set by validator)
- **APY**: 3-10% (after commission)
- **Instant unstaking**: 5% penalty
- **Normal unstaking**: 7-day unbonding period

## Governance Staking
- Stake to vote: 1 [ASHA](index.md) = 1 vote (quadratic voting optional)
- Voting rewards: 0.1-1% APY for active participation
- Proposal bond: 100-1000 [ASHA](index.md) (returned if passed)

## Value Accrual Mechanisms

### Token Burning
- 10% of all transaction fees burned permanently
- Deflationary pressure increases token value over time
- Target: Reduce supply by 50% over 10 years

### Buy-Back Program
- 5% of protocol revenue used to buy ASHA from market
- Tokens burned or added to treasury
- Executed quarterly based on [DAO approval](../governance.md)

### Revenue Sharing
- Stakers receive portion of protocol revenue
- Based on stake amount and duration
- Distributed monthly in ASHA or stablecoins
