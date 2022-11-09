const { ethers } = require("hardhat");

async function main() {
  const TetherToken = await ethers.getContractFactory("Tether");
  const tetherToken = await TetherToken.deploy();
  
  await tetherToken.deployed();

  console.log("TetherToken deployed to:", tetherToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});