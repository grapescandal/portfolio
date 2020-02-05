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

class Work extends React.Component {
    render() {
        const magneticaImages = [magnetica1,magnetica2,magnetica3,magnetica4];
        const paperRacingImages = [paperRacing1,paperRacing2,paperRacing3,paperRacing4];
        const paramonyImages = [paramony1,paramony2,paramony3,paramony4];
        const kikiImages = [kiki1,kiki2,kiki3,kiki4];
        const madCockShooterImages = [madCockShooter1,madCockShooter2,madCockShooter3,madCockShooter4];
        return(         
            <div id="work" className="bg-light">  
                <div id="work-container" className="text-center pt-6 pb-6">
                    <h1>Works</h1>
                    <div className="row mt-6">
                        <div className="col">
                            <div className="row justify-content-around no-gutters">
                                <WorkCard sprite={magnetica} imgName={"Magnetica"} images={magneticaImages}></WorkCard>
                                <WorkCard sprite={paperRacing} imgName={"Paper Racing"} images={paperRacingImages}></WorkCard>
                                <WorkCard sprite={paramony} imgName={"Paramony"} images={paramonyImages}></WorkCard>
                            </div>
                            <div className="row justify-content-around no-gutters mt-5">
                                <WorkCard sprite={kiki} imgName={"KiKi - The Sacrifice"} images={kikiImages}></WorkCard>
                                <WorkCard sprite={madCockShooter} imgName={"MAD Cock Shooter"} images={madCockShooterImages}></WorkCard>
                                {/* <WorkCard ></WorkCard> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );  
    }
}

export default Work;