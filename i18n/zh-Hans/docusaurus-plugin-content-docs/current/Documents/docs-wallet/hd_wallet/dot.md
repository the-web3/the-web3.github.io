---
sidebar_position: 6
---

# DOT Savour CommunityHd Interface Documentation

- Public Node: https://rpc.polkadot.io
- go-sdk: https://github.com/savour-community/go-substrate-rpc-client

## 1. Get Account Balance by Address

- state_queryStorageAt
  
- state_queryStorage

Both of the above methods can be used.

## 2. Get Account Nonce

### Request Example

```
{
   "jsonrpc":"2.0",
   "method":"account_nextIndex",
   "params": ["16ZL8yLyXv3V3L3z9ofR1ovFLziyXaN1DPq4yffMAZ9czzBD"],
   "id":1
}
```

or

```
{
   "jsonrpc":"2.0",
   "method":"system_accountNextIndex",
   "params": ["16ZL8yLyXv3V3L3z9ofR1ovFLziyXaN1DPq4yffMAZ9czzBD"],
   "id":1
}
```
The address is passed in the params.

### Response Example

```
{
    "jsonrpc": "2.0",
    "result": 88,
    "id": 1
}
```

result: The value of result is the Account Nonce

## 3. Get Latest blockNumber and blockHash

### Request Example

```
{
   "jsonrpc":"2.0",
   "method":"chain_getBlock",
   "id":1
}
```

### Response Example
```
{
    "jsonrpc": "2.0",
    "result": {
        "block": {
            "header": {
                "parentHash": "0xcdaa562dd34ca954202ac5b7ab1225603cac1d672375b9958d5985704578843b",
                "number": "0xc07d6a",
                "stateRoot": "0x49776ff1f4d59b0f30c333a356b82e2dee5e94cd339856a6492c0c7ed38487a7",
                "extrinsicsRoot": "0x02ecb9e290b81f6c36ce35cf22ecdec67fadec1c940567418486464af3640606",
                "digest": {
                    "logs": [
                        "",
                        ""
                    ]
                }
            },
            "extrinsics": [
                "0x280403000b0ca851088401",
                ""
            ]
        },
        "justifications": null
    },
    "id": 1
}
```

number: Latest block height
stateRoot: Latest block Hash

## 4. Get specName, specVersion, transactionVersion, etc.

### Request Example

```
{
   "jsonrpc":"2.0",
   "method":"state_getRuntimeVersion",
   "id":1
}
```

### Response Example

```
{
    "jsonrpc": "2.0",
    "result": {
        "specName": "polkadot",
        "implName": "parity-polkadot",
        "authoringVersion": 0,
        "specVersion": 9291,
        "implVersion": 0,
        "apis": [
            [
                "0xdf6acb689907609b",
                4
            ]
        ],
        "transactionVersion": 14,
        "stateVersion": 0
    },
    "id": 1
}
```

specName: Chain name
specVersion: Version
transactionVersion: Transaction version

## 5. Get Chain Name

### Request Example

```
{
   "jsonrpc":"2.0",
   "method":"system_chain",
   "id":1
}
```

### Response Example

```
{
    "jsonrpc": "2.0",
    "result": "Polkadot",
    "id": 1
}
```

## 6. Broadcast Transaction

### Request Example

```
{
   "jsonrpc":"2.0",
   "method":"author_submitExtrinsic",
   "params": ["0x00000000"],
   "id":1
}
```

### Failure Response Example

```
{
    "jsonrpc": "2.0",
    "error": {
       .......
    },
    "id": 1
}
```

Successful response returns the transaction Hash

## 7. Get Transaction Records by Address

Investigate third-party APIs on your own.

:::tip

Sidecar API Link: https://paritytech.github.io/substrate-api-sidecar/dist/

:::
