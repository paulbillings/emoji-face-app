import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
     
  },
  loginDiv: {
  	marginLeft: "auto",
  },
  login: {
  	marginRight: "1rem",
  },
});

  const ImageLinkForm = ({ classes, theme }) => {
  	return (
        <div className={classes.root}>
          <h1>Welcome to Emoji Face</h1>
          <p className="f3">
            {"Upload a picture to Emoji-Face it"}
          </p>
          <div className=" w-70 center pa4 br3 shadow-5">
            <input className="f4 pa2 w-70 center" type="text" />
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" >Detect</button>
          </div>
        </div>
    )
  }

// export default Navigation;
export default withStyles(styles)(ImageLinkForm);