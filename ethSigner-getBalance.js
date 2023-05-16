// Importing web3.js library 
const Web3 = require("web3")

// Instantiating a Web3 instance and using Cloudflare's free Ethereum Node
const web3 = new Web3("http://127.0.0.1:8545")

// This is the wallet address whose balance we are going to check. 
// Make sure to change this with your Ethereum Wallet Address
const walletAddress = '0x9eCE1853CA14551112140ab7E2f130F7532d6601'

// Calling getBalance function of web3.eth and logging the final balance of the wallet address
// We will get our value in terms of Wei (1 Ether = 10^18 Wei))  
web3.eth.getBalance(walletAddress).then(res => console.log( Web3.utils.fromWei(res, 'ether')));



/*
const weiValue = Web3.utils.toWei('1', 'ether');
console.log(weiValue);
// => 1000000000000000000

const etherValue = Web3.utils.fromWei('1000000000000000000', 'ether');
console.log(etherValue);
// => 1
*/