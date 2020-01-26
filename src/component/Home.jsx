import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div id="home" className='background'>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div className='top-container flex border-white'>
                        <p>Hello, I am Jirachai Kongjinda</p>
                        <hr/>
                        <p>Unity Game Developer</p>
                </div>
            </div>      
        );
    }        
}

export default Home;