# Smart Contract Overview

## AIA_Chain.sol

The `AIA_Chain` contract is the core of the AIA network, implementing a **permissionless proof-of-computation** consensus mechanism with privacy-preserving features.

## Contract Address

- **Polygon Amoy Testnet**: Set in your `.env` file as `VITE_AIA_CHAIN_ADDRESS`

## Key Features

### 1. Permissionless Validation
No registration or staking required. Anyone can:
- Submit contributions
- Validate contributions
- Earn rewards based on performance

### 2. Fee-Based Economics
Contributors pay fees that get distributed to validators:
```solidity
uint256 public baseFeePerRequest = 0.001 MATIC;
uint256 public feePerValidator = 0.0002 MATIC per validator;
uint256 public priorityFee = 0.005 MATIC;
```

### 3. Privacy Infrastructure
- Public key registry for encryption
- Encrypted data storage on-chain
- Secure communication between parties

## Core Functions

### For Contributors

#### `submitContribution`
```solidity
function submitContribution(
    bytes32 _gradientHash,
    bytes32 _proofHash,
    string memory _encryptedData,
    uint256 _epsilon,
    uint8 _requestedValidators,
    bool _isPriority
) external payable returns (bytes32)
```

**Parameters:**
- `_gradientHash`: Hash of the gradient data (for federated learning)
- `_proofHash`: Zero-knowledge proof hash
- `_encryptedData`: Encrypted message content (for AI inference)
- `_epsilon`: Privacy budget to use (scaled by 1e6)
- `_requestedValidators`: Number of validators needed
- `_isPriority`: Whether to prioritize this request

**Returns**: Contribution ID

**Fee Calculation:**
```solidity
fee = baseFeePerRequest + (_requestedValidators * feePerValidator) + (isPriority ? priorityFee : 0)
```

### For Validators

#### `registerPublicKey`
```solidity
function registerPublicKey(string memory _publicKey) external
```

Registers a validator's public key for encryption purposes.

**Events:**
```solidity
event PublicKeyRegistered(address indexed validator, string publicKey);
```

#### `submitValidationWork`
```solidity
function submitValidationWork(
    bytes32 _contributionId,
    uint256 _computeTimeSeconds,
    bytes32 _validationProof,
    string memory _encryptedResponse,
    uint256 _qualityScore
) external
```

**Parameters:**
- `_contributionId`: ID of the contribution being validated
- `_computeTimeSeconds`: Time taken to compute (used for reward calculation)
- `_validationProof`: Proof of computation
- `_encryptedResponse`: Encrypted AI response for contributor
- `_qualityScore`: Self-reported quality (0-100)

**Reward Calculation:**
Rewards are distributed when enough validators have submitted work:
```solidity
reward = (baseShare * qualityScore) / 100
```

Where `baseShare = totalFee / requestedValidators`

## Data Structures

### Contribution
```solidity
struct Contribution {
    address contributor;
    bytes32 gradientHash;
    bytes32 proofHash;
    string encryptedData;
    uint256 epsilon;
    uint256 timestamp;
    uint256 validatorCount;
    uint8 requestedValidators;
    bool isVerified;
    uint256 averageQualityScore;
    uint256 totalRewardDistributed;
    uint256 requestFee;
}
```

### ValidationWork
```solidity
struct ValidationWork {
    address validator;
    uint256 computeTimeSeconds;
    uint256 qualityScore;
    bytes32 validationProof;
    string encryptedResponse;
    uint256 submissionTime;
    uint256 rewardEarned;
    bool isPaid;
}
```

## View Functions

### `getUserStats`
```solidity
function getUserStats(address _user) external view returns (
    uint256 rep,
    uint256 contribCount,
    uint256 privacyBudget,
    uint256 privacyRemaining
)
```

### `getValidatorStats`
```solidity
function getValidatorStats(address _validator) external view returns (
    uint256 totalEarnings,
    uint256 validationCount,
    uint256 averageEarningsPerValidation
)
```

### `getContributionValidations`
```solidity
function getContributionValidations(bytes32 _contributionId) external view returns (
    address[] memory validators,
    uint256[] memory qualityScores,
    uint256[] memory computeTimes,
    uint256[] memory rewards,
    string[] memory encryptedResponses
)
```

## Privacy Budget System

Each contributor has a lifetime privacy budget:
```solidity
uint256 public maxPrivacyBudgetPerUser = 10.0 epsilon;
```

This prevents privacy leakage in differential privacy scenarios.

## Events

```solidity
event ContributionSubmitted(address indexed contributor, bytes32 contributionId);
event ValidationWorkSubmitted(address indexed validator, bytes32 indexed contributionId, uint256 computeTime, uint256 qualityScore);
event PublicKeyRegistered(address indexed validator, string publicKey);
event ContributionVerified(bytes32 indexed contributionId, uint256 averageQuality, uint256 totalReward);
event ValidatorPaid(address indexed validator, bytes32 indexed contributionId, uint256 amount, uint256 timeMultiplier, uint256 qualityMultiplier, bool consensusBonus);
```

## Governance Parameters

Only the contract owner can update these:

```solidity
function updateRewardParameters(...) external onlyOwner
function updateValidationParameters(...) external onlyOwner
```

**Current Settings:**
- `minValidatorsRequired = 3`
- `contributionTimeout = 1 hour`
- `maxComputeTimePerValidation = 300 seconds`
- `consensusThreshold = 10 points`

## Security Considerations

### Reentrancy Protection
The contract transfers rewards at the end of validation to prevent reentrancy attacks.

### Input Validation
All user inputs are validated:
- Quality scores must be ≤ 100
- Compute time must be > 0 and ≤ max allowed
- Privacy budget must not exceed limits

### Duplicate Prevention
Validators cannot validate the same contribution twice.

## Deployment

See the [deployment guide](../guides/deployment.md) for instructions on deploying to testnets and mainnet.

## Related Documentation

- [Secure Remote Architecture](../architecture/secure-remote.md)
- [Validator Rewards](../economics/validator-rewards.md)
- [Contributor Guide](../guides/contributor-guide.md)
