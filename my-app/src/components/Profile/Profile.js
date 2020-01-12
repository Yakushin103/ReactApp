import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts';

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img alt="bg-Avatar" src="https://avatars.mds.yandex.net/get-pdb/2212586/6dda1a62-c391-4e13-b314-93ac53dafa89/s1200" />
            </div>
            Avatar
            <MyPosts />
        </div>
    );
}

export default Profile;