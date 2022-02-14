import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElement = props.users.map(d => <DialogsItem name={d.name} id={d.id}/>);

    let messagesElement = props.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;