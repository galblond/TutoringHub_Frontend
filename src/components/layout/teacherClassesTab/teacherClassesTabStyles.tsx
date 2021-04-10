import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  classesGridContainer: {
    margin: "auto",
    height: "56vh",
    overflow: "scroll",
    paddingBottom: "2vh",
  },
  addClassButton: {
    position: "fixed",
    width: "9vh",
    height: "9vh",
    bottom: "6vh",
    right: "2vh",
    backgroundColor: "#0C9",
    color: "#FFF",
    borderRadius: "7vh",
    textAlign: "center",
    boxShadow: "2px 2px 3px #999",
    "&:hover": {
      backgroundColor: "#00d29c",
    },
  },
}));

export default useStyles;
