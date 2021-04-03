import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  classCardRoot: {
    marginTop: "2vh",
    marginLeft: "auto",
    marginRight: "auto",
    width: "22vh",
    height: "22vh",
    backgroundColor: "white",
    boxShadow: "0vh 1vh 3.5vh #00000024",
    borderRadius: 17,
    opacity: 1,
    position: "relative",
  },
  classSubject: {
    textAlign: "center",
    font: "normal normal normal 4vh/6vh CircularStd",
    color: "#198e76",
  },
  classAdditionalData: {
    textAlign: "center",
    font: "normal normal normal 2.5vh CircularStd",
    color: "#198e769e",
  },
  classActionButtons: {
    bottom: "1vh",
    position: "absolute",
    marginLeft: "2.1vh",
  },
  classActionButtonIcon: {
    fill: "#b7b7b7",
  },
}));

export default useStyles;
