import React, { Component } from 'react'
import './style/index.scss'
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Link to ={"/"} ><Typography variant="h6" >Arzu's Img FindR</Typography></Link>
                        <Link to ={"/MyCollection"}><Button color="inherit">My Collections</Button></Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
