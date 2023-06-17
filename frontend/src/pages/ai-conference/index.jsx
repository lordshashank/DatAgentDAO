import classes from "../../styles/AiConference.module.css";
import Header from "../../components/Header";
import Events from "../../components/Events";
import Footer from "../../components/Footer";
const Page = () => {
  return (
    <div className={classes["ai-conference"]}>
      <div className={classes["header-intro"]}>
        <Header />
        <h1>Upcoming EventsAI Conference</h1>
      </div>
      <Events />
      <Footer />
    </div>
  );
};

export default Page;
