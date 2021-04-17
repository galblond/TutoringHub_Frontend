import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import useStyles from "./registerStyles";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { Lock, Visibility, VisibilityOff } from "@material-ui/icons";
import { IServerTeacher, IUserPresentedData, TeacherService } from "../../../../services/TeacherService";
import firebase from "firebase";
import { AuthContext } from "../../../../AuthProvider";
import GeneralContext from "../../../../contexts/GeneralContext";
import RegisterTeacherData from "./registerTeacherData/registerTeacherData";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Alert, AlertTitle } from "@material-ui/lab";

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

  const [teacherData, setTeacherData] = useState<IServerTeacher>({
    id: "",
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

  const [message, setMessage] = useState({ isSuccess: false, isShown: false, text: "" });

  const handleCloseMessage = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setMessage({ ...message, isShown: false, text: "" });
  };

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
        const db = firebase.firestore();
        const userUid = userCredential.user!.uid === null ? "" : userCredential.user!.uid;
        db.collection("users")
          .doc(userUid)
          .set({
            email: values.email,
            fullName: teacherData.name,
          })
          .then(() => {
            teacherData.firebaseId = userUid;
            teacherData.availability = true;
            teacherData.mail = values.email;
            TeacherService.createTeacher(teacherData)
              .then((createdTeacher) => {
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
                setMessage({ isSuccess: false, isShown: true, text: error.message });
              });
          })
          .catch((error) => {
            console.log(error.message);
            setMessage({ isSuccess: false, isShown: true, text: error.message });
          });
      });
  };

  return (
    <>
      <div style={{ marginTop: "5vh" }}>
        {inTeacherDataStage ? (
          <>
            <RegisterTeacherData teacherData={teacherData} setTeacherData={setTeacherData} />
            <IconButton
              color="primary"
              style={{ marginTop: "-7vh", marginRight: "-41vh" }}
              onClick={() => setInTeacherDataStage(false)}
              component="span"
            >
              <ArrowForwardIosIcon />
            </IconButton>
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
                      {passwordValues.showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Grid container style={{ position: "absolute", bottom: 0 }}>
              <Grid item xs={4}>
                <IconButton
                  color="primary"
                  onClick={() => setInTeacherDataStage(true)}
                  component="span"
                  style={{ marginTop: "3vh", marginLeft: "-8vh" }}
                >
                  <ArrowBackIosIcon />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </div>
        )}
      </div>
      <Snackbar open={message.isShown} autoHideDuration={2500} onClose={handleCloseMessage}>
        <Alert onClose={handleCloseMessage} variant="filled" severity={message.isSuccess ? "success" : "error"}>
          <AlertTitle style={{ padding: "1px 10px" }}>{message.text}</AlertTitle>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Register;
