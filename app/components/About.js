import React from 'react';
import {Well} from 'react-bootstrap';

/*
    Using a functional component here instead since this is
    a simple component. No need for React's various class methods.
*/

const About = (props) => {
    return (
        <div className="container">
            <Well bsSize="large">
                <p>In a galaxy far far away, a bambu frontend engineer test took place...</p>
                <p>This is an SPA that utilizes SWAPI.co for it's backend data. This was developed using ReactJS, Redux, React Router, Webpack and Bootstrap.</p>
                <p style={{textAlign:'center'}}>Developed in a rush by:</p>
                <p style={{textAlign:'center'}}>Yusuf Ismail Bin Shukor</p>
                <p style={{textAlign:'center'}}>May 2018</p>
            </Well>
        </div>
    )
}

export default About;