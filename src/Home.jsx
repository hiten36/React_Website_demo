import React from 'react';
import Basic from './Basic';
import i1 from '../src/images/i1.svg';

function Home() {
    return (
        <Basic head1='Grow your business with ' head2='React Web' para='We are a team of talented developer making websites' btxt='Get Started' to='/services' cn='box2' cn1='box1' imgsrc={i1}/>
    )
}
export default Home;