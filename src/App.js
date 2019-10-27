import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import MyCollectData from './components/MyCollectData';
import MyCollection from './components/MyCollection';

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
                <NavBar />
                <MyCollection component={ MyCollection } {...props}/>
                {/* <MyCollectData component={ MyCollectData } {...props}/> */}
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
