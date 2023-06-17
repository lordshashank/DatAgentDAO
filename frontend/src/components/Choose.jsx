import classes from "../styles/Choose.module.css";
import { IoIosArrowForward } from "react-icons/io";

const Choose = () => (
  <div className={classes.choose}>
    <div>
      <h1 className="section-heading">WHY DAO FOR AI</h1>
      <h4 className="section-title" style={{ color: "white" }}>
        Why should the AI protocols be decentralized?
      </h4>
      <p className="description" style={{ color: "white" }}>
        AI has been trending all over the world be it chatGPT, stable diffusion,
        etc. These models are trained on data being served to them through
        internet, etc. Currently its a bunch of people who decide what data to
        serve and various other decision, giving them total control over the
        protocol. This has led to the concerns stated by many people around the
        world over centralized control of something like AI having immense
        capabilities in them. Decentralizing them will surely actt as guard
        towards misuse of such protocols.
      </p>
      {/* <div>
        <div className={classes.row}>
          <IoIosArrowForward className={classes.point} />
          Quis autem vel eum iure reprehenderit aui
        </div>
        <div className={classes.row}>
          <IoIosArrowForward className={classes.point} />
          Quis autem vel eum iure reprehenderit aui
        </div>
        <div className={classes.row}>
          <IoIosArrowForward className={classes.point} />
          Quis autem vel eum iure reprehenderit aui
        </div>
      </div> */}
      <div>
        <button className="custom-btn">
          {" "}
          Read More <IoIosArrowForward className="forward" />
        </button>
      </div>
    </div>
  </div>
);

export default Choose;
