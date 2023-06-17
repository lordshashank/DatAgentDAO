import classes from "../styles/Events.module.css";
import { BsSearch } from "react-icons/bs";
import EventsCard from "./EventsCard";
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
        <EventsCard />
      </div>
    </div>
  );
};

export default Events;
