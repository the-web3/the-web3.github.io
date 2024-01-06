---
sidebar_position: 2
---

# Overall Data Storage Design for HD Wallet Integration

### 1. Database

- SQLite3 is chosen.
- Using rn (node.js for database operations).

### 2. Table Structure Design

#### 2.1 Chain Table

|Field Name|Type|Explanation|
|---|---|---|
|id|bigInt|ID|
|name|varchar|Chain Name|
|symbol|varchar|Main Coin Name|
|logo|varchar|Chain Logo|
|active_logo|varchar|Active Chain Logo|
|support|bool|Whether this chain is supported|
|is_del|int|Status: 0 for normal, 1 for deleted|

#### 2.2 Asset Table

|Field Name|Type|Explanation|
|---|---|---|
|id|bigInt|ID|
|chain_id|bigInt|Chain IDS|
|name|varchar|Asset Name|
|logo|varchar|Chain Logo|
|active_logo|varchar|Active Chain Logo|
|contract_addr|varchar|Contract Address|
|unit|int|Precision|
|is_del|int|Status: 0 for normal, 1 for deleted|

Add data when creating main coin for the wallet, and add data when searching and adding Tokens.

#### 2.3 Wallet Table

|Field Name|Type|Explanation|
|---|---|---|
|id|bigInt|ID|
|chain_id|bigInt|ID|
|wallet_name|varchar|Wallet Name|
|device_id|varchar|Device ID|
|wallet_uuid|varchar|Wallet UUID|
|mnemonic_code|varchar|Encrypted Mnemonic Code|
|password|varchar|Password|
|asset_usd|decimal|Total USD Asset|
|asset_cny|decimal|Total CNY Asset|
|has_submit|bool|Whether submitted|
|is_del|int|Status: 0 for normal, 1 for deleted|

Add wallet only when creating the main coin. If asset_usd and asset_cny are different from the API response, update asset_usd and asset_cny.

#### 2.4 Wallet Asset Table

|Field Name|Type|Explanation|
|---|---|---|
|id|bigInt|ID|
|wallet_id|bigInt|Chain ID|
|asset_id|bigInt|Asset ID|
|balance|decimal|Balance|
|asset_usd|decimal|USD Asset|
|asset_cny|decimal|CNY Asset|
|is_del|int|Status: 0 for normal, 1 for deleted|

Associate wallet asset balance when creating main coin and adding tokens.

#### 2.5 Account Table (Account is equivalent to address)

|Field Name|Type|Explanation|
|---|---|---|
|id|bigInt|ID|
|wallet_id|bigInt|Wallet ID|
|index|int|Bip Address Index|
|address|varchar|Address|
|pub_key|varchar|Public Key|
|priv_key|varchar|Encrypted Private Key|
|is_del|int|Status: 0 for normal, 1 for deleted|

Add when creating wallet. Add index for 1-n, when needed.

#### 2.6 Account Asset Table (Account is equivalent to address)

|Field Name|Type|Explanation|
|---|---|---|
|id|bigInt|ID|
|address_id|bigInt|Account ID|
|asset_id|bigInt|Asset ID|
|balance|decimal|Balance|
|asset_usd|decimal|USD Asset|
|asset_cny|decimal|CNY Asset|
|is_del|int|Status: 0 for normal, 1 for deleted|

Add when creating wallet, update otherwise.

### 3. Encryption Algorithm

Symmetric encryption algorithm AES is used, with the encryption key being the combination of device ID and user-input password. Refer to the snow code repository’s example department code for details.

### 4. Operations

#### 4.1. On App Launch

Initialize once on app launch, initializing supported chains and currencies into the table with default values.

#### 4.2. Generate Account

Generate mnemonic -> Verify mnemonic -> If verification passes, store encoded mnemonic into mnemonic table. Generate seed from mnemonic -> Masterkey -> Bip44 protocol -> Child private key -> Public key -> Address. Store index corresponding to Bip protocol (default 0), encrypt private key, and store in account table. Request balance update into table. Check if the phone is connected to the internet, if so, continuously request balance updates.

#### 4.3. Export Mnemonic and Private Key

Export mnemonic -> Query mnemonic table -> Decrypt and return encoded mnemonic to interface. Export private key -> Query account table -> Decrypt and return private key to interface.

#### 4.4. Import Mnemonic and Private Key

Import mnemonic -> Verify mnemonic -> If verification passes, store encoded mnemonic into mnemonic table. Generate seed from mnemonic -> Masterkey -> Bip44 protocol -> Child private key -> Public key -> Address. Store index corresponding to Bip protocol (default 0), encrypt private key, and store in account table. Request balance update into table. Check if the phone is connected to the internet, if so, continuously request balance updates.

Import private key -> Private key -> Public key -> Address. Store index corresponding to Bip protocol (default 0), encrypt private key, and store in account table. Request balance update into table. Check if the phone is connected to the internet, if so, continuously request balance updates.

#### 4.6. Get Balance

Check if the phone is connected to the internet, if so, continuously request balance updates.

#### 4.7. Transfer

Initiate transfer -> Organize transaction data -> Retrieve private key from account table -> Sign transaction -> Update transaction into transaction table -> Broadcast transaction -> Check transaction status and update into transaction record table.

#### 4.8. Get Transaction Records

Check if the phone is connected to the internet, if so, continuously request transaction record updates.