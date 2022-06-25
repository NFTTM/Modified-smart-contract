const hre = require("hardhat");

async function main() {
  console.log("Deploying NftTicket contract to BSCTestnet");
  const [deployer] = await hre.ethers.getSigners()


  const EventNameSet = "SuperBowl2023";
  const EventSymbolSet = "SU0";

  const NftTicket = await hre.ethers.getContractFactory("NftTicket");
  const nftTicket = await NftTicket.deploy(EventNameSet, EventSymbolSet);
  const tx = await nftTicket.deployed();
  console.log("Awaiting confirmation on deployment of NftTicket");
  const deployTxReceipt = await tx.deployTransaction.wait();
  console.log("Completed");
  console.log("Contract deployed at: ", nftTicket.address);
  console.log(`Gas used: ${deployTxReceipt.gasUsed}`);
  console.log("Transaction hash:", deployTxReceipt.transactionHash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
