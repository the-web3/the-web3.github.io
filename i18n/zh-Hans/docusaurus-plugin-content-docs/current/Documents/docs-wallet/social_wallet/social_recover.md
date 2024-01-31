---
sidebar_position: 3
---

# Eniac x Social Recovery Wallet Scheme Details

## Project Overview

A social recovery wallet is a cryptographic technology solution that uses threshold secret sharing to back up and manage the wallet’s mnemonic phrase or private key in slices. When a user’s mnemonic phrase or private key is lost, they can use social recovery to restore the mnemonic phrase and private key. We use a cloud-resistant secret sharing scheme. In a social recovery wallet, we will hide the mnemonic phrase and private key, so that users no longer need to back up the mnemonic phrase and private key themselves, but instead back up the mnemonic phrase and private key through social means.

## Project Architecture

The scheme design diagram of the Eniac x wallet social recovery wallet is as follows:

![s1.png](../../../../../../../static/img/images/s1.png)

In our Eniac x wallet, the entire social recovery process is as follows:

1. The user’s private key or mnemonic phrase is XORed with a large random number to obtain a new secret value. We call the large random number head and the secret value body. The head is encrypted and uploaded to the Eniac x wallet cloud.
2. The body is divided into N shares of shadow using the threshold secret sharing algorithm, and K shares can restore the body.
3. The shadow-1 is encrypted and stored locally, using AES encryption, and the password hash is used as the encryption key.
4. The shadow-2 is encrypted and stored in the Eniac x wallet cloud, using AES encryption, and the password and device ID are used as the encryption key.
5. The shadow-3 … n are encrypted and stored in the key cabinet and the friends in the social circle.
6. If the mnemonic phrase or private key is lost, the recovery is initiated to obtain k-2 shares of the private key from the key cabinet or from friends, and then the cloud shadow-2 and header are obtained.
7. The inverse threshold secret sharing algorithm recovers the body through K shares of shadow.
8. The body and head are XORed to obtain the mnemonic phrase and private key.

About the key cabinet:

The key cabinet is a key escrow service provided by Eniac x. Users can either run the key cabinet service to store their own key shadow, or encrypt the key shadow and save it to our official key cabinet. The key cabinet is connected to major blockchain storage platforms. We will encrypt the key deeply and then upload the key to major blockchain storage platforms. Even if the key cabinet is not running one day, users can still get their encrypted key segments from major blockchain storage platforms. According to the encryption rules, the plaintext key shadown can be obtained by decryption.

About the social circle:

In the future, Eniac x wallet will launch privacy social. In addition to the platform, key cabinet, and user friends, users can also back up their key shadow through privacy social.

## Summary

The social recovery wallet was first implemented using the Ethereum smart contract, which only supports the Ethereum ecosystem. Our Eniac x social recovery wallet is a cryptographic technology solution that can promote social recovery wallets to all blockchain ecosystems. This is also the core competitive advantage of our Eniac x social recovery wallet compared to other social recovery wallets.
