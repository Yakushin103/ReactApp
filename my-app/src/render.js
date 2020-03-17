import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import state from './mockData/state';
import { addPost } from './mockData/state';
import './index.css';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <App 
      state={state}
      addPost={addPost}
      />,
      document.getElementById('root')
    );
  }