import classes from "../styles/Events.module.css";
import Link from "next/link";
import Image from "next/image";
import image1 from "../../public/Home-case-study-image-5.jpg";

const img_src = {
  FIRST: image1,
};
const EventsCard = ({
  image,
  title,
  country,
  location,
  about,
  setShowTestModal,
}) => {
  return (
    <div className={classes["events-card"]}>
      <div className={classes.details}>
        <Link href={"/proposals"} style={{ all: "unset" }}>
          <h1>{title}</h1>
        </Link>
        <p>
          <span>{country}</span>
          {""}
          {location}
        </p>
        <p>{about}</p>
        <button className={classes.btn} onClick={() => setShowTestModal(true)}>
          Test Model
        </button>
      </div>
      <div className={classes["img-container"]}>
        <Image
          className={classes.image}
          src={img_src[image]}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default EventsCard;
