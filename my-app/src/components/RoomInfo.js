import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function RoomInfo({ gameState }) {
  const classes = useStyle();
  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        <Typography variant="subtitle1">Description:</Typography>
        <Typography variant="body1">{gameState.description}</Typography>
        <Typography variant="subtitle1">Players:</Typography>
        {gameState.players &&
          gameState.players.map(player => (
            <Typography variant="body1">{`- ${player}`}</Typography>
          ))}
      </Paper>
    </>
  );
}

export default RoomInfo;
