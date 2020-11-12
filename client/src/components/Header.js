import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Badge,
  withStyles,
  makeStyles
} from "@material-ui/core/";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main
  },
  cart: {
    color: theme.palette.primary.secondary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box position="static" display="flex" className="white">
        <Box
          variant="dense"
          display="flex"
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
        >
          <Box m={2}>
            <Button>
              <Link to="/">Home</Link>
            </Button>
          </Box>
          <Box m={2}>
            <Button>
              <Link to="/salad">Salad</Link>
            </Button>
          </Box>
          <Box m={2}>
            <Button>
              <Link to="/pizza">Pizza</Link>
            </Button>
          </Box>
          <Box m={2}>
            <Button>
              <Link to="/drinks">Drinks</Link>
            </Button>
          </Box>
          <Box m={2}>
            <Button>
              <Link to="/promotions">Promotions</Link>
            </Button>
          </Box>
          <Box m={2}>
            <Button>
              <Link to="/storelist">Store List</Link>
            </Button>
          </Box>
        </Box>
        <Box className={classes.cart}>
          <IconButton aria-label="cart">
            <StyledBadge
              style={{ color: "white" }}
              badgeContent={4}
              color="secondary"
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}
