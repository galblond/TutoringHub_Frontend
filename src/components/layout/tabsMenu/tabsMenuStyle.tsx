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
    top: "8vw",
    left: "29vw",
    width: "40vw",
    // height: "65vh",
    backgroundColor: "white",
    boxShadow: "0px 10px 40px #00000024",
    borderRadius: 17,
    opacity: 1,
    position: "relative",
  },
}));

export default useStyles;
