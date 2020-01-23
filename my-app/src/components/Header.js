import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles(theme => ({
  // root: {
  //   display: "flex",
  //   justifyContent: "space-between"
  // },
  MuiAppBar: {
    background: "rgba(255,255,255, .7)",
    position: "static"
  },

  MuiButton: {
    color: "black"
  },
  title: {
    color: "black"
  }
}));

function Header({ onLogout }) {
  const classes = useStyle();

  return (
<<<<<<< HEAD
    <div className={classes.root}>
      <AppBar className={classes.MuiAppBar}>
        <Toolbar>
          <img
            src={require("../assets/smallIsland.png")}
            alt="island"
            height="60"
            width="60"
          />
          <Typography
            className={classes.title}
            variant="h6"
            style={{ flex: 1 }}
            align="left"
          >
            Jango's Island
          </Typography>
          <Button onClick={onLogout} className={classes.MuiButton}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
=======
    <>
      <Typography align="center" variant="h3">
        Welcome to Jango's Island
      </Typography>
      <Button onClick={onLogout} color="primary" variant="outlined">
        Logout
      </Button>
    </>
>>>>>>> 10dc9a5cb945a4ee599568bbb2c88a73c0e25125
  );
}

Header.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default Header;
