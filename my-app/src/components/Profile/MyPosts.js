import React from 'react';
import Post from './Post';

const MyPosts = () => {

    let postData = [
        { id: 1, message: 'Hi, how are u?'},
        { id: 2, message: 'Its my first post'},
        { id: 3, message: 'How its work'},
        { id: 4, message: 'Bla bla bla'}
    ];

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