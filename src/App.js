import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/css/_default.scss';

import UserProvider from './components/Providers/userProvider';
import WaitingProvider from './components/Providers/waitingProvider';
import ToastProvider from './components/Providers/toastProvider';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <Router>
        <UserProvider>
          <WaitingProvider>
            <ToastProvider>
              <Routes />
            </ToastProvider>
          </WaitingProvider>
        </UserProvider>
      </Router>
    </div>
  );
};

export default App;
