import React from 'react';
import SteppedProgress from './Steppedprogressbar.jsx'
import me from '../resources/Me/me.jpg'

import WOW from 'wowjs'

class About extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div id="about-container" className="container text-center pt-6 pb-6">
                <h1>About me</h1>
                <div id="about-content-container" className="row mt-6 wow tada">
                     <div className="col h-100">
                        <div className="row h-100">
                            <div className="col-6">
                                <div className="row align-items-center h-100">
                                    <div className="col">
                                        <img id="my-picture" src={me} alt="me"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row h-50">
                                    <div className="col h-100 pb-5">
                                            <h1 className="about-greeting about-padding pt-4 text-left">Hello, my name is Grape.</h1>
                                            <p className="about-profile about-padding pt-3 text-left">
                                            I am a developer who admires to create and enjoy with games. In my free time, 
                                            I adore playing guitar and always being eager to learn something new. 
                                            Currently,  I am working as a game developer at MAD Virtual Reality Studio
                                            for about a year. Do not hesitate to contact me.
                                            I am looking forward to hearing from you.
                                            </p>                                     
                                    </div>
                                </div>
                                <div className="row h-50">
                                    <div className="col">
                                        <div className="row justify-content-center align-items-center">
                                            <div className="col-4"><p className="skill-level mb-0">Beginner</p></div> 
                                            <div className="col-4"><p className="skill-level mb-0">Advanced</p></div>                          
                                        </div>
                                        <div className="row justify-content-start">
                                            <div className="col">
                                                <div className="row mt-2">
                                                    <div className="col skill-level text-right">C#</div> 
                                                    <div className="col-5">
                                                    <SteppedProgress totalProgress={5} currentProgress={5}/>
                                                    </div>
                                                    <div className="col-3-5"></div>                        
                                                </div>  
                                                <div className="row mt-3">
                                                    <div className="col skill-level text-right">Go</div> 
                                                    <div className="col-5"><SteppedProgress currentProgress={4} totalProgress={5}/></div>               
                                                    <div className="col-3-5"></div>                   
                                                </div>  
                                                <div className="row mt-3"> 
                                                    <div className="col skill-level text-right">HTML</div> 
                                                    <div className="col-5"><SteppedProgress currentProgress={5} totalProgress={5}/></div>     
                                                    <div className="col-3-5"></div>                              
                                                </div>  
                                                <div className="row mt-3">
                                                    <div className="col skill-level text-right">CSS</div> 
                                                    <div className="col-5"><SteppedProgress currentProgress={3} totalProgress={5}/></div>            
                                                    <div className="col-3-5"></div>                      
                                                </div>  
                                                <div className="row mt-3">
                                                    <div className="col skill-level text-right">JavaScript</div> 
                                                    <div className="col-5"><SteppedProgress currentProgress={4} totalProgress={5}/></div>        
                                                    <div className="col-3-5"></div>                            
                                                </div>  
                                                <div className="row mt-3">
                                                    <div className="col skill-level text-right">React</div> 
                                                    <div className="col-5"><SteppedProgress currentProgress={2} totalProgress={5}/></div>    
                                                    <div className="col-3-5"></div>                              
                                                </div>         
                                            </div>         
                                        </div>                   
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                     </div>
                </div>  
            </div>
        );
    }        
}

export default About;