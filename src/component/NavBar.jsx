import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Work from './Work.jsx';
import Contact from './Contact.jsx';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.about = React.createRef();
        this.work = React.createRef();
        this.contact = React.createRef();

        this.scrolling = this.scrolling.bind(this);
    }

    navEffect() {
        window.addEventListener("scroll", () => {
            var navBar = document.getElementById("navbar-container");
            var domRect = navBar.getBoundingClientRect();
            var myBackground = document.getElementById("home");
            var domBGRect = myBackground.getBoundingClientRect();

            if (domRect.y <= -domRect.height) {
                navBar.classList.add("fade-in-nav");
            }
            if (-domBGRect.height < domBGRect.top) {
                navBar.classList.remove("fade-in-nav");
            }
        });
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
                <div id="navbar-container">
                        <div className="row justify-content-end h-100 nav-row">
                            <div className="col-auto h-100">
                                <div className="row h-100 align-items-center nav-button">
                                    <div className="col">
                                        <a onClick={() => {
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth"
                                            });
                                        }}>Home</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto h-100">
                                <div className="row h-100 align-items-center nav-button">
                                    <div className="col">
                                        <a onClick={() => {
                                            this.scrolling(this.about);
                                        }}>About</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto h-100">
                                <div className="row h-100 align-items-center nav-button">
                                    <div className="col">
                                        <a onClick={() => {
                                            this.scrolling(this.work);
                                        }}>Works</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto h-100">
                                <div className="row h-100 align-items-center nav-button">
                                    <div className="col">
                                        <a onClick={() => {
                                            this.scrolling(this.contact);
                                        }}>Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Home ref={this.navEffect} id="home" />
                <About ref={this.about} id="about-container" />
                <Work ref={this.work} id="work" />
                <Contact ref={this.contact} id="contact" />
            </div>
        );
    }
}

export default NavBar;
