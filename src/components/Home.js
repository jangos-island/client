import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
            <Typography align="center" variant="h3">
              Welcome to the Jango's Island
            </Typography>
            <Button onClick={handleLogout} color="primary" variant="outlined">
              Logout
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper variant="outlined" className={classes.paper}>
              Game Viewer
            </Paper>
          </Grid>
          <Grid  item xs={12} md={4}>
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
