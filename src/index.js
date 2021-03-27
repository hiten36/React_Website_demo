import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App.jsx';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(<BrowserRouter><Nav/></BrowserRouter>,document.getElementById('root1'));
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));