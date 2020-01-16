import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <ul id="topnav-right">
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>  
                </ul>    
                <Home />
                <About />
            </div> 
        );
    }
}

export default NavBar;
