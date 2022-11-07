# Ethers Smart Contract Example

## Getting Started

1. Compile Smart Contract:

```bash
yarn compile
```

2. Encrypt private key:

```bash
PRIVATE_KEY=<YOUR_PRIVATE_KEY> PRIVATE_KEY_PASSWORD=<YOUR_PRIVATE_KEY_PASSWORD> npx ts-node encryptKey.ts
```

3. Run deployment script:

```bash
PRIVATE_KEY_PASSWORD=<YOUR_PRIVATE_KEY_PASSWORD> npx ts-node deploy.ts
```
