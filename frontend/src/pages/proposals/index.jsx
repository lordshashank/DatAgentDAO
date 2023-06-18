import classes from "../../styles/Proposals.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import ProposalsCard from "../../components/ProposalsCard";
import PageModal from "../../components/PageModal";
const proposals = () => {
  return (
    // <div className={classes.proposals}>
    //   <div className={classes["header-intro"]}>
    //     <Header />
    //     <Link className={classes.back} href="/ai-conference">
    //       <BsArrowLeft /> OVERVIEW
    //     </Link>
    //     <h1>Governance Proposals</h1>
    //     <div className={classes.bottom}>
    //       <div></div>
    //       <div>
    //         <h4>All Proposals</h4>
    //       </div>
    //       <div></div>
    //     </div>
    //   </div>
    //   <div className={`${classes.bottom} ${classes["proposal-container"]}`}>
    //     <div></div>
    //     <div className={classes["proposals-list"]}>
    //       <ProposalsCard title={"Refresh Polygon COMP"} isPass={true} />
    //       <ProposalsCard
    //         title={"Interest Rate Curve Updated for Ethereum Compound v3 USDC"}
    //         isPass={false}
    //       />
    //     </div>
    //     <div></div>
    //   </div>
    //   <Footer />
    // </div>
    <PageModal isButton={true}>
      <div className={classes["proposals-list"]}>
        <h4 className={classes.heading}>All Proposals</h4>
        <ProposalsCard title={"Model Dataset Proposal"} isPass={true} />
        <ProposalsCard title={"Model Dataset Proposal"} isPass={false} />
      </div>
      <Footer />
    </PageModal>
  );
};

export default proposals;
