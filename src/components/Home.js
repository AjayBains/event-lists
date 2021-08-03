import React from "react";
import Listing from "./Listing";
import Menu from "./Menu";

const Home = ({ events }) => {
  return (
    <>
      <Menu events={events} />
      <Listing events={events} />
    </>
  );
};

export default Home;
