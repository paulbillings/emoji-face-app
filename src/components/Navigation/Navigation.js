import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
     
  },
  loginDiv: {
  	marginLeft: "auto",
  },
  login: {
  	marginRight: "1rem",
  },
});

  const Navigation = ({ classes, theme }) => {
  	return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h3" color="inherit">
                Emoji Face
                </Typography>
                <div className={classes.loginDiv}>
                	<Button className={classes.login} color="inherit">Login</Button>
                	<Button color="inherit">Register</Button>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    )

  }

// export default Navigation;
export default withStyles(styles)(Navigation);