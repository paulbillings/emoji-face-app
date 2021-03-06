import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import HeroPic from "./emojiBalls.jpg";

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: "80vh",
    background: "url(" + HeroPic + ") no-repeat center center",
    backgroundSize: "cover",
    color: "black",
    textShadow: "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
  },
  header: {
    marginTop: "5vh",
    fontWeight: "bold",
  },
  subHeader: {
    marginTop: "3vh",
    fontWeight: "bold",
  },
});

  const Hero = ({ classes, theme }) => {
  	return (
        <div>
          <Paper className={classes.root}>
            <Typography className={classes.header} variant="h2" component="h3">
              Welcome to Emojified
            </Typography>
            <Typography className={classes.subHeader} variant="h5" component="h5">
              Upload a picture containing at least one face, then press the button below to Emojify it!
            </Typography>
          </Paper>
        </div>
    )
  }

// export default Navigation;
export default withStyles(styles)(Hero);