import classes from "../styles/Footer.module.css";
import logo from "../../public/logo_datagentdao.jpg";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdCall, MdMail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.links}>
        <div className={classes["logo-container"]}>
          <Image src={logo} width={50} height={40} />
          <span>DatAgent DAO</span>
        </div>
        <p>One-stop solution for Decentralized AI Protocols</p>
        <div className={classes["social-links"]}>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
      <div className={classes["contact-us"]}>
        <h4>Contact Us</h4>
        {/* <p>
          <MdCall className={classes.icon} /> +91-9382XXXXXX
        </p> */}
        <p>
          <MdMail className={classes.icon} /> shashanktrivedi1917@gmail.com
        </p>
        {/* <p>
          <MdLocationOn className={classes.icon} />
        </p> */}
      </div>
    </div>
  );
};

export default Footer;
