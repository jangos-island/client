import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Canvas from "./Canvas";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "rgba(255,255,255, .7)"
  },
  canvasContainer: {
    height: 600,
    overflow: "hidden"
  }
}));

function GameViewer({ isLoading, gameState, rooms }) {
  const classes = useStyle();

  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        {isLoading && <>"Loading..."</>}
        <div className={classes.canvasContainer}>
          <Canvas rooms={rooms} playerCoord={gameState.coord} />
        </div>
      </Paper>
    </>
  );
}

export default GameViewer;
