import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';

import './App.module.scss';
import { NavBar } from './components/navbar/navBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
