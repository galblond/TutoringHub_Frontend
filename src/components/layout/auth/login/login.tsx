// import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@material-ui/core";
// import { Lock, MailOutline, Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
// import useStyles from "../../../../pages/loginPage/loginPageStyles";
// import AppMainBackgroundTop from "../../../../assets/images/appMainBackgroundTop.png";
import { useHistory } from "react-router";
// import ApartmentItem from "../../apartmentItem/apartmentItem";
import useStyles from "./loginStyles";
// import firebase from "firebase";
// import { AuthContext } from "../../../../AuthProvider";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import firebase from "firebase";
import { AuthContext } from "../../../../AuthProvider";

interface loginProps {}

const Login: React.FC<loginProps> = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const authContext = useContext(AuthContext);

  interface UserData {
    email: string;
    password: string;
    showPassword: boolean;
  }

  const [values, setValues] = React.useState<UserData>({
    password: "",
    showPassword: false,
    email: "",
  });

  const handleSubmit = (event: any) => {
    console.log(values.email);
    console.log(values.password);
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        // authContext.setUser(res);
        console.log(res, "res");
        history.push("tabsMenu");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handlePasswordChange = (prop: keyof UserData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography
          component="h1"
          variant="h5"
          color="inherit"
          onClick={() => {
            history.push("tabsMenu");
          }}
        >
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/#/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
