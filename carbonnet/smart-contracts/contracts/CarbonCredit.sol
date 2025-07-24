// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract CarbonCredit {
    string public name = "CarbonNet Credit";
    string public symbol = "CNC";
    uint256 public totalSupply = 0;
    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    function mint(address to, uint256 amount) public {
        balanceOf[to] += amount;
        totalSupply += amount;
        emit Transfer(address(0), to, amount);
    }
}
