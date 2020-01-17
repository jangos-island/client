import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function GameViewer() {
  const classes = useStyle();
  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        Room Info
      </Paper>
    </>
  );
}

export default GameViewer;
