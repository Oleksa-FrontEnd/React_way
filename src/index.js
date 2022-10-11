import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state.js";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

 let renderEntireTree =(state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getStore()}
                     dispatch={store.dispatch.bind(store)}
                     //addPost={store.addPost.bind(store)}
                     //updateNewPostText={store.updateNewPostText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

 renderEntireTree(store.getStore());
 store.subscribe (renderEntireTree)

reportWebVitals();
