import React from 'react';
import ReactDOM from 'react-dom';

class About extends React.Component {
    render() {
        return (
            <div id="about-container" className="container text-center mt-5">
                <h1>About</h1>
                <div id="about-content-container" className="row mt-5">
                     <div className="col">
                        <div className="row h-100">
                            <div className="col-6">
                                <div className="row align-items-center h-100">
                                    <div className="col">
                                        <p>Image</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row h-50 mt-4">
                                    <div className="col">
                                            <h1 className="about-padding text-left">Hello, my name is Grape.</h1>
                                            <p className="about-profile about-padding text-left mt-2">
                                                I am a Developer who like to make and play games, 
                                                Outside of work I like to play the guitar or find something new to learn. 
                                                Currently I am working as a Game Developer as MAD Virtual Reality Studio. 
                                                I'd love to get to know you, so don't hesitate to get in touch.
                                            </p>                                     
                                    </div>
                                </div>
                                <div className="row align-items-center h-50">
                                    <div className="col">
                                            <p>Skills.
                                            </p>                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>  
            </div>
        )
    }        
}

export default About;