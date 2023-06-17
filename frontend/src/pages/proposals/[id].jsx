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
            <p>917,558</p>
          </div>
          <div>
            <p>18 Addresses</p>
            <p>Votes</p>
          </div>
          <div>
            <p>Polychain Capital</p>
            <p>330,954.6523</p>
          </div>
          <div>
            <p>Bain Capital Ventures</p>
            <p>256,766.5931</p>
          </div>
          <div>
            <p>0x3e41...C049</p>
            <p>66,000</p>
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
              <MdOutlineDone className={classes.green} /> Modal Trained
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageModal>
  );
};

export default Page;
