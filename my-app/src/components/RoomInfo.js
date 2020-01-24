import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Face from "@material-ui/icons/Face";
import Tooltip from "@material-ui/core/Tooltip";

import ChatBox from "./ChatBox";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 600,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(255,255,255, .7)"
  },
  players: {
    width: "100%",
    height: 80,
    display: "flex",
    overflowX: "scroll",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  player: {
    border: `1px solid gray`,
    borderRadius: 20,
    maxWidth: 60,
    minWidth: 60,
    overflow: "hidden",
    padding: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    background: "lightgray",
    color: "#33A9FF"
  },
  playerName: {
    width: 50,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  description: {
    height: 120,
    width: "100%"
  },
  row: {
    display: "flex"
  }
}));

function RoomInfo({ gameState, chat, handleClick }) {
  const classes = useStyle();
  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        <div className={classes.description}>
          <Typography variant="h5">{gameState.title}</Typography>
          <Typography variant="body1">{gameState.description}</Typography>
        </div>
        <Typography align="left" variant="subtitle1">
          Players on this island:
        </Typography>
        <div className={classes.players}>
          {gameState.players &&
            gameState.players.map((player, idx) => (
              <div className={classes.player}>
                <Face />
                <Tooltip title={player}>
                  <Typography
                    className={classes.playerName}
                    key={idx}
                    variant="body1"
                  >
                    {player}
                  </Typography>
                </Tooltip>
              </div>
            ))}
        </div>
        <ChatBox chat={chat} />
      </Paper>
    </>
  );
}

export default RoomInfo;
