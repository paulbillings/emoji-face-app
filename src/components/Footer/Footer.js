import React from "react";
import { withStyles } from '@material-ui/core/styles';
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