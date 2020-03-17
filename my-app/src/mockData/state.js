let rerenderEntireTree = () => {

}

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
    ],
    newText: ''
  }
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.postPage.newText
  }
  state.postPage.postData.push(newPost)
  state.postPage.newText = ''

  rerenderEntireTree(state);
}

export const updatePostText = (updateText) => {
  state.postPage.newText = updateText

  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state;