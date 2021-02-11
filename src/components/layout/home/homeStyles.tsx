import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#9d948b",
  },
  // appBackgroundTop: {
  //   maxWidth: "85vw",
  //   top: 0,
  //   marginRight: "-6vw",
  // },
  // appBackgroundBottom: {
  //   maxWidth: "85vw",
  //   bottom: 0,
  //   marginRight: "-6vw",
  // },
  welcomeText: {
    textAlign: "center",
    font: "normal normal normal 3vh/4vh Circular Std Book",
    letterSpacing: "0vh",
    color: "#D0CFDD",
    opacity: 1,
    marginTop: "-1vh",
    marginBottom: "1vh",
  },
  logoText: {
    textAlign: "center",
    font: "normal normal normal 7vh/4vh Circular Std Book",
    letterSpacing: "0vh",
    color: "#E8EBF5",
    opacity: 1,
    marginBottom: "1vh",
  },
  signInText: {
    textAlign: "center",
    font: "normal normal normal 2.5vh Circular Std Book",
    letterSpacing: "0vh",
    color: "#E8EBF5",
    opacity: 1,
    paddingTop: "2vh",
  },
  signInClickableText: {
    color: "#5EA38C",
  },
  rootBtn: {
    background: "#E8EBF5",
    font: "normal normal normal 2.88vh Circular Std Book",
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
}));

export default useStyles;
