import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
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
          <NavBar />
          <Switch>
            <Route exact path='/' component={ Landing } />
            <Route exact path='/dashboard' component={ Dashboard } />
          </Switch>
        </Router>
      </Provider>
    );
  };
};

export default App;
