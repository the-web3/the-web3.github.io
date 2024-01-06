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

## 4. Broadcast Transaction API

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
direction： Direction(in/out)

## 7. Interface for Getting Transaction Details

Interface Name: api/v1/get_hash_transaction

Request Method: POST

### Request Example:

```
{
  "network": "mainnet",
  "chain": "eth",
  "symbol":"eth",
  "hash": "0x00000000000000000000000000"
}
```

### Parameter Explanation:

### Request Example:

```
{
  "status": true,
  "code": 2000,
  "message": "get transaction success",
  "data": {
    "hash": "0x0000000000000000",
    "from": [
      "0x0000000000000000",
      "0x0000000000000000"
    ],
    "to": [
      "0x0000000000000000",
      "0x0000000000000000"
    ],
    "value": [
      0.001,
      0.001
    ],
    "fee": 0.000001,
    "block": 1233221,
    "status": 0,
    "direction": "out"
  }
}
```

### Parameter Explanation:

hash: Transaction Hash
from: Sending addresses
to: Receiving addresses
value: Amount sent
fee: Transaction fee
block: Block it belongs to
status: Status
direction: Direction (in or out)

## 8. Submit Wallet Information Interface

Interface Name: api/v1/submit_wallet_info

Request Method: POST

### Request Example:

```
{
  "device_id": "111",
  "wallet_uuid": "txlist",
  "chain": "eth",
  "symbol": "eth",
  "wallet_name": "aaa",
  "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "contract_addr": ""
}
```

### Parameter Explanation:

device_id: Device ID
wallet_uuid: Wallet ID
chain: Chain name
symbol: Asset name
wallet_name: Wallet name
address: Address
contract_addr: Contract address

### Request Example:

```
{
  "status": true,
  "code": 2000,
  "message": "wallet success",
  "data": null
}
```

## 9. Batch Submit Wallet Addresses Interface

Interface Name: api/v1/wallet/batch_submit_wallet

Request Method: POST

### Request Example:

```
{
  "batch_wallet": [
    {
      "device_id": "guosjtest001",
      "wallet_uuid": "guosjtest01",
      "chain": "eth",
      "symbol": "eth",
      "wallet_name": "aaa",
      "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "contract_addr": "guosjtest"
    },
    {
      "device_id": "guosjtest001",
      "wallet_uuid": "guosjtest01",
      "chain": "eth",
      "symbol": "eth",
      "wallet_name": "aaa",
      "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "contract_addr": "guosjtest"
    }
  ]
}
```

### Request Example:

```
{
  "status": true,
  "code": 2000,
  "msg": "wallet success",
  "data": null
}
```

## 10. Get Wallet Assets

Interface Name: api/v1/wallet/get_wallet_asset

Request Method: POST

### Request Example:

```
{
  "device_id": "111"
}
```

### Request Example:

```
{
  "status": true,
  "code": 2000,
  "msg": "wallet success",
  "data": {
    "coin_asset": [
      {
        "wallet_name": "aaa",
        "wallet_balance": [
          {
            "id": 1,
            "balance": 2.4689,
            "icon": "1",
            "name": "ETH",
            "usdt_price": 7563.302327,
            "cny_price": 49019.26883
          }
        ]
      }
    ],
    "total_asset": 7563.302327
  }
}
```

## 11. Search Configured Tokens

Interface Name: v1/token/sourch_add_token

Request Method: POST

### Request Example:

```
{
  "toke_name": "U"
}
```

### Request Example:

```
{
  "status": true,
  "code": 2000,
  "msg": "wallet success",
  "data": [
    {
      "id": 1,
      "asset_id": 1,
      "token_name": "USDT",
      "icon": "1",
      "token_symbol": "USDT",
      "contract_addr": "sourch_add_token",
      "decimal": 18
    }
  ]
}
```

## 12. Delete Wallet Interface

Interface Name: api/v1/wallet/delete_wallet

Request Method: POST

### Request Example:

```
{
  "device_id": "919679BF-C185-4A7B-BB9A-AEF3A3167892",
  "wallet_uuid": "9xuw9gb8pi"
}
```

