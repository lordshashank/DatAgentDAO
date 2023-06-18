import classes from "../styles/PageModal.module.css";
import Header from "./Header";
import Link from "next/link";
import UploadFile from "./UploadFile";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const PageModal = ({ isButton, children }) => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className={classes.page}>
      {showCart && (
        <UploadFile
          onClose={() => setShowCart(false)}
          anotherFunction={false}
        />
      )}
      <div className={classes.pageTop}>
        <div className={classes["header-intro"]}>
          <Header />
          <div className={classes["page-start"]}>
            <div>
              <Link className={classes.back} href="/governance/proposals/">
                <BsArrowLeft /> OVERVIEW
              </Link>
              <div className={classes.title}>
                <h1>Governance Proposals</h1>
                {isButton ? (
                  <>
                    <button className={classes.btn}>Get Dataset</button>
                    <button
                      className={classes.btn}
                      onClick={() => setShowCart(!showCart)}
                    >
                      Make Proposal
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes["page-content"]}>{children}</div>
      </div>
    </div>
  );
};

export default PageModal;
