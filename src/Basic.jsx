import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

function Basic(props) {
    return (
        <>
            <Footer cn='foot2'/>
            <div className={props.cn1} >
                <h1>{props.head1}<span className="h1">{props.head2}</span></h1>
                <p>{props.para}</p>
                <NavLink to={props.to} className="btn1">{props.btxt}</NavLink>
            </div>
            <div className={props.cn}>
                <img src={props.imgsrc} alt="image" />
            </div>
        </>
    )
}
export default Basic;