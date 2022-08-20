import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import {TechniqueContextProvider} from './contexts/TechniqueContextProvider'

ReactDOM.render(
  <React.StrictMode>
      
    <ContextProvider>
      <TechniqueContextProvider>
      <App />
    </TechniqueContextProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
