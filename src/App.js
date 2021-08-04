import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";

function App() {
  const [isLoading, setISLoading] = useState(true);
  const [events, setEvents] = useState();

  const url = "https://allevents.s3.amazonaws.com/tests/categories.json";

  const getEvents = async () => {
    const response = await fetch(url);
    const eventsData = await response.json();
    console.log(eventsData);

    setEvents(eventsData);
    setISLoading(false);
  };
  useEffect(() => getEvents(), []);
  return (
    <Router>
      <Route path="/">
        {isLoading ? <h1>Loading...</h1> : <Home events={events} />}
      </Route>
    </Router>
  );
}

export default App;
