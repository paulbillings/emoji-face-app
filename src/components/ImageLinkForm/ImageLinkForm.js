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
    margin: "3vh 0",
  },
  loginDiv: {
  	marginLeft: "auto",
  },
  login: {
  	marginRight: "1rem",
  },
  label: {
    fontSize: "1.5em",
    textDecoration: "underline",
  }
});

  const ImageLinkForm = ({ classes, theme }) => {
  	return (
        <div className={classes.root}>
          <div className="w-70 center pa4 br3 shadow-5">
            <label className={classes.label} >Use the filepicker button below or enter a URL</label>
            <input className="f4 pa2 w-70 center" type="file" accept="image/png, image/jpeg"/>
            <input className="f4 pa2 w-70 center" type="text" placeholder="Enter a URL here"/>
            <button className="w-40 grow f4 link ph3 pv2 dib white bg-light-purple">Emojify</button>
          </div>
        </div>
    )
  }

// export default Navigation;
export default withStyles(styles)(ImageLinkForm);