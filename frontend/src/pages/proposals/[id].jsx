import PageModal from "../../components/PageModal";
import classes from "../../styles/Proposal.module.css";
import { MdOutlineDone } from "react-icons/md";
import Footer from "../../components/Footer";
import TestModal from "../../components/TestModal";
import { useState } from "react";
const Page = () => {
  const [showTestModal, setShowTestModal] = useState(false);
  return (
    <PageModal isButton={false}>
      {showTestModal && <TestModal onClose={() => setShowTestModal(false)} />}
      <div className={classes.row}>
        <div className={classes.for}>
          <div>
            <p>For</p>
            <p>1000</p>
          </div>
          <div>
            <p>1 Address</p>
            <p>Votes</p>
          </div>
          <div>
            <p>0x9299eac94952235Ae86b94122D2f7c77F7F6Ad30</p>
            <p>1000</p>
          </div>
          <div>
            <p>--</p>
            <p>--</p>
          </div>

          <div>
            <p>--</p>
            <p>--</p>
          </div>
          <div>
            <button>View All</button>
          </div>
        </div>
        <div className={classes.against}>
          <div>
            <p>Against</p>
            <p>0</p>
          </div>
          <div>
            <p>0 Addresses</p>
            <p>Votes</p>
          </div>
          <div>
            <p>--</p>
            <p>--</p>
          </div>
          <div>
            <p>--</p>
            <p>--</p>
          </div>
          <div>
            <p>--</p>
            <p>--</p>
          </div>
          <div>
            <button>View All</button>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.details}>
          <h3>Details</h3>
          <div className={classes["details-data"]}>
            <div className={classes.row2}>
              <h4>model:</h4>
              <p>DreamBooth</p>
            </div>
            <div className={classes.row2}>
              <h4>dataset:</h4>
              <a href="https://bafybeidqbuphwkqwgrobv2vakwsh3l6b4q2mx7xspgh4l7lhulhc3dfa7a.ipfs.nftstorage.link/">
                Dataset Proposed
              </a>
            </div>
            <div className={classes.column}>
              <h4>description:</h4>
              <p>
                {" "}
                These are some images of David Aronchik to train the stable
                diffusion model to recognize him more aptly. <br /> These were
                proposed by 0x9299eac94952235Ae86b94122D2f7c77F7F6Ad30
              </p>
            </div>
            <div className={classes.column}>
              <h3>Current Status</h3>
              <p className={classes.greeny}>
                {" "}
                Congratulations your proposal was accepted and model has been
                trained on your data
              </p>
            </div>
            <div className={classes.column}>
              <h3>Testing</h3>
              <p> You can test the model by giving the prompt here</p>
              <button
                onClick={() => setShowTestModal(true)}
                style={{ alignSelf: "flex-start" }}
                className="btn"
              >
                Test Model
              </button>
            </div>
          </div>
        </div>
        <div className={classes["proposal-history"]}>
          <h3>Proposal History</h3>
          <div className={classes.activity}>
            <div>
              <MdOutlineDone className={classes.grey} /> Created
            </div>
            <div>
              <MdOutlineDone className={classes.grey} /> Active
            </div>{" "}
            <div>
              <MdOutlineDone className={classes.green} /> Succeeded
            </div>{" "}
            <div>
              <MdOutlineDone className={classes.green} /> Queued
            </div>{" "}
            <div>
              <MdOutlineDone className={classes.green} /> Executed
            </div>
            <div>
              <MdOutlineDone className={classes.green} /> Model Trained
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageModal>
  );
};

export default Page;
