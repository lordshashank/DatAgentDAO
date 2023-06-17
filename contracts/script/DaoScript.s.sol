// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import {Script} from "forge-std/Script.sol";
import {MyGovernor} from "../src/MyGovernor.sol";
import {GovToken} from "../src/GovToken.sol";
import {TimeLock} from "../src/TimeLock.sol";
import {DatAgentDAO} from "../src/DatAgentDAO.sol";
import {console} from "forge-std/console.sol";

contract DeployDatagentDAO is Script {
    GovToken token;
    TimeLock timelock;
    MyGovernor governor;
    DatAgentDAO datAgentDAO;

    uint256 public constant MIN_DELAY = 3600; // 1 hour - after a vote passes, you have 1 hour before you can enact
    uint256 public constant QUORUM_PERCENTAGE = 4; // Need 4% of voters to pass
    uint256 public constant VOTING_PERIOD = 50400; // This is how long voting lasts
    uint256 public constant VOTING_DELAY = 1; // How many blocks till a proposal vote becomes active
    address public constant LilypadEventsUpgradeableCpntracts =
        address(0xdC7612fa94F098F1d7BB40E0f4F4db8fF0bC8820);
    struct check {
        uint256 a;
        uint256 b;
    }
    address[] proposers;
    address[] executors;

    bytes[] functionCalls;
    address[] addressesToCall;
    uint256[] values;

    function run() external returns (address) {
        vm.startBroadcast();
        token = new GovToken();
        console.log("token:", address(token));
        token.mint(msg.sender, 10e18);
        token.delegate(msg.sender);
        timelock = new TimeLock(MIN_DELAY, proposers, executors);
        console.log("timelock:", address(timelock));
        governor = new MyGovernor(token, timelock);
        console.log("governor:", address(governor));
        // vm.stopBroadcast();
        bytes32 proposerRole = timelock.PROPOSER_ROLE();
        bytes32 executorRole = timelock.EXECUTOR_ROLE();
        bytes32 adminRole = timelock.TIMELOCK_ADMIN_ROLE();
        // vm.startBroadcast();
        timelock.grantRole(proposerRole, address(governor));
        timelock.grantRole(executorRole, address(0));
        timelock.revokeRole(adminRole, msg.sender);
        datAgentDAO = new DatAgentDAO(
            address(governor),
            LilypadEventsUpgradeableCpntracts
        );
        console.log("datAgentDAO:", address(datAgentDAO));
        vm.stopBroadcast();
        return (address(governor));
    }
}
