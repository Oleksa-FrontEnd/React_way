import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
            <img src={'https://iconape.com/wp-content/files/gl/258010/png/Navy_Seals-logo.png'}
                 alt='logo' >
            </img>
        </header>
}
export default Header;
