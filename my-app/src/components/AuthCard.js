import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import { useFormState } from "react-use-form-state";
import { login, register } from "../libs/auth-api";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "0 auto",
    maxWidth: 400
  },
  media: {
    height: 300,
    width: 300,
    paddingTop: "1%",
    margin: "0 auto"
  },
  withMargin: {
    marginBottom: theme.spacing(1.5)
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  hintError: {
    position: "absolute",
    color: theme.palette.error.main
  },
  link: {
    textDecoration: "underline",
    color: theme.palette.primary.main,
    cursor: "pointer"
  }
}));

const loginText = "Do not have an account?";
const registerText = "Already have an account?";

function AuthCard({ setToken }) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };
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
        setToken(res.data.key);
        console.log({ res });
        history.replace(from);
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
        setToken(res.data.key);
        history.replace(from);
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
        <CardMedia
          className={classes.media}
          component="img"
          image={require("../assets/JangosIsland.png")}
          title="island"
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            Can you escape the island?
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
            <span
              onClick={() => setNewUser(prev => !prev)}
              className={classes.link}
            >
              {isNewUser ? "Login" : "Register"}
            </span>
          </Typography>
          <Button
            variant="contained"
            onClick={handleSubmit}
            color="primary"
            size="large"
          >
            {isNewUser ? "Register" : "Login"}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default AuthCard;
