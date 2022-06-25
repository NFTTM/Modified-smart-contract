const hre = require("hardhat");
const { ethers } = require("ethers")
const ticketJson = require("../artifacts/contracts/NftTicket.sol/NftTicket.json")
require("dotenv").config();

async function main() {
  const guestWallet = new ethers.Wallet(process.env.PRIVATE_KEY_2)
  const provider = new ethers.providers.JsonRpcProvider(process.env.BSC_RPC);
  const signer = guestWallet.connect(provider);
  const nftContract = new ethers.Contract(process.env.CONTRACT_ADDRESS, ticketJson.abi, signer)

  // TO BUY A TICKET
  const vip2TicketPrice = ethers.utils.parseEther("0.002")
  const vip2Name = ethers.utils.formatBytes32String('VIP2')
  await nftContract.buyTicket(vip2Name, {value: vip2TicketPrice})

  console.log(`Guest ${guestWallet.address} has bought a VIP2 Ticket`)
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
