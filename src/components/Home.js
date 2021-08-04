import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Listing from "./Listing";
import Menu from "./Menu";

const Home = ({ events }) => {
  const location = useLocation();
  console.log(location);
  if (location.pathname === "/") {
    return <Redirect to="/all" />;
  }
  return (
    <>
      <Menu events={events} />
      <Route path="/:category">
        <Listing events={events} />
      </Route>
    </>
  );
};

export default Home;
