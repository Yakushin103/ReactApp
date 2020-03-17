import React from 'react';
import Post from './Post';

const MyPosts = ({ postData, addPost, newText, updateText }) => {

    let newPostElement = React.createRef();

    const onAddPost = () => {
        let text = newPostElement.current.value
        addPost()
    }

    const onAddText = () => {
        let text = newPostElement.current.value
        updateText(text)
    }

    return (
        <div className="content-post">
            <h1>My post</h1>
            <textarea 
            ref={newPostElement} 
            value={newText} 
            onChange={onAddText}
            />
            <button disabled={false} onClick={onAddPost} > Add post </button>
            {
                postData && 
                postData.map((item, i) => (
                    <Post
                        message={item.message}
                        id={i}
                    />
                ))
            }
        </div>
    );
}

export default MyPosts;