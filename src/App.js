import React from 'react';

import './assets/css/_default.scss';
// import Routes from './routes';
import { Header1 } from './components';
import { Main1 } from './containers';

const App = () => {
  return (
    <div>
      <Header1 />
      <Main1 />
      {/* <Routes /> */}
    </div>
  );
};

export default App;
