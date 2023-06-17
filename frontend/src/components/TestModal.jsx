import Modal from "./Modal";
import classes from "../styles/ContractModal.module.css";
import { useState } from "react";

const TestModal = ({ onClose }) => {
  const [userPrompt, setUserPrompt] = useState("");
  return (
    <Modal onClose={onClose}>
      <div className={classes.modal}>
        <form className={classes.form}>
          <label htmlFor="prompt">Your Prompt</label>
          <input
            type="text"
            placeholder="Promp"
            id="prompt"
            onChange={(e) => setUserPrompt(e.target.value)}
            value={userPrompt}
          ></input>
        </form>
        <div className={classes.btns}>
          <button onClick={onClose} className={classes.btn}>
            Close
          </button>
          <button className={classes.btn}>Generate</button>
        </div>
      </div>
    </Modal>
  );
};

export default TestModal;
