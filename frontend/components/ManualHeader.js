"use client";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import classes from "../styles/ManualHeader.module.css";

const ManualHeader = (props) => {
  const buttonClassName = props.buttonClassName;
  const { enableWeb3, isWeb3EnableLoading, account, Moralis, deactivateWeb3 } =
    useMoralis();
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);

  useEffect(() => {
    setIsMetamaskInstalled(Boolean(window.ethereum));
  }, []);

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`);
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("Null Account found");
      }
    });
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const connected = window.localStorage.getItem("connected");
      if (connected) {
        enableWeb3();
      }
    }
  }, []);

  const deactivateConnectButton = async () => {
    await deactivateWeb3();
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("connected");
    }
  };
  const activateConnectButton = async () => {
    if (!isMetamaskInstalled) {
      window.open("https://metamask.io/download.html", "_blank");
      return;
    }
    const ret = await enableWeb3();
    if (typeof ret !== "undefined") {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("connected", "injected");
      }
    }
  };

  return (
    <nav className={props.className}>
      {account ? (
        <button
          onClick={deactivateConnectButton}
          className={classes[`${buttonClassName}`]}
        >
          <span>Disconnect Wallet</span>
        </button>
      ) : (
        <button
          onClick={activateConnectButton}
          disabled={isWeb3EnableLoading}
          className={classes[`${buttonClassName}`]}
        >
          <span>Connect Wallet</span>
        </button>
      )}
    </nav>
  );
};

export default ManualHeader;
