import CID from "cids";
import { useMoralis } from "react-moralis";
import { use, useState, useEffect } from "react";
import { contractAddress, abi } from "../constants";
import { useWeb3Contract } from "react-moralis";
import useWeb3 from "./useWeb3";
import useAbiEncodeWithSignature from "./useAbiEncodeWithSignature";
const useGovernorContracts = () => {
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
            "function propose(address[] targets, uint256[] values, bytes[] calldatas, string description)",
            "propose",
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
};
