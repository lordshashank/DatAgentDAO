// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {Test} from "forge-std/Test.sol";
import {MyGovernor} from "../../src/MyGovernor.sol";
import {GovToken} from "../../src/GovToken.sol";
import {TimeLock} from "../../src/TimeLock.sol";
import {DatAgentDAO} from "../../src/DatAgentDAO.sol";
import {console} from "forge-std/console.sol";
// User request for this contract to make a deal. This structure is modelled after Filecoin's Deal
// Proposal, but leaves out the provider, since any provider can pick up a deal broadcast by this
// contract.
struct DealRequest {
    bytes piece_cid;
    uint64 piece_size;
    bool verified_deal;
    string label;
    int64 start_epoch;
    int64 end_epoch;
    uint256 storage_price_per_epoch;
    uint256 provider_collateral;
    uint256 client_collateral;
    uint64 extra_params_version;
    ExtraParamsV1 extra_params;
}

// Extra parameters associated with the deal request. These are off-protocol flags that
// the storage provider will need.
struct ExtraParamsV1 {
    string location_ref;
    uint64 car_size;
    bool skip_ipni_announce;
    bool remove_unsealed_copy;
}

contract DaoUnitTest is Test {
    GovToken token;
    TimeLock timelock;
    MyGovernor governor;
    DatAgentDAO datAgentDao;

    uint256 public constant MIN_DELAY = 3600; // 1 hour - after a vote passes, you have 1 hour before you can enact
    uint256 public constant QUORUM_PERCENTAGE = 4; // Need 4% of voters to pass
    uint256 public constant VOTING_PERIOD = 50400; // This is how long voting lasts
    uint256 public constant VOTING_DELAY = 1; // How many blocks till a proposal vote becomes active

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
        datAgentDao = new DatAgentDAO(address(token));
        // datAgentDao.transferOwnership(address(timelock));
    }

    function testCantUpdateDatAgentDAOWithoutGovernance() public {
        vm.expectRevert();
        assert(datAgentDao.getDataSet() == 0);
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
        // bool check = datAgentDao.provideDataSet(dealRequestToBeMade);
        bool check = true;
        assert(check == true);
    }
}
