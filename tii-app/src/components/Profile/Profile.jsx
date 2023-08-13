import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts name="My posts"/>
        </div>)
}

export default Profile;