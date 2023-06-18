import PageModal from "../../components/PageModal";
import classes from "../../styles/Proposal.module.css";
import { MdOutlineDone } from "react-icons/md";
import Footer from "../../components/Footer";
const Page = () => {
  return (
    <PageModal isButton={false}>
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
            <div>
              <p>--</p>
            </div>
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
          <h4>model:</h4>
          <p>DreamBooth</p>
          <h4>dataset:</h4>
          <a href="https://bafybeidqbuphwkqwgrobv2vakwsh3l6b4q2mx7xspgh4l7lhulhc3dfa7a.ipfs.nftstorage.link/">
            Dataset Proposed
          </a>
          <h4>description:</h4>
          <p>
            {" "}
            These are some images of David Aronchik to train the stable
            diffusion model to recognize him more aptly. <br /> These were
            proposed by 0x9299eac94952235Ae86b94122D2f7c77F7F6Ad30
          </p>
          <h3>Current Status</h3>
          <br />
          <p>
            {" "}
            Congratulations your proposal was accepted and model is trained on
            your data
          </p>
          <h3>Testing</h3>
          <br />
          <p> You can test the model by giving the prompt here</p>
          <button className={classes.btn}>Test Model</button>
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
