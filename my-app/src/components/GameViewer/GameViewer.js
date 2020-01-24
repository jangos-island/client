import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Canvas from "./Canvas";
import Navigation from "../Navigation";

const useStyle = makeStyles(theme => ({
  paper: {
    position: "relative",
    padding: theme.spacing(2),
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    background: "rgba(255,255,255, .7)"
  },
  canvasContainer: {
    height: 600,
    overflow: "scroll"
  }
}));

function GameViewer({ isLoading, gameState, rooms, handleClick }) {
  const classes = useStyle();

  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        {isLoading && <>"Loading..."</>}
        <div className={classes.canvasContainer}>
          <Canvas rooms={rooms} playerCoord={gameState.coord} />
        </div>
        <Navigation handleClick={handleClick} />
      </Paper>
    </>
  );
}

export default GameViewer;
