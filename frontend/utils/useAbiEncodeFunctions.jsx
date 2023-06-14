import ethers from "ethers";
// const ethers = require("ethers");
// export default
function useAbiEncodeWithSignature(functionDefinition, functionName, args) {
  let ABI = [functionDefinition];
  let iface = new ethers.utils.Interface(ABI);
  return iface.encodeFunctionData(functionName, args);
}
// types and values are arrays
function useAbiEncodePacked(types, values) {
  return ethers.utils.solidityPack(types, values);
}
function useKeccak256(types, values) {
  return ethers.utils.keccak256(useAbiEncodePacked(types, values));
}
export { useAbiEncodeWithSignature, useAbiEncodePacked, useKeccak256 };
