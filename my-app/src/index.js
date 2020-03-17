import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './mockData/state';
import './index.css';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <App
      store={state}
      addPost={store.addPost.bind(store)}
      updatePostText={store.updatePostText.bind(store)}
      />,
      document.getElementById('root')
    );
  }


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)




