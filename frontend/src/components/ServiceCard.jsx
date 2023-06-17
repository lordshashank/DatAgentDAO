import classes from "../styles/services.module.css";
import Image from "next/image";
import image1 from "../../public/services-sec-home-page-.png";
import image2 from "../../public/services-sec-home-page-1.png";
import image3 from "../../public/services-sec-home-page-02.png";
import image4 from "../../public/services-sec-home-page-3.png";

const img_src = {
  ROBOTIC: image1,
  MACHINE: image2,
  EDUCATION: image3,
  PREDICTIVE: image4,
};

const ServiceCard = ({ image, title, description }) => (
  <div className={classes["service-card"]}>
    <div className={classes["img-container"]}>
      <Image
        className={classes.image}
        src={img_src[image]}
        width={60}
        height={60}
      />
    </div>
    <h1 className={classes.title}>{title}</h1>
    <p className={classes.description}>{description} </p>
    <button className={classes.button}>READ MORE</button>
  </div>
);

export default ServiceCard;
