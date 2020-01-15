import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useFormState } from "react-use-form-state";

import { login, register } from "../libs/api";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "0 auto",
    maxWidth: 400
  },
  media: {
    height: 140
  },
  withMargin: {
    marginBottom: theme.spacing(1.5)
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hintError: {
    position: "absolute",
    color: theme.palette.error.main
  },
  link: {
    textDecoration: "underline",
    color: theme.palette.primary.main,
    cursor: "pointer",
  }
}));

const loginText = "Do not have an account?"
const registerText = "Already have an account?"

function AuthCard() {
  const classes = useStyles();
  const [isNewUser, setNewUser] = useState(false);
  const [
    { values, errors, setField, setFieldError },
    { text }
  ] = useFormState();

  useEffect(() => {
    setField("username", "");
    setField("password", "");
    setField("password2", "");
  }, [isNewUser]);

  const handleLogin = () => {
    const data = { ...values };
    login(data)
      .then(res => {
        resetField();
        setFieldError("login", null);
        console.log({ res });
      })
      .catch(err => {
        resetField();
        setFieldError("login", "Failed to login.");
        console.log({ err });
      });
  };

  const handleRegister = () => {
    const data = {
      username: values.username,
      password1: values.password,
      password2: values.password2
    };
    register(data)
      .then(res => {
        resetField();
        setFieldError("register", null);
        console.log({ res });
      })
      .catch(err => {
        resetField();
        setFieldError("register", "Failed to register.");
        console.log({ err });
      });
  };

  const resetField = () => {
    setField("username", "");
    setField("password", "");
    setField("password2", "");
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isNewUser) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className={classes.card}>
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            Welcome to Jangos Island
          </Typography>
          <TextField
            className={classes.withMargin}
            {...text("username")}
            label="Username"
            required
            variant="outlined"
            fullWidth
          />
          <TextField
            className={classes.withMargin}
            {...text("password")}
            label="Password"
            required
            variant="outlined"
            fullWidth
            type="password"
          />
          {isNewUser && (
            <TextField
              className={classes.withMargin}
              {...text("password2")}
              label="Repeat Password"
              required
              variant="outlined"
              fullWidth
              type="password"
            />
          )}
          {errors.login && (
            <Typography className={classes.hintError} variant="body2">
              {errors.login}
            </Typography>
          )}
          {errors.register && (
            <Typography className={classes.hintError} variant="body2">
              {errors.register}
            </Typography>
          )}
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Typography variant="body2">
            {isNewUser ? registerText : loginText}
            <span onClick={() => setNewUser(prev => !prev)} className={classes.link}>{isNewUser ? "Register" : "Login"}</span>
          </Typography>
          <Button variant="contained" onClick={handleSubmit} color="primary" size="large">
            {isNewUser ? "Register" : "Login"}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default AuthCard;
