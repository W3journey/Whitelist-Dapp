const { ethers } = require("hardhat");

const main = async () => {
  /**
   * A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
   * so whitelistContract here is a factory for instances of our Whitelist contract.
   */
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // here we deploy the contract
  const deployWhitelistContract = await whitelistContract.deploy(10);
  // 10 is the Maximum number of whitelisted address allowed

  // Wait for it to finish deploying
  await deployWhitelistContract.deployed();

  // Log the address of the deployed contract
  console.log(`Whitelist Contract Address: ${deployWhitelistContract.address}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
