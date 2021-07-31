import React from "react";
import { Container, Grid, Card } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({});

const EventListing = ({ eventList }) => {
  console.log(eventList);

  return (
    <Container>
      <Grid container spacing={3}>
        {eventList.item.map((event) => {
          const { banner_url, eventname, location, label, event_id } = event;
          return (
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
