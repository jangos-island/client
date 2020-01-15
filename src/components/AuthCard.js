import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useFormState } from "react-use-form-state";

import { login } from "../libs/api";

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
    justifyContent: "flex-end"
  },
  hintError: {
    position: "absolute",
    color: theme.palette.error.main
  }
}));

function AuthCard() {
  const classes = useStyles();
  const [
    { values, errors, setField, setFieldError },
    { text }
  ] = useFormState();

  const handleLogin = e => {
    e.preventDefault();
    const data = { ...values };
    login(data)
      .then(res => {
        setField("username", "");
        setField("password", "");
        console.log({ res });
      })
      .catch(err => {
        setField("username", "");
        setField("password", "");
        setFieldError("login", "Failed to login.");
        console.log({ err });
      });
  };

  return (
    <form onSubmit={handleLogin}>
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
          {errors.login && (
            <Typography className={classes.hintError} variant="body2">
              {errors.login}
            </Typography>
          )}
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button onClick={handleLogin} color="primary" size="large">
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default AuthCard;
