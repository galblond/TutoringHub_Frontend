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

interface IUserPassword {
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
  showPasswordConfirm: boolean;
}

interface IUserData {
  fullName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Register: React.FC<{}> = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const [passwordValues, setPasswordValues] = useState<IUserPassword>({
    password: "",
    passwordConfirm: "",
    showPassword: false,
    showPasswordConfirm: false,
  });

  const [userData, setUserData] = useState<IUserData>({
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (prop: keyof IUserPresentedData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [prop]: event.target.value,
    });
  };

  const handlePasswordChange = (prop: keyof IUserPassword) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValues({ ...passwordValues, [prop]: event.target.value });
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
          value={userData.fullName || ""}
          onChange={handleChange("fullName")}
        />
      </FormControl>
      <FormControl>
        <InputLabel className={classes.inputLabel} shrink={true}>
          Email
        </InputLabel>
        <Input className={classes.input} type={"text"} value={userData.email || ""} onChange={handleChange("email")} />
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
        onClick={() => {
          history.push("tabsMenu");
        }}
        className={classes.submit}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Register;
