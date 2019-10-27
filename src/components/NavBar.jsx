import React from 'react';
import './style/index.scss'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
           <Typography variant="h6" className={classes.title}>
          Arzu's Img FindR
            </Typography>
            <Link to ={"/"}><Button color="inherit">Search Image</Button></Link>
            <Link to ={"/MyCollection"}><Button color="inherit">My Collections</Button></Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
