import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.postContainer}>
                <img className={s.avatar} src={'https://i.pinimg.com/236x/71/0b/be/710bbeba22a770883ddd9f7e04e3b79f--the-soldier-team-fortress-.jpg'}/>
                {props.message}
                <span>
                    <button className={s.likeButton}>Like</button>
                    {props.estimate}
                </span>
            </div>
    );
}
export default Post;