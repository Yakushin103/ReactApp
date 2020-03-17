import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts';
import MyAvatar from './MyAvatar';

const Profile = ({ state, addPost, updateText }) => {
    return (
        <div className="content">
            <MyAvatar
            
            />
            <MyPosts
                newText={state.newText}
                postData={state.postData}
                addPost={addPost}
                updateText={updateText}
            />
        </div>
    );
}

export default Profile;