const { ethers } = require("hardhat");

async function main() {
  const Binance = await ethers.getContractFactory("Binance");
  const binance = await Binance.deploy();
  
  await binance.deployed();

  console.log("BinanceToken deployed to:", binance.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});