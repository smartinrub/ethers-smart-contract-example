// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract MyContract {
    // using pure since we are not modifying the state
    function helloWorld() public pure returns (string memory) {
        return "Hello World!";
    }

    function getGasLimit() public view returns (uint256) {
        return block.gaslimit;
    }

    function getSender() public view returns (address) {
        return msg.sender;
    }
}
