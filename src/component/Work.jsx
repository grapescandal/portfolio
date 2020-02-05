import React from 'react';
import WorkCard from './WorkCard.jsx';
import magnetica from '../resources/Magnetica/Magnetica.jpg'
import paperRacing from '../resources/Paper Racing/PaperRacing.jpg'
import paramony from '../resources/Paramony/Paramony.jpg'
import madCockShooter from '../resources/MADCockShooter/MADCockShooter.jpg'
import kiki from '../resources/Kiki The Sacrifice/KiKiTheSacrifice.jpg'

class Work extends React.Component {
    render() {
        return(         
            <div id="work" className="bg-light">  
                <div id="work-container" className="text-center pt-6 pb-6">
                    <h1>Works</h1>
                    <div className="row mt-6">
                        <div className="col">
                            <div className="row justify-content-around no-gutters">
                                <WorkCard sprite={magnetica} imgName={"Magnetica"}></WorkCard>
                                <WorkCard sprite={paperRacing} imgName={"Paper Racing"}></WorkCard>
                                <WorkCard sprite={paramony} imgName={"Paramony"}></WorkCard>
                            </div>
                            <div className="row justify-content-around no-gutters mt-5">
                                <WorkCard sprite={kiki} imgName={"KiKi - The Sacrifice"}></WorkCard>
                                <WorkCard sprite={madCockShooter} imgName={"MAD Cock Shooter"}></WorkCard>
                                <WorkCard ></WorkCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          );  
    }
}

export default Work;