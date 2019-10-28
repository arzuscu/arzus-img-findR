import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyCollection from "./components/MyCollection";

class App extends Component {
  state = {
    collection:[]
  };

  addCollection= (newObj) =>{
    let collection = this.state.collection
    collection.push(newObj)
    this.setState({
      collection
    })
  }
  render() {
    return (
      <MuiThemeProvider>
        <Router>
        <div className="App"> 
              <NavBar />
              <Switch>
                <Route path="/" exact> 
                  <Search addCollection={this.addCollection}/>
                </Route>
                <Route path="/MyCollection">
                  <MyCollection collection={this.state.collection}/>
                </Route>
                </Switch>
          </div>        
          </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
