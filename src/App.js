import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  cardContainer: {
  },
  card: {
    margin: '0 auto',
    maxWidth: 600
  },
  media: {
    height: 140
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardContent>
          <Typography align='center' gutterBottom variant="h5" component="h2">
            Welcome to Jangos Island
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
