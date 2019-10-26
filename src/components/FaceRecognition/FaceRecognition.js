import React from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

  const FaceRecognition = ({ imageUrl, classes, theme }) => {
  	return (
        <div className={classes.root}>
          <img alt="" src={imageUrl} />
        </div>
    );
  }

export default withStyles(styles)(FaceRecognition);