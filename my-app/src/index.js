import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './mockData/state';
import { addPost, updatePostText, subscribe } from './mockData/state';
import './index.css';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <App 
      state={state}
      addPost={addPost}
      updatePostText={updatePostText}
      />,
      document.getElementById('root')
    );
  }


rerenderEntireTree(state);

subscribe(rerenderEntireTree)




