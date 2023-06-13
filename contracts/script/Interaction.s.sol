// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import {Script} from "forge-std/Script.sol";
import {MyGovernor} from "../src/MyGovernor.sol";
import {GovToken} from "../src/GovToken.sol";
import {TimeLock} from "../src/TimeLock.sol";
import "../src/DatAgentDAO.sol";
import {console} from "forge-std/console.sol";
import {DevOpsTools} from "foundry-devops/src/DevOpsTools.sol";

contract Interactions is Script {
    GovToken token;
    TimeLock timelock;
    MyGovernor governor;
    DatAgentDAO datAgentDAO;

    uint256 public constant MIN_DELAY = 3600; // 1 hour - after a vote passes, you have 1 hour before you can enact
    uint256 public constant QUORUM_PERCENTAGE = 4; // Need 4% of voters to pass
    uint256 public constant VOTING_PERIOD = 50400; // This is how long voting lasts
    uint256 public constant VOTING_DELAY = 1; // How many blocks till a proposal vote becomes active
    struct check {
        uint256 a;
        uint256 b;
    }
    address[] proposers;
    address[] executors;

    bytes[] functionCalls;
    address[] addressesToCall;
    uint256[] values;

    function setRecentContracts() internal {
        address mostRecentlyDeployedToken = DevOpsTools
            .get_most_recent_deployment("GovToken", 314159);
            console.log("mostRecentlyDeployedToken:", mostRecentlyDeployedToken);
        token = GovToken(mostRecentlyDeployedToken);
        address mostRecentlyDeployedTimeLock = DevOpsTools
            .get_most_recent_deployment("TimeLock", 314159);
            console.log("mostRecentlyDeployedTimeLock:", mostRecentlyDeployedTimeLock);
        timelock = TimeLock(payable(mostRecentlyDeployedTimeLock));
        address mostRecentlyDeployedGovernor = DevOpsTools
            .get_most_recent_deployment("MyGovernor", 314159);
            console.log("mostRecentlyDeployedGovernor:", mostRecentlyDeployedGovernor);
        governor = MyGovernor(payable(mostRecentlyDeployedGovernor));
        address mostRecentlyDeployedDatAgentDAO = DevOpsTools
            .get_most_recent_deployment("DatAgentDAO", 314159);
            console.log("mostRecentlyDeployedDatAgentDAO:", mostRecentlyDeployedDatAgentDAO);
        datAgentDAO = DatAgentDAO(mostRecentlyDeployedDatAgentDAO);
    }

    function run() external returns (uint256) {
        setRecentContracts();

        DealRequest memory dealRequestToBeMade;
        dealRequestToBeMade = DealRequest(
            "QmQmQmQmQmQmQmQmQmQmQmQmQmQmQm",
            100,
            true,
            "test",
            0,
            10,
            0,
            0,
            0,
            1,
            ExtraParamsV1("", 0, false, false)
        );
        string memory description = "Propose a dataset";
        bytes memory encodedFunctionCall = abi.encodeWithSignature(
            "provideDataSet((bytes,uint64,bool,string,int64,int64,uint256,uint256,uint256,uint64,(string,uint64,bool,bool)))",
            dealRequestToBeMade
        );
        addressesToCall.push(address(datAgentDAO));
        values.push(0);
        functionCalls.push(encodedFunctionCall);
        // vm.startBroadcast();
        // uint256 proposalId = governor.propose(
        //     addressesToCall,
        //     values,
        //     functionCalls,
        //     description
        // );
        // vm.stopBroadcast();
        uint256 proposalId = 15300460995652809111354301338262948016922046385437762538561034890047635408341;
        console.log("Proposal ID:", proposalId);
        console.log("Proposal State:", uint256(governor.state(proposalId)));
        console.log(governor.proposalSnapshot(proposalId));
        console.log(governor.proposalDeadline(proposalId));

        // vm.warp(block.timestamp + VOTING_DELAY + 1);
        // vm.roll(block.number + VOTING_DELAY + 1);

        // console.log("Proposal State:", uint256(governor.state(proposalId)));

        // // 2. Vote
        // string memory reason = "I like a do da cha cha";
        // // 0 = Against, 1 = For, 2 = Abstain for this example
        // uint8 voteWay = 1;
        // vm.prank(VOTER);
        // governor.castVoteWithReason(proposalId, voteWay, reason);

        // vm.warp(block.timestamp + VOTING_PERIOD + 1);
        // vm.roll(block.number + VOTING_PERIOD + 1);

        // console.log("Proposal State:", uint256(governor.state(proposalId)));

        // // 3. Queue
        // bytes32 descriptionHash = keccak256(abi.encodePacked(description));
        // governor.queue(addressesToCall, values, functionCalls, descriptionHash);
        // vm.roll(block.number + MIN_DELAY + 1);
        // vm.warp(block.timestamp + MIN_DELAY + 1);

        // // 4. Execute
        // governor.execute(
        //     addressesToCall,
        //     values,
        //     functionCalls,
        //     descriptionHash
        // );
        // vm.stopBroadcast();
        return (proposalId);
    }
}
