import React from "react";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import Avatar from "./DialogsItem/Avatar";
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    /*let userAvatar = props.avatar.map (a => <Avatar src={a.avatar} />);*/

    let dialogsElement = props.users.map(d => <DialogsItem name={d.name} id={d.id} avatar={d.avatar}/>);

    let messagesElement = props.messages.map(m => <Message message={m.message}/>);

    let addNewMessage = React.createRef();

    let addMessage = () => {
        let text = addNewMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            {/*<Avatar src={userAvatar} />*/}
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea ref={addNewMessage}>Add...</textarea>
                <div>
                    <button onClick={addMessage} >Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;