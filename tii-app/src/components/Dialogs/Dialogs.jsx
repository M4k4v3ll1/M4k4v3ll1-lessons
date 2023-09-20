import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem id={d.id} username={d.username}/>);

    let messagesElements = state.messages
        .map(m => <Message messageText={m.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (ev) => {
        let body = ev.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={newMessageBody}
                                       placeholder='Введите Ваше сообщение'
                                       onChange={onNewMessageChange}/></div>
                        <div>
                            <button onClick={onSendMessageClick}>Отправить сообщение</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs