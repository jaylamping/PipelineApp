import React from 'react';
import NavBar from './components/NavBar';
import OpenCallouts from './components/OpenCallouts';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <OpenCallouts />
      </div>
    </Provider>
  );
}

export default App;
