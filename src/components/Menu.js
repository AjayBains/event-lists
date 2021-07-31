import { Container, Card, CardContent } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "50%",
    marginBottom: ".5rem",
    marginTop: ".3rem",
    backgroundColor: "#69f0ae",
  },
});

const Menu = ({ events }) => {
  const classes = useStyles();
  console.log(events);
  return (
    <Container>
      <div className={classes.root}>
        {events.map((event) => {
          return (
            <Card key={event.category} mb={2} className={classes.box}>
              <Link to={`/${event.data}`}>
                <CardContent>
                  <h3>{event.category.toUpperCase()}</h3>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Menu;
