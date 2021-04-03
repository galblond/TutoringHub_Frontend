import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

export default useStyles;
