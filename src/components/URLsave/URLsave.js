import React from "react";
import { withStyles } from '@material-ui/core/styles';
import "./URLsave.css";


const styles = theme => ({
  root: {
    lineHeight: "0.5",
    marginBottom: "5vh",
  },
});

  const URLsave = ({ classes, theme }) => {
  	return (
        <div className={classes.root} id="URLsave">
          To Download Pic 💾 Right Click on Image
        </div>
    )
  }

// export default Navigation;
export default withStyles(styles)(URLsave);