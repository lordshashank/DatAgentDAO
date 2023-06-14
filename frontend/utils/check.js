// import ethers from "ethers";
const ethers = require("ethers");
// export default
function useAbiEncodeWithSignature(functionDefinition, functionName, args) {
  let ABI = [functionDefinition];
  let iface = new ethers.utils.Interface(ABI);
  return iface.encodeFunctionData(functionName, args);
}
const deal = [
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
const abiCoder = new ethers.utils.AbiCoder();

// const encodedData = abiCoder.encode(["uint", "string"], [1234, "Hello World"]);
// console.log(
//   useAbiEncodeWithSignature(
//     "function provideDataSet (tuple (bytes piece_cid, uint64 piece_size, bool verified_deal, string label, int64 start_epoch, int64 end_epoch, uint256 storage_price_per_epoch,uint256 provider_collateral,uint256 client_collateral,uint64 extra_params_version,tuple(string location_ref, uint64 car_size, bool skip_ipni_announce, bool remove_unsealed_copy)))",
//     // "function provideDataSet( tuple (int64))",
//     "provideDataSet",
//     [deal]
//   )
// );
console.log(
  ethers.utils.keccak256(
    ethers.utils.solidityPack(["string"], ["Changes Box Name"])
  )
);

// console.log(encodedData);
