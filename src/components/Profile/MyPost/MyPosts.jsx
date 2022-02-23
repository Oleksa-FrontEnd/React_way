import React, {createRef} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.itemsMyPosts.map(p => <Post message={p.message} estimate={p.estimate}/>)

    let NewPostElement = React.createRef();

    let addPost = () => {
        let text = NewPostElement.current.value;
        alert(text);
    }
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea ref={NewPostElement}>Add...</textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
            {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;