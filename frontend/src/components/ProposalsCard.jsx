import classes from "../styles/Proposals.module.css";
import Link from "next/link";
import { MdOutlineDone, MdCancel } from "react-icons/md";

const ProposalsCard = ({ title, isPass }) => {
  return (
    <Link
      href={"/governance/proposals/1"}
      className={classes["proposals-card"]}
    >
      <div>
        <h1>{title}</h1>
        <div className={`${isPass ? classes.passed : classes.failed}`}>
          {isPass ? "Passed" : "Failed"}{" "}
        </div>
      </div>
      <div className={classes.executed}>
        {isPass ? (
          <MdOutlineDone className={classes.ok} />
        ) : (
          <MdCancel className={classes.cancel} />
        )}
        {isPass ? "Passed" : "Failed"}
      </div>
    </Link>
  );
};

export default ProposalsCard;
