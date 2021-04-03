import React from "react";
import Home from "../../components/layout/home/home";
import useStyles from "./homePageStyles";

const HomePage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
};

export default HomePage;
