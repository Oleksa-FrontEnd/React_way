import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsItem from "./components/Dialogs/DialogsItem/DialogsItem";
import Message from "./components/Dialogs/Message/Message";

let dialogs = [
    {id: '1', name: 'Dimych'},
    {id: '2', name: 'Viktor'},
    {id: '3', name: 'Sveta'},
    {id: '4', name: 'Max'},
    {id: '5', name: 'Lora'},
    {id: '6', name: 'Gleb'}
]
let dialogsElement = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);

let messages = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'Super!'},
]
let messagesElement = messages.map(m => <Message message={m.message}/>);

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs' element={<Dialogs users={dialogsElement} messages={messagesElement}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
