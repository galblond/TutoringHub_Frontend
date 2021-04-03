import React from "react";
import Login from "../../components/layout/auth/login/login";
import useStyles from "./loginPageStyles";

const HomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Login />
    </React.Fragment>
  );
};

export default HomePage;
