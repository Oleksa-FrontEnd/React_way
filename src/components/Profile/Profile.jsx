import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let posts = [
    {id: 1, message: "Hou are you?", estimate: 7},
    {id: 2, message: "This is my first post", estimate: 17}
]

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts items={posts} />
        </div>
    );
}

export default Profile;