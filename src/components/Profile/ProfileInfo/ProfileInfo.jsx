import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <span>Main content in ProfileInfo.jsx</span>
            <div className={s.content__banner}>

                <img src={require('../../../images/military-banner.jpg').default} className={s.img__banner} alt='baner'/>;
            </div>
            <div>ava + desription</div>
        </div>
    );
}

export default ProfileInfo;