import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './mockData/state';
import './index.css';

ReactDOM.render(
  <App 
  state={state}
  />,
  document.getElementById('root')
);
