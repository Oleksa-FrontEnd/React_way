import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
import imageSrc from "../../images/military-banner.jpg";

const Profile = () => {
    return (
        <div className={s.content}> <span>Main content in Profile.jsx</span>
                <div className={s.content__banner}>
                    <img src={imageSrc} className={s.img__banner} alt='banner'/>
                </div>
                <div>ava + desription</div>
                <MyPosts />
            </div>
    );
}

export default Profile;