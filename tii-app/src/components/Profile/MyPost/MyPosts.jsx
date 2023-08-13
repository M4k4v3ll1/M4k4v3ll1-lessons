import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    return (<div className={classes.postsBlock}>
        <h3>{props.name}</h3>
        <div>
            <textarea placeholder="Что нового?"></textarea>
        </div>
        <div>
            <button>Добавить пост</button>
        </div>
        <div className={classes.posts}>
            <Post message='Hi, how are you' likesCounts='15'/>
            <Post message="It's my first post" likesCounts='20'/>
            <Post/>
            <Post/>
        </div>
    </div>);
}

export default MyPosts;