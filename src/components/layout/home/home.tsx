import React from "react";
import useStyles from "./homeStyles";
import Login from "../auth/login/login";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.logInCard}>
      <Login />
    </div>
  );
};

export default Home;
