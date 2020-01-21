import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: theme.palette.grey[100]
  }
}));

function Footer() {
  const classes = useStyle();
  return (
    <>
      <Paper variant="outlined" className={classes.paper}>
        © 2020 Jango's Island
      </Paper>
    </>
  );
}

export default Footer;
