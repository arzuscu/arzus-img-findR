import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Search from './components/Search';
import MyCollection from './components/MyCollection';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

function App() {
  return (
    <MuiThemeProvider>
    <div className="App">
    <Router>
      <TransitionGroup>
        <CSSTransition
          timeout={300}
          className="fade"
        >
        <Switch>
          <Route>
            <NavBar />
            <Search path="/" exact component={ Search }/>
          </Route>
          <Route>
            <NavBar />
            <MyCollection path="/MyCollection" component={ MyCollection }/>
          </Route>
        </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
