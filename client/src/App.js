import React from 'react';
import NavBar from './components/NavBar';
import OpenCallouts from './components/OpenCallouts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <OpenCallouts />
    </div>
  );
}

export default App;
