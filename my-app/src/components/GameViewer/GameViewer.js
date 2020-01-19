import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Canvas from "./Canvas";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  canvasContainer: {
    height: 600,
    overflow: "hidden"
  }
}));

function Navigation({ handleClick }) {
  return (
    <div>
      <Button onClick={handleClick("n")} variant="outlined" color="primary">
        N
      </Button>
      <Button onClick={handleClick("s")} variant="outlined" color="primary">
        S
      </Button>
      <Button onClick={handleClick("w")} variant="outlined" color="primary">
        W
      </Button>
      <Button onClick={handleClick("e")} variant="outlined" color="primary">
        E
      </Button>
    </div>
  );
}

function GameViewer({ isLoading, gameState, rooms, handleClick }) {
  const classes = useStyle();

  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        {isLoading && <>"Loading..."</>}
        <Typography variant="subtitle1">{gameState.title}</Typography>
        <div className={classes.canvasContainer}>
          <Canvas rooms={rooms} playerCoord={gameState.coord} />
        </div>
        <Navigation handleClick={handleClick} />
      </Paper>
    </>
  );
}

export default GameViewer;
