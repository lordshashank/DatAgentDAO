import ServiceCard from "./ServiceCard";
import classes from "../styles/services.module.css";
import { IoIosArrowForward } from "react-icons/io";
const data1 = [
  {
    image: "ROBOTIC",
    title: "Robotic Automation",
    description: "Autem vel eum iure reprehea rui in ea volutae velit…",
  },
  {
    image: "MACHINE",
    title: "Robotic Automation",
    description: "Autem vel eum iure reprehea rui in ea volutae velit…",
  },
];
const data2 = [
  {
    image: "EDUCATION",
    title: "Robotic Automation",
    description: "Autem vel eum iure reprehea rui in ea volutae velit…",
  },
  {
    image: "PREDICTIVE",
    title: "Robotic Automation",
    description: "Autem vel eum iure reprehea rui in ea volutae velit…",
  },
];
const Services = () => {
  return (
    <div className={classes.services}>
      <div className={classes["half-section"]}>
        <h1 className="section-heading">SERVICES WE PROVIDE</h1>
        <h4 className="section-title">
          Our Purpose is To Deliver Excellence in Service and Execution
        </h4>
        <p className="description">
          Repellendus autem ruibusdam et aut officiis debitis aut re
          necessitatibus saepe eveniet ut et voluptates repudianda sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus.
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
