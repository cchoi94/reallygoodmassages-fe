import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import { NavBar } from 'app/components/navbar/navBar';
import { ExitIntentModal } from 'app/components/commons/exitIntent/exitIntentModal/exitIntentModal';

import './App.module.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <ExitIntentModal />
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
