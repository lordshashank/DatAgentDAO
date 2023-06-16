// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {Test} from "forge-std/Test.sol";
import {MyGovernor} from "../src/MyGovernor.sol";
import {GovToken} from "../src/GovToken.sol";
import {TimeLock} from "../src/TimeLock.sol";
import "../src/DatAgentDAO.sol";
import {console} from "forge-std/console.sol";

contract MyGovernorTest is Test {
    GovToken token;
    TimeLock timelock;
    MyGovernor governor;
    DatAgentDAO datAgentDao;

    uint256 public constant MIN_DELAY = 3600; // 1 hour - after a vote passes, you have 1 hour before you can enact
    uint256 public constant QUORUM_PERCENTAGE = 4; // Need 4% of voters to pass
    uint256 public constant VOTING_PERIOD = 50400; // This is how long voting lasts
    uint256 public constant VOTING_DELAY = 1; // How many blocks till a proposal vote becomes active
    address public constant LilypadEventsUpgradeableCpntracts =
        address(0xdC7612fa94F098F1d7BB40E0f4F4db8fF0bC8820);

    address[] proposers;
    address[] executors;

    bytes[] functionCalls;
    address[] addressesToCall;
    uint256[] values;

    address public constant VOTER = address(1);

    function setUp() public {
        token = new GovToken();
        token.mint(VOTER, 100e18);

        vm.prank(VOTER);
        token.delegate(VOTER);
        timelock = new TimeLock(MIN_DELAY, proposers, executors);
        governor = new MyGovernor(token, timelock);
        bytes32 proposerRole = timelock.PROPOSER_ROLE();
        bytes32 executorRole = timelock.EXECUTOR_ROLE();
        bytes32 adminRole = timelock.TIMELOCK_ADMIN_ROLE();

        timelock.grantRole(proposerRole, address(governor));
        timelock.grantRole(executorRole, address(0));
        timelock.revokeRole(adminRole, msg.sender);

        datAgentDao = new DatAgentDAO(
            address(token),
            LilypadEventsUpgradeableCpntracts
        );
        datAgentDao.transferOwnership(address(timelock));
    }

    function testCantUpdateDatAgentDAOWithoutGovernance() public {
        vm.expectRevert();
        assert(datAgentDao.getDataSet() == 0);
    }

    function testGovernanceUpdatesDatAgentDAO() public {
        DealRequest memory dealRequestToBeMade;
        dealRequestToBeMade = DealRequest(
            "86",
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
        // bytes memory check = dealRequestToBeMade.piece_cid;
        // console.log("hehehee", check);
        string memory description = "Changes Box Name";
        bytes memory encodedFunctionCall = abi.encodeWithSignature(
            "provideDataSet((bytes,uint64,bool,string,int64,int64,uint256,uint256,uint256,uint64,(string,uint64,bool,bool)))",
            dealRequestToBeMade
        );
        addressesToCall.push(address(datAgentDao));
        values.push(0);
        functionCalls.push(encodedFunctionCall);
        uint256 proposalId = governor.propose(
            addressesToCall,
            values,
            functionCalls,
            description
        );
        console.log("Proposal State:", uint256(governor.state(proposalId)));
        // governor.proposalSnapshot(proposalId)
        // governor.proposalDeadline(proposalId)

        vm.warp(block.timestamp + VOTING_DELAY + 1);
        vm.roll(block.number + VOTING_DELAY + 1);

        console.log("Proposal State:", uint256(governor.state(proposalId)));

        // 2. Vote
        string memory reason = "I like a do da cha cha";
        // 0 = Against, 1 = For, 2 = Abstain for this example
        uint8 voteWay = 1;
        vm.prank(VOTER);
        governor.castVoteWithReason(proposalId, voteWay, reason);

        vm.warp(block.timestamp + VOTING_PERIOD + 1);
        vm.roll(block.number + VOTING_PERIOD + 1);

        console.log("Proposal State:", uint256(governor.state(proposalId)));
        console.log("Proposal Votes:");

        // 3. Queue
        bytes32 descriptionHash = keccak256(abi.encodePacked(description));
        governor.queue(addressesToCall, values, functionCalls, descriptionHash);
        vm.roll(block.number + MIN_DELAY + 1);
        vm.warp(block.timestamp + MIN_DELAY + 1);

        // 4. Execute
        governor.execute(
            addressesToCall,
            values,
            functionCalls,
            descriptionHash
        );
    }
}
