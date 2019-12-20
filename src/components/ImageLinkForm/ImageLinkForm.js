import React from "react";
import { withStyles } from '@material-ui/core/styles';
import "./ImageLinkForm.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "3vh 0",
  },
});

  const ImageLinkForm = ({ onInputChange, onButtonSubmit, classes, theme }) => {
  	return (
        <div className={classes.root}>
          <div className="center pa4 br3 shadow-5 bg-light-gray" id="formDiv">
            <input className="f4 pa2 center" type="file" id="localupload" accept="image/png, image/jpeg" onChange={onInputChange}/>
            <input className="f4 pa2 center" type="text" id="urlupload" placeholder="Enter a URL here" onChange={onInputChange}/>
            <button 
              className="grow f4 link ph3 pv2 dib white bg-light-purple" id="emojiButton"
              onClick={onButtonSubmit}
            >Emojify</button>
          </div>

        </div>
    )
  }

export default withStyles(styles)(ImageLinkForm);