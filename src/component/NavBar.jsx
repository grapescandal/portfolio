import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Work from './Work.jsx'

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
                <Work />
            </div> 
        );
    }
}

export default NavBar;
