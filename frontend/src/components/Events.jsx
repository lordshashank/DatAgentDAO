import classes from "../styles/Events.module.css";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import EventsCard from "./EventsCard";
const event = [
  {
    image: "FIRST",
    title: "Stable Diffusion DAO",
    country: "Dreambooth model",
    location: "",
    about:
      "This a DAO for Stable Diffusion model. You can propose a dataset to train models, ask for datasets we use and participate in decision making. You can also Test the model directly from here",
  },
];
const Events = () => {
  return (
    <div className={classes.events}>
      <div className={classes["fields"]}>
        <BsSearch />
        <input
          className={classes["input-field"]}
          type="text"
          placeholder="Search"
        />
        <button className={classes["find-btn"]}>Find DAOs</button>
      </div>
      <div className={classes["all-events"]}>
        {event.map((event) => (
          <EventsCard
            image={event.image}
            title={event.title}
            country={event.country}
            location={event.location}
            about={event.about}
          />
        ))}
      </div>
      <div className={classes.calendar}>
        <button className={classes["find-btn"]}>
          Create A DAO <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Events;
