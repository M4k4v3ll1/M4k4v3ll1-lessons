import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (<div className={s.postsBlock}>
        <h3>{props.name}</h3>
        <div>
            <textarea placeholder="Что нового?"></textarea>
        </div>
        <div>
            <button>Добавить пост</button>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>);
}

export default MyPosts;