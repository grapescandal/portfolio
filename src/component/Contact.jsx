import React from 'react';
import mail from '../resources/Icons/gmail.png'
import github from '../resources/Icons/github.png'
import facebook from '../resources/Icons/facebook.png'
import phone from '../resources/Icons/phone.png'
import pin from '../resources/Icons/pin.png'

import WOW from 'wowjs';

class Contact extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    render() {
        return (
            <div id="contact">
                <div id="contact-container" className="text-center pt-6 pb-6">
                    <h1>Contact</h1>
                    <div className="row mt-5">
                        <div className="col wow fadeInLeft">
                            <div className="row justify-content-center">
                                <div className="col-xl-2 col-sm-8">
                                    <img src={mail} className="icon-big img-fluid" alt="mail"></img>
                                    <p className="mt-4">Divinetrees@gmail.com</p>
                                </div>
                                <div className="col-xl-2 col-sm-8">
                                    <img src={github} className="icon-big img-fluid" alt="github"></img>
                                    <p className="mt-4">github.com/grapescandal</p>
                                </div>
                                <div className="col-xl-2 col-sm-8">
                                    <img src={facebook} className="icon-big img-fluid" alt="facebook"></img>
                                    <p className="mt-4">Jirashy G. Kongjinda</p>
                                </div>
                                <div className="col-xl-2 col-sm-8">
                                    <img src={phone} className="icon-big img-fluid" alt="phone"></img>
                                    <p className="mt-4">+66860414919</p>
                                </div>
                                <div className="col-xl-2 col-sm-8">
                                    <img src={pin} className="icon-big img-fluid" alt="pin"></img>
                                    <p className="mt-4">Bangkok, Thailand</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
            }
        }
        
export default Contact;