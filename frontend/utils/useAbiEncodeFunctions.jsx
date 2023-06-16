import { ethers } from "ethers";
// const ethers = require("ethers");
// export default
function useAbiEncodeWithSignature(functionDefinition, functionName, args) {
  let ABI = [functionDefinition];
  console.log(ABI);
  console.log(ethers);
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
// const deal = [
//   "0x56",
//   100,
//   true,
//   "test",
//   0,
//   10,
//   0,
//   0,
//   0,
//   1,
//   ["", 0, false, false],
// ];
// console.log(
//   useAbiEncodeWithSignature(
//     "function provideDataSet (tuple (bytes piece_cid, uint64 piece_size, bool verified_deal, string label, int64 start_epoch, int64 end_epoch, uint256 storage_price_per_epoch,uint256 provider_collateral,uint256 client_collateral,uint64 extra_params_version,tuple(string location_ref, uint64 car_size, bool skip_ipni_announce, bool remove_unsealed_copy)))",
//     "provideDataSet",
//     [deal]
//   )
// );
