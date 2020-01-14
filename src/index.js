import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import MainNav from './js/MainNav.js';
import Home from './js/Home.js';
import About from './js/About.js';
import Work from './js/Work.js';
import Contact from './js/Contact';

ReactDOM.render(<MainNav />, document.getElementById('mainNav'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Work />, document.getElementById('work'));
ReactDOM.render(<Contact />, document.getElementById('contact'));