import React, { useContext } from "react";
import useStyles from "./headerStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GeneralContext from "../../../contexts/GeneralContext";
import { Grid } from "@material-ui/core";

const Header = () => {
  const classes = useStyles();
  const context = useContext(GeneralContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Grid container>
            <Grid item xs={4} className={classes.headerText}>
              {context.currentlySignedTeacher.name && (
                <Typography variant="h6">Hello, {context.currentlySignedTeacher.name}</Typography>
              )}
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" className={classes.headerTitleBold}>
                Tutoring
              </Typography>
              <Typography variant="h6" className={classes.headerTitle}>
                Hub
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.headerText}>
              <div>{`${context.usersConnect} Site Views`}</div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
