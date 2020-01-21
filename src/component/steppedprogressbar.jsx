import React from 'react';
import styled from 'styled-components';

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
            steps.push(<div class={`step${i < c ? " completed": ""}`} id={i}></div>);
        }

        // steps[c - 1] = <div class={`step selected`} id={c - 1}></div>
        return steps;
    }

    render() {
        const Percentage = styled.div`
            width: ${this.state.percentage}%;
            height: 120%;           
            border-bottom: 2px solid #000000;
            z-index: 1;
        `;
        return (
            <div class="step-container">
                <div class="step-progress">
                    <Percentage></Percentage>
                </div>
                <div class="steps">
                    { this.makeSteps(this.props.currentProgress, this.props.totalProgress) }  
                </div>
            </div>
        );
    }
}

export default SteppedProgress; 