import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { ContextProvider } from './contexts/ContextProvider';

// Since we called out our context provider, we need to wrap our Application with it.
ReactDOM.render(
  <ContextProvider>  
      <App />
  </ContextProvider>,
  document.getElementById('root'),
);