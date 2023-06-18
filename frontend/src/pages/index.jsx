import React from "react";
import Header from "../components/Header";
import classes from "../../styles/Home.module.css";
import useGovernorContracts from "../../utils/useGovernorContracts";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Choose from "../components/Choose";
import Footer from "../components/Footer";
import Image from "next/image";
import useDatabase from "../../utils/useDatabase";
import useWeb3 from "../../utils/useWeb3";
import { useState } from "react";
import UploadFile from "../components/UploadFile";
// import getTransactionInfo from "../../utils/BeryxClient";
import { useAbiEncodeWithSignature } from "../../utils/useAbiEncodeFunctions";
import useDaoContracts from "../../utils/useDaoContracts";
const page = () => {
  const [showCart, setShowCart] = useState(false);
  const { sendProposal, sendQueue } = useGovernorContracts();
  const { userAccount, Moralis, isWeb3Enabled } = useWeb3();
  const {
    createDatabase,
    writeInDatabase,
    getDatabases,
    transferDatabase,
    readDatabase,
  } = useDatabase();
  // const { getImageFromPrompt, getAllImages } = useDaoContracts();
  // console.log(getDatabases());
  // createDatabase();
  // writeInDatabase("my_sdk_table_80001_6961");
  // const databaseName = createDatabase();
  // writeInDatabase(databaseName, 100);
  // readDatabase(databaseName);
  // updateDatabase(databaseName, 200);
  // readDatabase(databaseName);
  // getHealthCheck();
  // console.log(getTransactionInfo());
  const deal = [
    "0x6567",
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
  const functionName =
    "function provideDataSet((bytes piece_cid, uint64 piece_size, bool verified_deal, string label, int64 start_epoch, int64 end_epoch, uint256 storage_price_per_epoch,uint256 provider_collateral,uint256 client_collateral,uint64 extra_params_version,(string location_ref, uint64 car_size, bool skip_ipni_announce, bool remove_unsealed_copy) nestedParam))";
  return (
    <div>
      {showCart && (
        <UploadFile
          onClose={() => setShowCart(false)}
          anotherFunction={false}
        />
      )}
      <div className={classes.home}>
        <Header />
        <div className={classes["header-down"]}>
          <div className={classes.highlights}>
            <h1>One-stop solution for Decentralized AI Protocols</h1>
            <p>
              Make your AI protocol decentralized from decision making to model
              training as well as getting outputs. DatAgent DAO provide a
              one-stop on-chain solution for all your needs.
            </p>
            <div className={classes.buttons}>
              <button className="custom-btn">
                {" "}
                Read More <IoIosArrowForward className={classes.forward} />
              </button>
              <button className="custom-btn">
                {" "}
                Contact Us <IoIosArrowForward className={classes.forward} />
              </button>
            </div>
            <div className={classes.arrows}>
              <IoIosArrowBack className={classes.arrow} size={20} />
              <IoIosArrowForward className={classes.arrow} size={20} />
            </div>
          </div>
          <div className={classes["robot-image"]}></div>
        </div>
      </div>
      <AboutUs />
      <Services />
      <Choose />
      <Footer />
      {/* <button onClick={async () => await sendProposal(deal)}>Propose</button>
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
      /> */}
    </div>
  );
};

export default page;
