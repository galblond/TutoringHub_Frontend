import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#4e3357",
  },
  appBackgroundTop: {
    maxWidth: "85vw",
    top: 0,
    marginRight: "-6vw",
  },
  colorFiled: {
    color: "white",
  },
  logoText: {
    marginTop: 20,
    textAlign: "center",
    font: "normal normal normal 7vh/4vh CircularStd",
    letterSpacing: "0vh",
    color: "#E8EBF5",
    opacity: 1,
    marginBottom: "1vh",
  },
  signInText: {
    textAlign: "center",
    font: "normal normal normal 2.5vh CircularStd",
    letterSpacing: "0vh",
    color: "#E8EBF5",
    opacity: 1,
    paddingTop: "2vh",
  },
  signInClickableText: {
    color: "#5EA38C",
  },
  signUpBtn: {
    marginTop: 30,
    background: "#E8EBF5",
    font: "normal normal normal 2.88vh CircularStd",
    border: 0,
    opacity: 1,
    width: "85vw",
    height: "6vh",
    borderRadius: "3vh",
    boxShadow: "0vh 0.48vh 4.8vh #FFFFFF4D",
    "&:hover, &:focus": {
      outline: "none",
      border: 0,
    },
  },
  emailField: {
    width: "85vw",
    height: "6vh",
    margin: 30,
    // color: "white",
  },
  fieldColor: {
    color: "white",
  },
  passwordField: {
    color: "white",
    margin: 30,
    width: "85vw",
    height: "6vh",
  },
  passwordFieldName: {
    marginLeft: 30,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;
