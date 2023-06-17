import classes from "../styles/Events.module.css";
import Image from "next/image";
import image1 from "../../public/Home-case-study-image-5.jpg";
const EventsCard = () => {
  return (
    <div className={classes["events-card"]}>
      <div className={classes.details}>
        <h1>AI Seminar: Exploring the Future of Artificial Intelligence</h1>
        <p>
          <span>Austrailia</span> Level 3, 551 Swanston Street Melbourne, 3053,
          Australia, Melbourne, Australia
        </p>
        <p>
          Join us for an exciting seminar on exploring the future of artificial
          intelligence (AI). This event is designed for tech enthusiasts,
          entrepreneurs, and anyone interested in understanding the potential of{" "}
        </p>
      </div>
      <div className={classes["img-container"]}>
        <Image
          className={classes.image}
          src={image1}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default EventsCard;
