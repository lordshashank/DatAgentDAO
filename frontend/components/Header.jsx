"use client";
import { ConnectButton } from "web3uikit";
import useWeb3 from "../utils/useWeb3";
const Header = () => {
  // const { account } = useMoralis();
  const { chainId, userAccount, Moralis, isWeb3Enabled } = useWeb3();

  console.log(userAccount);
  console.log(chainId);
  console.log(isWeb3Enabled);
  return (
    <div>
      <ConnectButton moralisAuth={false} />
    </div>
  );
};

export default Header;
