import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import GameViewer from "./GameViewer";
import Extra from "./Extra";
import Footer from "./Footer";
import RoomInfo from "./RoomInfo";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    textAlign: "center"
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
          <RoomInfo />
        </Grid>
        <Grid item xs={12} md={12}>
          <Extra />
        </Grid>
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Home;
