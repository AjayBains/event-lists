import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Listing from "./components/Listing";

function App() {
  const [isLoading, setISLoading] = useState(true);
  const [events, setEvents] = useState();

  const getEvents = async () => {
    const response = await fetch(
      "https://allevents.s3.amazonaws.com/tests/categories.json"
    );
    const eventsData = await response.json();

    setEvents(eventsData);
    setISLoading(false);
  };
  useEffect(() => getEvents(), []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoading ? <h1>Loading...</h1> : <Menu events={events} />}
        </Route>
        <Route path="/:data">
          <Listing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
