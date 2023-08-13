import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.username}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.messageText}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem id="1" username="Максим Багрянцев"/>
                    <DialogItem id="2" username="Паша Иванушкин"/>
                    <DialogItem id="3" username="Иван Чекмасов"/>
                    <DialogItem id="4" username="Андрей Маликов"/>
                    <DialogItem id="5" username="Ярослав Питурин"/>
                </div>
                <div className={classes.messages}>
                    <Message messageText="Привет!"/>
                    <Message messageText="Как дела?"/>
                    <Message messageText="Пошли гулять!"/>
                    <Message messageText="Сегодня вечером"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs