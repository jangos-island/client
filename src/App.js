import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AuthCard from "./components/AuthCard";

const useStyles = makeStyles(theme => ({
  appContainer: {}
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <AuthCard />
    </div>
  );
}

export default App;
