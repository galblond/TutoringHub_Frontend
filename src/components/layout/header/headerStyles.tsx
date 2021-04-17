import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#188e76",
      color: "white",
    },
    headerText: {
      margin: "auto",
      fontSize: "2.5vh",
      fontFamily: "CircularStd",
    },
    headerTitle: {
      marginTop: "-2vh",
      fontSize: "3vh",
      fontFamily: "CircularStd",
    },
    headerTitleBold: {
      fontSize: "4.7vh",
      fontFamily: "CircularStdBold",
    },
  })
);

export default useStyles;
