// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
    uint256 private value;
    struct check {
        uint256 a;
        uint256 b;
    }
    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Stores a new value in the contract
    function store(uint256 newValue) public onlyOwner {
        value = newValue;
        emit ValueChanged(newValue);
    }

    //check
    function checkSum(check calldata _check) public pure returns (uint256) {
        return _check.a + _check.b;
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
}
