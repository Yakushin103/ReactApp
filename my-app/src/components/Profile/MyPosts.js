import React from 'react';
import Post from './Post';

const MyPosts = ({ postData }) => {

    return (
        <div className="content-post">
            <h1>My post</h1>
            <textarea></textarea>
            <button> Add post </button>
            {
                postData && 
                postData.map(item => (
                    <Post
                        message={item.message}
                    />
                ))
            }
        </div>
    );
}

export default MyPosts;