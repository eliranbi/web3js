const Web3 = require('web3')

//const rpcURL = 'https://eth-sepolia.g.alchemy.com/v2/KRYDfLBGsGTXlAQe71NSq2MovqjgY3RK' // Your RCP URL goes here

const rpcURL = 'HTTP://127.0.0.1:7545/'
const web3 = new Web3(rpcURL)

const abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"ValueChanged","type":"event"},{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"retrieveVersion","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]
// using the proxy address will result in 42 (has state and contrage storage )
//const address = '0xe2c873c6C7FBE6709Ef1f336357c40bA3B41011c'

//const address = '0x9558774D93e1f79Fdb207604C019E7F6EBF94fAa'

const address = '0x0c863aaFf51E38F96513EA4566125788bE4abc4C'

// using the box contract address to retirve will result in undefined ... (since no state variable)
//const address = '0xC793DD377C936bfc7DFA50760c4aB34cBFBD5c36'

//Box contract address --> 0xC793DD377C936bfc7DFA50760c4aB34cBFBD5c36
//Proxy contract address (TransparentUpgradeableProxy) --> 0xe2c873c6C7FBE6709Ef1f336357c40bA3B41011c 
//ProxyAdmin contract address --> 0xc83F1480326bC4C0366d3772Eec09863c8fBaeac

const contract = new web3.eth.Contract(abi, address)

contract.methods.retrieve().call((err, result) => { console.log(result) })
contract.methods.retrieveVersion().call((err, result) => { console.log(result) })


/*
contract.methods.totalSupply().call((err, result) => { console.log(result) })
contract.methods.name().call((err, result) => { console.log(result) })
contract.methods.symbol().call((err, result) => { console.log(result) })
contract.methods.balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07').call((err, result) => { console.log(result) })
*/