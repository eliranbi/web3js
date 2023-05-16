// Importing web3.js library 
const Web3 = require("web3")

// Instantiating a Web3 instance and using Cloudflare's free Ethereum Node
const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/KRYDfLBGsGTXlAQe71NSq2MovqjgY3RK")

// This is the wallet address whose balance we are going to check. 
// Make sure to change this with your Ethereum Wallet Address
const walletAddress = '0xC793DD377C936bfc7DFA50760c4aB34cBFBD5c36'

// Calling getBalance function of web3.eth and logging the final balance of the wallet address
// We will get our value in terms of Wei (1 Ether = 10^18 Wei))  
web3.eth.getBalance(walletAddress).then(res => console.log(res));