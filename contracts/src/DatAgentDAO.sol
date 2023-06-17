// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "./DatAgentDealClient.sol";
import {GovToken} from "./GovToken.sol";
import "./StableDiffusionCallerV2.sol";

contract DatAgentDAO is Ownable, DatAgentDealClient, StableDiffusionCallerV2 {
    uint256 tokensForProvidingData = 1e18;
    mapping(address => bytes) public providerToDataCID;
    GovToken public govToken;

    event DataProvided(address indexed provider, bytes deal);

    constructor(
        address _govToken,
        address _bridgeContractAddress
    ) StableDiffusionCallerV2(_bridgeContractAddress) {
        govToken = GovToken(_govToken);
    }

    function getDataSet() public view onlyOwner returns (uint256) {
        return 1;
    }

    function provideDataSet(
        DealRequest calldata deal
    ) public onlyOwner returns (bool) {
        makeDealProposal(deal);
        govToken.mint(msg.sender, tokensForProvidingData);
        providerToDataCID[msg.sender] = deal.piece_cid;
        emit DataProvided(msg.sender, deal.piece_cid);
        return true;
    }
}
