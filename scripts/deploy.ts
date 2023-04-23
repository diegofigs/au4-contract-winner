import { ethers } from "hardhat";

const target = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;
  //
  // const lockedAmount = ethers.utils.parseEther("0.001");
  //
  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  //
  // await lock.deployed();
  //
  // console.log(
  //   `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );

  const Player = await ethers.getContractFactory("Player");
  const player = await Player.deploy(target);

  await player.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
