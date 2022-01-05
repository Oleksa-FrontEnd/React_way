import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                <div>My posts</div>
                <div>
                    <textarea>Add...</textarea>
                    <button>Add post</button>
                </div>
                <Post message="Hou are you" estimate='7' />
                <Post message="This is my first post" estimate='17' />
            </div>
    );
}

export default MyPosts;