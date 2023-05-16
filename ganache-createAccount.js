
var Web3 = require("web3");

var web3 = new Web3('http://localhost:8545')

//const entropy = "myPassword123"; <-- need to be at least 32 chars
//const account = web3.eth.accounts.create();
//web3.utils.randomHex(32)
// entropy - String (optional): A random string to increase entropy. If given it should be at least 32 characters. If none is given a random string will be generated using randomhex.



console.log(account.privateKey);

console.log(account.address);

console.log(account);