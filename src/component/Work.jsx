import React from 'react';
import WorkCard from './WorkCard.jsx';

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

import paramony from '../resources/Paramony/Paramony.jpg'
import paramony1 from '../resources/Paramony/Paramony1.jpg'
import paramony2 from '../resources/Paramony/Paramony2.jpg'
import paramony3 from '../resources/Paramony/Paramony3.jpg'
import paramony4 from '../resources/Paramony/Paramony4.jpg'

import kiki from '../resources/Kiki The Sacrifice/KiKiTheSacrifice.jpg'
import kiki1 from '../resources/Kiki The Sacrifice/KiKiTheSacrifice1.jpg'
import kiki2 from '../resources/Kiki The Sacrifice/KiKiTheSacrifice2.jpg'
import kiki3 from '../resources/Kiki The Sacrifice/KiKiTheSacrifice3.jpg'
import kiki4 from '../resources/Kiki The Sacrifice/KiKiTheSacrifice4.jpg'

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
        this.modal = React.createRef();
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

        const madWebData = {
            title: "MAD VR Studio Website",
            sprite: madWeb,
            images: [madWeb1, madWeb2, madWeb3, madWeb4],
            descriptions: ["360 degree web viewer.",
                "Made by react.",
                "Responsive design",
                "www.madvrstudio.com"],
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

        const paramonyData = {
            title: "Paramony",
            sprite: paramony,
            images: [paramony1, paramony2, paramony3, paramony4],
            descriptions: ["Story of the last knight of Melodia that must help princess from enemy for restoring thier kingdom.",
                "Amazing battle system.",
                "Side scrolling adventure game.",
                "Graphic for kids."],
        };

        const kikiData = {
            title: "Kiki - The Sacrifice",
            sprite: kiki,
            images: [kiki1, kiki2, kiki3, kiki4],
            descriptions: ["KiKi is a sacrifice of ancient rituals but he don't want to, so keep running KiKi!!",
                "Global game jam 2016 project.",
                "Made by phaser.io",
                "Endless runner games"]
        };

        const punicaData = {
            title: "1880 Watson & Holmes",
            sprite: punica,
            images: [punica1, punica2, punica3, punica4],
            descriptions: ["Puzzle and visual novel game.",
                "Gachapon system.",
                "Run on android mobile devices.",
                "Use Go language to build server"]
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
                                        <WorkCard animated={"wow fadeInUp"} data={paramonyData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100 d-none"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={kikiData} onClick={(data) => {
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

                            <Modal ref={this.modal} data={this.state.currentData}></Modal>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Work;