import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import "./FaceRecognition.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "2vh",
  },
  image: {
    position: "absolute",
    left: "50%",
    marginLeft: "-150px",
  }
});

const FaceRecognition = ({ imageUrl, box, classes, theme }) => {
  return (
    <div className={classes.root}>
      <div id="imageDiv" className={classes.image}>
        <img id="inputImage" alt="" src={imageUrl} width="300px" height="auto" />
        <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow , left: box.leftCol}}></div>
      </div>
    </div>
    );
}

 export default withStyles(styles)(FaceRecognition);