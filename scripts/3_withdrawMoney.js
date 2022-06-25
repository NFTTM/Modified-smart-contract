const hre = require("hardhat");
const { ethers } = require("ethers")
const ticketJson = require("../artifacts/contracts/NftTicket.sol/NftTicket.json")
require("dotenv").config();

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
  const provider = new ethers.providers.JsonRpcProvider(process.env.BSC_RPC);
  const signer = wallet.connect(provider);
  const nftContract = new ethers.Contract(process.env.CONTRACT_ADDRESS, ticketJson.abi, signer)

  await nftContract.withdrawMoney()
  console.log("All Money Withdrawed!")

}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
