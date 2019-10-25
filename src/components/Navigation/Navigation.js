import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import emojiLogo from "./emojiLogo.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: "left",
    maxWidth: "50%",
  },
  loginDiv: {
  	marginLeft: "auto",
  },
  login: {
  	marginRight: "1rem",
  	fontSize: "1.5em",
  },
  register: {
  	fontSize: "1.5em",
  },
  logo: {
  	maxWidth: "30%",
  	height: "auto",
  	borderRadius: "50%",
   	border: "1px solid black",
   	boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  }
});

  const Navigation = ({ classes, theme }) => {
  	return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <div className={classes.title} color="inherit">
                	<img className={classes.logo} src={emojiLogo} />
                </div>
                <div className={classes.loginDiv}>
                	<Button className={classes.login} color="inherit">Login</Button>
                	<Button className={classes.register} color="inherit">Register</Button>
                </div>
            </Toolbar>
        </AppBar>
        </div>
    )

  }

// export default Navigation;
export default withStyles(styles)(Navigation);