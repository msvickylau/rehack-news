import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './common/NavBar'
import SearchContainer from './mainPage/SearchContainer'
import Saves from './savesPage/Saves'

class App extends Component {

  render() {
    return (
      <Router>
         <div className='App'>
          <NavBar />
          <Route exact path="/" component={SearchContainer}/>
          <Route path="/saves" component={Saves}/>
        </div>
      </Router>
    )
  }
}

export default App;
