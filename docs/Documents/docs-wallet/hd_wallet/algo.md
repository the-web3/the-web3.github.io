---
sidebar_position: 4
---

# Algo Documentation

- Go SDK: [https://github.com/algorand/go-algorand-sdk](https://github.com/algorand/go-algorand-sdk)
- Public Node 1: [https://mainnet-api.algonode.cloud](https://mainnet-api.algonode.cloud/), Node Provider: [https://algonode.io/api/#free-as-in–algorand-api-access](https://algonode.io/api/#free-as-in--algorand-api-access)
- Documentation for Choosing Open Nodes: [https://developer.algorand.org/docs/get-started/devenv/](https://developer.algorand.org/docs/get-started/devenv/)
- Explorer: [https://algoexplorer.io/](https://algoexplorer.io/)
- API Documentation: [https://developer.algorand.org/docs/rest-apis/algod/v2/](https://developer.algorand.org/docs/rest-apis/algod/v2/)

## 1. Get Account Balance

```
curl https://mainnet-api.algonode.cloud/v2/accounts/ZW3ISEHZUHPO7OZGMKLKIIMKVICOUDRCERI454I3DB2BH52HGLSO67W754/

def get_account(address):
    path = "/v2/accounts/%s"% address
    info = await self.request_rest(path, method='GET')
    return info['balance']
```

## 2. Get Transaction Signing Parameters

```
curl https://mainnet-api.algonode.cloud/v2/transactions/params

def get_transaction_params():
    path = '/v1/transactions/params'
    return await self.request_rest(path, method='GET')
```
 

## 3. Broadcast Transaction

For details, refer to the documentation at `/v2/transactions`.

```
def send_transaction(tx):
    path = '/v1/transactions'
    return await self.request_rest(path, method='POST', rawtxn=bytes.fromhex(tx))
```

## 4. Get Transaction Details by Hash

[https://algoexplorer.io/api-dev/indexer-v2](https://algoexplorer.io/api-dev/indexer-v2)

Explore the `look up` module and study the browser API to obtain details.

## 5. Get Transaction List by Address

[https://algoexplorer.io/api-dev/indexer-v2](https://algoexplorer.io/api-dev/indexer-v2)

Explore the `look up` module and study the browser API to obtain details.