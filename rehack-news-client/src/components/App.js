import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import SearchContainer from './mainPage/SearchContainer'
import Saves from './savesPage/Saves'
import Login from './loginPage/Login'

import NavBar from './common/NavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={SearchContainer}/>
          <Route path="/saves" component={Saves}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    )
  }
}

export default App;
