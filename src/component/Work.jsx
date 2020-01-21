import React from 'react';
import WorkCard from './WorkCard.jsx';
import magnetica from '../img/magnetica/Magnetica.jpg'

class Work extends React.Component {
    render() {
        return (
            <div id="my-works" className="bg-light mt-5">
                <div id="works-container" className="container-np text-center pb-5">
                    <h1>Works</h1>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="row justify-content-around no-gutters">
                                <WorkCard sprite={magnetica} imgName={"Magnetica"}></WorkCard>
                                <WorkCard></WorkCard>
                                <WorkCard></WorkCard>
                            </div>
                            <div className="row justify-content-around no-gutters mt-5">
                                <WorkCard></WorkCard>
                                <WorkCard></WorkCard>
                                <WorkCard></WorkCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;