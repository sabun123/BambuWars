import React from 'react';
import { Well, Image } from 'react-bootstrap';

/*
    Using a functional component here instead since this is
    a simple component. No need for React's various class methods.
*/

const About = (props) => {
    return (
        <div className="container">
            <div
                className="well well-lg"
                ref={(el) => {
                    if (el) {
                        el.style.setProperty('background-color', '#222', 'important');
                        el.style.setProperty('text-align', '-webkit-center');
                    }
                }}>
                <Image src='//static1.squarespace.com/static/581ad37220099e33f332ab43/t/58afa4188419c22909c2768e/1526977631787/?format=1500w' responsive style={{ width: '140px' }} />
            </div>
            <Well bsSize="large" style={{ textAlign: 'center' }}>
                <p>In a galaxy far far away, a bambu frontend engineer test took place...</p>
                <p>This is an SPA that utilizes SWAPI.co for it's backend data. This was developed using ReactJS, Redux, React Router, Webpack and Bootstrap.</p>
                <p >Developed in a rush by:</p>
                <p >Yusuf Ismail Bin Shukor</p>
                <p >May 2018</p>
            </Well>
        </div>
    )
}

export default About;