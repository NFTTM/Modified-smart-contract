### DEPLOY TO BSCTESTNET

`yarn hardhat run --network bscTestnet scripts/deploy.js`

`CHANGE CONTRACT_ADDRESS IN .ENV`
## Version 3
Deploying NftTicket contract to BSCTestnet
Awaiting confirmation on deployment of NftTicket
Completed
Contract deployed at:  0xEB1cE6C7Ec3E9b0f0AA715586d91F708e15e2Db9
Gas used: 3644356
Transaction hash: 0x7ebc03de2b5c94fd6f9a059644e50b63b9303aebda395f628d180aa690e517a0
✨  Done in 17.47s.

- VERIFY
yarn hardhat clean
yarn hardhat verify --network bscTestnet 0xEB1cE6C7Ec3E9b0f0AA715586d91F708e15e2Db9 "SuperBowl2023" "SU0"
