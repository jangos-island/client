import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import GameViewer from "./GameViewer";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function Home({ setToken }) {
  const classes = useStyle();

  const handleLogout = () => setToken(null);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.header} item xs={12} md={12}>
          <Header onLogout={handleLogout} />
        </Grid>
        <Grid item xs={12} md={8}>
          <GameViewer />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" className={classes.paper}>
            Room Info
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper variant="outlined" className={classes.paper}>
            Extra
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Paper variant="outlined" className={classes.paper}>
            Footer
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
