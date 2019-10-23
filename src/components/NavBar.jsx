import React, { Component } from 'react'
import './style/index.scss'
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div className-="navBarDiv">
                <div className="navBarDiv__navBar">
                {/* <Link to ={"/src/components/Search.jsx"} <h1 className="navBarDiv__logo"> Arzu's Img FindR</h1></Link> */}
                <Link to ={"/"}><h1 className="navBarDiv__logo"> Arzu's Img FindR</h1></Link>
                </div>
                <div className="navBarDiv__navBar">
                <Link to ={"/MyCollection"}><h4 className="navBarDiv__logo"> My Collection</h4></Link>
                </div>
            </div>
        )
    }
}
