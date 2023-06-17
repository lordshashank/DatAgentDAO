import classes from "../styles/Footer.module.css";
import logo from "../../public/logo@2x.png";
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
        <p>
          Ruis aute irure dolor in reprehenderit in volu velit ese ciu nulla
          pariatur excepteur sint oc aecat curidatat nona…
        </p>
        <div className={classes["social-links"]}>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
      <div className={classes["contact-us"]}>
        <h4>Contact Us</h4>
        <p>
          <MdCall className={classes.icon} /> +91-8473XXXXXX
        </p>
        <p>
          <MdMail className={classes.icon} /> abcd@gmail.com
        </p>
        <p>
          <MdLocationOn className={classes.icon} /> 21 King Street Melbourne ,
          3000 , Australia
        </p>
      </div>
    </div>
  );
};

export default Footer;
