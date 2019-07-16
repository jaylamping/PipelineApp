import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Register from './components/auth/Register'
import Dashboard from './components/Dashboard';

import { Provider } from 'react-redux';
import { loadUser } from './actions/authActions';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <NavBar />
            <Route exact path='/' component={ Landing } />
            <Switch>
              <Route exact path='/dashboard' component={ Dashboard } />
              <Route exact path='/register' component={ Register } />
            </Switch>
          </Fragment>         
        </Router>
      </Provider>
    );
  };
};

export default App;
