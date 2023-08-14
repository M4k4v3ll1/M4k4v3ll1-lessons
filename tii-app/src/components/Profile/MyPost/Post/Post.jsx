import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Drt1ewPwIMxcWoRXwAUN79V6n_YQRY3B1g&usqp=CAU'></img>
            <span>{props.message}
                <div>{props.likesCount} likes</div>
            </span>
        </div>)
}

export default Post;