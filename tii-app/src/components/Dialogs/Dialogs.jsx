import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem id={d.id} key={d.id} username={d.username}/>);

    let messagesElements = state.messages
        .map(m => <Message messageText={m.message} key={m.id}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    debugger;
    let onNewMessageChange = (e) => {
        let body = e.target.value;
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