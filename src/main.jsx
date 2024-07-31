// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Services from './components/Services';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Services />
  </React.StrictMode>,
  document.getElementById('root')
);
