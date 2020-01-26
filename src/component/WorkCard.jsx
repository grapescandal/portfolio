import React from 'react';

class WorkCard extends React.Component {
    render() {
        return (
            <div className="work-card col-3-5">
                <div className="row h-75">
                    <div className="col h-100">
                        <img src={this.props.sprite} className="img-card" alt={this.props.imgName}></img>
                    </div>
                </div>
                <div className="row h-25">
                    <div className="col ">
                        <div className="row h-100 align-content-center">
                            <div className="col text-center">
                                <h2>{this.props.imgName}</h2>
                            </div>
                        </div>
                    </div>                                  
                </div>
            </div>
        );
    }        
}

export default WorkCard;