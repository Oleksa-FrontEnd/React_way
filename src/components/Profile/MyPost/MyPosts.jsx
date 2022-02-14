import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.itemsMyPosts.map(p => <Post message={p.message} estimate={p.estimate}/>)

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