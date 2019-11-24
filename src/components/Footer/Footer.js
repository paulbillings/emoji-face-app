import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Footer.css"


const styles = theme => ({
  root: {
    lineHeight: "0.5",
    marginBottom: "5vh",
  },
});

  const Footer = ({ classes, theme }) => {
  	return (
        <div className={classes.root} id="footer">
          <p>Thanks for using Emojified <span role="img" aria-label="man with glasses">😎</span></p>
          <p>Designed and developed with lots of <span role="img" aria-label="coffee">☕</span> by Paul Billings</p>
          <p>Please visit <a href="https://www.paulbillings.co.uk">www.PaulBillings.co.uk</a></p>
        </div>
    )
  }

// export default Navigation;
export default withStyles(styles)(Footer);