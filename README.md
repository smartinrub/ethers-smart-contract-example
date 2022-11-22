# Ethers Smart Contract Example

## Prerequisites

Run [Ganache](https://trufflesuite.com/ganache/).

Copy one of the private keys.

## Usage

1. Compile Smart Contract:

```bash
yarn compile
```

2. Encrypt private key:

```bash
PRIVATE_KEY=<YOUR_PRIVATE_KEY> PRIVATE_KEY_PASSWORD=<YOUR_PRIVATE_KEY_PASSWORD> node encryptKey.js
```

3. Run deployment script:

```bash
PRIVATE_KEY_PASSWORD=<YOUR_PRIVATE_KEY_PASSWORD> node deploy.js
```
