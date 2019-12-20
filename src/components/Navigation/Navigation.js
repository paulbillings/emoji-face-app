import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import emojiLogo from "./emojiLogo.png";
import "./Navigation.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: "left",
    maxWidth: "40%",
  },
  loginDiv: {
  	marginLeft: "auto",
  },
  login: {
  	marginRight: "1rem",
  },
  register: {

  },
  logo: {
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
                	<img className={classes.logo} alt="logo" id="logo" src={emojiLogo} />
                </div>
                <div className={classes.loginDiv}>
                  {
                    //when backend is up and running
                	//<Button className={classes.login} id="loginButton" color="inherit">Login</Button>
                	//<Button className={classes.register} id="registerButton" color="inherit">Register</Button>
                  }
                  Created by Paul Billings
                </div>
            </Toolbar>
        </AppBar>
        </div>
    )

  }

// export default Navigation;
export default withStyles(styles)(Navigation);