import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem id={d.id} username={d.username}/>);

    let messagesElements = props.state.messages
        .map(m => <Message messageText={m.message}/>);

    let addNewMessage = React.createRef();

    let addMessage = () => {
        let text = addNewMessage.current.value;
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div>
                    <textarea ref={addNewMessage} placeholder='Введите Ваше сообщение'></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs