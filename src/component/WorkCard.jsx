import React from 'react';

class WorkCard extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <React.Fragment>              
                <div className="work-card col pl-0 pr-0" data-toggle="modal" data-target="#WorkModal" onClick={()=>this.props.onClick(data)}>
                    <div className="row">
                        <div className="col">
                            <img src={data.sprite} className="img-card" alt={data.title}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row align-items-center">
                                <div className="col pt-4 pb-4">
                                    <h2>{data.title}</h2>
                                </div>
                            </div>
                        </div>                                  
                    </div>
                </div>
            </React.Fragment>
        );
    }        
}

export default WorkCard;