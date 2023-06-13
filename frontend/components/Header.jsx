"use client";
import { ConnectButton } from "web3uikit";
import { useMoralis } from "react-moralis";

const Header = () => {
  const { account } = useMoralis();
  console.log(account);
  return (
    <div>
      <ConnectButton moralisAuth={false} />
    </div>
  );
};

export default Header;
