import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { gameInit, move, getRooms } from "../libs/protected-api";
import Header from "./Header";
import GameViewer from "./GameViewer/GameViewer";
// import Extra from "./Extra";
import Footer from "./Footer";
import RoomInfo from "./RoomInfo";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  header: {
    textAlign: "center"
  }
}));

function Home({ setToken }) {
  const classes = useStyle();
  const [gameState, setState] = useState("");
  const [rooms, setRooms] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(_ => true);
    const fetchRooms = async () => {
      const res = await getRooms();
      if (res.data) {
        setRooms(_ => res.data);
      }
    };
    fetchRooms();
    setLoading(_ => false);
  }, []);

  useEffect(() => {
    const init = async () => {
      const res = await gameInit();
      if (res.data) {
        setState(_ => res.data);
      }
    };
    init();
  }, []);

  const handleClick = direction => async () => {
    const res = await move(direction);
    if (res.data) {
      setState(_ => res.data);
    }
  };

  const handleLogout = () => setToken(null);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid className={classes.header} item xs={12} md={12}>
          <Header onLogout={handleLogout} />
        </Grid>
        <Grid item xs={12} md={8}>
          <GameViewer
            isLoading={isLoading}
            gameState={gameState}
            rooms={rooms}
            handleClick={handleClick}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <RoomInfo gameState={gameState} handleClick={handleClick} />
        </Grid>
        {/* <Grid item xs={12} md={12}>
          <Extra />
        </Grid> */}
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
