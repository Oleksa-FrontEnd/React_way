import React from 'react';
import './Navbar.css';
import {render} from "react-dom";

const Navbar = () => {
    return (
        <nav className='nav'>
            <div>
                <a src={'#'}>Profile</a>
            </div>
            <div src={'#'}>
                <a>Messages</a>
            </div>
            <div src={'#'}>
                <a>News</a>
            </div>
            <div src={'#'}>
                <a>Settings</a>
            </div>
        </nav>
    );
}
export default Navbar;