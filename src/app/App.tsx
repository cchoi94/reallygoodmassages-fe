import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import { NavBar } from 'app/components/navbar/navBar';
import { ExitIntentModal } from 'app/components/commons/exitIntent/exitIntentModal/exitIntentModal';
import { UserPanel } from 'app/components/userPanel/userPanel';

import './App.module.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <ExitIntentModal />
        <NavBar />
        <Routes />
        <UserPanel />
      </Router>
    </div>
  );
}

export default App;
