import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  container: {
    width: "100%",
    textAlign: "center"
  }
}));

function Home({ setToken }) {
  const classes = useStyle();

  const handleLogout = () => setToken(null);
  return (
    <div className={classes.container}>
      <Typography align="center" variant="h3">
        Welcome to the Jango's Island
      </Typography>
      <Button onClick={handleLogout} color="primary" variant="outlined">
        Logout
      </Button>
    </div>
  );
}

export default Home;
