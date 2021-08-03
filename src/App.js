import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Listing from "./components/Listing";
import Home from "./components/Home";

function App() {
  const [isLoading, setISLoading] = useState(true);
  const [events, setEvents] = useState();

  const url = "https://allevents.s3.amazonaws.com/tests/categories.json";

  const getEvents = async () => {
    const response = await fetch(url);
    const eventsData = await response.json();

    setEvents(eventsData);
    setISLoading(false);
  };
  useEffect(() => getEvents(), []);
  return (
    <Router>
      <Switch>
        <Route exact path="/:category">
          {isLoading ? <h1>Loading...</h1> : <Home events={events} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
