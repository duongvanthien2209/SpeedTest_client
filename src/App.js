import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/css/_default.scss';

import UserProvider from './components/providers/userProvider';
import WaitingProvider from './components/providers/waitingProvider';
import ToastProvider from './components/providers/toastProvider';
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
