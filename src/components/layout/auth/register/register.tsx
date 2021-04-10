import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import useStyles from "./registerStyles";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from "@material-ui/core";
import { Lock, Visibility, VisibilityOff } from "@material-ui/icons";
import { ITeacher, IUserPresentedData, TeacherService } from "../../../../services/TeacherService";
import firebase from "firebase";
import { AuthContext } from "../../../../AuthProvider";
import GeneralContext from "../../../../contexts/GeneralContext";
import RegisterTeacherData from "./registerTeacherData/registerTeacherData";

interface IUserPassword {
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
  showPasswordConfirm: boolean;
}

interface FormItems {
  showPassword: boolean;
  phone: string;
  email: string;
  password: string;
}

const Register: React.FC<{}> = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const authContext = useContext(AuthContext);
  const context = useContext(GeneralContext);

  const [teacherData, setTeacherData] = useState<ITeacher>({
    _id: "",
    name: "",
    education: "",
    availability: true,
    areas: [],
  });

  const [inTeacherDataStage, setInTeacherDataStage] = useState(true);

  const [passwordValues, setPasswordValues] = useState<IUserPassword>({
    password: "",
    passwordConfirm: "",
    showPassword: false,
    showPasswordConfirm: false,
  });

  const [values, setValues] = React.useState<FormItems>({
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
            fullName: teacherData.name,
          })
          .then(() => {
            console.log("ok");
            teacherData.firebaseId = userUid;
            TeacherService.createTeacher(teacherData)
              .then((createdTeacher) => {
                console.log("createdTeacher => ", createdTeacher);
                context.setUserData({
                  uid: userUid,
                  fullName: teacherData.name,
                  email: values.email,
                  password: values.password,
                  passwordConfirm: values.password,
                });
                context.setCurrentlySignedTeacher(createdTeacher);
                context.setIsUserSigned(true);
                history.push("tabsMenu");
              })
              .catch((error) => {
                console.log(error.message);
                alert(error.message);
              });
          })
          .catch((error) => {
            console.log(error.message);
            alert(error.message);
          });
      });
  };

  return (
    <>
      {inTeacherDataStage ? (
        <>
          <RegisterTeacherData teacherData={teacherData} setTeacherData={setTeacherData} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setInTeacherDataStage(false)}
            className={classes.submit}
          >
            {">"}
          </Button>
        </>
      ) : (
        <div className={classes.signInCard}>
          <Typography component="h1" variant="h5" color="inherit">
            Sign Up
          </Typography>
          <FormControl>
            <InputLabel className={classes.inputLabel} shrink={true}>
              Email
            </InputLabel>
            <Input
              className={classes.input}
              type={"text"}
              value={values.email || ""}
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => setInTeacherDataStage(true)}
            className={classes.submit}
          >
            {"<"}
          </Button>
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} className={classes.submit}>
            Sign Up
          </Button>
        </div>
      )}
    </>
  );
};

export default Register;
