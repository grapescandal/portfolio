import React from 'react';
import WorkCard from './WorkCard.jsx';

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

import madCockShooter from '../resources/MADCockShooter/MADCockShooter.jpg'
import madCockShooter1 from '../resources/MADCockShooter/MADCockShooter1.jpg'
import madCockShooter2 from '../resources/MADCockShooter/MADCockShooter2.jpg'
import madCockShooter3 from '../resources/MADCockShooter/MADCockShooter3.jpg'
import madCockShooter4 from '../resources/MADCockShooter/MADCockShooter4.jpg'

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

        const madCockShooterData = {
            title: "MAD Cock Shooter",
            sprite: madCockShooter,
            images: [madCockShooter1, madCockShooter2, madCockShooter3, madCockShooter4],
            descriptions: ["Play as chicken with gun, kill other player to be last chicken of the game.",
                "Battle royale multiplayer game",
                "Networking by Unity UNet", "Play with 10 player per match.",
                "Use items and skill to annoy other player."]
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

                                <div className="w-100 d-none"></div>

                                <div className="col-xl-3 col-sm-8">
                                    <div className="row justify-content-center">
                                        <WorkCard animated={"wow fadeInUp"} data={paramonyData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>

                                <div className="w-100"></div>

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
                                        <WorkCard animated={"wow fadeInUp"} data={madCockShooterData} onClick={(data) => {
                                            this.setData(data);
                                        }}></WorkCard>
                                    </div>
                                </div>
                            </div>

                            <Modal ref={this.modal} data={this.state.currentData}></Modal>

                        </div>

                        {/* <WorkCard ></WorkCard> */}
                    </div>
                </div>
            </div >
        );
    }
}

export default Work;