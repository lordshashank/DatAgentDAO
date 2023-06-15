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
export default useGovernorContracts = () => {
  const { userAccount, Moralis, isWeb3Enabled } = useWeb3();
  const propose = async (dealDataset) => {
    const description = `dataset proposed by ${userAccount} to improve stable diffusion model`;
    const parameters = {
      abi: abi.Governor,
      contractAddress: contractAddress.Governor,
      functionName: "propose",
      params: {
        targets: [contractAddress.DatAgentDAO],
        values: [0],
        callDatas: [
          useAbiEncodeWithSignature(
            "function provideDataSet (tuple (bytes piece_cid, uint64 piece_size, bool verified_deal, string label, int64 start_epoch, int64 end_epoch, uint256 storage_price_per_epoch,uint256 provider_collateral,uint256 client_collateral,uint64 extra_params_version,tuple(string location_ref, uint64 car_size, bool skip_ipni_announce, bool remove_unsealed_copy)))",
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
  const castVoteWithReason = async (proposalId, voteWay, reason) => {
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
  const queue = async (dealDataset) => {
    const description = `dataset proposed by ${userAccount} to improve stable diffusion model`;
    const parameters = {
      abi: abi.Governor,
      contractAddress: contractAddress.Governor,
      functionName: "queue",
      params: {
        targets: [contractAddress.DatAgentDAO],
        values: [0],
        callDatas: [
          useAbiEncodeWithSignature(
            "function provideDataSet (tuple (bytes piece_cid, uint64 piece_size, bool verified_deal, string label, int64 start_epoch, int64 end_epoch, uint256 storage_price_per_epoch,uint256 provider_collateral,uint256 client_collateral,uint64 extra_params_version,tuple(string location_ref, uint64 car_size, bool skip_ipni_announce, bool remove_unsealed_copy)))",
            "provideDataSet",
            [dealDataset]
          ),
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
  const execute = async (dealDataset) => {
    const description = `dataset proposed by ${userAccount} to improve stable diffusion model`;
    const parameters = {
      abi: abi.Governor,
      contractAddress: contractAddress.Governor,
      functionName: "execute",
      params: {
        targets: [contractAddress.DatAgentDAO],
        values: [0],
        callDatas: [
          useAbiEncodeWithSignature(
            "function provideDataSet (tuple (bytes piece_cid, uint64 piece_size, bool verified_deal, string label, int64 start_epoch, int64 end_epoch, uint256 storage_price_per_epoch,uint256 provider_collateral,uint256 client_collateral,uint64 extra_params_version,tuple(string location_ref, uint64 car_size, bool skip_ipni_announce, bool remove_unsealed_copy)))",
            "provideDataSet",
            [dealDataset]
          ),
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
  return { propose, castVoteWithReason, queue, execute };
};
