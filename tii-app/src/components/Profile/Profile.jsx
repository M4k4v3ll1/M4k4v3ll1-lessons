import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts name="My posts" posts={props.state.posts}/>
        </div>)
}

export default Profile;