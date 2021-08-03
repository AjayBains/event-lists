import React, { useState } from "react";
import { Container, Grid, Card, Button } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const EventListing = ({ eventList }) => {
  const classes = useStyles();
  console.log(eventList);
  const [isList, setIsList] = useState(true);

  return (
    <Container>
      <Button
        onClick={() => setIsList(!isList)}
        color="primary"
        variant="contained"
        style={{
          marginBottom: "4rem",
          marginTop: "1rem",
        }}
      >
        Gridview/ListView
      </Button>
      <Grid container spacing={3}>
        {eventList.item.map((event) => {
          const { banner_url, eventname, location, label, event_id } = event;
          return isList ? (
            <Grid item key={event_id} xs={12}>
              <Card className="card__img">
                <CardActionArea>
                  <CardMedia
                    alt={eventname}
                    height="140"
                    image={banner_url}
                    title={eventname}
                  />

                  <CardContent>
                    {/* <img src={banner_url} alt="pic" style={{ width: "100%" }} /> */}
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      textAlign="center"
                    >
                      {eventname}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h6"
                    >
                      {location}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h6"
                    >
                      {label}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ) : (
            <Grid item key={event_id} xs={12} md={6}>
              <Card className="card__img">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={eventname}
                    height="140"
                    image={banner_url}
                    title={eventname}
                  />

                  <CardContent>
                    {/* <img src={banner_url} alt="pic" style={{ width: "100%" }} /> */}
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      textAlign="center"
                    >
                      {eventname}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h6"
                    >
                      {location}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h6"
                    >
                      {label}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default EventListing;
