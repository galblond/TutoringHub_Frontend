import React from "react";
import SignIn from "../../components/layout/auth/signIn/signIn";
import useStyles from "./signInPageStyles";

const HomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <SignIn />
    </React.Fragment>
  );
};

export default HomePage;
