import React, {createRef} from "react";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostText} from "../../../Redux/state";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} estimate={p.estimate}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostText(text);
        props.dispatch(action);
    }
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea onChange={ onPostChange }
                          ref={ newPostElement }
                          value={ props.newPostText }/>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;