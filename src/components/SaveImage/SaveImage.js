import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./SaveImage.css"


const styles = theme => ({
  root: {
    lineHeight: "0.5",
    marginBottom: "5vh",
  },
});

  const SaveImage = ({ saveImage, classes, theme }) => {
  	return (
        <div className={classes.root} id="">
         <button 
              className="grow f4 link ph3 pv2 dib white bg-light-purple" id="saveButton"
              onClick={saveImage}
          >Download Pic 📷</button>
        </div>
    )
  }

// export default Navigation;
export default withStyles(styles)(SaveImage);