import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./Redux/state.js";


ReactDOM.render(
    <React.StrictMode>
        <div>
           <App state={state} />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
