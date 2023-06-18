"use client";
import CID from "cids";
import { useMoralis } from "react-moralis";
import { use, useState, useEffect } from "react";
import { contractAddress, abi } from "../constants";
import { useWeb3Contract } from "react-moralis";
import useWeb3 from "./useWeb3";
import {
  useAbiEncodeWithSignature,
  useAbiEncodePacked,
  useKeccak256,
} from "./useAbiEncodeFunctions";

const useGovernorContracts = () => {
  const { userAccount, Moralis, isWeb3Enabled } = useWeb3();
  const { runContractFunction: propose } = useWeb3Contract({});
  const { runContractFunction: queue } = useWeb3Contract({});
  const { runContractFunction: execute } = useWeb3Contract({});
  const { runContractFunction: castVoteWithReason } = useWeb3Contract({});
  const dealDataset = [
    "0x56",
    100,
    true,
    "test",
    0,
    10,
    0,
    0,
    0,
    1,
    ["", 0, false, false],
  ];
  const sendProposal = async () => {
    // const dealDatasetEncoded = useAbiEncodeWithSignature(
    //   "function provideDataSet (tuple (bytes piece_cid, uint64 piece_size, bool verified_deal, string label, int64 start_epoch, int64 end_epoch, uint256 storage_price_per_epoch,uint256 provider_collateral,uint256 client_collateral,uint64 extra_params_version,tuple(string location_ref, uint64 car_size, bool skip_ipni_announce, bool remove_unsealed_copy) extra_params) deal)",
    //   "provideDataSet",
    //   [dealDataset]
    // );
    // console.log(dealDatasetEncoded);

    const description = `dataset proposed by ${userAccount} to improve stable diffusion model`;
    const parameters = {
      abi: abi.Governor,
      contractAddress: contractAddress.Governor,
      functionName: "propose",
      params: {
        targets: [contractAddress.DatAgentDAO],
        values: ["0"],
        calldatas: [
          useAbiEncodeWithSignature(
            "function provideDataSet (tuple (bytes piece_cid, uint64 piece_size, bool verified_deal, string label, int64 start_epoch, int64 end_epoch, uint256 storage_price_per_epoch,uint256 provider_collateral,uint256 client_collateral,uint64 extra_params_version,tuple(string location_ref, uint64 car_size, bool skip_ipni_announce, bool remove_unsealed_copy) extra_params) deal)",
            "provideDataSet",
            [dealDataset]
          ),
        ],
        description: description,
      },
    };
    try {
      const response = await propose({
        params: parameters,
        onSuccess: () => {
          console.log("success");
          handleSuccess();
        },
        onError: (error) => {
          console.log(error);
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const sendCastVoteWithReason = async (proposalId, voteWay, reason) => {
    const parameters = {
      abi: abi.Governor,
      contractAddress: contractAddress.Governor,
      functionName: "castVoteWithReason",
      params: {
        proposalId: proposalId,
        support: voteWay,
        reason: reason,
      },
    };
    try {
      const response = await castVoteWithReason({
        params: parameters,
        onSuccess: () => {
          console.log("success");
          handleSuccess();
        },
        onError: (error) => {
          console.log(error);
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const sendQueue = async (dealDataset) => {
    const description = `dataset proposed by ${userAccount} to improve stable diffusion model`;
    const parameters = {
      abi: abi.Governor,
      contractAddress: contractAddress.Governor,
      functionName: "queue",
      params: {
        targets: [contractAddress.DatAgentDAO],
        values: [0],
        callDatas: [
          useAbiEncodeWithSignature(functionName, "provideDataSet", [
            dealDataset,
          ]),
        ],
        descriptionHash: useKeccak256(
          useAbiEncodePacked(["string"], [description])
        ),
      },
    };
    try {
      const response = await queue({
        params: parameters,
        onSuccess: () => {
          console.log("success");
          handleSuccess();
        },
        onError: (error) => {
          console.log(error);
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const sendExecute = async (dealDataset) => {
    const description = `dataset proposed by ${userAccount} to improve stable diffusion model`;
    const parameters = {
      abi: abi.Governor,
      contractAddress: contractAddress.Governor,
      functionName: "execute",
      params: {
        targets: [contractAddress.DatAgentDAO],
        values: [0],
        callDatas: [
          useAbiEncodeWithSignature(functionName, "provideDataSet", [
            dealDataset,
          ]),
        ],
        description: description,
      },
    };
    try {
      const response = await execute({
        params: parameters,
        onSuccess: () => {
          console.log("success");
          handleSuccess();
        },
        onError: (error) => {
          console.log(error);
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return { sendProposal, sendCastVoteWithReason, sendQueue, sendExecute };
};
export default useGovernorContracts;
