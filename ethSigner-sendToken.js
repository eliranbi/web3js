// Importing web3.js library 
const Web3 = require("web3")

const web3 = new Web3("http://127.0.0.1:8545")

// This is the wallet address whose balance we are going to check. 
// Make sure to change this with your Ethereum Wallet Address
const sender = '0x9eCE1853CA14551112140ab7E2f130F7532d6601'
const receiver = '0x34054acDc96eB94E83CDF67b45E88BF877fA9399'
    
web3.eth.sendTransaction({to:receiver, from:sender, value:web3.utils.toWei("0.1", "ether")})


/*
const weiValue = Web3.utils.toWei('1', 'ether');
console.log(weiValue);
// => 1000000000000000000

const etherValue = Web3.utils.fromWei('1000000000000000000', 'ether');
console.log(etherValue);
// => 1
*/




