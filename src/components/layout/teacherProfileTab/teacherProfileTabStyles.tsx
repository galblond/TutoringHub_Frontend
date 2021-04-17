import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    },
    fieldColor: {
      color: "white",
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
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    signInCard: {
      top: "3vw",
      left: "29vw",
      width: "40vw",
      height: "75vh",
      backgroundColor: "white",
      boxShadow: "0px 10px 40px #00000024",
      borderRadius: 17,
      opacity: 1,
      position: "relative",
    },
    inputLabel: {
      marginLeft: "3.26vh",
      textAlign: "center",
      font: "normal normal normal 2.84vh CircularStd",
      letterSpacing: "0px",
      color: "black",
    },
    input: {
      color: "black",
      marginRight: "3.26vh",
      marginBottom: "4.26vh",
      marginLeft: "3.26vh",
      width: "30vw",
      height: "6vh",
    },
    passwordField: {
      color: "black",
      margin: 30,
      width: "30vw",
      height: "6vh",
    },
    passwordFieldName: {
      marginLeft: 30,
    },
    controlLabel: {
      marginRight: "47vh",
    },
    labelPlacementStart: {
      justifyContent: "space-between",
    },
    addClassButton: {
      "&:hover": {
        backgroundColor: "#00d29c",
      },
    },
  })
);

export default useStyles;
