import React, { useEffect, useState } from "react";
import useStyles from "./homeStyles";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Login from "../auth/login/login";

const Home = () => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Tutoring Hub
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        {/* <Login /> */}
      </div>
      <div className={classes.logInCard}>
        <Login />
      </div>
    </div>
  );
};

export default Home;
