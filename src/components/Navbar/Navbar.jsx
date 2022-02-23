import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FavoritFriends from "./FavoritFriends";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <FavoritFriends favorit = {props.favorit.favoritFriends} />
        </nav>
    )
};

export default Navbar;