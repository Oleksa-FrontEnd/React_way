import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.massage}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Viktor'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Max'},
        {id: '5', name: 'Lora'},
        {id: '6', name: 'Gleb'}
    ]
    let messages = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Super!'},
    ]
    let dialogsElement = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElement = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.massages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;