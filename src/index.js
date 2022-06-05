import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./Redux/state.js";
import {renderEntireTree} from "./render"

renderEntireTree(state);

reportWebVitals();
