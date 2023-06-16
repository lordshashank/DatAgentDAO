// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {Test} from "forge-std/Test.sol";
import {MyGovernor} from "../../src/MyGovernor.sol";
import {GovToken} from "../../src/GovToken.sol";
import {TimeLock} from "../../src/TimeLock.sol";
import "../../src/DatAgentDAO.sol";
import {console} from "forge-std/console.sol";

contract DaoUnitTest is Test {
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
        datAgentDao = new DatAgentDAO(
            address(token),
            LilypadEventsUpgradeableCpntracts
        );
        // datAgentDao.transferOwnership(address(timelock));
    }

    function testCantUpdateDatAgentDAOWithoutGovernances() public {
        // vm.expectRevert();
        assert(datAgentDao.getDataSet() == 1);
    }

    function testProviderDataSet() public {
        DealRequest memory dealRequestToBeMade = DealRequest(
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
        console.log(dealRequestToBeMade.extra_params.car_size);
        bool check = datAgentDao.provideDataSet(dealRequestToBeMade);
        // bool check = true;
        assert(check == true);
    }
}
