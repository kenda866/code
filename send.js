import Web3 from "web3";

const web3 = new Web3("https://rpc.ankr.com/eth");

// Sender account
const account = web3.eth.accounts.privateKeyToAccount(
  "YOUR_PRIVATE_KEY"
);

const tx = {
    from: account.address,
    to: "0x1111111111111111111111111111111111111111",
    value: web3.utils.toWei("0.001", "ether"),
};

// Estimate gas
async function send() {
    tx.gas = await web3.eth.estimateGas(tx);

    const signedTx = await account.signTransaction(tx);

    const result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log("Tx Hash:", result.transactionHash);
}

send();
