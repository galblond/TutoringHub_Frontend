import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  //   root: {
  //     flexGrow: 1,
  //     root: {
  //         backgroundColor: theme.palette.background.paper,
  //         width: 500,
  //       },
  //   },
  root: {
    // backgroundColor: theme.palette.background.paper,
    // width: 500,
    flexGrow: 1,
  },
  tabCard: {
    top: "11vh",
    width: "80vh",
    height: "65vh",
    margin: "0 auto",
    backgroundColor: "white",
    boxShadow: "0px 10px 40px #00000024",
    borderRadius: "2vh",
    position: "relative",
  },
  userNameTitle: {
    position: "absolute",
    top: "12vh",
    left: "12vh",
    fontSize: "3.5vh",
    fontFamily: "CircularStdBold",
  },
}));

export default useStyles;
