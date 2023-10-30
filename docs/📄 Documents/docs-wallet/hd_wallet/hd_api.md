---
sidebar_position: 3
---

# Wallet API Documentation

## 1. Get Balance API

Endpoint: api/v1/wallet/get_balance

Request Method: POST

### Sample Request
```
{
   "network": "mainnet",
   "chain": "eth",
   "symbol": "eth",
   "address": "0x00000000000000000000000",
   "contract_address": "0x00000000000000000"
}
```

### Parameters

network: Network, accepts “mainnet” or “testnet”, required
chain: Chain name, required
symbol: Currency symbol, required
address: Address to check balance, required
contract_address: Contract address, pass empty if there is no contract, required

### Sample Response

```
{
  "status": true,
  "code": 2000,
  "message": "get account balance success",
  "data": {
    "balance": "100000"
  }
}
```

### Response Explanation

balance: Account balance

## 2. Get Account Information API

Endpoint: api/v1/wallet/get_account_info

Request Method: POST

### Sample Request
```
{
   "network": "mainnet",
   "chain": "eth",
   "symbol": "eth",
   "address": "0x0000000000000000000000"
}
```

### Parameters

network: Network, accepts “mainnet” or “testnet”, required
chain: Chain name, required
symbol: Currency symbol, required
address: Address to check balance, required

### Sample Response
```
{
   "status": true,
   "code": 2000,
   "message": "get account info success",
   "data": {
      "nonce": "1",
      "account_number": 1000098
   }
}
```

### Response Explanation

nonce: Eth nonce, or similar to sequence for other currencies
account_number: Account number

## 3. Get Fee API

Endpoint: api/v1/wallet/get_fee

Request Method: POST

### Sample Request
```
{
   "network": "mainnet",
   "chain": "eth",
   "symbol": "eth",
   "message": "0x0000000000000000000000"
}
```

### Parameters

network: Network, accepts “mainnet” or “testnet”, required
chain: Chain name, required
symbol: Currency symbol, required
message: Message, optional

### Sample Response
```
{
   "status": true,
   "code": 2000,
   "message": "get transaction fee success",
   "data": {
      "low": {
         "fee": 100000,
         "base_fee": 110000,
         "gas_limit": 21000,
         "gas_price": 800000000000
      },
      "medium": {
         "fee": 105000,
         "base_fee": 110000,
         "gas_limit": 21000,
         "gas_price": 800000000000
      },
      "high": {
         "fee": 110000,
         "base_fee": 110000,
         "gas_limit": 210000,
         "gas_price": 1800000000000
      }
   }
}
```

### Response Explanation
```
low: Slowest tier
medium: Middle tier
high: Fastest tier
fee: Usage fee
gas_limit: Gas limit
gas_price: Gas price
```

4. Broadcast Transaction API

Endpoint: api/v1/send_transaction

Request Method: POST

### Sample Request
```
{
   "network": "mainnet",
   "chain": "eth",
   "symbol": "eth",
   "rawtx": "0x0000000000000000000000000000000000000000000000000000000000"
}
```

### Parameters

network: Network, accepts “mainnet” or “testnet”, required
chain: Chain name, required
symbol: Currency symbol, required
rawtx: Transaction to broadcast

### Sample Response
```
{
   "status": true,
   "code": 2000,
   "message": "send transaction success",
   "data": {
      "hash": "0x0000000000000000000000000000000000000000000000000000000000"
   }
}
```

### Response Explanation

hash: Transaction Hash

## 5. Get Unspent Inputs and Outputs API (UTXO series)

Endpoint: api/v1/get_unspend_list

Request Method: POST

### Sample Request
```
{
   "network": "mainnet",
   "chain": "eth",
   "symbol": "eth",
   "address": "0x0000000000000000000000"
}
```

### Parameters

network: Network, accepts “mainnet” or “testnet”, required
chain: Chain name, required
symbol: Currency symbol, required
address: Address, required

### Sample Response
```
{
   "status": true,
   "code": 2000,
   "message": "get utxo success",
   "data": [
      {
         "txid": "0x00000000000",
         "vout": 1000000,
         "index": 0,
         "script": "",
         "amount": 100000
      }
   ]
}
```

### Response Explanation

txid: Transaction ID
vout: Output
index: Index
script: Locking script
amount: Amount

## 6. Get Transaction Records API

Endpoint: api/v1/get_address_transaction

Request Method: POST

### Sample Request
```
{
   "network": "mainnet",
   "chain": "eth",
   "symbol": "eth",
   "address": "0x00000000000000000000000000",
   "contract_address": "0x00000000000000000000000000",
   "page": 1,
   "page_size": 10,
   "order": "time"
}
```

### Parameters

network: Network, accepts “mainnet” or “testnet”, required
chain: Chain name, required
symbol: Currency symbol, required
address: Address, required
contract_address: Contract address
page: Page number
page_size: Number of records per page

### Sample Response
```
{
   "status": true,
   "code": 2000,
   "message": "get transaction success",
   "data": [
      {
         "hash": "0x0000000000000000",
         "from": "0x0000000000000000",
         "to": "0x0000000000000000",
         "value": 0.001,
         "fee": 0.000001,
         "block": 1233221,
         "status": 0,
         "direction": "out"
      }
   ]
}
```

### Response Explanation

hash: Transaction Hash
from: Sender address
to: Receiver address
value: Received amount
fee: Transaction fee
block: Block number
status: Status
direction
