import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/App';
import Saves from './components/savesPage/Saves'
import Login from './components/loginPage/Login'
import NavBar from './components/common/NavBar'
import { loadSaves } from './actions/saveActions'

const store = configureStore();

store.dispatch(loadSaves());

//Here we wrap <Router> component in a <Provider> component that Redux gives us access to, and pass in an instance of our store.
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={App}/>
        <Route path="/saves" component={Saves}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
  </Provider> ,
  document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
