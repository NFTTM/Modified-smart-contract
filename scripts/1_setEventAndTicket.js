const hre = require("hardhat");
const { ethers } = require("ethers")
const ticketJson = require("../artifacts/contracts/NftTicket.sol/NftTicket.json")
require("dotenv").config();

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
  const provider = new ethers.providers.JsonRpcProvider(process.env.BSC_RPC);
  const signer = wallet.connect(provider);
  const nftContract = new ethers.Contract(process.env.CONTRACT_ADDRESS, ticketJson.abi, signer)

  // 1. set Event Details - SUCCEED!
    const eventName = ethers.utils.formatBytes32String("Super Bowl 2023")
    const eventDate = ethers.utils.formatBytes32String("02/12/2023")
    const eventTime = ethers.utils.formatBytes32String("18:30")

    await nftContract.setEventDetails(eventName, eventDate, eventTime)
    console.log("Event Detail Set!")
  


  // 2. set up ticket for 3 VIPs - SUCCEED!

  // VIP1 - 0.001 Eth -> For 100 Ticket, 0 sold
  const vip1Name = ethers.utils.formatBytes32String('VIP1')
  const vip1TicketPrice = ethers.utils.parseEther("0.001")
  const vip1MaxNoOfTickets = 100;
  const vip1NumberOfTicketsBought = 0;

  await nftContract.setUpTicket(vip1Name, vip1TicketPrice, vip1MaxNoOfTickets, vip1NumberOfTicketsBought)
  console.log("VIP1 Set")
  // VIP1 - 0.002 Eth -> For 25 Ticket, 5 sold
  const vip2Name = ethers.utils.formatBytes32String('VIP2')
  const vip2TicketPrice = ethers.utils.parseEther("0.002")
  const vip2MaxNoOfTickets = 25;
  const vip2NumberOfTicketsBought = 5;

  await nftContract.setUpTicket(vip2Name, vip2TicketPrice, vip2MaxNoOfTickets, vip2NumberOfTicketsBought)
  console.log("VIP2 Set")
  // VIP3 - 0.003 Eth -> For 5 Ticket, 1 sold
  const vip3Name = ethers.utils.formatBytes32String('VIP3')
  const vip3TicketPrice = ethers.utils.parseEther("0.003")
  const vip3MaxNoOfTickets = 5;
  const vip3NumberOfTicketsBought = 1;
  await nftContract.setUpTicket(vip3Name, vip3TicketPrice, vip3MaxNoOfTickets, vip3NumberOfTicketsBought)
  console.log("VIP3 Set")
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
