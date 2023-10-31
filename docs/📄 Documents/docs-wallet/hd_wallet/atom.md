---
sidebar_position: 5
---

# Atom Documentation

## 1. Exporting Public Key to Address

```
def public_to_address(pubkey):
   s = hashlib.new("sha256", pubkey).digest()
   r = hashlib.new("ripemd160", s).digest()
   bits = bech32.convertbits(r, 8, 5)
   return bech32.bech32_encode("cosmos", bits)
```

## 2. Address Validation

```
def validate_address(address):
  return re.match('^cosmos[A-Za-z0-9]{39}', address)
```

## 3. Fee Related

```
def get_gas():
   fees = gas * gas-prices
   https://docs.cosmos.network/master/basics/gas-fees.html#gas-and-fees 
```

## 4. Get Account Information and Balance

```
def get_account_number_sequence_balance(self, address: str):
   url = 'https://api.cosmos.network/auth/accounts/' + address
   resp = requests.get(url, timeout=10)
   value = resp.json()['result']['value']
   return int(value['account_number']), int(value['sequence']), value['coins']    
```

## 5. Broadcast Transaction to Blockchain Network

```
def send_tx(tx:str):
    url = 'https://api.cosmos.network/txs'
    headers = {'content-type': "application/json"}
    resp = requests.post(url, tx, headers, timeout=10)
    r = resp.json()
    return r
```

## 6. Get Transactions Related to an Address

```
def get_tx_by_address(txid:str) -> Optional[Dict[str, Any]]:
   use explore api 
```

## 7. Query Transaction Information by txid

```
def get_tx_by_hash(hash:str) -> Optional[Dict[str, Any]]:
   url = 'https://api.cosmos.network/txs/' + hash
   resp = requests.get(url, timeout=15)
   return resp.json()
```