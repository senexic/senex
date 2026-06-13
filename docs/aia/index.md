# AIA Chain Documentation

Welcome to the technical documentation for **AIA Chain** - a decentralized AI inference network built on the SENEX Intelligent Chain.

## What is AIA Chain?

AIA Chain is a permissionless, blockchain-based AI inference network that enables:
- **Secure, encrypted AI inference** for contributors
- **Transparent, permissionless validation** with economic incentives
- **Privacy-preserving communication** using end-to-end encryption
- **Browser-native AI models** powered by WebLLM

## Quick Start

Choose your path:

- **[For Contributors](./guides/contributor-guide.md)** - Submit AI inference requests and earn reputation
- **[Smart Contracts](./contracts/overview.md)** - Understand the on-chain architecture
- **[Secure Remote Architecture](./architecture/secure-remote.md)** - How data privacy is achieved

> Validator, installation, and configuration guides are in progress.

## Key Features

### 🔐 End-to-End Encryption
All contributor messages are encrypted using RSA-OAEP before being submitted to the blockchain. Only the targeted validator can decrypt and process the request.

### ⚡ Permissionless Validation
Anyone can become a validator. No registration, no staking required. Payment is based on:
- **Speed** - Faster compute time = higher reward
- **Quality** - Higher accuracy score = higher reward
- **Consensus** - Agreement with peer validators = bonus

### 🌐 Browser-Native AI
Validators run AI models directly in the browser using WebLLM, ensuring:
- No server dependencies
- Complete decentralization
- Transparent execution

### 💰 Fair Economic Model
Contributors pay a small fee per request, which is distributed to validators based on performance metrics.

## Architecture Overview

```mermaid
graph LR
    A[Contributor] -->|Encrypted Request| B[Blockchain]
    B -->|Event| C[Validator]
    C -->|AI Inference| D[WebLLM]
    D -->|Response| C
    C -->|Encrypted Response| B
    B -->|Poll| A
```

## Getting Started

Installation, configuration, and first-request guides are in progress. Start with the [Contributor Guide](./guides/contributor-guide.md).

## Technical Deep Dives

- **[Secure Remote Architecture](./architecture/secure-remote.md)** - How data privacy is achieved
- **[Smart Contracts Overview](./contracts/overview.md)** - On-chain logic and economics

## Community

- **GitHub**: [senexic/aia](https://github.com/senexic/aia)
- **Website**: [senexic.io](https://senexic.io)
- **Docs**: [docs.senexic.io](https://docs.senexic.io)