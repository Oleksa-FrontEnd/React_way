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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name="Dimych" id='1'/>
                <DialogsItem name="Viktor" id='2'/>
                <DialogsItem name="Sveta" id='4'/>
                <DialogsItem name="Max" id='5'/>
                <DialogsItem name="Lora" id='6'/>
                <DialogsItem name="Gleb" id='7'/>
            </div>

            <div className={s.massages}>
                <Message message='Hi!'/>
                <Message message='How are you?'/>
                <Message message='Super!!!'/>
            </div>
        </div>
    )
}

export default Dialogs;