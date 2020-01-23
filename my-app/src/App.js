import React, { useState, useEffect } from "react";
import './App.css'
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import AuthCard from "./components/AuthCard";
import Home from "./components/Home";

const useStyles = makeStyles(theme => ({
  appContainer: {}
}));

function App() {
  const classes = useStyles();
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem("ji2020"));

  useEffect(() => {
    if (!token) {
      localStorage.removeItem("ji2020");
    } else {
      localStorage.setItem("ji2020", token);
    }
  }, [token]);

  return (
    <div className={classes.appContainer}>
      <Switch>
        <Route exact path="/">
          {token ? (
            <Home setToken={setToken} />
          ) : (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: location }
              }}
            />
          )}
        </Route>
        <Route path="/auth">
          <AuthCard setToken={setToken} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
