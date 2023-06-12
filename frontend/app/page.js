import React from "react";
import { ManualHeader } from "../components/ManualHeader";

const page = () => {
  return (
    <>
      <h1>Hello, Next.js!</h1>;
      <ManualHeader className="header" buttonClassName="button" />;
    </>
  );
};

export default page;
