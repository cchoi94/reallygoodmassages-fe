import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';

import './App.module.scss';

function App() {
  console.log(process.env.REACT_APP_TEST);
  return (
    <div className='App'>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
