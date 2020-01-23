import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
              image="https://ca.slack-edge.com/T4JUEB3ME-UC5TCLQKW-eb0ee8297071-512"
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
            image="https://ca.slack-edge.com/T4JUEB3ME-UCPDAU2F6-00eedafe64dc-512"
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
            image="https://ca.slack-edge.com/T4JUEB3ME-UD5QF1EH3-97264236fe41-512"
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
            image="https://ca.slack-edge.com/T4JUEB3ME-UDYTEQDHA-g61b944f1d67-512"
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
