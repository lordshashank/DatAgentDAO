import React from "react";
import Header from "../components/Header";
import classes from "../styles/Home.module.css";

const page = () => {
  return (
    <div className={classes.header}>
      <h1>Hello, Next.js!</h1>
      <Header />
    </div>
  );
};

export default page;
