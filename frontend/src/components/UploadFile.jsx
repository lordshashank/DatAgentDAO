import Modal from "./Modal";
import classes from "../styles/Upload.module.css";
import { useRef, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdCloudUpload } from "react-icons/io";
import useWeb3 from "../../utils/useWeb3";
import { useWeb3Contract, useMoralis } from "react-moralis";
import useGovernorContracts from "../../utils/useGovernorContracts";
const CID = require("cids");
const contractAddress = "0x61cc1d3A77c855689327626034d6B3aD2B511458";
const contractABI = "";
let cid;
let dealParams;

const UploadFile = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const fileInput = useRef();
  const [isUploaded, setIsUploaded] = useState(false);
  const [drag, setDrag] = useState(false);
  const [dealID, setDealID] = useState("");
  const [values, setValues] = useState({
    startTime: "",
    endTime: "",
    isChecked: true,
  });
  const [minEndDate, setMinEndDate] = useState(undefined);
  const [dealCid, setDealCid] = useState("");
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // console.log(values);
  // const startDate = new Date(values.startTime);
  // const startTime = startDate.getTime() / 1000;
  // console.log(startTime);
  const [files, setFiles] = useState([]);
  const { chainId, Moralis } = useWeb3();
  const { account: userAccount } = useMoralis();
  const { runContractFunction: makeDealProposal } = useWeb3Contract({});
  const { runContractFunction: pieceDeals } = useWeb3Contract({});
  const { sendProposal } = useGovernorContracts();
  const isBuyDisabled =
    values.startTime.length === 0 || values.endTime === 0 || files.length === 0;

  const valueChangeHandler = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    if (name === "isChecked") {
      setValues({ ...values, [name]: event.target.checked });
    }
  };
  const startTimeHandler = (event) => {
    const startTime = event.target.value;
    setValues({ ...values, ["startTime"]: startTime });
    if (startTime.length > 0) {
      const startDate = new Date(startTime);
      startDate.setMonth(startDate.getMonth() + 6);
      setMinEndDate(startDate);
    }
  };
  // console.log(minEndDate);
  useEffect(() => {
    // console.log(userAccount);
  }, [userAccount]);

  // const Transfer = async () => {
  //   const options = {
  //     type: "native",
  //     amount: Moralis.Units.ETH("0.0"),
  //     receiver: "0x9299eac94952235Ae86b94122D2f7c77F7F6Ad30",
  //   };
  //   let result = await Moralis.transfer(options);
  // };
  function onDrag(e) {
    e.preventDefault();
    setDrag(true);
  }

  function onLeave(e) {
    e.preventDefault();
    setDrag(false);
  }

  function dropFiles(e) {
    e.preventDefault();

    setDrag(false);

    let i;

    for (const file of e.dataTransfer.files) {
      for (i = 0; i < files.length; i++) {
        if (file.name === files[i].name) break;
      }

      if (i === files.length) setFiles((files) => files.concat(file));
    }
  }
  function addFiles() {
    let i;

    for (const file of fileInput.current.files) {
      for (i = 0; i < files.length; i++) {
        if (file.name === files[i].name) break;
      }
      if (i === files.length) setFiles((files) => files.concat(file));
    }
  }
  function removeFile(e) {
    setFiles((files) => {
      files.splice(e.target.getAttribute("data-key"), 1);

      return [...files];
    });
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(values);
  };
  // const check = async () => {
  //   const deal = {
  //     fileName: "filesName[0]",
  //     cid: "check",
  //     pieceCid: "commP",
  //     pieceSize: "dealParams.pieceSize",
  //     startEpoch: 520000,
  //     endEpoch: 1555200,
  //     verifiedDeal: false,
  //     keepUnsealedCopy: true,
  //   };
  //   const response = await fetch("http://localhost:3001/sendDeal", {
  //     method: "POST",
  //     // mode: "no-cors",
  //     body: JSON.stringify({
  //       owner: userAccount,
  //       deal: deal,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       // Accept: "application/json",
  //     },
  //   });
  //   const resData = await response.json();
  //   console.log(resData);
  //   return resData;
  // };
  const handleSubmit = async () => {
    // try {
    //   await Transfer();
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log(userAccount);
    let deal;
    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const resData = await response.json();
      console.log(resData);
      if (response.status == 200) {
        setIsUploaded(true);
        setFiles([]);
      } else {
        setIsUploaded(false);
      }
    } catch (error) {
      console.error(error);
    }

    // let filesName;
    try {
      let filesName = [];
      for (let i = 0; i < files.length; i++) {
        filesName.push(files[i].name);
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/buyDeal`,
        {
          method: "POST",
          body: JSON.stringify({ filesName: filesName, miner: "t19920" }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await response.json();
      dealParams = resData;

      // console.log(dealParams);

      const commP = dealParams["pieceCid"];
      // console.log(commP);
      // setDealCid(commP);

      cid = new CID(commP);
      setDealCid(cid);
      const genesisDate = new Date("2023-01-13");
      const genesisTime = genesisDate.getTime() / 1000;
      // console.log(genesisTime);
      const startDate = new Date(values.startTime);
      const startTime = startDate.getTime() / 1000;
      // console.log(startTime);
      const endDate = new Date(values.endTime);
      const endTime = endDate.getTime() / 1000;
      // console.log(endTime);
      const startEpoch = Math.floor((startTime - genesisTime) / 30) + 2000;
      const endEpoch = Math.floor((endTime - genesisTime) / 30) + 2000;
      // console.log(startEpoch, "to", endEpoch);
      const extraParamsV1 = [
        dealParams.carLink,
        dealParams.carSize, //carSize,
        false, // taskArgs.skipIpniAnnounce,
        false, // taskArgs.removeUnsealedCopy
      ];
      const DealRequestStruct = [
        cid.bytes, //cidHex
        dealParams.pieceSize, //taskArgs.pieceSize,
        false, //taskArgs.verifiedDeal,
        commP, //taskArgs.label,
        // 520000, // startEpoch
        startEpoch, // startEpoch
        endEpoch, // endEpoch
        0, // taskArgs.storagePricePerEpoch,
        0, // taskArgs.providerCollateral,
        0, // taskArgs.clientCollateral,
        1, //taskArgs.extraParamsVersion,
        extraParamsV1,
      ];
      // console.log(DealRequestStruct);
      const result = await sendProposal(DealRequestStruct);
      console.log(result);
      if (result == "undefined") return;
      // save in database;
      deal = {
        id: dealParams.id,
        fileName: filesName[0],
        mimeType: dealParams.mimeType,
        cid: dealParams.root,
        pieceCid: commP,
        pieceSize: dealParams.pieceSize,
        startDate: values.startTime,
        startEpoch: startEpoch,
        endDate: values.endTime,
        endEpoch: endEpoch,
        verifiedDeal: false,
        keepUnsealedCopy: values.isChecked,
      };
      // console.log(deal);

      filesName = [];
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isUploaded) {
      setTimeout(() => {
        setIsUploaded(false);
      }, 5000);
    } else {
      return;
    }
  }, [isUploaded]);

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.content}>
        <div className={classes.heading}>
          {isUploaded && (
            <p className={classes.upload_msg} style={{ color: "green" }}>
              Files Uploaded Successfully!
            </p>
          )}
          <div className={classes.title}>
            <h1>MAKE DEALS</h1>
            <AiOutlineClose
              onClick={props.onClose}
              className={classes["heading-close"]}
            />
          </div>
        </div>
        <div className={classes.details}>
          <div className={classes.form}>
            <div className={classes["left-box"]}>
              <form className={classes.miner_details}>
                <label for="Choose model">Choose a model:</label>
                <select name="models" id="model" form="Model Type">
                  <option value="Dreambooth">DreamBooth</option>
                </select>
                <label htmlFor="start-time">Proposal Description</label>
                {/* <input
                  id="start-time"
                  type="text"
                  value={values.startTime}
                  onChange={startTimeHandler}
                /> */}
                <textarea rows="10" cols="50" />
                {/* <label htmlFor="end-time"> Upload</label>
                <input
                  id="end-time"
                  type="text"
                  value={values.endTime}
                  onChange={valueChangeHandler("endTime")}
                /> */}
              </form>
            </div>
            <div
              className={classes.input_field}
              onDrop={dropFiles}
              onDragOver={onDrag}
              onDragLeave={onLeave}
            >
              <div className={classes.input}>
                {files.length > 0 && (
                  <ul>
                    {files.map((file, index) => (
                      <li className={classes.files} key={index}>
                        <a
                          href={URL.createObjectURL(file)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {file.name}
                        </a>
                        <button
                          key={index}
                          data-key={index}
                          className={classes.close}
                          onClick={removeFile}
                        ></button>
                      </li>
                    ))}
                  </ul>
                )}
                <IoMdCloudUpload className={classes["upload-logo"]} />
                <p>UPLOAD FILE</p>
                <p>OR</p>
                <div className={classes["file-input-container"]}>
                  <input
                    ref={fileInput}
                    type="file"
                    className={classes["file-input"]}
                    id="file-input"
                    multiple
                    onChange={addFiles}
                  />
                  <label
                    htmlFor="file-input"
                    className={classes["file-input-label"]}
                  >
                    Browse Files
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className={classes["buy-button-box"]}>
            <button
              className={classes["buy-button"]}
              // disabled={isBuyDisabled}
              onClick={async (e) => {
                if (isLoading) return;
                e.preventDefault();
                setIsLoading(true);
                // await handleSubmit();
                await sendProposal();
                if (props.anotherFunction == true) {
                  try {
                    await props.runReward();
                  } catch (error) {
                    console.log(error);
                  }
                }
                setIsLoading(false);
              }}
            >
              {!isLoading ? (
                <span>Propose</span>
              ) : (
                <div className="spinner"></div>
              )}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UploadFile;
