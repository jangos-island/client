import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import yasirah from "../assets/yasirah.jpeg";
import jordan from "../assets/jordan.jpeg";
import kristea from "../assets/kristea.png";
import adam from "../assets/adam.jpeg";
const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: "#none",
    textAlign: "center"
  },
  paper: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: "25px",
    textAlign: "center",
    background: "none",
    justifyContent: "space-around"
  },
  pic: {
    width: "200px",
    height: "200px"
  },
  company: {
    // background: "rgba(51, 169, 255, .7)",
    align: "center",
    paddingBottom: "15px"
  }
}));

function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.company} variant="h6">
        Jango's Island brought to you by:
      </Typography>
      <Paper className={classes.paper} elevation="0">
        <Card>
          <div>
            <CardMedia
              className={classes.pic}
              component="a"
              image={yasirah}
              title="Y"
              href="https://github.com/ykrueng"
              target="_blank"
            />
          </div>
          <CardContent>
            <Typography variant="h5">Yasirah</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            className={classes.pic}
            component="a"
            image={jordan}
            title="J"
            href="https://github.com/jthicks91"
            target="_blank"
          />
          <CardContent>
            <Typography variant="h5">Jordan</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            className={classes.pic}
            component="a"
            image={kristea}
            title="K"
            href="https://github.com/bykristea"
            target="_blank"
          />
          <CardContent>
            <Typography variant="h5">Kristea</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            className={classes.pic}
            component="a"
            image={adam}
            title="A"
            href="https://github.com/bcuz"
            target="_blank"
          />
          <CardContent>
            <Typography variant="h5">Adam</Typography>
          </CardContent>
        </Card>
      </Paper>
      <Typography className={classes.company} variant="p">
        © 2020 Jango's Island
      </Typography>
    </div>
  );
}

export default Footer;
