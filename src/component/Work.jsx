import React from 'react';
import WorkCard from './WorkCard.jsx';

import aisha from '../resources/Aisha Backend/Capture.jpg'
import aisha1 from '../resources/Aisha Backend/Capture1.jpg'
import aisha2 from '../resources/Aisha Backend/Capture2.jpg'
import aisha3 from '../resources/Aisha Backend/Capture3.jpg'
import aisha4 from '../resources/Aisha Backend/Capture4.jpg'
import aisha5 from '../resources/Aisha Backend/Capture5.jpg'
import aisha6 from '../resources/Aisha Backend/Capture6.jpg'

import upforthai from '../resources/UpForThai/Capture.jpg'
import upforthai1 from '../resources/UpForThai/Capture1.jpg'
import upforthai2 from '../resources/UpForThai/Capture2.jpg'
import upforthai3 from '../resources/UpForThai/Capture3.jpg'
import upforthai4 from '../resources/UpForThai/Capture4.jpg'
import upforthai5 from '../resources/UpForThai/Capture5.jpg'
import upforthai6 from '../resources/UpForThai/Capture6.jpg'

import thprsmeeting from '../resources/Thprsmeeting/Capture.jpg'
import thprsmeeting1 from '../resources/Thprsmeeting/Capture1.jpg'
import thprsmeeting2 from '../resources/Thprsmeeting/Capture2.jpg'
import thprsmeeting3 from '../resources/Thprsmeeting/Capture3.jpg'
import thprsmeeting4 from '../resources/Thprsmeeting/Capture4.jpg'
import thprsmeeting5 from '../resources/Thprsmeeting/Capture5.jpg'
import thprsmeeting6 from '../resources/Thprsmeeting/Capture6.jpg'

import icsmeeting from '../resources/Icsmeeting/Capture.jpg'
import icsmeeting1 from '../resources/Icsmeeting/Capture1.jpg'
import icsmeeting2 from '../resources/Icsmeeting/Capture2.jpg'
import icsmeeting3 from '../resources/Icsmeeting/Capture3.jpg'
import icsmeeting4 from '../resources/Icsmeeting/Capture4.jpg'
import icsmeeting5 from '../resources/Icsmeeting/Capture5.jpg'

import kpi from '../resources/KPI/Capture.jpg'
import kpi1 from '../resources/KPI/Capture1.jpg'

import dla from '../resources/DLA/Capture.jpg'
import dla1 from '../resources/DLA/Capture1.jpg'

import madWeb from '../resources/MADWeb/MADWeb.jpg'
import madWeb1 from '../resources/MADWeb/MADWeb1.jpg'
import madWeb2 from '../resources/MADWeb/MADWeb2.jpg'
import madWeb3 from '../resources/MADWeb/MADWeb3.jpg'
import madWeb4 from '../resources/MADWeb/MADWeb4.jpg'

import magnetica from '../resources/Magnetica/Magnetica.jpg'
import magnetica1 from '../resources/Magnetica/Magnetica1.jpg'
import magnetica2 from '../resources/Magnetica/Magnetica2.jpg'
import magnetica3 from '../resources/Magnetica/Magnetica3.jpg'
import magnetica4 from '../resources/Magnetica/Magnetica4.jpg'

import paperRacing from '../resources/Paper Racing/PaperRacing.jpg'
import paperRacing1 from '../resources/Paper Racing/PaperRacing1.jpg'
import paperRacing2 from '../resources/Paper Racing/PaperRacing2.jpg'
import paperRacing3 from '../resources/Paper Racing/PaperRacing3.jpg'
import paperRacing4 from '../resources/Paper Racing/PaperRacing4.jpg'

import threeConnect from '../resources/ThreeConnect/ThreeConnect.jpg'
import threeConnect1 from '../resources/ThreeConnect/ThreeConnect1.jpg'
import threeConnect2 from '../resources/ThreeConnect/ThreeConnect2.jpg'
import threeConnect3 from '../resources/ThreeConnect/ThreeConnect3.jpg'
import threeConnect4 from '../resources/ThreeConnect/ThreeConnect4.jpg'

import emar from '../resources/EMAR/EMAR.jpg'
import emar1 from '../resources/EMAR/EMAR1.jpg'
import emar2 from '../resources/EMAR/EMAR2.jpg'
import emar3 from '../resources/EMAR/EMAR3.jpg'
import emar4 from '../resources/EMAR/EMAR4.jpg'

// import paramony from '../resources/Paramony/Paramony.jpg'
// import paramony1 from '../resources/Paramony/Paramony1.jpg'
// import paramony2 from '../resources/Paramony/Paramony2.jpg'
// import paramony3 from '../resources/Paramony/Paramony3.jpg'
// import paramony4 from '../resources/Paramony/Paramony4.jpg'

// import kiki from '../resources/Kiki The Sacrifice/KiKiTheSacrifice.jpg'
// import kiki1 from '../resources/Kiki The Sacrifice/KiKiTheSacrifice1.jpg'
// import kiki2 from '../resources/Kiki The Sacrifice/KiKiTheSacrifice2.jpg'
// import kiki3 from '../resources/Kiki The Sacrifice/KiKiTheSacrifice3.jpg'
// import kiki4 from '../resources/Kiki The Sacrifice/KiKiTheSacrifice4.jpg'

import punica from '../resources/Punica/Punica.jpg'
import punica1 from '../resources/Punica/Punica1.jpg'
import punica2 from '../resources/Punica/Punica2.jpg'
import punica3 from '../resources/Punica/Punica3.jpg'
import punica4 from '../resources/Punica/Punica4.jpg'

