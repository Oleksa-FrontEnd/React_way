import React from "react";
import s from './Profile.module.css';
import imageSrc from "../../images/military-banner.jpg";

const Profile = () => {
    return (
            <div className={s.content}> Main content
                <div className={s.content__banner}>
                    <img src={imageSrc} className={s.img__banner} alt='banner'/>
                </div>
                <div>ava + desription</div>
                <div>My posts</div>
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>
                <div>Post 4</div>
            </div>
    );
}

export default Profile;