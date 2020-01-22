import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function Header({ onLogout }) {
  return (
    <>
      <Typography align="center" variant="h3">
        Welcome to Jango's Island
      </Typography>
      <Button onClick={onLogout} color="primary" variant="outlined">
        Logout
      </Button>
    </>
  );
}

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
}

export default Header;
