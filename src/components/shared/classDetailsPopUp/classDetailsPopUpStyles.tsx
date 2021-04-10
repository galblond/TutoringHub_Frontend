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
    sliderLabel: {
      font: "normal normal normal 2.2vh CircularStd",
      letterSpacing: "0px",
    },
    sliderRootWithStaticThumb: {
      paddingTop: "8vh",
    },
    sliderFormControl: {
      width: "30vw",
      marginLeft: "3.26vh",
      paddingTop: "2vh",
    },
    shippingContainerInput: {
      "& option": {
        fontFamily: "CircularStd",
      },
      "&:before": {
        fontFamily: "CircularStd",
        borderColor: "#999085",
      },
      "&:after": {
        fontFamily: "CircularStd",
        borderColor: "#86c5ac",
      },
    },
  })
);

export default useStyles;