import Modal from './Modal.jsx';
import WOW from 'wowjs';

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.Modal = React.createRef();
        this.state = {
            currentData: null
        };
    }

    componentDidMount() {
        new WOW.WOW().init();
    }

    setData(data) {
        this.setState({ currentData: data });
    }

    render() {

        const aishaData = {
            title: "Aisha plus",
            sprite: aisha,
            images: [aisha1, aisha2, aisha3, aisha4, aisha5, aisha6],
            descriptions: ["Aisha virtual Idol application",
                "Aisha will call you every day and cheer you up",
                "Gachapon system & chatbot system",
                "Made by Unity and golang."]
        };

        const upforthaiData = {
            title: "Up for thai",
            sprite: upforthai,
            images: [upforthai1, upforthai2, upforthai3, upforthai4, upforthai5, upforthai6],
            descriptions: ["Up for thai, Volunteer chat bot",
                "Up for thai project is a customer service bot",
                "Integrate with Facebook Messenger",
                "Made by golang."]
        };

        const thprsmeetingData = {
            title: "Thprsmeeting Virtual tour",
            sprite: thprsmeeting,
            images: [thprsmeeting1, thprsmeeting2, thprsmeeting3, thprsmeeting4, thprsmeeting5, thprsmeeting6],
            descriptions: ["Virtual tour website use for meeting, conference.",
                "Use Zoom as video conference and Vimeo as video player",
                "Made by golang, mongodb."]
        };

        const icsmeetingData = {
            title: "ICSmeeting Virtual tour",
            sprite: icsmeeting,
            images: [icsmeeting1, icsmeeting2, icsmeeting3, icsmeeting4, icsmeeting5],
            descriptions: ["Virtual tour website use for meeting, conference.",
                "Use Zoom as video conference and Vimeo as video player",
                "Made by golang, mongodb."]
        };

        const kpiData = {
            title: "KPI Chatbot",
            sprite: kpi,
            images: [kpi, kpi1],
            descriptions: ["KPI chat bot for organization",
                "Customer service bot that can help user to find answer as fast as possible",
                "Integrate with King Prajadhipok's Institute The Government Complex Commemorating Website",
                "https://kpitest-443f5.web.app/",
                "Made by golang with DialogFlow."]
        };

        const dlaData = {
            title: "DLA Chatbot",
            sprite: dla,
            images: [dla, dla1],
            descriptions: ["DLA chat bot for organization",
                "Customer service bot that can help user to find answer as fast as possible",
                "Integrate with Department of Local Administration Website",
                "http://www.dla.go.th",
                "Made by golang with DialogFlow."]
        };

        const madWebData = {
            title: "MAD VR Studio Website",
            sprite: madWeb,
            images: [madWeb1, madWeb2, madWeb3, madWeb4],
            descriptions: ["360 degree web viewer.",
                "Responsive design",
                "www.madvrstudio.com",
                "Made by ReactJS."]
        };

        const magneticaData = {
            title: "Magnetica",
            sprite: magnetica,
            images: [magnetica1, magnetica2, magnetica3, magnetica4],
            descriptions: ["The competition between robots to get precious treasure from king of robots.",
                "Multiplayer and puzzle game.",
                "Networking by Unity UNet.",
                "Play with 4 players per match."],
        };

        const paperRacingData = {
            title: "Paper Racing",
            sprite: paperRacing,
            images: [paperRacing1, paperRacing2, paperRacing3, paperRacing4],
            descriptions: ["Made from paper car game, 2 players blow thier cars to see who can go farther.",
                "Use hardware to get input from breath and convert it to car's speed by Arduino.",
                "Play to get highscore."],
        };

        const threeConnectData = {
            title: "3Connect Star Call",
            sprite: threeConnect,
            images: [threeConnect1, threeConnect2, threeConnect3, threeConnect4],
            descriptions: ["What would happen if you can talk with your favorite actors who ready to call you every day?",
                "Let's super star make phone call for you!",
                "Run on iOS & Android.",
                "Use golang to build server"]
        };

        const emarData = {
            title: "EM Augmeted Reality",
            sprite: emar,
            images: [emar1, emar2, emar3, emar4],
            descriptions: ["Application for promote the promotions in the Emporium and the EmQuartier with Augmented Reality technology.",
                "Use ARKit and ARCore.",
                "Made by Unity.",
                "You will get the best exclusive promotions for you."]
        };

        const punicaData = {
            title: "1880 Watson & Holmes",
            sprite: punica,
            images: [punica1, punica2, punica3, punica4],
            descriptions: ["Puzzle and visual novel game.",
                "Gachapon system.",
                "Run on android mobile devices.",
                "Use golang to build server"]
        };

        return (
            <div id="work" className="bg-light">
                <div id="work-container" className="text-center pt-6 pb-6">
                    <h1 className="wow bounceInDown">Works</h1>
                    <div className="row mt-6">
                        <div className="col">
                            <div className="row justify-content-around">
                            <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={aishaData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d-none"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={upforthaiData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d-none"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={thprsmeetingData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={icsmeetingData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d-none"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={kpiData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d-none"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={dlaData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={madWebData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d-none"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={magneticaData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d-none"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={paperRacingData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={threeConnectData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d-none"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={emarData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d-none"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={punicaData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>
                            </div>

                            <Modal ref={this.Modal} data={this.state.currentData}></Modal>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Work;