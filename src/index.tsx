import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/react/Styles/Normalize.css'
import './index.css'

import App from './react/App';
import Calendar from './react/Components/Calendar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Calendar />
  </React.StrictMode>
);
