# Intelligent Chain: Coordination and Accountability

The Intelligent Chain is the planned network layer for coordinating events among independent SENEX participants. Its public purpose is to make accepted actions consistently observable and accountable without turning private user context into public network data.

:::caution V1-testnet target
The Intelligent Chain is not a live public blockchain. V1-testnet is a future production-candidate environment intended for integration, security, governance, and operational testing. Any represented value will be test-only and non-monetary.
:::

## Intended responsibilities

At the capability level, the network is intended to support:

- **Consistent records:** participants can determine which governed events were accepted and in what order.
- **Authenticated participation:** actions can be attributed to authorized network participants without publishing their private working context.
- **Contribution evidence:** test whether useful participation can be recognized without exposing the proprietary methods used to assess it.
- **Rule transparency:** make the currently applicable network rules and change process visible to participants.
- **Dispute support:** preserve sufficient evidence to investigate conflicting outcomes and apply an approved resolution process.

The network should record only what is necessary for coordination. Personal source material, unrestricted local context, and secrets are outside its intended public data boundary.

## Conceptual event lifecycle

A future network interaction follows a simple public model:

1. A participant authorizes an action through AIA or another approved client.
2. The client prepares the minimum network-visible event needed for that purpose.
3. Network participants evaluate the event under the applicable rules.
4. An accepted outcome becomes part of the shared test record.
5. The user-facing client presents the result, status, and any available challenge path.

This description intentionally omits protocols, interfaces, timing assumptions, validation thresholds, storage design, and deployment topology. Those details are security-sensitive and may change during testing.

## Testnet is not production

V1-testnet exists to find failures before a production decision. It may be reset, changed, paused, or retired. Test records and test-only value have no financial meaning, and participation creates no entitlement to a future asset, allocation, or network role.

A possible **V1** will be a separate future production network with a **fresh genesis**. It will require its own release approval, operating policies, security evidence, governance readiness, and legal review. There is no automatic migration of testnet state or value.

:::warning External validation required
Network integrity, availability, privacy, resistance to manipulation, and contribution-accounting behavior must be independently tested. A production-candidate label indicates the purpose of V1-testnet, not that those properties are already proven.
:::

[GENOME](genome.md) is a separate post-V1 research direction. It should not be interpreted as a current network service or as part of the initial V1 production claim.
