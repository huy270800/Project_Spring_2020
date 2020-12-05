import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useDispatch } from "react-redux";
import { sign_out } from "../actions";
import { Link } from "react-router-dom";
import constants from "../constants.json";
import { useSelector } from "react-redux";
import {
  Container,
  Tab,
  Tabs,
  makeStyles,
  Typography,
  Box,
  Button,
  Grid
} from "@material-ui/core";
import Scroll from "../components/Scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

export default function Account(props) {
  let isLogged = useSelector((state) => state.isLogged);
  const [userEmail, setUserEmail] = useState(null);
  const dispatch = useDispatch();
  //get email for logged in user
  useEffect(() => {
    axios({
      method: "get",
      url: constants.baseAddress + "/users/email",
      params: {
        username: isLogged.username
      }
    })
      .then((response) => {
        setUserEmail(response.data);
        console.log("Got email: " + response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong :(");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Scroll showBelow={250} />
      <Container>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label={isLogged.username} {...a11yProps(0)} />
            <Tab label="History" {...a11yProps(1)} />
            <Tab label="Log Out" {...a11yProps(2)}>
              <Button onClick={() => dispatch(sign_out())}></Button>
            </Tab>
          </Tabs>
          <TabPanel style={{ width: "100%" }} value={value} index={0}>
            <Grid container direction="row" alignItems="flex-start">
              <Grid item xs={2}>
                <h4>Email: </h4>
              </Grid>
              <Grid item xs={10}>
                <p>{userEmail}</p>
                <Button>
                  <Link to="/user/changeEmail">change email</Link>
                </Button>
                <Button>
                  <Link to="/user/changePw">change password</Link>
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </div>
      </Container>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}
