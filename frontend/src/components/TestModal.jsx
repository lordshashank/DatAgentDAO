import Modal from "./Modal";
import classes from "../styles/ContractModal.module.css";
import { useState } from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

import useDaoContracts from "../../utils/useDaoContracts";
const TestModal = ({ onClose }) => {
  const { getImageFromPrompt } = useDaoContracts();
  const [userPrompt, setUserPrompt] = useState("");

  const [showImage, setShowImage] = useState(false);
  const [viewImage, setViewImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Modal onClose={onClose}>
      <div className={classes.modal}>
        <form className={classes.form}>
          <label htmlFor="prompt">Your Prompt</label>
          <input
            type="text"
            placeholder="Prompt"
            id="prompt"
            onChange={(e) => setUserPrompt(e.target.value)}
            value={userPrompt}
          ></input>
        </form>
        <div className={classes["image-container"]}>
          {viewImage && (
            <>
              <Image
                className={classes.image}
                src="https://ipfs.io/ipfs/QmSCQZ8ZF2FhSird5fJSs3QYSr9KvrxAUnGn6kzTySSgmX/outputs/image0.png"
                width={400}
                height={400}
              />
              <button
                className={classes.close}
                onClick={() => setViewImage(false)}
              >
                <AiFillCloseCircle />
              </button>
            </>
          )}
          {showImage && (
            <button
              className={"btn"}
              onClick={() => {
                getImageFromPrompt(userPrompt);
                setViewImage(true);
                setShowImage(false);
              }}
            >
              View Image
            </button>
          )}
        </div>
        <div className={classes.btns}>
          <button onClick={onClose} className={classes.btn}>
            Close
          </button>
          <button
            className={classes.btn}
            onClick={() => {
              setIsLoading(true);
              const timer = setTimeout(() => {
                setIsLoading(false);
                setShowImage(true);
                console.log("timer");
              }, 2000);
            }}
          >
            {!isLoading ? "Generate" : <div className="spinner"></div>}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TestModal;
