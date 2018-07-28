import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './common/NavBar'
import SearchContainer from './mainPage/SearchContainer'
import SavesContainer from './savesPage/SavesContainer'
import TopStories from './TopStories'

class App extends Component {

  render() {
    return (
      <Router>
         <div className='App'>
          <NavBar />
          <Route exact path="/" component={SearchContainer}/>
          <Route exact path="/topstories" component={TopStories}/>
          <Route path="/saves" component={SavesContainer}/>
        </div>
      </Router>
    )
  }
}

export default App;
