"use client";
import React from "react";
import Header from "../components/Header";
import classes from "../styles/Home.module.css";
import useGovernorContracts from "../utils/useGovernorContracts";
const page = () => {
  const { propose } = useGovernorContracts();
  const deal = [
    "0x56",
    100,
    true,
    "test",
    0,
    10,
    0,
    0,
    0,
    1,
    ["", 0, false, false],
  ];
  return (
    <div className={classes.header}>
      <h1>Hello, Next.js!</h1>
      <Header />
      <button onClick={() => propose(deal)}>Propose</button>
    </div>
  );
};

export default page;
