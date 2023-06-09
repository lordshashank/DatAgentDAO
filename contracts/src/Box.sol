// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
    uint256 private value;
    string public name;

    struct Check {
        uint256 a;
        uint256 b;
    }
    Check public check;
    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);
    event NameChanged(string newName);

    // Stores a new value in the contract
    function store(uint256 newValue) public onlyOwner {
        value = newValue;
        emit ValueChanged(newValue);
    }

    function storeName(string memory _name) public onlyOwner {
        name = _name;
        emit NameChanged(_name);
    }

    function storeCheck(Check calldata _check) public onlyOwner {
        check = Check(_check.a, _check.b);
    }

    //check
    function checkSum(Check calldata _check) public pure returns (uint256) {
        return _check.a + _check.b;
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
}
