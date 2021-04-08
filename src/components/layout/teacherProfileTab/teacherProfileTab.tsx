import React, { useContext, useEffect, useState } from "react";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@material-ui/core";
import { Lock, MailOutline, Visibility, VisibilityOff } from "@material-ui/icons";
import GeneralContext from "../../../contexts/GeneralContext";
import { IUserPresentedData } from "../../../services/TeacherService";
import useStyles from "./teacherProfileTabStyles";

interface IUserPassword {
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
  showPasswordConfirm: boolean;
}

const TeacherProfileTab: React.FC<{}> = () => {
  const context = useContext(GeneralContext);
  const classes = useStyles();
  const [passwordValues, setPasswordValues] = useState<IUserPassword>({
    password: context.userData.password || "",
    passwordConfirm: context.userData.passwordConfirm || "",
    showPassword: false,
    showPasswordConfirm: false,
  });

  const handleChange = (prop: keyof IUserPresentedData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    context.setUserData({
      ...context.userData,
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
    <div>
      {/* <FormControl>
        <InputLabel className={classes.inputLabel} shrink={true}>
          Full name
        </InputLabel>
        <Input
          className={classes.input}
          type={"text"}
          value={context.teacherRelatedClasses.name || ""}
          onChange={handleChange("fullName")}
        />
      </FormControl> */}
      <FormControl>
        <InputLabel className={classes.inputLabel} shrink={true}>
          Email
        </InputLabel>
        <Input
          className={classes.input}
          type={"text"}
          value={context.userData.email || ""}
          onChange={handleChange("email")}
        />
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
      <Button> Save Changes </Button>
    </div>
  );
};

export default TeacherProfileTab;
