import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import useStyles from "./loginStyles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import firebase from "firebase";
import GeneralContext from "../../../../contexts/GeneralContext";
import { TeacherService } from "../../../../services/TeacherService";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

interface loginProps {}

const Login: React.FC<loginProps> = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const context = useContext(GeneralContext);

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
  const [message, setMessage] = useState({ isSuccess: false, isShown: false, text: "" });

  const handleCloseMessage = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setMessage({ ...message, isShown: false, text: "" });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        if (res.user) {
          TeacherService.getTeacherByFirebaseId(res.user.uid)
            .then((teacher) => {
              context.setUserData({
                uid: res.user?.uid || "",
                fullName: "",
                email: values.email,
                password: values.password,
                passwordConfirm: values.password,
              });
              context.setCurrentlySignedTeacher(teacher);
              context.setIsUserSigned(true);
              history.push("tabsMenu");
            })
            .catch((error) => {
              setMessage({ isSuccess: false, isShown: true, text: error.message });
            });
        }
      })
      .catch((error) => {
        console.log(error.message);
        setMessage({ isSuccess: false, isShown: true, text: error.message });
      });
  };

  const handleChange = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            style={{ marginTop: "3vh" }}
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
      <Snackbar open={message.isShown} autoHideDuration={2500} onClose={handleCloseMessage}>
        <Alert onClose={handleCloseMessage} variant="filled" severity={message.isSuccess ? "success" : "error"}>
          <AlertTitle style={{ padding: "1px 10px" }}>{message.text}</AlertTitle>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
