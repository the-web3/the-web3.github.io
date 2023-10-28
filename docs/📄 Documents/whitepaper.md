---
sidebar_position: 1
---

# Whitepaper

The Wallet is the Gateway to the Blockchain World Grasping this gateway, there are many things that can be done in the future. It can be said that without a wallet, most things in the blockchain world cannot be accessed. One of the reasons we proposed the Savour project is that we are very excited about the future of the entire blockchain world. The second reason is that we want to make some contributions to the development of this industry. Of course, the most important reason is that we want to create a Web3 world of our own. While contributing bricks and tiles to the development of the entire industry, we have the opportunity to achieve financial freedom.

## About Savour Wallet

### 1. The Origin of Savour Wallet
Savour wallet originated from Coincore, a project I did that failed. I wanted to restart it and cooperate with passionate and idealistic friends to make this project happen, so I initiated the Savour wallet project, a wallet project in a unique decentralized Web3 world that will be open source in the future.

### 2. Why is it Called Savour Wallet
“Savour” means “interest, taste, savor” in Chinese. We came up with this name for three reasons. First, people participate in this project out of “interest” and work on it in their spare time. Second, we are doing something very “fun” that may bring changes to the Web3 world. Third, we hope that participants can all “savor” the taste of Web3 and learn things about the blockchain world from our project and achieve something in the blockchain world.

### 3. What We Want to Do
We want to build a decentralized wallet system that operates in the form of a DAO, issue a token and NFT as proof for everyone to participate. The wallet will include modules like HD wallet, social recovery wallet, decentralized custodial wallet, NFT trading aggregator, Dapp browser, market data aggregator, etc. After the project takes shape, we will seek investment to make it the largest wallet in the Web3 world.

### 4. Wallet Architecture Design

![9.svg](/static/img/images/9.svg)

The middle layer and DAPP layer communicate via RestApi. The server layer and middle layer communicate via internal gRPC interfaces.

### 5. Wallet Business Flow

5.1. HD Wallet Business Flow (Phase 1)

![10.svg](/static/img/images/10.svg)

5.2. Social Recovery Wallet (TBD if needed)

Social recovery wallet works like:

- A “signing key” that can approve transactions
  
- A group of at least 3 (or more) “guardians” who can cooperate to change the signing key
  
The signing key can add/remove guardians but only after a delay (specified period of time)

![11.svg](/static/img/images/11.svg)

Reference projects: https://www.argent.xyz/ and https://loopring.io/

5.3. MPC Wallet KeyGen and Sign Phase (Phase 2) Reference project: Torus

![12.svg](/static/img/images/12.svg)

5.4. NFT Business Flow (Phase 1)

![13.svg](/static/img/images/13.svg)

Phase 1 can aggregate NFTs across chains like ETH, Solana, Xtz, consortium chains, with minting, buying, selling, bidding, transferring, recording functions.

5.5. Market Data Business Flow (Phase 1)

![14.svg](/static/img/images/14.svg)

5.6. Decentralized Finance Business Flow (deprioritized, depending on resources)

On-chain staking, liquidity mining, etc. Omitted for now, depending on available resources.

5.7. GameFi Business Flow (e.g. Texas Hold’em poker on blockchain)

![15.svg](/static/img/images/15.svg)

The above is just a flowchart. The contract should consider privacy, blinds, etc. Details TBD during development.

## Savour Wallet Function Description

### 1. Key Management

1.1. Self-Custody (HD Wallet)

Users self-manage keys, stored encrypted on device using device ID, password, fingerprint etc.

![16.svg](/static/img/images/16.svg)

When generating mnemonics, we encrypt and store keys locally per BIP39/44. Private keys are decrypted on demand for export or signing. Pros: Users fully control keys. Cons: Irrecoverable if lost; complex for novice users.

1.2. MPC Custody

With MPC, private keys are split and held by user, platform, community, or third-party key vault. Weakens private key concept, easy like using Alipay.

![17.svg](/static/img/images/17.svg)

MPC is popular for key management nowadays. Needs 3+ parties to function securely. More parties = more secure. Can use dedicated chains for key shards. Pros: Easy to use. Cons: Less secure with fewer parties.

Reference project: Zengo

### 2. Function Modules

2.1 Wallet Basics

Support major coins (BTC, ETH (incl. NFT), TRX, EOS, WAX, SOL (incl. NFT), DOT, ADA, XRP, Arbi, OP, Metis, BSC, HECO, Polygon (incl. NFT), Teleport (for social coins, STEDAO, red packets, memorial NFTs etc.)). Start with ETH, Polygon, Teleport.

2.2. Market Data Aggregator

Centralized and decentralized market data. Can be a separate service:

![18.svg](/static/img/images/18.svg)

For development: use Python, ccxt for centralized, DefiLlama for decentralized. Centralized API done.

2.3. Media & News

Publish product updates, industry news, etc.

2.4. Dapp Browser

As a decentralized gateway, huge advantage if we can support 100% of Dapps.

![19.svg](/static/img/images/19.svg)

2.5. Hardware Wallet Support

Support leading hardware wallets like Ledger via Bluetooth.

![20.svg](/static/img/images/20.svg)

2.6. NFT

Mint, manage, trade NFTs. Custom memorial NFTs etc. Everyone can mint NFTs without needing platforms. Use cases: celebrities selling album NFTs to fans, NFT tickets, collectibles etc. Support major NFT chains.

2.7. Centralized Finance

Support decentralized staking, algo trading. De-prioritized for now.

2.8. Multisig Wallet

Enable multisig via MPC, e.g. for SavourDAO tokens and NFTs.

Example flow:

![21.svg](/static/img/images/21.svg)

KeyGen: Users generate shard keys on DAPP. Set 3/4 sigs required.

Sign: 3/4 sigs to sign valid transaction.

2.9. Decentralized Chat (Phase 2)

Private messaging. Omitted for now, design details TBD later.

## Technology Selection

### App

React Native (advantage: reusable wallet components. Customize as needed)

### Client Key Storage

sqlite, encrypt using device ID + password + face ID (optional) + fingerprint (optional) etc.

### Web

Nuxt.js (Vue framework, good for SEO)

### Backend

Go, Rust, Python, Java - allow different languages for more inclusion. Modular microservices, gRPC internally, unified data layer for frontends.

## Savour DAO

Why we need a SavourDAO:

Open source for community participation, not just us. Rally help from the community. Everyone owns the project.

If successful, SavourDAO can operate commercially independently.

## Savour Wallet Team

A decentralized team. Anyone can participate. No fixed members. We are the initiators and core team. Beyond assigned tasks, community members can pick a module to work on and get Savour token/NFT rewards upon completion.

## Savour Wallet Vision

Build a decentralized Web3 world and promote crypto native culture.

## Github Org

https://github.com/SavourDao (closed source for now until fully complete)

This whitepaper will be updated continuously.

NFT Aggregator (2) -> Smart Contract Team
HD Wallet (1 -> transaction notifications)
Semi-decentralized MPC Wallet (1)
Market Data Aggregator (1)
Middle Layer Service (1)
DAPP Browser
Social Recovery -> later
Please let me know if you would like me to clarify or expand any part of the translation. I tried to convey the original meaning while making it read naturally in English.