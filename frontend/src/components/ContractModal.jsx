import classes from "../styles/ContractModal.module.css";
import Modal from "./Modal";
const ContractModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={classes["input-fields"]}>
        <lable htmlFor="name">Name of DAO</lable>
        <input id="name" type="text" placeholder="Data DAO" />
        <lable htmlFor="name">Model Name</lable>
        <input id="name" type="text" placeholder="LLama" />
        <lable htmlFor="name">Description</lable>
        {/* <input id="name" type="text" placeholder="................" /> */}
        <textarea
          id="Description"
          name="Description"
          rows="4"
          cols="30"
        ></textarea>
        <lable htmlFor="name">
          Number of Tokens to be minted to each initial owner
        </lable>
        <input id="name" type="number" placeholder="" />

        <lable htmlFor="name">Initial owner Addresses</lable>
        <input id="name" type="text" placeholder="0x" />
        {/* <lable htmlFor="name"></lable>
        <input id="name" type="text" placeholder="................" /> */}
      </div>
      <div className={classes.btns}>
        <button onClick={onClose} className={classes.btn}>
          Close
        </button>
        <button className={classes.btn}>Create Contract</button>
      </div>
    </Modal>
  );
};

export default ContractModal;
