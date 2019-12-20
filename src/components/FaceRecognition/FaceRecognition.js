import React from "react";
import { withStyles } from '@material-ui/core/styles';
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