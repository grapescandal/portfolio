import React from 'react';
import Modal from './modal.jsx';

class WorkCard extends React.Component {

    removeSpace(text) {
        if(text === undefined) return;
        const replaceString = require('replace-string');
        text = replaceString(text, ' ', '');
        return text;
    }

    render() {
        const title = this.props.imgName;
        return (
            <React.Fragment>              
                <div className="work-card col-3-5" data-toggle="modal" data-target={"#WorkModal" + this.removeSpace(title)}>
                    <div className="row h-75">
                        <div className="col h-100">
                            <img src={this.props.sprite} className="img-card" alt={title}></img>
                        </div>
                    </div>
                    <div className="row h-25">
                        <div className="col ">
                            <div className="row h-100 align-items-center">
                                <div className="col">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                        </div>                                  
                    </div>
                </div>
                <Modal title={title} idName={this.removeSpace(title)} images={this.props.images}></Modal>
            </React.Fragment>
        );
    }        
}

export default WorkCard;