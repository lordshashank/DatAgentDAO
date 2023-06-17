import classes from "../styles/Choose.module.css";
import { IoIosArrowForward } from "react-icons/io";

const Choose = () => (
  <div className={classes.choose}>
    <div>
      <h1 className="section-heading">WHY CHOOSE US</h1>
      <h4 className="section-title" style={{ color: "white" }}>
        Get Closer Look How Business Develop in AI Data Analysis
      </h4>
      <p className="description" style={{ color: "white" }}>
        Consectetur adipiscing elit sed do eiusmod tempor in labore et dolore
        magna aliqua ruis ipsum suspendisse ultrices gravida sit amet.
      </p>
      <div>
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
      </div>
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
