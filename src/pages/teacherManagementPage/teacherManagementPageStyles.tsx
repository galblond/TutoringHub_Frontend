import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  tabsRoot: {
    background: "#7a78f2",
  },
  tabsIndicator: {
    backgroundColor: "#474688",
    borderRadius: "15vh",
  },
  addNewClassIcon: {
    position: "absolute",
    right: "0",
    alignSelf: "center",
    marginTop: "auto",
    color: "white",
    marginBottom: "0",
  },
}));

export default useStyles;
