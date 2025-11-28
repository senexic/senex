# Contributor Guide

Welcome to the AIA Chain! This guide will help you get started as a **contributor** - someone who submits AI inference requests to the network.

## Prerequisites

- Modern web browser (Chrome, Firefox, or Edge)
- MetaMask wallet installed
- Access to Polygon Amoy testnet
- Small amount of MATIC for gas fees (get from [Polygon Faucet](https://faucet.polygon.technology/))

## Quick Start

### 1. Connect Your Wallet

1. Open the AIA Chain application
2. Click "Connect Wallet" in the top right
3. Approve the connection in MetaMask
4. Ensure you're on **Polygon Amoy Testnet**

### 2. Generate Your Keys

On first use, the application will automatically:
- Generate an RSA-OAEP key pair
- Store your private key securely in IndexedDB
- Register your public key on-chain

You'll see: `"Registering contributor public key on-chain..."`

### 3. Submit Your First Request

1. Navigate to the **Chat** interface
2. Type your question or prompt
3. (Optional) Adjust settings:
   - Number of validators (default: 1)
   - Priority flag (faster processing, higher fee)
4. Click **Send**

### 4. Wait for Response

The application will:
1. Find an active validator
2. Encrypt your message with the validator's public key
3. Submit to the blockchain
4. Poll for the encrypted response
5. Decrypt and display the AI's answer

**Typical response time**: 10-30 seconds

## Understanding Fees

### Fee Structure

```
Total Fee = Base Fee + (Validators × Fee per Validator) + Priority Fee
```

**Current Rates (Amoy Testnet):**
- Base Fee: 0.001 MATIC
- Per Validator: 0.0002 MATIC
- Priority: +0.005 MATIC

**Examples:**
- 1 validator, normal: 0.0012 MATIC
- 3 validators, normal: 0.0016 MATIC
- 1 validator, priority: 0.0062 MATIC

The fee display shows:
- Estimated fee
- Whether you can afford it
- Balance check

## Privacy & Security

### Your Data is Protected

1. **End-to-End Encryption**: Your messages are encrypted before leaving your browser
2. **On-Chain Privacy**: Only encrypted ciphertext is stored on the blockchain
3. **Targeted Decryption**: Only your selected validator can decrypt your message
4. **Response Encryption**: The validator encrypts the response for you

### Key Management

**Your Keys:**
- Stored in browser IndexedDB
- Private key is non-exportable
- Public key registered on-chain

**Backup Your Keys** (Coming Soon):
Currently keys are browser-specific. Clearing browser data will delete your keys.

### What Validators See

❌ Validators **CANNOT** see:
- Your original message
- Messages from other contributors
- Other validators' responses

✅ Validators **CAN** see:
- That you submitted a request (wallet address visible)
- The encrypted ciphertext
- Request parameters (number of validators, priority)

## Advanced Features

### Multiple Validators

Request validation from multiple validators for:
- **Redundancy**: Backup if one fails
- **Consensus**: Compare multiple AI responses
- **Quality**: Choose the best answer

```typescript
validatorCount = 3;  // Request 3 validators
```

### Priority Requests

Mark requests as priority for:
- Faster processing
- Higher validator incentive
- Better quality responses

Cost: +0.005 MATIC

### Conversation History

Your chat history is stored locally in your browser:
- Saved automatically
- Persists across sessions
- Export/import (coming soon)

## Troubleshooting

### "No active validators found"

**Cause**: No validators are online
**Solution**: 
- Wait a few minutes and retry
- Check the [validator dashboard](https://senexic.io/validators) for network status

### "Insufficient balance"

**Cause**: Not enough MATIC for gas + fees
**Solution**: 
1. Get test MATIC from [Polygon Faucet](https://faucet.polygon.technology/)
2. Ensure you have at least 0.01 MATIC

### "Contributor public key not registered"

**Cause**: Registration transaction pending or failed
**Solution**: 
1. Check MetaMask for pending transactions
2. If stuck, try speeding up or canceling
3. Refresh the page to retry registration

### "Decryption failed"

**Cause**: Response encrypted for wrong key
**Solution**: This shouldn't happen. If it does:
1. Clear browser data (will delete keys)
2. Regenerate keys
3. Report the issue

## Privacy Budget

Each contributor has a **lifetime privacy budget** of 10.0 epsilon:

```
Privacy Remaining = 10.0 - Σ(epsilon used)
```

**Current Implementation:**
- Each request uses ε = 0.001
- You can make ~10,000 requests

**Purpose**: 
In future differential privacy implementations, this prevents privacy leakage from too many queries.

## Best Practices

### 1. Clear Prompts
Write specific, well-formed questions:
- ✅ "What is the capital of France?"
- ❌ "france capital?"

### 2. Reasonable Expectations
AI models running in browsers have limitations:
- Smaller models (1-7B parameters)
- Longer response times than cloud services
- Occasional mistakes or hallucinations

### 3. Network Reliability
The network is **decentralized** and **permissionless**:
- Validators can go offline
- Response quality varies
- Request multiple validators for critical queries

### 4. Cost Management
Monitor your spending:
- Check fee estimates before submitting
- Use normal priority for non-urgent requests
- Request fewer validators when testing

## Next Steps

- **[Become a Validator](./validator-guide.md)** - Earn rewards by running a validator node
- **[Understanding Security](../security/encryption.md)** - Deep dive into our privacy architecture
- **[Smart Contracts](../contracts/overview.md)** - Learn about on-chain mechanics

## Support

- **GitHub Issues**: [senexic/aia/issues](https://github.com/senexic/aia/issues)
- **Documentation**: [docs.senexic.io](https://docs.senexic.io)
- **Website**: [senexic.io](https://senexic.io)
