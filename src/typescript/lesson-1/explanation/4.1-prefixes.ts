type Wallet = `0x${string}`

let wallet: Wallet
wallet = '1234567890' // Erro de compilação, wallet é do tipo `0x${string}`, e não pode ser atribuído um valor do tipo string.
wallet = '0x1234567890' // Atribuição de valor para a variável wallet.