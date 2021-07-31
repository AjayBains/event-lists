import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import EventListing from "./EventListing";

const Listing = () => {
  const location = useLocation(); // import from "react-router-dom";
  //   console.log("location.pathname", location.pathname);
  const url = location.pathname.substring(1);
  //   console.log(url);
  const [isLoading, setIsLoading] = useState(true);
  const [eventList, setEventList] = useState();

  const getEventLists = async () => {
    const response = await fetch(url);
    const eventLists = await response.json();
    setEventList(eventLists);
    setIsLoading(false);
    // console.log(eventLists);
  };

  useEffect(() => {
    getEventLists();
  }, []);

  return (
    <>
      {isLoading ? <h1>Loading...</h1> : <EventListing eventList={eventList} />}
    </>
  );
};

export default Listing;
