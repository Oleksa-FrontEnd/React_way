import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Avatar from "./Avatar";

const DialogsItem = (props) => {
    const path = "/dialogs/" + props.id;

    return (
        <div>
            <div className={s.dialogs + ' ' + s.active}>
                <Avatar />
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogsItem;