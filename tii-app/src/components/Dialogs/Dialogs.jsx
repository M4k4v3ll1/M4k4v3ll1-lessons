import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.username}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.messageText}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, username: "Максим Багрянцев"},
        {id: 2, username: "Паша Иванушкин"},
        {id: 3, username: "Иван Чекмасов"},
        {id: 4, username: "Андрей Маликов"},
        {id: 5, username: "Ярослав Питурин"},
    ]

    let messages = [
        {id: 1, message: "Привет!"},
        {id: 2, message: "Как дела?"},
        {id: 3, message: "Пошли гулять!"},
        {id: 4, message: "Сегодня вечером"},
    ]

    let dialogsElements = dialogs
        .map(d => <DialogItem id={d.id} username={d.username}/>);

    let messagesElements = messages
        .map(m => <Message messageText={m.message}/>);

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs