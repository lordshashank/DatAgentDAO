import React from "react";
import Header from "../../components/Header";
import classes from "../../styles/Home.module.css";
import useGovernorContracts from "../../utils/useGovernorContracts";
import Image from "next/image";
import useDatabase from "../../utils/useDatabase";
import useWeb3 from "../../utils/useWeb3";
const page = () => {
  const { sendProposal, sendQueue } = useGovernorContracts();
  const { userAccount, Moralis, isWeb3Enabled } = useWeb3();
  const {
    createDatabase,
    writeInDatabase,
    getDatabases,
    transferDatabase,
    readDatabase,
  } = useDatabase();

  // console.log(getDatabases());
  // createDatabase();
  // writeInDatabase("my_sdk_table_80001_6961");
  // const databaseName = createDatabase();
  // writeInDatabase(databaseName, 100);
  // readDatabase(databaseName);
  // updateDatabase(databaseName, 200);
  // readDatabase(databaseName);
  // getHealthCheck();

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
    ["", 90, false, false],
  ];
  return (
    <div className={classes.header}>
      <h1>Hello, Next.js!</h1>
      <Header />
      <button onClick={async () => await sendProposal(deal)}>Propose</button>
      <button onClick={() => createDatabase("calib")}>Create Database</button>
      <button
        onClick={() => writeInDatabase("calib_314159_193", 2, "test")}
      ></button>
      <button onClick={() => readDatabase("calib_314159_194")}>
        Read Database
      </button>
      <Image
        src="https://ipfs.io/ipfs/QmSCQZ8ZF2FhSird5fJSs3QYSr9KvrxAUnGn6kzTySSgmX/outputs/image0.png"
        width={400}
        height={400}
      />
      <Image
        // src="https://ipfs.io/ipfs/bafybeicr7yeoegk5kcxn2er52gkbnp6dethflk475xlo2k3jramk6r5sfy/starry_night_full.jpg"
        src="https://ipfs.io/ipfs/bafybeibzkimk372le6bdtbpvrksm7occe2kjya6c7czr3ctbfmev7f74bi/outputs/image0.png"
        width={400}
        height={400}
      />
    </div>
  );
};

export default page;
