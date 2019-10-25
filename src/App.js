import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/Search';
import MyCollection from './components/MyCollection';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <MuiThemeProvider>
    <div className="App">
    <Router>
        <Switch>
        <Route path="/" exact render={(props) => {
            return (
              <>
                <Search component={ Search } {...props}/>
              </>
            )
          }}/>
          <Route path="/MyCollection"  render={(props) => {
            return (
              <>
                <MyCollection component={ MyCollection } {...props}/>
              </>
            )
          }}/>
            {/* <NavBar />
            <MyCollection path="/MyCollection" component={ MyCollection }/> */}
        </Switch>
    </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
