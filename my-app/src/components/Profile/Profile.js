import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts';
import MyAvatar from './MyAvatar';

const Profile = ({ state, addPost }) => {
    return (
        <div className="content">
            <MyAvatar
            
            />
            <MyPosts
                postData={state.postData}
                addPost={addPost}
            />
        </div>
    );
}

export default Profile;