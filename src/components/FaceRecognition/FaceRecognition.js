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
    marginLeft: "-200px",
  },
  img: {
    display: "hidden",
  }
});

const FaceRecognition = ({ height, canvas, ctx, imageUrl, box, classes, theme }) => {
  return (
    <div className={classes.root}>
      <div className={classes.image} id="imageDiv" >
        <canvas id="canvas" width="400" height={height}></canvas>
        <img className={classes.img} id="inputImage" alt="" src={imageUrl} width="400" height={height}/>
        <div className="bounding-box" id="face" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow , left: box.leftCol}}></div>
      </div>
    </div>
    );
}

 export default withStyles(styles)(FaceRecognition);