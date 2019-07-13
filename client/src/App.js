import React from 'react';
import NavBar from './components/NavBar';
import OpenCallouts from './components/OpenCallouts';
import CalloutModal from './components/calloutModal';

import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
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
}

export default App;
