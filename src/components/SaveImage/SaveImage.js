import React from "react";
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    lineHeight: "0.5",
    marginBottom: "5vh",
  },
});

  const SaveImage = ({ saveImage, classes, theme }) => {
  	return (
        <div className={classes.root} id="saveImage">
          <button
            className="grow f4 link ph3 dib white bg-light-purple" id="saveButton"
            onClick={saveImage}
          >Download Pic 💾</button>
        </div>
    )
  }

// export default Navigation;
export default withStyles(styles)(SaveImage);