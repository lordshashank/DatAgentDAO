import classes from "../styles/aboutus.module.css";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import image1 from "../../public/home-about-sec-image-1.jpg";
import image2 from "../../public/home-about-sec-image-2.jpg";
import image3 from "../../public/home-about-sec-image-3.jpg";
import image4 from "../../public/home-about-sec-image-4.jpg";
import image5 from "../../public/about-sec-image.png";
import image6 from "../../public/about-sec-image-1.png";

const AboutUs = () => {
  return (
    <div className={classes.aboutus}>
      <div className={classes["left-section"]}>
        <Image className={classes.img1} src={image1} width={400} height={400} />
        <Image className={classes.img2} src={image2} width={400} height={400} />
        <Image className={classes.img3} src={image3} width={250} height={250} />
        <Image className={classes.img4} src={image4} width={130} height={130} />
      </div>
      <div className={classes["right-section"]}>
        <h1 className="section-heading">Services you get</h1>
        <p className="section-title">How DAO changes the AI landscape</p>
        <p className="description">
          {" "}
          With help of DatAgent DAO, you can make your AI protocol community
          owned with giving users say in decision making. You would be able to
          make all the processes from model training to getting outputs on-chain
          with help of FVM and Bacalhau. some of the services you get are:{" "}
        </p>
        <div className={classes.proof}>
          <Image src={image5} width={60} height={60} />
          <div>
            <h4>Dataset proposals</h4>
            <p className="description">
              Users can propose their datasets and earn the governance for
              improving the models. They can also buy the datasets by making
              proposals by paying the tokens.
            </p>
          </div>
        </div>
        <div className={classes.proof}>
          <Image src={image6} width={60} height={60} />
          <div>
            <h4>Model training and outputs through on-chain transactions</h4>
            <p className="description">
              With help of Bacalhau's Lilypad implementation you can train your
              models on-chain and get the outputs on-chain by making smart
              contract transactions, bringing more decentralization to your AI
              protocol.
            </p>
          </div>
        </div>
        <div>
          <button className="custom-btn">
            Read More <IoIosArrowForward className="forward" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
