import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;