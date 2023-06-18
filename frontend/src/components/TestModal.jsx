import Modal from "./Modal";
import classes from "../styles/ContractModal.module.css";
import { useState } from "react";
import Image from "next/image";

import useDaoContracts from "../../utils/useDaoContracts";
const TestModal = ({ onClose }) => {
  const { getImageFromPrompt } = useDaoContracts();
  const [userPrompt, setUserPrompt] = useState("");

  const [showImage, setShowImage] = useState(false);
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
        {showImage && (
          <Image
            src="https://ipfs.io/ipfs/QmSCQZ8ZF2FhSird5fJSs3QYSr9KvrxAUnGn6kzTySSgmX/outputs/image0.png"
            width={400}
            height={400}
          />
        )}
        <div className={classes.btns}>
          <button onClick={onClose} className={classes.btn}>
            Close
          </button>
          <button
            className={classes.btn}
            onClick={() => {
              getImageFromPrompt(userPrompt);
              setShowImage(true);
            }}
          >
            Generate
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TestModal;
