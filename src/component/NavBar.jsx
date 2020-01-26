import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Work from './Work.jsx';
import Contact from './Contact.jsx';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.home = React.createRef();
        this.about = React.createRef();
        this.work = React.createRef();
        this.contact = React.createRef();

        this.scrolling = this.scrolling.bind(this);
    }

    scrolling(instance) {
        console.log(instance);
        let node = document.getElementById(instance.current.props.id);
        window.scrollTo({
            top: node.offsetTop,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <div>
                <div id="topnav-right" className="navbar">
                    <div className="nav-button">
                        <a onClick={() => {
                            this.scrolling(this.home);
                        }}>Home
                        </a>
                    </div>
                    <div className="nav-button">
                        <a onClick={() => {
                            this.scrolling(this.about);
                        }}>About
                    </a>
                    </div>
                    <div className="nav-button">
                        <a onClick={() => {
                            this.scrolling(this.work);
                        }}>Work</a>
                    </div>
                    <div className="nav-button">
                        <a onClick={() => {
                            this.scrolling(this.contact);
                        }}>Contact</a>
                    </div>
                </div>
                <Home ref={this.home} id="home" />
                <About ref={this.about} id="about-container" />
                <Work ref={this.work} id="work" />
                <Contact ref={this.contact} id="contact" />
            </div>
        );
    }
}

export default NavBar;
