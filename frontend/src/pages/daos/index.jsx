import classes from "../../styles/AiConference.module.css";
import Header from "../../components/Header";
import Events from "../../components/Events";
import Footer from "../../components/Footer";
import ContractModal from "../../components/ContractModal";
import TestModal from "../../components/TestModal";
import { useState } from "react";
const Page = () => {
  const [showCart, setShowCart] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const onClose = () => {
    setShowCart(false);
  };
  const onCloseTestModal = () => setShowTestModal(false);
  return (
    <div className={classes["ai-conference"]}>
      {showCart && <ContractModal onClose={onClose} />}
      {showTestModal && <TestModal onClose={onCloseTestModal} />}
      <div className={classes["header-intro"]}>
        <Header />
        <h1>All listed DAOs</h1>
      </div>
      <Events setShowCart={setShowCart} setShowTestModal={setShowTestModal} />
      <Footer />
    </div>
  );
};

export default Page;
