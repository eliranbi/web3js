const Web3 = require('web3')

// ganache address is : http:127.0.0.1:7545
// ethSigner address is : http://127.0.0.1:8545/
const rpcURL = 'http://127.0.0.1:8545/'
const web3 = new Web3(rpcURL)

const abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"ValueChanged","type":"event"},{"inputs":[],"name":"decrement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"increment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"retrieveVersion","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const address = '0x0c863aaFf51E38F96513EA4566125788bE4abc4C'
const contract = new web3.eth.Contract(abi, address)

contract.methods.retrieve().call((err, result) => { console.log(result) })
contract.methods.retrieveVersion().call((err, result) => { console.log(result) })









