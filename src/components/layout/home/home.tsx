import React, { useEffect, useState } from "react";
import useStyles from "./homeStyles";
import AppMainBackgroundTop from "../../../assets/images/appMainBackgroundTop.png";
import AppMainBackgroundBottom from "../../../assets/images/appMainBackgroundBottom.png";
import SignIn from "../auth/signIn/signIn";
import { useHistory } from "react-router-dom";

const Home = () => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      {/* <img src={} alt={AppMainBackgroundTop} className={classes.appBackgroundTop} /> */}
      <div className={classes.welcomeText}> Welcome To </div>
      <div className={classes.logoText}> TutoringHub </div>
      {/* <img  alt={} className={classes.appBackgroundBottom} /> */}
      <button className={classes.rootBtn}>Join Us!</button>
      <div className={classes.signInText}>
        <span>Already have an account?</span>
        <span
          className={classes.signInClickableText}
          onClick={() => {
            history.push("/SignIn");
          }}
        >
          {" "}
          Sign In{" "}
        </span>
      </div>
      {/* <SignIn /> */}
    </div>
  );
};

export default Home;
