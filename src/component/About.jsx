import React from 'react';
import SteppedProgress from './steppedprogressbar.jsx'

class About extends React.Component {
    render() {
        return (
            <div id="about-container" className="container text-center mt-6 pb-6">
                <h1>About me</h1>
                <div id="about-content-container" className="row mt-6">
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
                                <div className="row h-50">
                                    <div className="col">
                                            <h1 className="about-padding pt-4 text-left">Hello, my name is Grape.</h1>
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
                                        <div className="row justify-content-center">
                                            <div className="col-4"><p>Beginner</p></div> 
                                            <div className="col-4"><p>Advanced</p></div>                          
                                        </div>
                                        <div className="row justify-content-start">
                                            <div className="col-8">
                                                <div className="row justify-content-center mt-2">
                                                    <div className="col-4 offset-1 text-right">C#</div> 
                                                    <div className="col offset-1"><SteppedProgress totalProgress={5} currentProgress={5}/></div>                             
                                                </div>  
                                                <div className="row mt-3">
                                                    <div className="col-4 offset-1 text-right">GO</div> 
                                                    <div className="col offset-1"><SteppedProgress totalProgress={5} currentProgress={4}/></div>                             
                                                </div>  
                                                <div className="row mt-3">
                                                    <div className="col-4 offset-1 text-right">HTML</div> 
                                                    <div className="col offset-1"><SteppedProgress totalProgress={5} currentProgress={5}/></div>                              
                                                </div>  
                                                <div className="row mt-3">
                                                    <div className="col-4 offset-1 text-right">CSS</div> 
                                                    <div className="col offset-1"><SteppedProgress totalProgress={5} currentProgress={3}/></div>                             
                                                </div>  
                                                <div className="row mt-3">
                                                    <div className="col-4 offset-1 text-right">JavaScript</div> 
                                                    <div className="col offset-1"><SteppedProgress totalProgress={5} currentProgress={4}/></div>                               
                                                </div>  
                                                <div className="row mt-3">
                                                    <div className="col-4 offset-1 text-right">React</div> 
                                                    <div className="col offset-1"><SteppedProgress totalProgress={5} currentProgress={2}/></div>                             
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