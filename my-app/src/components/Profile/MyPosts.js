import React from 'react';
import Post from './Post';

const MyPosts = ({ postData, addPost }) => {

    let newPostElement = React.createRef();

    const onAddPost = () => {
        let text = newPostElement.current.value
        addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className="content-post">
            <h1>My post</h1>
            <textarea ref={newPostElement} ></textarea>
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