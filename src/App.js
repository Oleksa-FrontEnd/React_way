import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar favorit={props.state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                                 dispatch = {props.dispatch}
                                                                 //addPost={props.addPost}
                                                                 //newPostText={props.state.profilePage.newPostText}
                                                                 //updateNewPostText={props.updateNewPostText}
                                                        />}
                        />

                        <Route path='/dialogs' element={<Dialogs avatar={props.state.dialogsPage.avatar}
                                                                 users={props.state.dialogsPage.dialogs}
                                                                 messages={props.state.dialogsPage.messages}/>}
                        />
                        <Route path='/news' element={<News/>} />
                        <Route path='/settings' element={<Settings/>} />
                    </Routes>
                </div>
            </div>

    );
}

export default App;
