import React from 'react';
import Basic from './Basic';
import i2 from '../src/images/i2.svg';

function About() {
    return (
        <Basic head1='Welcome to About page ' head2='React Web' para='We are a team of talented developer making websites' btxt='Contact Us' to='/contact' cn1='box12 box1' cn='box22' imgsrc={i2}/>
    )
}
export default About;