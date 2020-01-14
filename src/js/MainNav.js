import React from 'react';
import ReactDOM from 'react-dom';
import '../css/MainNav.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="topnav-right">
                    <a>Home</a>
                    <a>News</a>
                    <a>Contact</a>
                    <a>About</a>  
                </div>       
        );
    }
}

export default NavBar;
