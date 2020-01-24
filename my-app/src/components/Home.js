import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Pusher from "pusher-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { gameInit, move, getRooms, say } from "../libs/protected-api";
import Header from "./Header";
import GameViewer from "./GameViewer/GameViewer";
import Footer from "./Footer";
import RoomInfo from "./RoomInfo";
import Beach from "../assets/beachbackground.png";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    backgroundImage: `url(${Beach})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "100%"
  },
  header: {
    textAlign: "center"
  }
}));

const pusher = new Pusher(process.env.REACT_APP_PUSHER, {
  cluster: "us3",
  encrypted: true
});

toast.configure({
  autoClose: 3000,
  draggable: false,
  position: toast.POSITION.BOTTOM_RIGHT
});

function Home({ setToken }) {
  const classes = useStyle();
  const [gameState, setState] = useState("");
  const [rooms, setRooms] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [msg, setMsg] = useState();
  const [userId, setId] = useState();

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
        setId(_ => res.data.uuid);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (msg && msg.info) {
      toast.info(msg.info);
    }
  }, [msg, toast]);

  useEffect(() => {
    const channel = pusher.subscribe(`p-channel-${userId}`);
    channel.bind("broadcast", function(data) {
      setMsg(() => data);
    });
    return () => pusher.unsubscribe(`p-channel-${userId}`);
  }, [userId]);

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
          <RoomInfo
            chat={msg && msg.message}
            gameState={gameState}
            handleClick={handleClick}
          />
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
