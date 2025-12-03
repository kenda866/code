import { ethers } from "ethers";

// Connect to Ethereum RPC
const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/eth");

// Target wallet
const address = "0x0000000000000000000000000000000000000000";

async function getBalance() {
    // Get balance (in wei)
    const balanceWei = await provider.getBalance(address);

    // Convert to ETH
    const balanceEth = ethers.formatEther(balanceWei);

    console.log("ETH Balance:", balanceEth);
}

getBalance();
