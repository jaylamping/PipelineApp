import React from 'react';
import NavBar from './components/NavBar';
import OpenCallouts from './components/OpenCallouts';
import CalloutModal from './components/CalloutModal';

import { Component } from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
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
        <div className="App">
          <NavBar />
          <Container>
            <CalloutModal />
            <OpenCallouts />
          </Container>
        </div>
      </Provider>
    );
  };
};

export default App;
