import React from 'react';
import s from './NavFriends.module.css';
import ava from "../../images/bober.png";

const NavFriends = (props) => {
    return (
        <div className={s.friendBlock}>
            <div><img src={ava} className={s.icon} /></div>
            <span>{props.name}</span>
        </div>
    )
}
export default NavFriends;