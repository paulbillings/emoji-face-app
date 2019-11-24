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
    
  },
  img: {
    display: "hidden",
  }
});

const FaceRecognition = ({ faceEmojiURL, width, height, canvas, ctx, imageUrl, box, classes, theme }) => {
  return (
    <div className={classes.root}>
      <div style={{height: 147 + height + 'px'}}>
        <div className={classes.image} id="imageDiv" >
          <canvas className="br3 shadow-5 bg-light-gray" id="canvas" width={width} height={height}></canvas>
          <img className={classes.img} id="inputImage" alt="" src={imageUrl} width={width} height={height}/>
          <div className="bounding-box" id="face" style={{backgroundImage: faceEmojiURL, top: box.topRow, right: box.rightCol, bottom: box.bottomRow , left: box.leftCol}}></div>
        </div>
      </div>
    </div>
    );
}

 export default withStyles(styles)(FaceRecognition);