### Request Example:

```
{
  "status": true,
  "code": 2000,
  "msg": "wallet success",
  "data": null
}
```

## 13. Add Address

URL: api/v1/notebook/add_note_book
Method: POST

### Request Example:

```
{
  "device_id": "设备ID",
  "name": "名字",
  "asset_name": "资产名称",
  "memo": "memo",
  "address": "0x1111"
}
```

### Request Example:

```
{
  "status": true,
  "code": 2000,
  "msg": "wallet success",
  "data": null
}
```

## 14. Edit Address:

URL: api/v1/notebook/add_note_book

Method: POST

### Request Example:

```
{
   "nb_id": 1,
   "device_id": "DeviceID",
   "name": "Name",
   "asset_name": "Asset Name",
   "memo": "Memo",
   "address": "0x1111"
}
```

### Return Example:

```
{
    "status": true,
    "code": 2000,
    "msg": "Wallet success",
    "data": null
}
```



## 15. Edit Address:

URL: api/v1/notebook/add_note_book

Method: POST

### Request Example:

```
{
   "nb_id": 1,
   "device_id": "DeviceID",
   "name": "Name",
   "asset_name": "Asset Name",
   "memo": "Memo"
}
```

### Return Example:

```
{
    "status": true,
    "code": 2000,
    "msg": "Wallet success",
    "data": null
}
```

## 16. Delete Address:

URL: api/v1/notebook/del_note_book

Method: POST

### Request Example:

```
{
   "nb_id": 1
}
```

### Return Example:

```
{
    "status": true,
    "code": 2000,
    "msg": "Wallet success",
    "data": null
}
```

## 17. Address List:

URL: api/v1/notebook/get_note_book

Method: POST

### Request Example:

```
{
   "device_id": "DeviceID"
}
```

### Return Example:

```
{
    "status": true,
    "code": 2000,
    "msg": "Wallet success",
    "data": [
        {
            "id": 2,
            "device_id": "DeviceID",
            "name": "Name",
            "asset_name": "Asset Name",
            "memo": "Memo",
            "is_removed": 0,
            "created_at": "2021-08-20T20:32:29+08:00",
            "updated_at": "2021-08-20T20:32:29+08:00"
        },
        {
            "id": 3,
            "device_id": "DeviceID",
            "name": "Name",
            "asset_name": "Asset Name",
            "memo": "Memo",
            "is_removed": 0,
            "created_at": "2021-08-20T20:33:21+08:00",
            "updated_at": "2021-08-20T20:33:21+08:00"
        },
        {
            "id": 4,
            "device_id": "DeviceID",
            "name": "Name",
            "asset_name": "Asset Name",
            "memo": "Memo",
            "is_removed": 0,
            "created_at": "2021-08-20T20:33:22+08:00",
            "updated_at": "2021-08-20T20:33:22+08:00"
        },
        {
            "id": 5,
            "device_id": "DeviceID",
            "name": "Name",
            "asset_name": "Asset Name",
            "memo": "Memo",
            "is_removed": 0,
            "created_at": "2021-08-20T20:33:22+08:00",
            "updated_at": "2021-08-20T20:33:22+08:00"
        },
        {
            "id": 6,
            "device_id": "DeviceID",
            "name": "Name",
            "asset_name": "Asset Name",
            "memo": "Memo",
            "is_removed": 0,
            "created_at": "2021-08-20T20:33:23+08:00",
            "updated_at": "2021-08-20T20:33:23+08:00"
        },
        {
            "id": 7,
            "device_id": "DeviceID",
            "name": "Name",
            "asset_name": "Asset Name",
            "memo": "Memo",
            "is_removed": 0,
            "created_at": "2021-08-20T20:33:23+08:00",
            "updated_at": "2021-08-20T20:33:23+08:00"
        }
    ]
}
```

- Return default balance after submitting wallet.
- Add an interface for searching and adding custom tokens.
- For Dapp backend management, create a proxy for DAPPs that cannot be accessed in China.