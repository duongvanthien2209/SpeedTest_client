import React, { useState } from 'react';

import Waiting from '../Waiting';

export const WaitingContext = React.createContext();

const WaitingProvider = ({ children }) => {
  let [isWaiting, setIsWaiting] = useState(false);
  return (
    <WaitingContext.Provider value={{ isWaiting, setIsWaiting }}>
      {children}
      <Waiting isWaiting={isWaiting} />
    </WaitingContext.Provider>
  );
};

export default WaitingProvider;
