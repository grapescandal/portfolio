import React from 'react';
import mail from '../resources/Icons/gmail.png'
import facebook from '../resources/Icons/facebook.png'
import github from '../resources/Icons/github.png'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" className="container-fluid py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <a href="mailto:divinetrees@gmail.com" target="blank">
                                        <img src={mail} className="icon img-fluid" alt="mail"></img>
                                    </a>
                                </div>
                                <div className="col-auto">
                                    <a href="https://www.facebook.com/LAWGGEVOL" target="blank">
                                        <img src={facebook} className="icon img-fluid" alt="mail"></img>
                                    </a>
                                </div>
                                <div className="col-auto">
                                    <a href="https://github.com/grapescandal?tab=repositories" target="blank">
                                        <img src={github} className="icon img-fluid" alt="mail"></img>
                                    </a>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <p className="mb-0">Developed by Jirachai Kongjinda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;