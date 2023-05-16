const Web3 = require('web3')
const rpcURL = 'https://eth-sepolia.g.alchemy.com/v2/KRYDfLBGsGTXlAQe71NSq2MovqjgY3RK' // Your RCP URL goes here
const web3 = new Web3(rpcURL)

const abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"ValueChanged","type":"event"},{"inputs":[],"name":"decrement","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"increment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"retrieveVersion","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]
//const address = "0xe2c873c6C7FBE6709Ef1f336357c40bA3B41011c"
const address = "0x9558774D93e1f79Fdb207604C019E7F6EBF94fAa"
const contract = new web3.eth.Contract(abi, address)


const send = async() =>{
    //works for ganach  ... 
    //const accounts = await web3.eth.getAccounts()
    //console.log(accounts);

    accounts = ['0xC793DD377C936bfc7DFA50760c4aB34cBFBD5c36']
    const privateKey = "53f497fd5b7e23e128955c9adc9bc3a5ac098080e49f8dc89f46f1b67ac022bc"

    const tx = {
        from : accounts[0],
        to: address,
        gas: 50000,
        data: contract.methods.increment().encodeABI()
    }

    const signature = await web3.eth.accounts.signTransaction(tx, privateKey);
    /*
    // Getting receipt ... no events ... 
    web3.eth.sendSignedTransaction(signature.rawTransaction).on(
        "receipt", (receipt) => {
            console.log(receipt);
        }
    )
    */

    contract.methods.retrieve().call((err, result) => { console.log("Current value: " + result) })

    web3.eth.sendSignedTransaction(signature.rawTransaction).on(
        "receipt", async() => {
            //Get all the event ....
            //const events = await contract.getPastEvents({}, {fromBlock:0, toBlock: "latest"})
            
            //fliter on ValueChanged - event 
            const events = await contract.getPastEvents("ValueChanged", {fromBlock:0, toBlock: "latest"})
            console.log(events);
            contract.methods.retrieve().call((err, result) => { console.log("After increment value: " + result) })
        }
    )
    
    return;

}

send();
