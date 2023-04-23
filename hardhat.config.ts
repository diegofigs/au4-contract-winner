import dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

if (!process.env.PRIVATE_KEY) {
  throw new Error("Required: PRIVATE_KEY");
}

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;
