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
        <h1 className="section-heading">ABOUT US </h1>
        <p className="section-title">Empowering People By Keeping Them Well</p>
        <p className="description">
          {" "}
          Repellendus autem ruibusdam et aut officiis debitis aut re
          necessitatibus saepe eveniet ut et voluptates repudianda sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus{" "}
        </p>
        <div className={classes.proof}>
          <Image src={image5} width={60} height={60} />
          <div>
            <h4>100% Customers Satisfaction</h4>
            <p className="description">
              Amet minim mollit non deserunt ullamco est sit aliua dolor do amet
              sint.
            </p>
          </div>
        </div>
        <div className={classes.proof}>
          <Image src={image6} width={60} height={60} />
          <div>
            <h4>Quality Assurance Guarantee</h4>
            <p className="description">
              Velit officia consequat duis enim velit mollie assu omnis dolor
              repellendus.
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
