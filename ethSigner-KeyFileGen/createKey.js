const Web3 = require("web3");

// Web3 initialization (should point to the JSON-RPC endpoint)
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

var V3KeyStore = web3.eth.accounts.encrypt("44022bf55563fa6dccfd22652faeb023c81c8ad9c3969c38ae2daecd03bd5994", "Password123");
console.log(JSON.stringify(V3KeyStore));
process.exit();