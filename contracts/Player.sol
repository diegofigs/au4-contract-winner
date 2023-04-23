//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

interface IContract {
  function attempt() external;
}

contract Player {
  address deployer;
  address target;
  constructor(address _target) {
    deployer = msg.sender;
    target = _target;
  }

  modifier onlyDeployer() {
    require(deployer == msg.sender);
    _;
  }

  function play() public onlyDeployer {
    IContract(target).attempt();
  }

  // fallback function
  receive() external payable {}
}
