import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem id={d.id} username={d.username}/>);

    let messagesElements = state.messages
        .map(m => <Message messageText={m.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (ev) => {
        let body = ev.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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