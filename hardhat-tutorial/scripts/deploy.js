const { ethers } = require("hardhat");

async function main() {
  /**
   * A contractFactory in ethers.js is an abstraction sued to deploy new smart contracts so Whitelist Contract here is a factory for instances of our whitelist contract.
   */
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  //here we deploy the contract
  const deployedWhitelistContract = await whitelistContract.deploy(210);
  //10 is tme maximum number of whitelisted addresses allowed

  //Wait for it to finich deploying
  await deployedWhitelistContract.deployed();

  //print the address for deployed contract
  console.log(
    "Whitelisted Contract Address:",
    deployedWhitelistContract.address
  );
}

//Call the main function and catch if there is any error

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
