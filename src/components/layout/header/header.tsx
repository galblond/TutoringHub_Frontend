import React, { useContext } from "react";
import useStyles from "./headerStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import GeneralContext from "../../../contexts/GeneralContext";

const Header = () => {
  const classes = useStyles();
  const context = useContext(GeneralContext);
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tutoring Hub
          </Typography>
          <Button color="inherit">{context.usersConnect}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
