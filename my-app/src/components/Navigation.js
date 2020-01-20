import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

const useStyle = makeStyles(theme => ({
  nav: {
    width: 40 * 3 + 10,
    height: 40 * 3 + 10,
    borderRadius: "100%",
    overflow: "hidden",
    border: "1px solid gray",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray"
  },
  button: {
    height: 40,
    padding: 0,
    minWidth: 40
  },
  buttonContainer: {
    width: 40 * 3,
    display: "flex"
  },
  spacedBetween: {
    justifyContent: "space-between"
  },
  centered: {
    justifyContent: "center"
  }
}));

function Navigation({ handleClick }) {
  const classes = useStyle();
  return (
    <div className={classes.nav}>
      <div className={`${classes.buttonContainer} ${classes.centered}`}>
        <Button
          className={classes.button}
          onClick={handleClick("n")}
          variant="contained"
          color="primary"
        >
          <ArrowUpward />
        </Button>
      </div>
      <div className={`${classes.buttonContainer} ${classes.spacedBetween}`}>
        <Button
          className={classes.button}
          onClick={handleClick("w")}
          variant="contained"
          color="primary"
        >
          <ArrowBack />
        </Button>
        <Button
          className={classes.button}
          onClick={handleClick("e")}
          variant="contained"
          color="primary"
        >
          <ArrowForward />
        </Button>
      </div>
      <div className={`${classes.buttonContainer} ${classes.centered}`}>
        <Button
          className={classes.button}
          onClick={handleClick("s")}
          variant="contained"
          color="primary"
        >
          <ArrowDownward />
        </Button>
      </div>
    </div>
  );
}

export default Navigation;
