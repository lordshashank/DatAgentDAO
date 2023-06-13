// import ethers from "ethers";
const ethers = require("ethers");
// export default
function useAbiEncodeWithSignature(functionDefinition, functionName, args) {
  let ABI = [functionDefinition];
  let iface = new ethers.utils.Interface(ABI);
  return iface.encodeFunctionData(functionName, args);
}
const deal = [
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
  ["", 0, false, false],
];
const abiCoder = new ethers.utils.AbiCoder();

const encodedData = abiCoder.encode(["uint", "string"], [1234, "Hello World"]);
// console.log(
//   useAbiEncodeWithSignature(
//     "provideDataSet",
//     [deal]
//   )
// );
console.log(encodedData);
