import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPost/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts name="Propsy prihodyat" />
        </div>)
}

export default Profile;