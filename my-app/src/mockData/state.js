import { rerenderEntireTree } from './../render';

let state = {
  profilePage: {
    dialogsData: [
      { id: 1, name: 'Andrey'},
      { id: 2, name: 'Vova'},
      { id: 3, name: 'Sveta'},
      { id: 4, name: 'Bob'}
    ],
    messageData: [
      { id: 1, message: 'Hi'},
      { id: 2, message: 'Bye'},
      { id: 3, message: 'Yo'},
      { id: 4, message: 'What`s up'}
    ],
  },
  postPage: {
    postData: [
      { id: 1, message: 'Hi, how are u?'},
      { id: 2, message: 'Its my first post'},
      { id: 3, message: 'How its work'},
      { id: 4, message: 'Bla bla bla'}
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage
  }
  state.postPage.postData.push(newPost)

  rerenderEntireTree(state);
}

export default state;