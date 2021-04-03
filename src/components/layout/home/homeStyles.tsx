import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logInCard: {
      top: "-2vw",
      left: "29vw",
      width: "40vw",
      height: "65vh",
      backgroundColor: "white",
      boxShadow: "0px 10px 40px #00000024",
      borderRadius: 17,
      opacity: 1,
      position: "relative",
    },
  })
);

export default useStyles;
