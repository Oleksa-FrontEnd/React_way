import React, {createRef} from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.itemsMyPosts.map(p => <Post message={p.message} estimate={p.estimate}/>)

    let NewPostElement = React.createRef();

    let addPost = () => {
        let text = NewPostElement.current.value;
        props.addPost(text);
        NewPostElement.current.value = '';
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