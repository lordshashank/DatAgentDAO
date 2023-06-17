import classes from "../styles/Events.module.css";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import EventsCard from "./EventsCard";
const event = [
  {
    image: "FIRST",
    title: "AI Seminar: Exploring the Future of Artificial Intelligence",
    country: "Austrailia",
    location:
      "Level 3, 551 Swanston Street Melbourne, 3053, Australia, Melbourne, Australia",
    about:
      "Join us for an exciting seminar on exploring the future of artificial intelligence (AI). This event is designed for tech enthusiasts, entrepreneurs, and anyone interested in understanding the potential of",
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
        <button className={classes["find-btn"]}>Find Events</button>
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
          Subscribe to calendar <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Events;
