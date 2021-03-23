import React from "react";
import Register from "../../components/layout/auth/register/register";
import useStyles from "./registerInPageStyles";

const RegisterPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Register />
    </React.Fragment>
  );
};

export default RegisterPage;
