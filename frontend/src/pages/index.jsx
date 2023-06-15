import React from "react";
import Header from "../../components/Header";
import classes from "../../styles/Home.module.css";
import useGovernorContracts from "../../utils/useGovernorContracts";
import Image from "next/image";
const page = () => {
  const { propose } = useGovernorContracts();
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
  return (
    <div className={classes.header}>
      <h1>Hello, Next.js!</h1>
      <Header />
      <button onClick={() => propose(deal)}>Propose</button>
      <Image
        src="https://ipfs.io/ipfs/bafybeihfy4opphtnkbzihf5mfziioxitlqyuctnezauydnycaashti6asi/fail-mascot.gif"
        width={400}
        height={400}
      />
      <Image
        src="https://ipfs.io/ipfs/bafybeicr7yeoegk5kcxn2er52gkbnp6dethflk475xlo2k3jramk6r5sfy/starry_night_full.jpg"
        width={400}
        height={400}
      />
    </div>
  );
};

export default page;
