import React from "react";
import s from './ProfileInfo.module.css';
import imageSrc from "../../../images/military-banner.jpg";

const ProfileInfo = () => {
    return (
        <div>
            <span>Main content in ProfileInfo.jsx</span>
            <div className={s.content__banner}>
                <img src={imageSrc} className={s.img__banner} alt='banner'/>
            </div>
            <div>ava + desription</div>
        </div>
    );
}

export default ProfileInfo;