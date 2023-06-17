import classes from "../styles/ContractModal.module.css";
import Modal from "./Modal";
const ContractModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={classes["input-fields"]}>
        <lable htmlFor="name">Dao Name</lable>
        <input id="name" type="text" placeholder="................" />
        <lable htmlFor="name">Dao Name</lable>
        <input id="name" type="text" placeholder="................" />
        <lable htmlFor="name">Dao Name</lable>
        <input id="name" type="text" placeholder="................" />
        <lable htmlFor="name">Dao Name</lable>
        <input id="name" type="text" placeholder="................" />
        <lable htmlFor="name">Dao Name</lable>
        <input id="name" type="text" placeholder="................" />
        <lable htmlFor="name">Dao Name</lable>
        <input id="name" type="text" placeholder="................" />
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
