import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { getQueryParams } from '../utils';

import SearchContainer from './mainPage/SearchContainer'
import Saves from './savesPage/Saves'
import Login from './loginPage/Login'

import NavBar from './common/NavBar'
import LogInNavBar from './common/LogInNavBar'



class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    return (
      <Router>
        {this.isLoggedIn()
          ? <div className='App'>
              <NavBar />
              <SearchContainer token={this.state.token} />
              <Route exact path="/" component={SearchContainer}/>
              <Route path="/saves" component={Saves}/>
            </div>
          : <div className='Login'>
              <LogInNavBar />
              <Login/>
              <Route path="/login" component={Login}/>
            </div>
        }
      </Router>
    )
  }
}

export default App;
