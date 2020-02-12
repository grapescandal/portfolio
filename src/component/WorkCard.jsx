import React from 'react';

class WorkCard extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <React.Fragment>              
                <div className="work-card col pl-0 pr-0" data-toggle="modal" data-target="#WorkModal" onClick={()=>this.props.onClick(data)}>
                    <div className="row h-75">
                        <div className="col h-100">
                            <img src={data.sprite} className="img-card" alt={data.title}></img>
                        </div>
                    </div>
                    <div className="row h-25">
                        <div className="col h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col">
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