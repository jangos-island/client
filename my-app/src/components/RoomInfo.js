import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Navigation from "./Navigation";
import ChatBox from "./ChatBox";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(255,255,255, .7)"
  },
  players: {
    textAlign: "left",
    width: "100%"
  },
  description: {
    height: 200,
    width: "100%"
  }
}));

function RoomInfo({ gameState, chat, handleClick }) {
  const classes = useStyle();
  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        <div>
          <div className={classes.description}>
            <Typography variant="h5">{gameState.title}</Typography>
            <Typography variant="body1">{gameState.description}</Typography>
          </div>
          <div className={classes.players}>
            <Typography align="left" variant="subtitle1">
              Other Players:
            </Typography>
            {gameState.players &&
              gameState.players.map((player, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                >{`- ${player}`}</Typography>
              ))}
          </div>
        </div>
        <ChatBox chat={chat} />
      </Paper>
    </>
  );
}

export default RoomInfo;
