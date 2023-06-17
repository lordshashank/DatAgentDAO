import ServiceCard from "./ServiceCard";
import classes from "../styles/services.module.css";
import { IoIosArrowForward } from "react-icons/io";
const data1 = [
  {
    image: "ROBOTIC",
    title: "Tableland",
    description:
      "Enables Decentralized Databases that can be accessed only by owner",
  },
  {
    image: "MACHINE",
    title: "Saturn",
    description:
      "Saturn's CDN allows easy Easy retrievals of the output images, datasets, etc",
  },
];
const data2 = [
  {
    image: "EDUCATION",
    title: "Beryx API",
    description:
      "Beryx API help to track the proposal progress and status of other transactions",
  },
  {
    image: "PREDICTIVE",
    title: "Push Protocol",
    description:
      "Push enables the notifications of which proposals are passing, when models are getting trained, etc to users",
  },
];
const Services = () => {
  return (
    <div className={classes.services}>
      <div className={classes["half-section"]}>
        <h1 className="section-heading">How do we do it?</h1>
        <h4 className="section-title">
          We use various decentralized protocols to make all this possible
        </h4>
        <p className="description">
          DatAgent DAO uses FVM and Bacalhau at it core to make all the
          processes on-chain. FVM allows data to be integrated with smart
          contracts enabling all DAO functionalities and Bacalhau enables
          decentralized compute of AI models, etc. Along with that we use many
          other protocols to make all this possible-
        </p>
        <div className={classes["btn-container"]}>
          <button className="custom-btn">
            {" "}
            Read More <IoIosArrowForward className="forward" />
          </button>
        </div>
      </div>
      <div className={classes["half-section"]}>
        <div className={classes.row}>
          {data1.map((data) => (
            <ServiceCard
              image={data.image}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
        <div className={classes.row}>
          {data2.map((data) => (
            <ServiceCard
              image={data.image}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
