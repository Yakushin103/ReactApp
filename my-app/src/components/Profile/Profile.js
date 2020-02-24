import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts';
import MyAvatar from './MyAvatar';

const Profile = ({ postData }) => {
    return (
        <div className="content">
            <MyAvatar
            
            />
            <MyPosts
                postData={postData}
            />
        </div>
    );
}

export default Profile;