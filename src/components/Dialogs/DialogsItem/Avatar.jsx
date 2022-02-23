import React from "react";
import ava from "../../../images/54.png";
import s from './../Dialogs.module.css';

const Avatar = (props) => {

    return (
        <div>
            <img src={ava} className={s.icon} alt='image' />
        </div>
    )
};

export default Avatar;