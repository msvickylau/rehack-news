import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/App';
import Saves from './components/savesPage/Saves'
import Login from './components/loginPage/Login'
import NavBar from './components/common/NavBar'

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={App}/>
      <Route path="/saves" component={Saves}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
