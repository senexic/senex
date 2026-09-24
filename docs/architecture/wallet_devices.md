---
title: Wallet, devices, and contribution roles
sidebar_label: Wallet and devices
description: How one owner wallet governs many devices, how contribution roles are declared and verified, and how keys are protected and recovered.
---

# Wallet, devices, and contribution roles

Ownership in SENEX comes from a private wallet, not from a login or an account held by SENEXIC. One wallet can have many devices, each with its own key. This page describes that model at the capability level.

:::info Working foundation
The wallet and device model, per-device keys, sealed key storage, device revocation, and same-machine recovery are implemented and tested. Recovery on a second device and hardware-backed custody are not yet available. See [Current status](../status.md).
:::

## One wallet, many devices

- **The wallet is the owner.** It is the root of authority and is never replaced by a login.
- **Each device has its own key.** The wallet signs a credential stating that the device belongs to it.
- **Public records use a commitment.** Signed and public records carry a wallet account commitment instead of the raw wallet identifier.
- **Devices can be revoked individually.** A revoked device can no longer sign API calls, proofs, or validator votes. Transfers are signed by the wallet root, so revoking a device does not stop them.

## Enrollment is not authority

Enrolling a device proves only that it belongs to the wallet. It does not grant permission to do anything on the network.

Any enrolled, non-revoked device, including a phone, may attempt a supported contribution. The network accepts that contribution only after its signed role claim, task binding, role-specific proof, revocation state, and consensus rules all verify.

## Contribution roles

| Role | Plain-language meaning |
| --- | --- |
| `request` | Asks for work to be done |
| `approve` | Signs an approval |
| `data` | Provides governed data |
| `compute` | Performs the computation |
| `validate` | Checks another participant's work |
| `block_propose` | Proposes a block of accepted records |
| `relay` | Carries messages or synchronization |

Roles are routing declarations and upper limits, not permission grants and not proof that work was done correctly. A device declared for requests only cannot submit computation.

## Who is credited

A single task records the requester, the executor, the validator, the block proposer, and the beneficiary separately. A phone may request while a home computer computes, or the phone may compute on its own.

- Only an accepted contribution proof earns credit, and only for the wallet it is bound to.
- All devices of one wallet count as one participant. They do not multiply quorum, validator independence, or selection chances.
- An encrypted private record on the owner's side keeps which device played which role.

:::caution V1-testnet target
Crediting happens today only in simulated accounting. Sending credit to a different beneficiary is designed for V1 but not implemented, and undeclared common control across wallets is not yet detected.
:::

## Key protection

| Surface | How wallet keys are protected |
| --- | --- |
| Desktop app | Sealed with the operating system's secure storage (Keychain on macOS, DPAPI on Windows, libsecret on Linux). Insecure fallback storage is refused. |
| Command line | Sealed with a key derived from the owner's passphrase. Non-interactive use without a passphrase fails closed. |

The target for V1 is non-exportable, hardware-backed storage on every device. That is not available today.

## Recovery

- An encrypted recovery kit, protected by a separate one-time secret, restores the wallet into an empty workspace through a guided ceremony. This works on the same machine today; recovery on a second device is not yet verified.
- Guardian-based recovery, in which a set of chosen guardians can rotate the wallet after a delay, is implemented as a foundation but has no owner-facing ceremony yet.
- **Losing every usable device credential and the verified recovery kit is unrecoverable.** SENEXIC cannot restore a wallet on the owner's behalf.

:::warning External validation required
Custody, recovery, and revocation behavior require independent security review and cross-platform testing before V1-testnet. Nothing on this page is a custody guarantee.
:::

Related reading:

- [AIA](aia_agents.md)
- [Intelligent Chain](intelligent_chain.md)
- [Threat model](../privacy/threat_model.md)
