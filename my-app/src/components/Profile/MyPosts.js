import React from 'react';
import Post from './Post';

const MyPosts = () => {
    return (
        <div className="content-post">
            <h1>My post</h1>
            <textarea></textarea>
            <button> Add post </button>
            <Post
                message="Hi, how are u?"
            />
            <Post
                message="It's my first post"
            />
        </div>
    );
}

export default MyPosts;