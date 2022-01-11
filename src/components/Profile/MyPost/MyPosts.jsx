import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: "Hou are you", estimate: 7},
        {id: 2, message: "This is my first post", estimate: 17}
    ]
    let postsElement = posts.map(p => <Post message={p.message} estimate={p.estimate}/>)
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea>Add...</textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
            {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;