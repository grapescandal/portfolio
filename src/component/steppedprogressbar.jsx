import React from 'react';

class SteppedProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {percentage: (this.props.currentProgress - 1) / (this.props.totalProgress - 1) * 100};
    }
    makeSteps(current, total) {
        let t = total;
        let c = current;
        let steps = [];
        for (let i=0; i<t; i++) { 
            steps.push(<div key={i.toString()} className={`step ${i < c ? "completed": ""}`} id={i}></div>);    
        }

        return steps;
    }

    makeProgress() {
        let level = "";

        switch(this.state.percentage) {
            case 0:
                level = "beginner";
                break;
            case 25:
                level = "novice";
                break;
            case 50:
                level = "expert";
                break;
            case 75:
                level = "intermediate";
                break;
            case 100:
                level = "advance";
                break;
            default:
                break;            
        }

        let bar = <div className={`step-progress-front ${level}`}></div>;

        return bar;
    }

    render() {
        return (
            <div className="step-container">
                <div className="step-progress">
                    { this.makeProgress() }
                </div>
                <div className="steps">
                    { this.makeSteps(this.props.currentProgress, this.props.totalProgress) }  
                </div>
            </div>
        );
    }
}

export default SteppedProgress; 