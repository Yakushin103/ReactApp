import React from 'react';
import Post from './Post';

const MyPosts = () => {
    return (
        <div>
            <h1>My post</h1>
            
            <textarea></textarea>
            <button> Add post </button>
            <Post />
        </div>
    );
}

export default MyPosts;