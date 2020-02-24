import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts';
import MyAvatar from './MyAvatar';

const Profile = ({ state }) => {
    return (
        <div className="content">
            <MyAvatar
            
            />
            <MyPosts
                postData={state.postData}
            />
        </div>
    );
}

export default Profile;