import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let dialogsData = [
  { id: 1, name: 'Andrey'},
  { id: 2, name: 'Vova'},
  { id: 3, name: 'Sveta'},
  { id: 4, name: 'Bob'}
];

let messageData =[
  { id: 1, message: 'Hi'},
  { id: 2, message: 'Bye'},
  { id: 3, message: 'Yo'},
  { id: 4, message: 'What`s up'}
];

let postData = [
  { id: 1, message: 'Hi, how are u?'},
  { id: 2, message: 'Its my first post'},
  { id: 3, message: 'How its work'},
  { id: 4, message: 'Bla bla bla'}
];

ReactDOM.render(
  <App 
  dialogsData={dialogsData}
  messageData={messageData}
  postData={postData}
  />,
  document.getElementById('root')
);
