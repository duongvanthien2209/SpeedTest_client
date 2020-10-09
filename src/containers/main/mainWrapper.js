import React, { useContext } from 'react';

import { WaitingContext } from '../../components/providers/waitingProvider';
import { ToastContext } from '../../components/providers/toastProvider';
import Main from './index';

const MainWrapper = () => {
  let { isWaiting, setIsWaiting } = useContext(WaitingContext);
  let { toast } = useContext(ToastContext);

  return (
    <Main isWaiting={isWaiting} setIsWaiting={setIsWaiting} toast={toast} />
  );
};

export default MainWrapper;
