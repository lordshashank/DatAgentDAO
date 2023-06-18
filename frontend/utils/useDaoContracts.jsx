import { contractAddress, abi } from "../constants";
import { useWeb3Contract } from "react-moralis";
import useWeb3 from "./useWeb3";

const useDaoContracts = () => {
  const { userAccount, Moralis, isWeb3Enabled } = useWeb3();

  const { runContractFunction: StableDiffusion } = useWeb3Contract({});
  const { runContractFunction: allImages } = useWeb3Contract({});
  const getImageFromPrompt = async (prompt) => {
    const parameters = {
      abi: abi.Lilypad,
      contractAddress: contractAddress.Lilypad,
      functionName: "StableDiffusion",
      params: {
        _prompt: prompt,
      },
      msgValue: "40000000000000000",
    };
    try {
      const response = await StableDiffusion({
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
  const getAllImages = async () => {
    const parameters = {
      abi: abi.Lilypad,
      contractAddress: contractAddress.Lilypad,
      functionName: "allImages",
      params: {},
    };
    try {
      const response = await allImages({
        params: parameters,
        onSuccess: () => {
          console.log("success");
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
  const handleSuccess = async (tx) => {
    try {
      await tx.wait(1);
    } catch (error) {
      console.log(error);
    }
  };
  return { getImageFromPrompt, getAllImages };
};
export default useDaoContracts;
