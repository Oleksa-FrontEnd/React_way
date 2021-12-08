import React from 'react';
import s from './Navbar.module.css';
import {render} from "react-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a src={'#'} className={`${s.item} ${s.active}`}>Profile</a>
            </div>
            <div src={'#'} className={s.item}>
                <a>Messages</a>
            </div>
            <div src={'#'} className={s.item}>
                <a>News</a>
            </div>
            <div src={'#'} className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}
export default Navbar;