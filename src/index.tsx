import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/react/Styles/Normalize.css'
import './index.css'

import Main from './react/Main';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
