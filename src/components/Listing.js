import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Card, Button, Divider } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  listItem: {
    border: "1px solid pink",
    padding: ".7rem",
    display: "flex",
    justifyContent: "space-around",
    margin: "auto",
    width: "80%",
    gap: "1rem",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
}));

const Listing = ({ events }) => {
  const classes = useStyles();
  const [isloading, setIsLoading] = useState(true);
  const [categoryDetails, setCategoryDetails] = useState();
  const [listView, setListview] = useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // console.log(events);
  const location = useLocation(); // import from "react-router-dom";
  console.log(location);
  // console.log("location.pathname", location.pathname);
  const cat = location.pathname.substring(1);
  // console.log(cat);
  const particularEvent = events.find((event) => event.category === cat);

  const { data: url } = particularEvent;

  // console.log(particularEvent, url);
  const getCategoryDetails = async () => {
    const response = await fetch(url);
    const details = await response.json();
    setCategoryDetails(details);
    setIsLoading(false);
    console.log(details);
  };
  useEffect(() => {
    getCategoryDetails();
  }, []);

  return (
    <Container>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        color="primary"
        style={{ textAlign: "center" }}
      >
        {cat.toUpperCase()}
      </Typography>
      <Button
        onClick={() => setListview(!listView)}
        style={{ marginBottom: "1.3rem" }}
      >
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="Grid View"
          />
        </FormGroup>
      </Button>
      {/* <div>
        {" "} */}
      {/* <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="Secondary"
          />
        </FormGroup> */}
      {/* </div> */}
      {isloading ? (
        <p>Loading...</p>
      ) : listView ? (
        <Grid container spacing={3}>
          {categoryDetails.item.map((event) => {
            const {
              banner_url: img,
              label: date,
              eventname: name,
              location,
              event_id: id,
            } = event;
            return (
              <Grid item key={id} xs={12}>
                <div className={classes.listItem}>
                  <div className={classes.card__img}>
                    <Avatar src={img} className={classes.large} />
                  </div>
                  <div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      textAlign="center"
                    >
                      {name}
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
                      {date}
                    </Typography>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {categoryDetails.item.map((event) => {
            const {
              banner_url: img,
              label: date,
              eventname: name,
              location,
              event_id: id,
            } = event;
            return (
              <Grid item key={id} xs={12} md={6} lg={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={name}
                      height="140"
                      image={img}
                      title={name}
                    />

                    <CardContent>
                      {/* <img src={banner_url} alt="pic" style={{ width: "100%" }} /> */}
                      <Typography gutterBottom variant="h5" component="h2">
                        {name}
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
                        {date}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};

export default Listing;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import EventListing from "./EventListing";

// const Listing = () => {
//   const location = useLocation(); // import from "react-router-dom";
//   //   console.log("location.pathname", location.pathname);
//   const url = location.pathname.substring(1);
//   //   console.log(url);
//   const [isLoading, setIsLoading] = useState(true);
//   const [eventList, setEventList] = useState();

//   const getEventLists = async () => {
//     const response = await fetch(url);
//     const eventLists = await response.json();
//     setEventList(eventLists);
//     setIsLoading(false);
//     // console.log(eventLists);
//   };

//   useEffect(() => {
//     getEventLists();
//   }, []);

//   return (
//     <>
//       {isLoading ? <h1>Loading...</h1> : <EventListing eventList={eventList} />}
//     </>
//   );
// };

// export default Listing;
