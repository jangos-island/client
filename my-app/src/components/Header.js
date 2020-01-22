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
    background: "#33A9FF",
    position: "static"
  },

  MuiButton: {
    color: "white",
    marginLeft: "60px"
  }
}));

function Header({ onLogout }) {
  const classes = useStyle();

  return (
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
  );
}

Header.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default Header;
