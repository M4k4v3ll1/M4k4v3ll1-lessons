import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (<div className={s.postsBlock}>
        <h3>{props.name}</h3>
        <div>
        <textarea onChange={onPostChange}
                  ref={newPostElement}
                  placeholder="Что нового?"
                  value={props.newPostText}/>
        </div>
        <div>
            <button onClick={addPost}>Добавить пост</button>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>);
}

export default MyPosts;