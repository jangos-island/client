import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function GameViewer({ handleClick, gameState }) {
  const classes = useStyle();

  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        <Typography variant="subtitle1">{gameState.title}</Typography>
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
      </Paper>
    </>
  );
}

export default GameViewer;
