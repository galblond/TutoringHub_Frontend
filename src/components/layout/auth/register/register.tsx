// import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@material-ui/core";
// import { Lock, MailOutline, Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
// import useStyles from "../../../../pages/loginPage/loginPageStyles";
// import AppMainBackgroundTop from "../../../../assets/images/appMainBackgroundTop.png";
import { useHistory } from "react-router";
// import ApartmentItem from "../../apartmentItem/apartmentItem";
import useStyles from "./registerStyles";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from "@material-ui/core";
import { Lock, Visibility, VisibilityOff } from "@material-ui/icons";
import { IUserPresentedData } from "../../../../services/TeacherService";
import firebase from "firebase";
import { AuthContext } from "../../../../AuthProvider";
import { isContext } from "vm";
import GeneralContext from "../../../../contexts/GeneralContext";

interface IUserPassword {
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
  showPasswordConfirm: boolean;
}

interface FormItems {
  showPassword: boolean;
  fullName: string;
  phone: string;
  email: string;
  password: string;
}

const Register: React.FC<{}> = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const authContext = useContext(AuthContext);
  const context = useContext(GeneralContext);

  const [passwordValues, setPasswordValues] = useState<IUserPassword>({
    password: "",
    passwordConfirm: "",
    showPassword: false,
    showPasswordConfirm: false,
  });

  const [values, setValues] = React.useState<FormItems>({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    showPassword: false,
  });
  const handleChange = (prop: keyof IUserPresentedData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  const handlePasswordChange = (prop: keyof IUserPassword) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValues({ ...passwordValues, [prop]: event.target.value });
    setValues({
      ...values,
      password: event.target.value,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setPasswordValues({ ...passwordValues, showPassword: !passwordValues.showPassword });
  };

  const handleClickShowPasswordConfirm = () => {
    setPasswordValues({ ...passwordValues, showPasswordConfirm: !passwordValues.showPasswordConfirm });
  };

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    // console.log(values, "values");
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential: firebase.auth.UserCredential) => {
        // authContext.setUser(userCredential);
        const db = firebase.firestore();
        const userUid = userCredential.user!.uid === null ? "" : userCredential.user!.uid;
        db.collection("users")
          .doc(userUid)
          .set({
            email: values.email,
            fullName: values.fullName,
            // phone: values.phone
          })
          .then(() => {
            console.log("ok");
            context.setUserData({
              uid: userUid,
              fullName: values.fullName,
              email: values.email,
              password: values.password,
              passwordConfirm: values.password,
            });
            history.push("tabsMenu");
          })
          .catch((error) => {
            console.log(error.message);
            alert(error.message);
          });
      });
  };

  return (
    <div className={classes.signInCard}>
      <Typography component="h1" variant="h5" color="inherit">
        Sign Up
      </Typography>
      <FormControl>
        <InputLabel className={classes.inputLabel} shrink={true}>
          Full name
        </InputLabel>
        <Input
          className={classes.input}
          type={"text"}
          value={values.fullName || ""}
          onChange={handleChange("fullName")}
        />
      </FormControl>
      <FormControl>
        <InputLabel className={classes.inputLabel} shrink={true}>
          Email
        </InputLabel>
        <Input className={classes.input} type={"text"} value={values.email || ""} onChange={handleChange("email")} />
      </FormControl>
      <FormControl>
        <InputLabel className={classes.passwordFieldName} required htmlFor="standard-adornment-password">
          Password
        </InputLabel>
        <Input
          className={classes.passwordField}
          id="standard-adornment-password"
          type={passwordValues.showPassword ? "text" : "password"}
          value={passwordValues.password}
          onChange={handlePasswordChange("password")}
          startAdornment={
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {passwordValues.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl>
        <InputLabel className={classes.passwordFieldName} required htmlFor="standard-adornment-password">
          Password Confirm
        </InputLabel>
        <Input
          className={classes.passwordField}
          id="standard-adornment-password"
          type={passwordValues.showPasswordConfirm ? "text" : "password"}
          value={passwordValues.passwordConfirm}
          onChange={handlePasswordChange("passwordConfirm")}
          startAdornment={
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPasswordConfirm}
                onMouseDown={handleMouseDownPassword}
              >
                {passwordValues.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        type="submit"
        // fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className={classes.submit}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Register;
