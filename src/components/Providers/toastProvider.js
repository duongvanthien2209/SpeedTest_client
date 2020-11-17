import React from 'react';

// React-Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
