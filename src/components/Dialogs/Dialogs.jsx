import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    let dialogsElement = props.users.map(d => <DialogsItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElement = props.messages.map(m => <Message message={m.message}/>);

    let newDialogElement = React.createRef();

    let addDialog = () => {
        let textDialog = newDialogElement.current.value;
        alert (textDialog);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
            <textarea ref={newDialogElement}>Add dialog element...</textarea>
                <div>
                    <button onClick={addDialog}>Add dialog</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;