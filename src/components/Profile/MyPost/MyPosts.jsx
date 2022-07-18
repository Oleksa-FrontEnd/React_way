import React, {createRef} from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} estimate={p.estimate}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText} />
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