import React, { useContext, useEffect, useState } from "react";
import useStyles from "./registerStyles";
// import AppMainBackgroundTop from "../../../../assets/images/appMainBackgroundTop.png";
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@material-ui/core";
import { Lock, MailOutline } from "@material-ui/icons";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useHistory } from "react-router-dom";
// import firebase from "firebase";
// import { AuthContext } from "../../../../AuthProvider";

const Register = () => {
  const classes = useStyles();
  let history = useHistory();
  // const authContext = useContext(AuthContext);

  interface FormItems {
    showPassword: boolean;
    username: string;
    phone: string;
    email: string;
    password: string;
  }

  const [values, setValues] = React.useState<FormItems>({
    username: "",
    email: "",
    password: "",
    phone: "",
    showPassword: false,
  });

  const handleChange = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event: any) => {
    event?.preventDefault();
    console.log(values, "values");
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(values.email, values.password)
    //   .then((userCredential: firebase.auth.UserCredential) => {
    //     authContext.setUser(userCredential);
    //     const db = firebase.firestore();
    //     db.collection("Users")
    //       .doc(userCredential.user!.uid)
    //       .set({
    //         email: values.email,
    //         // username: values.username,
    //         // phone: values.phone
    //       })
    //       .then(() => {
    //         console.log("ok");
    //         history.push("/questionnaires");
    //       })
    //       .catch((error) => {
    //         console.log(error.message);
    //         alert(error.message);
    //       });
    //   });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handlePasswordChange = (prop: keyof FormItems) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onClickLogin = () => {
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      {/* <img src={AppMainBackgroundTop} alt={AppMainBackgroundTop} className={classes.appBackgroundTop} /> */}
      <div className={classes.logoText}> Sign Up</div>

      <TextField
        className={classes.emailField}
        required
        label="Email"
        name="email"
        InputLabelProps={{
          classes: {
            root: classes.customInputLabel,
            outlined: classes.customInputLabel,
          },
        }}
        InputProps={{
          className: classes.fieldColor,
          classes: { input: classes.customInput, underline: classes.customInputUnderline },
          startAdornment: (
            <InputAdornment position="start">
              <MailOutline />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
      />
      <FormControl>
        <InputLabel
          className={classes.passwordFieldName}
          classes={{
            root: classes.customInputLabel,
            outlined: classes.customInputLabel,
          }}
          required
          htmlFor="standard-adornment-password"
        >
          Password
        </InputLabel>
        <Input
          className={classes.passwordField}
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          classes={{ input: classes.customInput, underline: classes.customInputUnderline }}
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
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <button className={classes.signUpBtn} onClick={handleSubmit}>
        Sign Up
      </button>
      <div className={classes.signInText}>
        <span>Already have an account?</span>
        <span className={classes.signInClickableText} onClick={onClickLogin}>
          {" "}
          Sign In{" "}
        </span>
      </div>
    </div>
  );
};

export default Register;
