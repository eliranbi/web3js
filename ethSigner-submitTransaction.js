const Web3 = require('web3')
const rpcURL = 'http://127.0.0.1:8545'
const web3 = new Web3(rpcURL)

/*
var accounts = [
    '0x9eCE1853CA14551112140ab7E2f130F7532d6601',
    '0x34054acDc96eB94E83CDF67b45E88BF877fA9399',
    '0xbF5d514dce8D1d6e0dE0654Fc45a60c3B6184407',
    '0x76fCA1BE1F6d98d0Ac930354b2a0f4FCef27927A',
    '0x160384889b49f2226AB9A5c57dA699f1d0De7297',
    '0x6D92A0Ea51ac3A4f01fD815faBC977fFf14B8a0F',
    '0x3Ae5562B2c5ECf2750195E9c30792381Cf6942A6',
    '0x25b16ac7B281fa098e7695D559aCCec94116200d',
    '0x51F442ac301124D3DE32a518069b5674BFC9C61f',
    '0x19441fB167008644af0fBe2D7F10b0a2B80634B5'
];
*/

// account that is not exist in the fileKey that we use by generating the file will result in an error
// accounts = ['0x34054acDc96eB94E83CDF67b45E88BF877fA9399']
/*** error ... var err = new Error('Returned error: ' + message);
 Error: Returned error: No unlocked account matches the Sender
***/

// Valid accounts - Success
accounts = ['0x9eCE1853CA14551112140ab7E2f130F7532d6601']

//BOX v2 ABI
const abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"ValueChanged","type":"event"},{"inputs":[],"name":"decrement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"increment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"retrieveVersion","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const address = '0x0c863aaFf51E38F96513EA4566125788bE4abc4C'
const contract = new web3.eth.Contract(abi, address)

contract.methods.retrieve().call((err, result) => { console.log(result) })
contract.methods.increment().send({from:accounts[0]})
contract.methods.retrieve().call((err, result) => { console.log(result) })
contract.methods.retrieveVersion().call((err, result) => { console.log(result) })
