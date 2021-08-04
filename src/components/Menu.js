import { Container, Card, CardContent } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ReorderIcon from "@material-ui/icons/Reorder";
import {
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  box: {
    // width: "10%",

    borderRadius: "4px",
  },
  flex: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

const Menu = ({ events }) => {
  const classes = useStyles();
  const [isHidden, setIsHidden] = useState(true);

  // console.log(events);
  return (
    <div className="navbar">
      <div className="iconBox">
        <button onClick={() => setIsHidden(!isHidden)}>
          <ReorderIcon />
        </button>
      </div>

      <div className="logo">
        {/* <Avatar src="eventsmanialogo.png" className={classes.large} /> */}

        <img src="eventsmanialogo.png" alt="logo" className="logoImg" />
      </div>
      <div className="menuList" id={isHidden ? "hidden" : ""}>
        {events.map((event, index) => {
          return (
            <div key={event.category} mb={2} className={classes.box}>
              <Link
                to={`/${event.category}`}
                style={{ textDecoration: "none" }}
                onClick={() => setIsHidden(true)}
              >
                <h3>{event.category.toUpperCase()}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
