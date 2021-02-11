import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import { NavBar } from 'app/components/navbar/navBar';
import { ExitIntentModal } from 'app/components/commons/exitIntent/exitIntentModal/exitIntentModal';
import { UserPanel } from 'app/components/userPanel/userPanel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.module.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <ExitIntentModal />
        <NavBar />
        <Routes />
        <UserPanel />
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
