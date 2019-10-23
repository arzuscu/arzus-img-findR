import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import Search from './components/Search';
import MyCollection from './components/MyCollection';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <MuiThemeProvider>
    <div className="App">
    <Router>
      <Switch>
        <Route>
          <NavBar />
          <Search path="/" exact component={ Search }/>
        </Route>
      </Switch>
      <Switch>
        <Route>
          <NavBar />
          <MyCollection path="/MyCollection" component={ MyCollection }/>
        </Route>
      </Switch>
    </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
