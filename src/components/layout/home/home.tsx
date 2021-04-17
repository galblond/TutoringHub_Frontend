import React from "react";
import useStyles from "./homeStyles";
import Login from "../auth/login/login";
import { ReactComponent as LogInImage } from "../../../assets/svgs/logIn.svg";

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.logInCard}>
        <Login />
      </div>
      <LogInImage style={{ height: "22vh", marginTop: "3vh" }} />
    </>
  );
};

export default Home;
